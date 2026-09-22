/**
 * Downloads the official, verified Resume of Aryan Sehgal.
 * Downloads the authentic static PDF file directly rather than generating synthetic client-side PDF.
 */
export function downloadResumePdf(): void {
  const link = document.createElement('a');
  link.href = '/Aryan_Sehgal_Resume.pdf';
  link.download = 'Aryan_Sehgal_Resume.pdf';
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
