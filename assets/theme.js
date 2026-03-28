/* ============================================
   AMBER SILK MILLS — Theme JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Announcement Bar Rotation --- */
  const announcementTexts = document.querySelectorAll('.announcement-text');
  if (announcementTexts.length > 1) {
    let current = 0;
    setInterval(() => {
      announcementTexts[current].classList.remove('active');
      current = (current + 1) % announcementTexts.length;
      announcementTexts[current].classList.add('active');
    }, 4000);
  }

  const dismissBtn = document.querySelector('.announcement-bar .dismiss-btn');
  if (dismissBtn) {
    if (localStorage.getItem('asm-announcement-dismissed')) {
      document.querySelector('.announcement-bar').style.display = 'none';
    }
    dismissBtn.addEventListener('click', () => {
      document.querySelector('.announcement-bar').style.display = 'none';
      localStorage.setItem('asm-announcement-dismissed', 'true');
    });
  }

  /* --- Sticky Header Scroll --- */
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 80);
    }, { passive: true });
  }

  /* --- Mobile Drawer --- */
  const menuToggle = document.querySelector('.menu-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const drawerClose = document.querySelector('.drawer-close');

  if (menuToggle && drawer) {
    menuToggle.addEventListener('click', () => {
      drawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
    if (drawerClose) {
      drawerClose.addEventListener('click', () => {
        drawer.classList.remove('open');
        document.body.style.overflow = '';
      });
    }
  }

  /* --- Mega Menu --- */
  const shopLink = document.querySelector('[data-mega-trigger]');
  const megaMenu = document.querySelector('.mega-menu');
  if (shopLink && megaMenu) {
    shopLink.addEventListener('mouseenter', () => megaMenu.classList.add('active'));
    megaMenu.addEventListener('mouseenter', () => megaMenu.classList.add('active'));
    shopLink.addEventListener('mouseleave', () => {
      setTimeout(() => {
        if (!megaMenu.matches(':hover')) megaMenu.classList.remove('active');
      }, 100);
    });
    megaMenu.addEventListener('mouseleave', () => megaMenu.classList.remove('active'));
  }

  /* --- Scroll Reveal Animation --- */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    revealEls.forEach(el => observer.observe(el));
  }

  /* --- Hero Sequential Animation --- */
  const heroAnims = document.querySelectorAll('.hero-anim');
  heroAnims.forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 300 + i * 200);
  });

  /* --- Staggered Children Animation --- */
  const staggerGroups = document.querySelectorAll('[data-stagger]');
  if (staggerGroups.length && 'IntersectionObserver' in window) {
    const staggerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const children = entry.target.children;
          Array.from(children).forEach((child, i) => {
            setTimeout(() => {
              child.style.opacity = '1';
              child.style.transform = 'translateY(0)';
            }, i * 80);
          });
          staggerObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    staggerGroups.forEach(el => {
      Array.from(el.children).forEach(child => {
        child.style.opacity = '0';
        child.style.transform = 'translateY(24px)';
        child.style.transition = 'opacity 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      });
      staggerObserver.observe(el);
    });
  }

  /* --- Back to Top --- */
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

/* --- Cart AJAX (Shopify) --- */
  const cartIconToggles = document.querySelectorAll('#cart-icon-toggle, [href="/cart"]');
  const sideCart = document.getElementById('side-cart');
  const sideCartClose = document.getElementById('side-cart-close');
  const overlay = document.getElementById('side-cart-overlay');

  function openCart() {
    if (sideCart) sideCart.classList.add('open');
    if (overlay) overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    updateCartCount();
  }

  function closeCart() {
    if (sideCart) sideCart.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  cartIconToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      openCart();
    });
  });

  if (sideCartClose) sideCartClose.addEventListener('click', closeCart);
  if (overlay) overlay.addEventListener('click', closeCart);
  const continueBtn = document.getElementById('side-cart-continue');
  if (continueBtn) continueBtn.addEventListener('click', closeCart);

  document.querySelectorAll('[data-add-to-cart]').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const variantId = btn.dataset.variantId;
      const qty = btn.dataset.qty || 1;
      btn.textContent = 'Adding...';
      btn.disabled = true;
      try {
        const res = await fetch('/cart/add.js', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: variantId, quantity: parseInt(qty) })
        });
        if (res.ok) {
          btn.textContent = 'Added ✓';
          updateCartCount();
          openCart(); // Automatically open cart on success
          setTimeout(() => {
            btn.textContent = 'Add to Cart';
            btn.disabled = false;
          }, 2000);
        } else {
          // If no backend endpoint exists (static demo mode)
          throw new Error('Static Mode');
        }
      } catch (err) {
        // Mock success for static HTML demo
        btn.textContent = 'Added ✓';
        document.querySelectorAll('.cart-count').forEach(el => {
          el.textContent = parseInt(el.textContent) + parseInt(qty);
          el.style.display = 'flex';
        });
        openCart();
        setTimeout(() => {
          btn.textContent = 'Add to Cart';
          btn.disabled = false;
        }, 2000);
      }
    });
  });

  function formatRupees(paise) {
    return '₹' + (paise / 100).toLocaleString('en-IN');
  }

  function renderSideCart(cart) {
    const body = document.querySelector('.side-cart-body');
    const subtotalEl = document.getElementById('side-cart-subtotal-amount');
    if (!body) return;

    if (!cart.items || cart.items.length === 0) {
      body.innerHTML = '<div class="side-cart-empty"><p>Your cart is currently empty.</p><a href="page.shop.html" class="btn btn-outline" style="margin-top:16px;">Continue Shopping</a></div>';
      if (subtotalEl) subtotalEl.textContent = '₹0';
      return;
    }

    body.innerHTML = cart.items.map(item => `
      <div class="side-cart-item" data-line-key="${item.key}">
        <img src="${item.image || item.featured_image?.url || ''}" alt="${item.title}" loading="lazy">
        <div class="side-cart-item-details">
          <span class="side-cart-item-title">${item.product_title}</span>
          ${item.variant_title ? `<span class="side-cart-item-variant">${item.variant_title}</span>` : ''}
          <div class="side-cart-item-bottom">
            <div class="side-cart-item-qty">
              <button type="button" data-cart-minus="${item.key}" aria-label="Decrease quantity">&minus;</button>
              <span>${item.quantity}</span>
              <button type="button" data-cart-plus="${item.key}" aria-label="Increase quantity">&plus;</button>
            </div>
            <span class="side-cart-item-price">${formatRupees(item.final_line_price)}</span>
          </div>
          <span class="side-cart-item-remove" data-cart-remove="${item.key}">Remove</span>
        </div>
      </div>
    `).join('');

    if (subtotalEl) subtotalEl.textContent = formatRupees(cart.total_price);

    // Quantity +/- and remove handlers
    body.querySelectorAll('[data-cart-minus]').forEach(btn => {
      btn.addEventListener('click', () => changeCartItemQty(btn.dataset.cartMinus, -1));
    });
    body.querySelectorAll('[data-cart-plus]').forEach(btn => {
      btn.addEventListener('click', () => changeCartItemQty(btn.dataset.cartPlus, 1));
    });
    body.querySelectorAll('[data-cart-remove]').forEach(btn => {
      btn.addEventListener('click', () => changeCartItemQty(btn.dataset.cartRemove, 0));
    });
  }

  async function changeCartItemQty(lineKey, delta) {
    try {
      const cartRes = await fetch('/cart.js');
      const cart = await cartRes.json();
      const item = cart.items.find(i => i.key === lineKey);
      if (!item) return;
      const newQty = delta === 0 ? 0 : item.quantity + delta;
      const res = await fetch('/cart/change.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: lineKey, quantity: Math.max(0, newQty) })
      });
      if (res.ok) {
        const updatedCart = await res.json();
        renderSideCart(updatedCart);
        document.querySelectorAll('.cart-count').forEach(el => {
          el.textContent = updatedCart.item_count;
          el.style.display = updatedCart.item_count > 0 ? 'flex' : 'none';
        });
      }
    } catch (e) {
      // Static mode — ignore
    }
  }

  async function updateCartCount() {
    try {
      const res = await fetch('/cart.js');
      const cart = await res.json();
      document.querySelectorAll('.cart-count').forEach(el => {
        el.textContent = cart.item_count;
        el.style.display = cart.item_count > 0 ? 'flex' : 'none';
      });
      renderSideCart(cart);
    } catch (e) {
      // Mock failure swallow for static
    }
  }

  /* --- Quantity Selector --- */
  document.querySelectorAll('.quantity-selector').forEach(sel => {
    const input = sel.querySelector('input');
    const minus = sel.querySelector('[data-minus]');
    const plus = sel.querySelector('[data-plus]');
    if (minus) minus.addEventListener('click', () => {
      input.value = Math.max(1, parseInt(input.value) - 1);
    });
    if (plus) plus.addEventListener('click', () => {
      input.value = parseInt(input.value) + 1;
    });
  });

  /* --- Product Image Zoom --- */
  const gallery = document.querySelector('.product-gallery-main');
  if (gallery) {
    const img = gallery.querySelector('img');
    gallery.addEventListener('mousemove', (e) => {
      const rect = gallery.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      img.style.transformOrigin = `${x}% ${y}%`;
      img.style.transform = 'scale(2)';
    });
    gallery.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1)';
    });
  }

  /* --- Product Thumbnails --- */
  document.querySelectorAll('.product-thumbs img').forEach(thumb => {
    thumb.addEventListener('click', () => {
      const mainImg = document.querySelector('.product-gallery-main img');
      if (mainImg) {
        mainImg.src = thumb.dataset.full || thumb.src;
        document.querySelectorAll('.product-thumbs img').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      }
    });
  });

  /* --- Accordion (for product specs / filters) --- */
  document.querySelectorAll('[data-accordion]').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const target = document.querySelector(trigger.dataset.accordion);
      if (target) {
        const isOpen = target.style.maxHeight && target.style.maxHeight !== '0px';
        target.style.maxHeight = isOpen ? '0px' : target.scrollHeight + 'px';
        target.style.overflow = 'hidden';
        target.style.transition = 'max-height 300ms ease';
        trigger.classList.toggle('open', !isOpen);
      }
    });
  });

  /* --- Trust Bar Navigation --- */
  const trustBarGrid = document.querySelector('.trust-bar-grid');
  const trustDots = document.querySelectorAll('.trust-dot');
  const trustPrev = document.querySelector('.trust-nav-btn.prev');
  const trustNext = document.querySelector('.trust-nav-btn.next');

  if (trustBarGrid && trustDots.length > 0) {
    const updateActiveDot = () => {
      const scrollLeft = trustBarGrid.scrollLeft;
      const itemWidth = trustBarGrid.scrollWidth / 4;
      let activeIndex = Math.round(scrollLeft / itemWidth);
      if(activeIndex > 3) activeIndex = 3;
      
      trustDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
      });
    };

    trustBarGrid.addEventListener('scroll', () => {
      window.requestAnimationFrame(updateActiveDot);
    });

    const scrollToIndex = (index) => {
      const itemWidth = trustBarGrid.scrollWidth / 4;
      trustBarGrid.scrollTo({ left: index * itemWidth, behavior: 'smooth' });
    };

    trustDots.forEach((dot, index) => {
      dot.addEventListener('click', () => scrollToIndex(index));
    });

    if (trustPrev) {
      trustPrev.addEventListener('click', () => {
        const itemWidth = trustBarGrid.scrollWidth / 4;
        const currentIndex = Math.round(trustBarGrid.scrollLeft / itemWidth);
        scrollToIndex(Math.max(0, currentIndex - 1));
      });
    }

    if (trustNext) {
      trustNext.addEventListener('click', () => {
        const itemWidth = trustBarGrid.scrollWidth / 4;
        const currentIndex = Math.round(trustBarGrid.scrollLeft / itemWidth);
        scrollToIndex(Math.min(3, currentIndex + 1));
      });
    }
  }

  /* --- Search Overlay Toggle --- */
  const searchBtns = document.querySelectorAll('[aria-label="Search"]');
  const searchOverlay = document.getElementById('search-overlay');

  if (searchOverlay && searchBtns.length) {
    const searchInput = searchOverlay.querySelector('.search-overlay__input');
    const searchClose = searchOverlay.querySelector('.search-overlay__close');

    function openSearch() {
      searchOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      if (searchInput) setTimeout(() => searchInput.focus(), 150);
    }

    function closeSearch() {
      searchOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    searchBtns.forEach(btn => btn.addEventListener('click', openSearch));
    if (searchClose) searchClose.addEventListener('click', closeSearch);

    // Close on click outside the inner form
    searchOverlay.addEventListener('click', (e) => {
      if (e.target === searchOverlay) closeSearch();
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && searchOverlay.classList.contains('open')) closeSearch();
    });
  }

  /* --- Cart Badge (Shopify Web Components) --- */
  const cartEl = document.getElementById('cart');
  const cartBadges = document.querySelectorAll('.cart-badge');

  function updateCartBadge() {
    if (!cartEl) return;
    // Shopify Web Components expose cart data via the element's internal state
    // We listen to the 'cart' attribute or look for the badge in the shadow DOM
    try {
      // Try to read item count from the shopify-cart element
      const count = cartEl.itemCount || 0;
      cartBadges.forEach(badge => {
        if (count > 0) {
          badge.textContent = count;
          badge.classList.add('visible');
        } else {
          badge.textContent = '';
          badge.classList.remove('visible');
        }
      });
    } catch (e) { /* swallow */ }
  }

  // Observe shopify-cart for attribute and child changes to detect cart updates
  if (cartEl && cartBadges.length) {
    const cartObserver = new MutationObserver(updateCartBadge);
    cartObserver.observe(cartEl, { attributes: true, childList: true, subtree: true });
    updateCartBadge();
  }

  // Also listen for custom shopify cart events
  document.addEventListener('cart:updated', updateCartBadge);
  window.addEventListener('shopify:cart:updated', updateCartBadge);

  /* --- Form Validation & Submission Feedback --- */
  var formConfigs = [
    { id: 'contact-form', successMsg: 'Your message has been sent! We\'ll get back to you within 24 hours.', btnText: 'Send Message' },
    { id: 'custom-printing-form', successMsg: 'Your quote request has been submitted! We\'ll respond within 24 hours.', btnText: 'Submit Custom Quote Request' },
    { id: 'wholesale-form', successMsg: 'Your wholesale inquiry has been submitted! Our team will respond within 24 hours.', btnText: 'Submit Wholesale Inquiry' }
  ];

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validatePhone(phone) {
    var digits = phone.replace(/\D/g, '');
    return digits.length >= 10;
  }

  function clearInlineErrors(form) {
    form.querySelectorAll('.field-error').forEach(function(el) { el.remove(); });
  }

  function showFieldError(input, message) {
    var existing = input.parentElement.querySelector('.field-error');
    if (existing) existing.remove();
    var err = document.createElement('span');
    err.className = 'field-error';
    err.style.cssText = 'color:#e53e3e;font-size:12px;display:block;margin-top:4px;';
    err.textContent = message;
    input.parentElement.appendChild(err);
  }

  function validateForm(form) {
    clearInlineErrors(form);
    var valid = true;

    // Check required fields
    form.querySelectorAll('[required]').forEach(function(input) {
      if (!input.value.trim()) {
        showFieldError(input, 'This field is required.');
        valid = false;
      }
    });

    // Validate email fields
    form.querySelectorAll('input[type="email"]').forEach(function(input) {
      if (input.value.trim() && !validateEmail(input.value.trim())) {
        showFieldError(input, 'Please enter a valid email address.');
        valid = false;
      }
    });

    // Validate phone/tel fields
    form.querySelectorAll('input[type="tel"]').forEach(function(input) {
      if (input.value.trim() && !validatePhone(input.value.trim())) {
        showFieldError(input, 'Please enter a valid phone number (at least 10 digits).');
        valid = false;
      }
    });

    return valid;
  }

  formConfigs.forEach(function(config) {
    var form = document.getElementById(config.id);
    if (!form) return;

    var submitBtn = form.querySelector('button[type="submit"]');
    var feedbackDiv = form.querySelector('.form-feedback');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      if (feedbackDiv) feedbackDiv.style.display = 'none';

      if (!validateForm(form)) return;

      // Disable button and show sending state
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending\u2026';

      // Collect form data
      var formData = new FormData(form);
      var action = form.getAttribute('action');

      // If no action is set, simulate a successful submission
      // TODO: Configure actual form endpoints (Formspree, Netlify, etc.)
      if (!action || action.indexOf('your-form-id') !== -1) {
        setTimeout(function() {
          clearInlineErrors(form);
          form.reset();
          submitBtn.disabled = false;
          submitBtn.textContent = config.btnText;
          if (feedbackDiv) {
            feedbackDiv.textContent = '\u2713 ' + config.successMsg;
            feedbackDiv.style.display = 'block';
            feedbackDiv.style.background = '#f0fff4';
            feedbackDiv.style.color = '#276749';
            feedbackDiv.style.border = '1px solid #c6f6d5';
          }
        }, 800);
        return;
      }

      // Real submission via fetch
      fetch(action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      }).then(function(res) {
        if (res.ok) {
          clearInlineErrors(form);
          form.reset();
          if (feedbackDiv) {
            feedbackDiv.textContent = '\u2713 ' + config.successMsg;
            feedbackDiv.style.display = 'block';
            feedbackDiv.style.background = '#f0fff4';
            feedbackDiv.style.color = '#276749';
            feedbackDiv.style.border = '1px solid #c6f6d5';
          }
        } else {
          throw new Error('Server error');
        }
      }).catch(function() {
        if (feedbackDiv) {
          feedbackDiv.textContent = 'Something went wrong. Please try again or contact us on WhatsApp.';
          feedbackDiv.style.display = 'block';
          feedbackDiv.style.background = '#fff5f5';
          feedbackDiv.style.color = '#c53030';
          feedbackDiv.style.border = '1px solid #fed7d7';
        }
      }).finally(function() {
        submitBtn.disabled = false;
        submitBtn.textContent = config.btnText;
      });
    });
  });

});
