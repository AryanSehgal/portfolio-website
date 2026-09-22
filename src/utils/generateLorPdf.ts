/**
 * Downloads the official, verified Letter of Recommendation from Sprinklr VP Mayank Hinger.
 * Downloads the authentic static PDF file directly rather than generating synthetic client-side PDF.
 */
export function downloadLorPdf(): void {
  const link = document.createElement('a');
  link.href = '/Sprinklr_LoR.pdf';
  link.download = 'Sprinklr_LoR.pdf';
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
