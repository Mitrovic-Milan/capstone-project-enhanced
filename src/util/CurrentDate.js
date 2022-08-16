function getCurrentDate() {
  return new Date()
    .toLocaleDateString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    })
    .replace(/[.,]/g, match => (match === '.' ? '-' : ''));
}

export {getCurrentDate};
