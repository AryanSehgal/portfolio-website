import React, { useState, useId, useRef, useEffect, useLayoutEffect, ReactElement, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';

export interface TooltipProps {
  content: string;
  children: ReactElement<any>;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = 'top',
  delay = 120,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number }>({
    top: -9999,
    left: -9999
  });

  const triggerRef = useRef<HTMLElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const tooltipId = useId();

  const updatePosition = useCallback(() => {
    if (!triggerRef.current || !tooltipRef.current) return;
    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const tooltipWidth = tooltipRect.width;
    const tooltipHeight = tooltipRect.height;
    const offset = 8;
    const padding = 12;

    let targetPos = position;

    // Smart vertical collision flip
    if (position === 'top' && triggerRect.top - tooltipHeight - offset < padding) {
      targetPos = 'bottom';
    } else if (position === 'bottom' && triggerRect.bottom + tooltipHeight + offset > window.innerHeight - padding) {
      targetPos = 'top';
    }

    let top = 0;
    let left = 0;

    switch (targetPos) {
      case 'bottom':
        top = triggerRect.bottom + offset;
        left = triggerRect.left + triggerRect.width / 2 - tooltipWidth / 2;
        break;
      case 'left':
        top = triggerRect.top + triggerRect.height / 2 - tooltipHeight / 2;
        left = triggerRect.left - tooltipWidth - offset;
        if (left < padding) {
          targetPos = 'bottom';
          top = triggerRect.bottom + offset;
          left = triggerRect.left + triggerRect.width / 2 - tooltipWidth / 2;
        }
        break;
      case 'right':
        top = triggerRect.top + triggerRect.height / 2 - tooltipHeight / 2;
        left = triggerRect.right + offset;
        if (left + tooltipWidth > window.innerWidth - padding) {
          targetPos = 'bottom';
          top = triggerRect.bottom + offset;
          left = triggerRect.left + triggerRect.width / 2 - tooltipWidth / 2;
        }
        break;
      case 'top':
      default:
        top = triggerRect.top - tooltipHeight - offset;
        left = triggerRect.left + triggerRect.width / 2 - tooltipWidth / 2;
        break;
    }

    // Clamp horizontal position strictly within viewport
    left = Math.max(padding, Math.min(window.innerWidth - tooltipWidth - padding, left));
    // Clamp vertical position strictly within viewport
    top = Math.max(padding, Math.min(window.innerHeight - tooltipHeight - padding, top));

    setCoords({ top, left });
  }, [position]);

  const showTooltip = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
    setCoords({ top: -9999, left: -9999 });
  };

  // Precisely measure and position in layout pass once visible
  useLayoutEffect(() => {
    if (isVisible) {
      updatePosition();
    }
  }, [isVisible, updatePosition]);

  // Re-calculate position on scroll/resize while visible
  useEffect(() => {
    if (!isVisible) return;

    const handleUpdate = () => {
      updatePosition();
    };

    window.addEventListener('scroll', handleUpdate, true);
    window.addEventListener('resize', handleUpdate);

    return () => {
      window.removeEventListener('scroll', handleUpdate, true);
      window.removeEventListener('resize', handleUpdate);
    };
  }, [isVisible, updatePosition]);

  // Dismiss on Escape key for WCAG 1.4.13
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVisible) {
        hideTooltip();
      }
    };
    if (isVisible) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVisible]);

  // Clone trigger element and attach refs and event listeners
  const trigger = React.cloneElement(children as ReactElement<any>, {
    ref: (node: HTMLElement | null) => {
      triggerRef.current = node;
      const childRef = (children as any).ref;
      if (typeof childRef === 'function') {
        childRef(node);
      } else if (childRef && typeof childRef === 'object') {
        childRef.current = node;
      }
    },
    'aria-describedby': isVisible ? tooltipId : undefined,
    onMouseEnter: (e: React.MouseEvent) => {
      children.props?.onMouseEnter?.(e);
      showTooltip();
    },
    onMouseLeave: (e: React.MouseEvent) => {
      children.props?.onMouseLeave?.(e);
      hideTooltip();
    },
    onFocus: (e: React.FocusEvent) => {
      children.props?.onFocus?.(e);
      showTooltip();
    },
    onBlur: (e: React.FocusEvent) => {
      children.props?.onBlur?.(e);
      hideTooltip();
    }
  });

  return (
    <>
      {trigger}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {isVisible && (
              <motion.div
                ref={tooltipRef}
                id={tooltipId}
                role="tooltip"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{
                  opacity: coords.top !== -9999 ? 1 : 0,
                  scale: coords.top !== -9999 ? 1 : 0.94
                }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.1 }}
                style={{
                  top: `${coords.top}px`,
                  left: `${coords.left}px`,
                  position: 'fixed'
                }}
                className={`pointer-events-none z-[99999] w-max max-w-[min(calc(100vw-32px),340px)] whitespace-normal break-words rounded-lg bg-stone-900/95 dark:bg-stone-800/95 backdrop-blur-xs px-3 py-1.5 text-xs font-medium text-stone-100 dark:text-stone-200 shadow-xl border border-stone-700/60 dark:border-stone-600/60 text-center leading-snug select-none ${className}`}
              >
                {content}
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
};


