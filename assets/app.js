/**
 * MIMOSA SMILE, KÉNITRA (mimosasmile.ma)
 * Navigation, Explorateur de soins, Comparateur Avant/Après & Dock RDV WhatsApp
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Menu Mobile & Menu Déroulant "Nos Soins"
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const primaryNav = document.querySelector('.primary-nav');
  if (menuBtn && primaryNav) {
    menuBtn.addEventListener('click', () => {
      const isOpen = primaryNav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  const dropdowns = document.querySelectorAll('.nav-dropdown');
  const closeAllDropdowns = () => {
    dropdowns.forEach((dd) => {
      dd.classList.remove('open');
      const trigger = dd.querySelector('.nav-dropdown-trigger');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
    });
  };

  dropdowns.forEach((dd) => {
    const trigger = dd.querySelector('.nav-dropdown-trigger');
    if (!trigger) return;
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const willOpen = !dd.classList.contains('open');
      closeAllDropdowns();
      if (willOpen) {
        dd.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  document.addEventListener('click', closeAllDropdowns);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllDropdowns();
  });

  // 2. Accordéon FAQ (grid-template-rows fluide)
  const faqEntries = document.querySelectorAll('.faq-entry');
  faqEntries.forEach((entry) => {
    const trigger = entry.querySelector('.faq-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const currentlyOpen = entry.classList.contains('open');
      faqEntries.forEach((other) => {
        other.classList.remove('open');
        const otherBtn = other.querySelector('.faq-trigger');
        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
      });

      if (!currentlyOpen) {
        entry.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // 3. Explorateur Interactif des Pôles de Soins (Filtres + Skeleton + État vide)
  const filterBtns = document.querySelectorAll('[data-care-filter]');
  const careCards = document.querySelectorAll('.specialty-block[data-category]');
  const careGrid = document.getElementById('careExplorerGrid');
  const careSkeleton = document.getElementById('careSkeletonState');
  const careEmpty = document.getElementById('careEmptyState');
  const careStatus = document.getElementById('careFilterStatus');
  const resetFilterBtn = document.getElementById('resetCareFilterBtn');

  const applyCareFilter = (category, withSkeleton = true) => {
    if (!careCards.length) return;
    filterBtns.forEach((btn) => {
      const isMatch = btn.getAttribute('data-care-filter') === category;
      btn.classList.toggle('active', isMatch);
      btn.setAttribute('aria-pressed', isMatch ? 'true' : 'false');
    });

    const renderCards = () => {
      let visibleCount = 0;
      careCards.forEach((card) => {
        const cats = (card.getAttribute('data-category') || '').split(' ');
        const show = category === 'tous' || cats.includes(category);
        card.classList.toggle('is-hidden', !show);
        if (show) visibleCount += 1;
      });

      if (careSkeleton) careSkeleton.classList.remove('is-active');
      if (careGrid) careGrid.style.display = visibleCount > 0 ? '' : 'none';
      if (careEmpty) careEmpty.classList.toggle('is-visible', visibleCount === 0);
      if (careStatus) {
        careStatus.textContent =
          visibleCount > 1
            ? `${visibleCount} soins affichés`
            : `${visibleCount} soin affiché`;
      }
    };

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (withSkeleton && careSkeleton && careGrid && !reducedMotion) {
      careGrid.style.display = 'none';
      if (careEmpty) careEmpty.classList.remove('is-visible');
      careSkeleton.classList.add('is-active');
      window.setTimeout(renderCards, 160);
    } else {
      renderCards();
    }
  };

  if (filterBtns.length && careCards.length) {
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-care-filter') || 'tous';
        applyCareFilter(cat, true);
      });
    });

    if (resetFilterBtn) {
      resetFilterBtn.addEventListener('click', () => applyCareFilter('tous', false));
    }
  }

  // 4. Comparateur Interactif Avant / Après (SVG Dentaire sans visage humain)
  const baRange = document.getElementById('baRangeSlider');
  const baAfterLayer = document.getElementById('baAfterLayer');
  const baHandleLine = document.getElementById('baHandleLine');
  const baHandleKnob = document.getElementById('baHandleKnob');
  const baPercentReadout = document.getElementById('baPercentReadout');

  const updateComparator = (val) => {
    if (!baAfterLayer || !baHandleLine || !baHandleKnob) return;
    const pct = Math.max(0, Math.min(100, Number(val)));
    baAfterLayer.style.clipPath = `inset(0 0 0 ${pct}%)`;
    baHandleLine.style.left = `${pct}%`;
    baHandleKnob.style.left = `${pct}%`;
    if (baPercentReadout) {
      baPercentReadout.textContent = `Comparaison : ${Math.round(pct)} %`;
    }
  };

  if (baRange) {
    baRange.addEventListener('input', (e) => updateComparator(e.target.value));
    updateComparator(baRange.value || 48);
  }

  const clinicalCases = {
    veneers: {
      title: 'Facettes céramiques E-max sur mesure',
      beforeLabel: 'Avant : teinte terne, usure légère et espaces visibles',
      afterLabel: 'Après : alignement régulier et teinte lumineuse naturelle',
      duration: '2 séances sur 8 jours avec essayage préalable'
    },
    implant: {
      title: 'Implant unitaire et couronne céramique',
      beforeLabel: 'Avant : dent absente gênant la mastication',
      afterLabel: 'Après : dent fixe alignée avec l’arcade naturelle',
      duration: 'Pose guidée en 30 min sous anesthésie locale'
    },
    whitening: {
      title: 'Éclaircissement médical doux au fauteuil',
      beforeLabel: 'Avant : coloration liée au thé ou au café',
      afterLabel: 'Après : éclat uniforme sans sensibilité thermique',
      duration: '1 séance de 60 minutes après détartrage'
    }
  };

  const caseTabs = document.querySelectorAll('.case-tab');
  const caseTitleEl = document.getElementById('baCaseTitle');
  const caseBeforeTextEl = document.getElementById('baBeforeDesc');
  const caseAfterTextEl = document.getElementById('baAfterDesc');
  const caseDurationEl = document.getElementById('baCaseDuration');

  caseTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      caseTabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      const key = tab.getAttribute('data-case');
      const data = clinicalCases[key];
      if (!data) return;

      if (caseTitleEl) caseTitleEl.textContent = data.title;
      if (caseBeforeTextEl) caseBeforeTextEl.textContent = data.beforeLabel;
      if (caseAfterTextEl) caseAfterTextEl.textContent = data.afterLabel;
      if (caseDurationEl) caseDurationEl.textContent = data.duration;
    });
  });

  // 5. Dock de Prise de Rendez-vous Directe Zéro Friction (Aperçu Live + Validation au Blur)
  const bookingForm = document.getElementById('quickBookingForm');
  if (bookingForm) {
    const motifSelect = document.getElementById('bookingMotif');
    const creneauSelect = document.getElementById('bookingCreneau');
    const visiteSelect = document.getElementById('bookingVisite');
    const phoneInput = document.getElementById('bookingPhone');
    const phoneHelper = document.getElementById('bookingPhoneHelper');
    const previewText = document.getElementById('bookingPreviewText');
    const dockSubmitStatus = document.getElementById('bookingSubmitStatus');

    const updatePreview = () => {
      if (!previewText) return;
      const m = motifSelect?.value || 'Bilan dentaire';
      const c = creneauSelect?.value || 'Dès que possible';
      const v = visiteSelect?.value || 'Nouveau patient';
      previewText.textContent = `Message prêt : ${m}, ${c} (${v}).`;
    };

    const validatePhone = () => {
      if (!phoneInput || !phoneHelper) return true;
      const raw = phoneInput.value.trim();
      if (!raw) {
        phoneInput.setAttribute('aria-invalid', 'false');
        phoneHelper.textContent = 'Optionnel, utile pour être rappelé rapidement.';
        phoneHelper.className = 'dock-helper-line';
        return true;
      }
      const cleaned = raw.replace(/[\s.-]/g, '');
      const validMa = /^(?:0|\+?212)?[5-7]\d{8}$/.test(cleaned);
      if (!validMa) {
        phoneInput.setAttribute('aria-invalid', 'true');
        phoneHelper.textContent = 'Format attendu : 10 chiffres marocains (ex. 06 61 48 20 90).';
        phoneHelper.className = 'dock-helper-line is-error';
        return false;
      }
      phoneInput.setAttribute('aria-invalid', 'false');
      phoneHelper.textContent = 'Numéro valide pour le rappel du secrétariat.';
      phoneHelper.className = 'dock-helper-line is-ok';
      return true;
    };

    let phoneTouched = false;
    if (phoneInput) {
      phoneInput.addEventListener('blur', () => {
        phoneTouched = true;
        validatePhone();
      });
      phoneInput.addEventListener('input', () => {
        if (phoneTouched) validatePhone();
        updatePreview();
      });
    }

    [motifSelect, creneauSelect, visiteSelect].forEach((sel) => {
      if (sel) sel.addEventListener('change', updatePreview);
    });
    updatePreview();

    document.querySelectorAll('[data-select-motif]').forEach((trigger) => {
      trigger.addEventListener('click', (e) => {
        if (!motifSelect) return;
        const val = trigger.getAttribute('data-select-motif');
        if (val) {
          motifSelect.value = val;
          updatePreview();
        }
        const dock = document.getElementById('rdv-dock');
        if (dock && trigger.tagName.toLowerCase() === 'button') {
          e.preventDefault();
          dock.scrollIntoView({ behavior: 'smooth', block: 'center' });
          motifSelect.focus();
        }
      });
    });

    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      phoneTouched = true;
      if (!validatePhone()) {
        phoneInput?.focus();
        return;
      }

      const motif = motifSelect?.value || 'Bilan dentaire et radiographie';
      const creneau = creneauSelect?.value || 'Dès que possible';
      const visite = visiteSelect?.value || 'Nouveau patient';
      const phoneVal = phoneInput?.value.trim();

      const lines = [
        'Bonjour Cabinet Mimosa Smile (Dr. Oubaidi, Kénitra),',
        'Je souhaite demander un rendez-vous :',
        `- Motif : ${motif}`,
        `- Créneau : ${creneau}`,
        `- Profil : ${visite}`
      ];
      if (phoneVal) lines.push(`- Téléphone de rappel : ${phoneVal}`);
      lines.push('Merci pour votre retour.');

      if (dockSubmitStatus) {
        dockSubmitStatus.textContent = 'Ouverture de WhatsApp avec votre récapitulatif.';
        dockSubmitStatus.className = 'dock-helper-line is-ok';
      }

      const url = `https://wa.me/212661482090?text=${encodeURIComponent(lines.join('\n'))}`;
      window.open(url, '_blank', 'noopener');
    });
  }
});
