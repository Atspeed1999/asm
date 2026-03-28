/* ============================================
   AMBER SILK MILLS — Exit Intent Popup
   ============================================ */

(function() {
  const STORAGE_KEY = 'asm-exit-intent-shown';

  if (sessionStorage.getItem(STORAGE_KEY)) return;

  const overlay = document.querySelector('.exit-overlay');
  if (!overlay) return;

  let fired = false;

  function showPopup() {
    if (fired) return;
    fired = true;
    overlay.classList.add('active');
    sessionStorage.setItem(STORAGE_KEY, 'true');
  }

  function closePopup() {
    overlay.classList.remove('active');
  }

  const isMobile = window.innerWidth <= 768 || ('ontouchstart' in window);

  if (!isMobile) {
    // Desktop: cursor leaves viewport
    document.addEventListener('mouseout', (e) => {
      if (e.clientY <= 0 && !e.relatedTarget) {
        showPopup();
      }
    });
  } else {
    // Mobile: scroll-based trigger (scroll to 60%+, then scroll back up 200px+)
    let maxScrollY = 0;
    let reachedThreshold = false;

    window.addEventListener('scroll', () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (scrollPercent > 0.6) reachedThreshold = true;

      if (window.scrollY > maxScrollY) {
        maxScrollY = window.scrollY;
      }

      if (reachedThreshold && (maxScrollY - window.scrollY) > 200) {
        showPopup();
      }
    }, { passive: true });

    // Mobile fallback: time-based trigger after 30 seconds of inactivity
    let inactivityTimer = setTimeout(showPopup, 30000);

    // Reset timer on interaction
    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(showPopup, 30000);
    };

    window.addEventListener('touchstart', resetTimer, { passive: true });
    window.addEventListener('scroll', resetTimer, { passive: true });
  }

  // Close handlers
  const closeBtn = overlay.querySelector('.exit-close');
  if (closeBtn) closeBtn.addEventListener('click', closePopup);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closePopup();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) closePopup();
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
