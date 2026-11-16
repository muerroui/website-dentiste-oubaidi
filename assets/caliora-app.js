/**
 * MIMOSA SMILE KÉNITRA — CALIORA COMPANION SCRIPT
 * Fonctionne main dans la main avec Webflow IX3 + GSAP 3.15 + ScrollTrigger +
 * SplitText + Lenis natifs de Caliora (/assets/vendor/caliora/).
 */

document.addEventListener('DOMContentLoaded', () => {
  const hasGsap = typeof window.gsap !== 'undefined';
  const hasScrollTrigger = typeof window.ScrollTrigger !== 'undefined';
  const hasSplitText = typeof window.SplitText !== 'undefined';

  if (hasGsap) {
    const plugins = [];
    if (hasScrollTrigger) plugins.push(window.ScrollTrigger);
    if (hasSplitText) plugins.push(window.SplitText);
    if (plugins.length) window.gsap.registerPlugin(...plugins);
  }

  /* 0. Lenis Smooth Scroll natif Caliora synchronisé avec ScrollTrigger */
  let lenisInstance = null;
  if (typeof window.Lenis !== 'undefined') {
    lenisInstance = new window.Lenis({
      autoRaf: true,
      autoToggle: true,
      anchors: true,
      allowNestedScroll: true,
      naiveDimensions: true,
      stopInertiaOnNavigate: true
    });
    window.calioraLenis = lenisInstance;
    if (hasScrollTrigger) {
      lenisInstance.on('scroll', window.ScrollTrigger.update);
    }
  }

  /* Synchroniser ScrollTrigger une fois IX3 + polices + images prêts */
  const refreshScroll = () => {
    if (hasScrollTrigger) {
      try {
        window.ScrollTrigger.refresh();
      } catch (_) {}
    }
  };
  window.addEventListener('__wf_ix3_ready', () => {
    refreshScroll();
    setTimeout(refreshScroll, 250);
  });
  window.addEventListener('load', () => {
    refreshScroll();
    setTimeout(refreshScroll, 350);
  });

  /* 1. Accessibilité menu burger & synchronisation Lenis */
  const burgerBtn = document.querySelector('.burger-menu');
  const fullscreenMenu = document.querySelector('.menu');
  if (burgerBtn && fullscreenMenu) {
    const syncBurgerState = () => {
      const open = window.getComputedStyle(fullscreenMenu).display !== 'none';
      burgerBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      fullscreenMenu.setAttribute('aria-hidden', open ? 'false' : 'true');
      if (lenisInstance) {
        if (open) lenisInstance.stop();
        else lenisInstance.start();
      }
    };

    burgerBtn.addEventListener('click', () => {
      setTimeout(syncBurgerState, 60);
    });

    burgerBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        burgerBtn.click();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const isOpen = window.getComputedStyle(fullscreenMenu).display !== 'none';
        if (isOpen) burgerBtn.click();
        const modal = document.getElementById('calioraLightboxModal');
        if (modal) modal.classList.remove('is-open');
      }
    });

    fullscreenMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        const isOpen = window.getComputedStyle(fullscreenMenu).display !== 'none';
        const href = link.getAttribute('href') || '';
        if (isOpen && href.startsWith('#')) burgerBtn.click();
      });
    });
  }

  /* 2. Script natif Caliora : libellés flottants GSAP (input.field, textarea.field) */
  if (hasGsap) {
    document.querySelectorAll('input.field, textarea.field').forEach((field) => {
      const wrap = field.closest('.form-field-wrap');
      if (!wrap) return;
      const label = wrap.querySelector('.field-label:not(.is-radio):not(.is-2nd)');
      if (!label) return;

      window.gsap.set(label, { transformOrigin: 'left top' });

      const moveUp = () => {
        window.gsap.to(label, {
          y: -18,
          scale: 0.75,
          duration: 0.3,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      };

      const moveDown = () => {
        window.gsap.to(label, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      };

      if (field.value && field.value.trim().length > 0) {
        window.gsap.set(label, { y: -18, scale: 0.75 });
      }

      field.addEventListener('focus', moveUp);
      field.addEventListener('blur', () => {
        if (field.value.trim().length === 0) moveDown();
      });
      field.addEventListener('change', () => {
        if (field.value.trim().length > 0 && document.activeElement !== field) {
          window.gsap.set(label, { y: -18, scale: 0.75 });
        }
      });
    });
  }

  /* 3. Script natif Caliora : Radial text marquee */
  if (hasGsap) {
    document.querySelectorAll('[data-radial-text-marquee-init]').forEach((wrap) => {
      const text = wrap.querySelector('[data-radial-text-marquee-text]');
      window.gsap.to(wrap, {
        rotation: 360,
        duration: 20,
        ease: 'none',
        repeat: -1,
        transformOrigin: 'center center'
      });
      if (text) {
        window.gsap.to(text, {
          rotation: -360,
          duration: 20,
          ease: 'none',
          repeat: -1,
          transformOrigin: 'center center'
        });
      }
    });
  }

  /* 4. Lightbox fallback pour .lightbox-link sans .w-json Webflow */
  const fallbackLinks = [...document.querySelectorAll('.lightbox-link')].filter((el) => !el.querySelector('script.w-json'));
  if (fallbackLinks.length) {
    const modal = document.createElement('div');
    modal.id = 'calioraLightboxModal';
    modal.className = 'caliora-lightbox-modal';
    modal.innerHTML = '<button type="button" class="caliora-lightbox-close" aria-label="Fermer">&times;</button><img src="" alt="" />';
    document.body.appendChild(modal);
    const modalImg = modal.querySelector('img');
    const closeBtn = modal.querySelector('.caliora-lightbox-close');

    fallbackLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const img = link.querySelector('img.lightbox-image') || link.querySelector('img');
        if (!img) return;
        modalImg.src = img.src;
        modalImg.alt = img.alt || '';
        modal.classList.add('is-open');
      });
    });

    closeBtn.addEventListener('click', () => modal.classList.remove('is-open'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('is-open');
    });
  }

  /* 5. États visuels Checkboxes & Boutons radio (Formulaire Contact / RDV) */
  document.querySelectorAll('label.w-checkbox input[type="checkbox"]').forEach((cb) => {
    cb.addEventListener('change', () => {
      const box = cb.closest('label.w-checkbox')?.querySelector('.w-checkbox-input');
      if (box) box.classList.toggle('w--redirected-checked', cb.checked);
    });
  });

  document.querySelectorAll('label.w-radio').forEach((label) => {
    const radio = label.querySelector('input[type="radio"]');
    if (!radio) return;
    const syncRadioGroup = () => {
      const name = radio.getAttribute('name');
      document.querySelectorAll(`input[type="radio"][name="${name}"]`).forEach((sibling) => {
        const sLabel = sibling.closest('label.w-radio');
        const customBtn = sLabel?.querySelector('.w-form-formradioinput');
        const checked = sibling.checked;
        if (sLabel) sLabel.classList.toggle('is-checked', checked);
        if (customBtn) customBtn.classList.toggle('w--redirected-checked', checked);
      });
    };
    radio.addEventListener('change', syncRadioGroup);
    if (radio.checked) syncRadioGroup();
  });

  /* 6. Formulaires WhatsApp RDV & Newsletter */
  document.querySelectorAll('#wf-form-Request-form, form.rdv-whatsapp-form').forEach((requestForm) => {
    const phoneInput = requestForm.querySelector('input[type="tel"]');
    const phoneFeedback = requestForm.querySelector('.field-helper-feedback');
    const formContainer = requestForm.closest('.w-form') || requestForm.parentElement;
    const doneBox = formContainer?.querySelector('.w-form-done');
    const failBox = formContainer?.querySelector('.w-form-fail');

    const validateMaPhone = () => {
      if (!phoneInput) return true;
      const raw = phoneInput.value.trim();
      if (!raw) {
        if (phoneFeedback) {
          phoneFeedback.textContent = '';
          phoneFeedback.className = 'field-helper-feedback';
        }
        phoneInput.setAttribute('aria-invalid', 'false');
        return true;
      }
      const cleaned = raw.replace(/[\s.-]/g, '');
      const valid = /^(?:0|\+?212)?[5-7]\d{8}$/.test(cleaned);
      if (phoneFeedback) {
        if (!valid) {
          phoneFeedback.textContent = 'Format attendu : 10 chiffres marocains (ex. 06 61 48 20 90).';
          phoneFeedback.className = 'field-helper-feedback is-error';
          phoneInput.setAttribute('aria-invalid', 'true');
        } else {
          phoneFeedback.textContent = 'Numéro valide pour le rappel du secrétariat.';
          phoneFeedback.className = 'field-helper-feedback is-ok';
          phoneInput.setAttribute('aria-invalid', 'false');
        }
      }
      return valid;
    };

    if (phoneInput) {
      phoneInput.addEventListener('blur', validateMaPhone);
      phoneInput.addEventListener('input', () => {
        if (phoneInput.getAttribute('aria-invalid') === 'true') validateMaPhone();
      });
    }

    requestForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validateMaPhone()) {
        phoneInput?.focus();
        return;
      }

      const nameVal = requestForm.querySelector('input[name="Name"]')?.value.trim() || 'Patient';
      const phoneVal = phoneInput?.value.trim() || '';
      const emailVal = requestForm.querySelector('input[name="Email"]')?.value.trim() || '';
      const messageVal = requestForm.querySelector('textarea[name="Message"]')?.value.trim() || '';
      const selectedCare = requestForm.querySelector('input[name="Tab"]:checked')?.value || 'Bilan & Contrôle';
      const selectedTime = requestForm.querySelector('input[name="Radio"]:checked')?.value || 'Dès que possible';

      const priorities = [...requestForm.querySelectorAll('input[type="checkbox"]:checked')]
        .map((c) => c.closest('label')?.querySelector('span')?.textContent?.trim())
        .filter(Boolean);

      const lines = [
        'Bonjour Cabinet Mimosa Smile (Dr. Oubaidi, Kénitra),',
        'Je souhaite demander un rendez-vous :',
        `- Patient : ${nameVal}`,
        `- Soin souhaité : ${selectedCare}`,
        `- Disponibilité : ${selectedTime}`
      ];
      if (priorities.length) lines.push(`- Priorité : ${priorities.join(', ')}`);
      if (phoneVal) lines.push(`- Téléphone : ${phoneVal}`);
      if (emailVal) lines.push(`- Email : ${emailVal}`);
      if (messageVal) lines.push(`- Motif : ${messageVal}`);

      if (failBox) failBox.style.display = 'none';
      if (doneBox) doneBox.style.display = 'block';

      const waUrl = `https://wa.me/212661482090?text=${encodeURIComponent(lines.join('\n'))}`;
      window.open(waUrl, '_blank', 'noopener');
    });
  });

  document.querySelectorAll('#email-form, form.newsletter-form').forEach((nForm) => {
    nForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = nForm.querySelector('input[type="email"]');
      const wrap = nForm.closest('.w-form') || nForm.parentElement;
      const done = wrap?.querySelector('.w-form-done');
      const fail = wrap?.querySelector('.w-form-fail');
      if (!input || !input.value.trim() || !input.value.includes('@')) {
        if (fail) fail.style.display = 'block';
        if (done) done.style.display = 'none';
        return;
      }
      if (fail) fail.style.display = 'none';
      if (done) done.style.display = 'block';
      nForm.style.display = 'none';
    });
  });

  /* 7. Filtres du tableau Honoraires & Devis (tarifs-mutuelles.html) */
  const feeBtns = document.querySelectorAll('[data-fee-filter]');
  const feeRows = document.querySelectorAll('.caliora-fee-table tbody tr[data-fee-cat]');
  const feeStatus = document.getElementById('feeFilterStatus');

  if (feeBtns.length && feeRows.length) {
    feeBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-fee-filter') || 'tous';
        feeBtns.forEach((b) => {
          const active = b === btn;
          b.classList.toggle('active', active);
          b.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
        let shown = 0;
        feeRows.forEach((row) => {
          const cats = (row.getAttribute('data-fee-cat') || '').split(' ');
          const vis = cat === 'tous' || cats.includes(cat);
          row.classList.toggle('is-hidden', !vis);
          if (vis) shown += 1;
        });
        if (feeStatus) {
          feeStatus.textContent = shown > 1 ? `${shown} actes affichés` : `${shown} acte affiché`;
        }
      });
    });
  }
});
