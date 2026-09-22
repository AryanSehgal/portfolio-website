import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, Github, Linkedin, Code2, Package, ExternalLink, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Tooltip } from './Tooltip';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);

  const constructEmailBody = () => {
    return `Hello Aryan,\n\n${formData.message}\n\n---\nSender: ${formData.name}\nReply-To: ${formData.email}\nSubject: ${formData.subject || 'Portfolio Inquiry'}`;
  };

  const getSubject = () => {
    return formData.subject ? `[Portfolio] ${formData.subject}` : `[Portfolio Inquiry] From ${formData.name || 'Visitor'}`;
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(getSubject());
    const body = encodeURIComponent(constructEmailBody());
    return `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  const getGmailUrl = () => {
    const subject = encodeURIComponent(getSubject());
    const body = encodeURIComponent(constructEmailBody());
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}&su=${subject}&body=${body}`;
  };

  const getOutlookUrl = () => {
    const subject = encodeURIComponent(getSubject());
    const body = encodeURIComponent(constructEmailBody());
    return `https://outlook.live.com/mail/0/deeplink/compose?to=${PERSONAL_INFO.email}&subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger local mail client immediately
    const mailto = getMailtoUrl();
    try {
      window.location.href = mailto;
    } catch {
      // Fallback handled in UI
    }

    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyFullMessage = () => {
    const fullText = `To: ${PERSONAL_INFO.email}\nSubject: ${getSubject()}\n\n${constructEmailBody()}`;
    navigator.clipboard.writeText(fullText);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2000);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-16 md:py-24 border-b border-stone-200/80 dark:border-stone-800/80 bg-stone-50/70 dark:bg-stone-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info & Availability */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-200/80 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-semibold mb-3">
                <Mail className="w-3.5 h-3.5 text-stone-600 dark:text-stone-400" aria-hidden="true" />
                <span>Get in Touch</span>
              </div>
              <h2
                id="contact-heading"
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 dark:text-stone-50 tracking-tight"
              >
                Let&apos;s Build Impactful AI & Full-Stack Systems
              </h2>
              <p className="mt-3 text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
                Available for full-time Applied AI & ML Engineering positions, full-stack systems engineering roles, open-source collaborations, and graduate study opportunities worldwide.
              </p>
            </div>

            {/* Profile Highlight Card with Photo */}
            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xs">
              <div className="relative shrink-0">
                <img
                  src="/aryan-photo.jpg?v=2"
                  alt="Aryan Sehgal"
                  className="w-14 h-14 rounded-xl object-cover border border-stone-200 dark:border-stone-700 shadow-2xs"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = 'https://avatars.githubusercontent.com/u/59551957?v=4';
                  }}
                />
                <span
                  className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-stone-900 rounded-full"
                  title="Available for Opportunities"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1">
                  <h3 className="font-bold text-sm text-stone-900 dark:text-stone-100 truncate">
                    Aryan Sehgal
                  </h3>
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 shrink-0">
                    Open to Offers
                  </span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 mt-0.5 truncate">
                  Ex-Sprinklr Senior Product Engineer
                </p>
                <p className="text-[11px] text-stone-500 dark:text-stone-400 font-mono">
                  B.Tech CSE (AI) • NSUT &apos;23 (8.69 CGPA)
                </p>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              {/* Primary Email */}
              <div className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex items-center justify-between shadow-2xs">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-stone-600 dark:text-stone-300">
                    <Mail className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400 block">
                      Primary Email
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100 hover:text-sky-600 dark:hover:text-sky-400"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <Tooltip content={copiedEmail ? 'Copied to clipboard!' : 'Copy email address'}>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    aria-label="Copy email address"
                    className="p-2 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-md transition-colors"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </Tooltip>
              </div>

              {/* Phone / WhatsApp */}
              <div className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex items-center justify-between shadow-2xs">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-stone-600 dark:text-stone-300">
                    <Phone className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400 block">
                      Direct Phone
                    </span>
                    <span className="text-xs sm:text-sm font-bold font-mono text-stone-900 dark:text-stone-100">
                      {PERSONAL_INFO.phone}
                    </span>
                  </div>
                </div>

                <Tooltip content={copiedPhone ? 'Copied to clipboard!' : 'Copy phone number'}>
                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    aria-label="Copy phone number"
                    className="p-2 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-md transition-colors"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </Tooltip>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex items-center gap-3 shadow-2xs">
                <div className="w-9 h-9 rounded-lg bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-stone-600 dark:text-stone-300">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400 block">
                    Current Location
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100">
                    {PERSONAL_INFO.location} (Open to Global Relocation & Remote)
                  </span>
                </div>
              </div>
            </div>

            {/* Social & Package links */}
            <div className="pt-2 flex flex-wrap gap-2">
              <Tooltip content="Visit Aryan's GitHub profile (@AryanSehgal)">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Aryan's GitHub (opens in new tab)"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-xs font-semibold text-stone-800 dark:text-stone-200 hover:border-stone-300 dark:hover:border-stone-700 transition-colors shadow-2xs"
                >
                  <Github className="w-4 h-4" aria-hidden="true" />
                  <span>GitHub</span>
                </a>
              </Tooltip>

              <Tooltip content="Connect with Aryan on LinkedIn">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Aryan's LinkedIn (opens in new tab)"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-xs font-semibold text-sky-700 dark:text-sky-300 hover:border-stone-300 dark:hover:border-stone-700 transition-colors shadow-2xs"
                >
                  <Linkedin className="w-4 h-4" aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>
              </Tooltip>

              <Tooltip content="Inspect @aryan_sehgal/forma-ui on npm registry">
                <a
                  href={PERSONAL_INFO.formaNpm}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Inspect @aryan_sehgal/forma-ui on npm (opens in new tab)"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/60 text-xs font-semibold text-red-700 dark:text-red-300 hover:border-red-300 dark:hover:border-red-800 transition-colors shadow-2xs"
                >
                  <Package className="w-4 h-4" aria-hidden="true" />
                  <span>NPM Package</span>
                </a>
              </Tooltip>

              <Tooltip content="Inspect LeetCode solutions & badges">
                <a
                  href={PERSONAL_INFO.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Aryan's LeetCode (opens in new tab)"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-xs font-semibold text-amber-700 dark:text-amber-300 hover:border-stone-300 dark:hover:border-stone-700 transition-colors shadow-2xs"
                >
                  <Code2 className="w-4 h-4" aria-hidden="true" />
                  <span>LeetCode</span>
                </a>
              </Tooltip>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 sm:p-8 shadow-xs">
              <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400 mb-6">
                Inquiry will be delivered directly to Aryan&apos;s primary inbox.
              </p>

              {submitted ? (
                <div className="p-6 sm:p-8 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 space-y-4 text-left">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/60 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-emerald-900 dark:text-emerald-100">
                        Inquiry Prepared for Aryan Sehgal
                      </h4>
                      <p className="text-xs text-emerald-700 dark:text-emerald-300 mt-0.5">
                        Your default email client was triggered. If it didn&apos;t open automatically, select your preferred service below to send with one click:
                      </p>
                    </div>
                  </div>

                  {/* Message Preview Box */}
                  <div className="p-3.5 rounded-xl bg-white dark:bg-stone-900 border border-emerald-200 dark:border-emerald-900/50 text-xs font-mono space-y-1.5 text-stone-700 dark:text-stone-300">
                    <div className="text-[11px] text-stone-400 uppercase tracking-wider font-semibold">
                      Prepared Email Summary:
                    </div>
                    <div><span className="text-stone-400">To:</span> <strong className="text-stone-800 dark:text-stone-100">{PERSONAL_INFO.email}</strong></div>
                    <div><span className="text-stone-400">Subject:</span> {getSubject()}</div>
                    <div className="pt-1 text-stone-600 dark:text-stone-400 border-t border-stone-100 dark:border-stone-800 font-sans line-clamp-3">
                      &ldquo;{formData.message}&rdquo;
                    </div>
                  </div>

                  {/* Direct Launch Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <a
                      href={getGmailUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-xs transition-colors shadow-xs"
                    >
                      <Mail className="w-4 h-4" aria-hidden="true" />
                      <span>Send via Gmail Web</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                    </a>

                    <a
                      href={getOutlookUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-semibold text-xs transition-colors shadow-xs"
                    >
                      <Mail className="w-4 h-4" aria-hidden="true" />
                      <span>Send via Outlook Web</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                    </a>

                    <a
                      href={getMailtoUrl()}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 dark:bg-stone-100 dark:hover:bg-stone-200 text-stone-50 dark:text-stone-900 font-semibold text-xs transition-colors shadow-xs"
                    >
                      <Send className="w-4 h-4" aria-hidden="true" />
                      <span>Launch Default Mail App</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyFullMessage}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 hover:bg-stone-50 dark:hover:bg-stone-800 font-semibold text-xs transition-colors shadow-2xs"
                    >
                      {copiedMessage ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-500" />
                          <span>Copied to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-stone-500" />
                          <span>Copy Message Text</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="pt-2 text-center">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                      }}
                      className="text-xs text-stone-500 hover:text-stone-900 dark:hover:text-stone-200 underline font-medium"
                    >
                      ← Edit message or write another note
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label
                        htmlFor="sender-name"
                        className="text-xs font-medium text-stone-700 dark:text-stone-300"
                      >
                        Your Name / Organization *
                      </label>
                      <input
                        id="sender-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan / Recruiter / Hiring Team"
                        className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label
                        htmlFor="sender-email"
                        className="text-xs font-medium text-stone-700 dark:text-stone-300"
                      >
                        Your Email Address *
                      </label>
                      <input
                        id="sender-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="message-subject"
                      className="text-xs font-medium text-stone-700 dark:text-stone-300"
                    >
                      Subject / Topic
                    </label>
                    <input
                      id="message-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Applied AI / Full-Stack Systems Opportunity"
                      className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="message-body"
                      className="text-xs font-medium text-stone-700 dark:text-stone-300"
                    >
                      Message Content *
                    </label>
                    <textarea
                      id="message-body"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your note, role inquiry, or project collaboration details..."
                      className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-sky-500 resize-none"
                    />
                  </div>

                  <div className="space-y-2 pt-1">
                    <Tooltip content="Submit direct message to Aryan">
                      <button
                        type="submit"
                        aria-label="Send direct message"
                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 text-stone-50 hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200 font-semibold text-xs sm:text-sm shadow-xs transition-colors cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Send Message</span>
                      </button>
                    </Tooltip>

                    <p className="text-[11px] text-stone-500 dark:text-stone-400 text-center">
                      Pre-fills your message directly to{' '}
                      <strong className="text-stone-700 dark:text-stone-300">{PERSONAL_INFO.email}</strong> via Gmail, Outlook, or system email.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
