/* ============================================
   AMBER SILK MILLS — Exit Intent Popup
   ============================================ */

(function() {
  const STORAGE_KEY = 'asm-exit-intent-shown';

  if (localStorage.getItem(STORAGE_KEY)) return;

  const overlay = document.querySelector('.exit-overlay');
  if (!overlay) return;

  let fired = false;

  function showPopup() {
    if (fired) return;
    fired = true;
    overlay.classList.add('active');
    localStorage.setItem(STORAGE_KEY, 'true');
  }

  function closePopup() {
    overlay.classList.remove('active');
  }

  // Desktop: cursor leaves viewport
  if (window.innerWidth > 768) {
    document.addEventListener('mouseout', (e) => {
      if (e.clientY <= 0 && !e.relatedTarget) {
        showPopup();
      }
    });
  } else {
    // Mobile: scroll back up after reaching 70%
    let reachedThreshold = false;
    window.addEventListener('scroll', () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (scrollPercent > 0.7) reachedThreshold = true;
      if (reachedThreshold && scrollPercent < 0.4) {
        showPopup();
      }
    }, { passive: true });
  }

  // Close handlers
  const closeBtn = overlay.querySelector('.exit-close');
  if (closeBtn) closeBtn.addEventListener('click', closePopup);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closePopup();
  });

  // Form submit
  const form = overlay.querySelector('form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]').value;
      if (!email) return;

      // In Shopify: submit to customer list or Klaviyo
      const confirmation = overlay.querySelector('.exit-confirmation');
      const formContent = overlay.querySelector('.exit-form-content');
      if (formContent) formContent.style.display = 'none';
      if (confirmation) confirmation.style.display = 'block';

      // Trigger PDF download
      const pdfUrl = form.dataset.pdfUrl;
      if (pdfUrl) {
        const a = document.createElement('a');
        a.href = pdfUrl;
        a.download = 'Amber-Silk-Mills-B2B-Catalog.pdf';
        a.click();
      }

      setTimeout(closePopup, 4000);
    });
  }
})();
