document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  const footerYear = document.createElement('span');
  footerYear.textContent = `© ${year} Yashvi Kaneria`;

  const footer = document.querySelector('.site-footer .footer-inner');
  if (footer) {
    const text = footer.querySelector('p');
    if (text) {
      text.textContent += ` • ${year}`;
    }
  }
});
