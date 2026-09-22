import { jsPDF } from 'jspdf';
import { RECOMMENDATION_DATA } from '../data/portfolioData';

export function downloadLorPdf(): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;
  let cursorY = 20;

  // Header Bar
  doc.setFillColor(30, 41, 59); // slate-800
  doc.rect(0, 0, pageWidth, 8, 'F');

  // Company Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(30, 41, 59);
  doc.text('SPRINKLR INDIA PRIVATE LIMITED', margin, cursorY);
  cursorY += 6;

  // Department & Subtitle
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(100, 116, 139);
  doc.text('Global Research & Development Engineering Division', margin, cursorY);
  cursorY += 4;
  doc.text('DLF Cyber City, Tower A, Phase III, Gurugram, Haryana 122002, India', margin, cursorY);
  cursorY += 8;

  // Divider
  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(0.5);
  doc.line(margin, cursorY, pageWidth - margin, cursorY);
  cursorY += 8;

  // Date and Meta Row
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);
  doc.text('Date: August 2024', margin, cursorY);
  doc.text(`DocuSign Envelope ID: ${RECOMMENDATION_DATA.docusignId}`, pageWidth - margin, cursorY, { align: 'right' });
  cursorY += 8;

  // Letter Meta
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(15, 23, 42);
  doc.text('From:', margin, cursorY);
  doc.setFont('helvetica', 'normal');
  doc.text(`${RECOMMENDATION_DATA.author} (${RECOMMENDATION_DATA.title})`, margin + 14, cursorY);
  cursorY += 5;

  doc.setFont('helvetica', 'bold');
  doc.text('Email:', margin, cursorY);
  doc.setFont('helvetica', 'normal');
  doc.text(RECOMMENDATION_DATA.email, margin + 14, cursorY);
  doc.setFont('helvetica', 'bold');
  doc.text('Phone:', margin + 85, cursorY);
  doc.setFont('helvetica', 'normal');
  doc.text(RECOMMENDATION_DATA.phone, margin + 100, cursorY);
  cursorY += 7;

  // Subject line
  doc.setFillColor(241, 245, 249);
  doc.roundedRect(margin, cursorY, contentWidth, 8, 1, 1, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(30, 41, 59);
  doc.text('SUBJECT: OFFICIAL LETTER OF RECOMMENDATION — ARYAN SEHGAL', margin + 4, cursorY + 5.5);
  cursorY += 13;

  // Salutation
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(15, 23, 42);
  doc.text('To Whom It May Concern,', margin, cursorY);
  cursorY += 6;

  // Paragraphs
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(30, 41, 59);

  // We skip the first "To Whom It May Concern," paragraph since it is already rendered
  const paragraphs = RECOMMENDATION_DATA.fullLetterParagraphs.slice(1);

  for (let i = 0; i < paragraphs.length; i++) {
    const text = paragraphs[i];
    const lines = doc.splitTextToSize(text, contentWidth);
    const requiredHeight = lines.length * 4.3;

    if (cursorY + requiredHeight > pageHeight - 25) {
      // Add Page
      doc.addPage();
      doc.setFillColor(30, 41, 59);
      doc.rect(0, 0, pageWidth, 8, 'F');
      cursorY = 22;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(30, 41, 59);
    }

    doc.text(lines, margin, cursorY);
    cursorY += requiredHeight + 3.5;
  }

  // Check room for sign-off
  if (cursorY + 35 > pageHeight - 15) {
    doc.addPage();
    doc.setFillColor(30, 41, 59);
    doc.rect(0, 0, pageWidth, 8, 'F');
    cursorY = 25;
  }

  cursorY += 4;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.text('Sincerely,', margin, cursorY);
  cursorY += 6;

  // Signature Block
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(15, 23, 42);
  doc.text(RECOMMENDATION_DATA.author, margin, cursorY);
  cursorY += 4.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);
  doc.text(RECOMMENDATION_DATA.title, margin, cursorY);
  cursorY += 4;
  doc.text(RECOMMENDATION_DATA.company, margin, cursorY);
  cursorY += 4;
  doc.text(`Contact: ${RECOMMENDATION_DATA.email} | ${RECOMMENDATION_DATA.phone}`, margin, cursorY);
  cursorY += 6;

  // Verification Seal
  doc.setDrawColor(16, 185, 129); // emerald-500
  doc.setFillColor(236, 253, 245);
  doc.roundedRect(margin, cursorY, contentWidth, 10, 1.5, 1.5, 'FD');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(5, 150, 105);
  doc.text('VERIFIED CORPORATE RECOMMENDATION • DOCUSIGN VERIFIED RECORD', margin + 4, cursorY + 4.5);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(82, 98, 114);
  doc.text(`Tracking ID: ${RECOMMENDATION_DATA.docusignId} — Sprinklr Corporate Engineering Archives`, margin + 4, cursorY + 8);

  // Save the PDF directly to user's downloads
  doc.save('Aryan_Sehgal_Sprinklr_VP_Recommendation_Letter.pdf');
}
