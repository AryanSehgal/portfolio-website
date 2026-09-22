/**
 * Downloads the exact, unmodified Letter of Recommendation PDF file from the public folder.
 * Directly downloads the original static PDF file as-is without any modification or re-generation.
 */
export async function downloadLorPdf(): Promise<void> {
  const candidateUrls = [
    '/Sprinklr_LoR.pdf',
    '/Aryan_Sehgal_LoR.pdf',
    '/lor.pdf',
    '/LoR.pdf'
  ];

  for (const url of candidateUrls) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        const filename = url.replace(/^\//, '');
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => window.URL.revokeObjectURL(blobUrl), 1000);
        return;
      }
    } catch {
      // Try next candidate filename
    }
  }

  // Direct fallback anchor trigger
  const link = document.createElement('a');
  link.href = '/Sprinklr_LoR.pdf';
  link.download = 'Sprinklr_LoR.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
