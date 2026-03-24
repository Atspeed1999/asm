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

  async function updateCartCount() {
    try {
      const res = await fetch('/cart.js');
      const cart = await res.json();
      document.querySelectorAll('.cart-count').forEach(el => {
        el.textContent = cart.item_count;
        el.style.display = cart.item_count > 0 ? 'flex' : 'none';
      });
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

});
