/**
 * MIMOSA SMILE KÉNITRA — CALIORA COMPANION SCRIPT
 * Fonctionne main dans la main avec Webflow IX3 + GSAP 3.15 + ScrollTrigger +
 * SplitText + Lenis natifs de Caliora (/assets/vendor/caliora/).
 */

document.addEventListener('DOMContentLoaded', () => {
  const hasGsap = typeof window.gsap !== 'undefined';
  const hasScrollTrigger = typeof window.ScrollTrigger !== 'undefined';
  const hasSplitText = typeof window.SplitText !== 'undefined';

  document.querySelectorAll('.before-after-slider').forEach((slider) => {
    const control = slider.querySelector('.before-after-control');
    if (!control) return;

    const updateComparison = () => {
      const before = Number(control.value);
      slider.style.setProperty('--compare-position', `${before}%`);
      control.setAttribute('aria-valuetext', `${before}% avant, ${100 - before}% après`);
    };

    control.addEventListener('input', updateComparison);
    updateComparison();
  });

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

function initMimosa3DShowcase() {
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const mediaCards = document.querySelectorAll('.treatment-card-media');
  if (!mediaCards.length || prefersReduced) return;

  const states = [];

  mediaCards.forEach((media, idx) => {
    const img = media.querySelector('img.reveal-content-image');
    if (!img) return;

    const src = (img.getAttribute('src') || '').toLowerCase();
    let mode = 'sparkle';
    if (src.includes('detartrage')) mode = 'mist';
    else if (src.includes('facettes')) mode = 'prism';
    else if (src.includes('blanchiment')) mode = 'whitening';
    else if (src.includes('couronnes')) mode = 'scan3d';

    const glCanvas = document.createElement('canvas');
    glCanvas.className = 'mimosa-3d-webgl';
    media.appendChild(glCanvas);

    const specular = document.createElement('div');
    specular.className = 'mimosa-3d-specular';
    media.appendChild(specular);

    const canvas = document.createElement('canvas');
    canvas.className = 'mimosa-3d-fx';
    media.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    const card = media.closest('.treatment-card') || media;

    const glEngine = createDepthParallaxGL(glCanvas, img);

    const particles = [];
    const count = mode === 'mist' ? 52 : mode === 'scan3d' ? 36 : 32;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random(),
        y: Math.random(),
        vx: (Math.random() - 0.5) * 0.0018,
        vy: mode === 'mist' ? -(0.0012 + Math.random() * 0.0022) : (Math.random() - 0.5) * 0.0012,
        r: 1.2 + Math.random() * 2.8,
        phase: Math.random() * Math.PI * 2,
        speed: 0.025 + Math.random() * 0.035
      });
    }

    const st = {
      media,
      card,
      img,
      glCanvas,
      glEngine,
      specular,
      canvas,
      ctx,
      mode,
      particles,
      phaseOffset: idx * 1.55,
      hover: false,
      targetRx: 0,
      targetRy: 0,
      curRx: 0,
      curRy: 0,
      targetScale: 1.07,
      curScale: 1.07,
      mx: 50,
      my: 45,
      visible: true,
      w: 0,
      h: 0
    };

    const syncSize = () => {
      const rect = media.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      st.w = rect.width;
      st.h = rect.height;
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      glCanvas.width = Math.round(rect.width * dpr);
      glCanvas.height = Math.round(rect.height * dpr);
      if (st.glEngine) st.glEngine.resize(glCanvas.width, glCanvas.height);
    };
    syncSize();
    if (window.ResizeObserver) {
      new ResizeObserver(syncSize).observe(media);
    }

    card.addEventListener('pointerenter', () => {
      st.hover = true;
      st.targetScale = 1.12;
    });

    card.addEventListener('pointermove', (e) => {
      const rect = media.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const nx = (e.clientX - rect.left) / rect.width;
      const ny = (e.clientY - rect.top) / rect.height;
      st.targetRy = (nx - 0.5) * 24;
      st.targetRx = (0.5 - ny) * 18;
      st.mx = Math.max(0, Math.min(100, nx * 100));
      st.my = Math.max(0, Math.min(100, ny * 100));
    });

    card.addEventListener('pointerleave', () => {
      st.hover = false;
      st.targetScale = 1.07;
    });

    states.push(st);
  });

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const st = states.find((s) => s.media === entry.target);
        if (st) st.visible = entry.isIntersecting;
      });
    }, { threshold: 0.05 });
    states.forEach((s) => io.observe(s.media));
  }

  const start = performance.now();
  function tick(now) {
    const t = (now - start) * 0.001;
    for (const st of states) {
      if (!st.visible) continue;

      if (!st.hover) {
        const p = t * 1.25 + st.phaseOffset;
        st.targetRy = Math.sin(p) * 8.5;
        st.targetRx = Math.cos(p * 0.85) * 6.0;
        st.mx = 50 + Math.sin(p * 0.8) * 32;
        st.my = 44 + Math.cos(p * 0.7) * 20;
      }

      st.curRx += (st.targetRx - st.curRx) * 0.1;
      st.curRy += (st.targetRy - st.curRy) * 0.1;
      st.curScale += (st.targetScale - st.curScale) * 0.1;

      const floatY = Math.sin(t * 1.7 + st.phaseOffset) * 6.0;
      const floatZ = (Math.cos(t * 1.3 + st.phaseOffset) + 1) * 10;

      if (st.glEngine && st.glEngine.ready) {
        st.glCanvas.style.transform = 'none';
        st.img.style.opacity = '0';
        st.img.style.transform = 'none';
        st.glEngine.render(st.curRy / 14, st.curRx / 11, t + st.phaseOffset);
      } else {
        const tf = `perspective(750px) translate3d(0, ${floatY.toFixed(2)}px, ${floatZ.toFixed(1)}px) rotateX(${st.curRx.toFixed(2)}deg) rotateY(${st.curRy.toFixed(2)}deg) scale(${st.curScale.toFixed(3)})`;
        st.img.style.transform = tf;
      }

      st.specular.style.setProperty('--mx', `${st.mx.toFixed(1)}%`);
      st.specular.style.setProperty('--my', `${st.my.toFixed(1)}%`);

      drawSignatureFx(st, t);
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function createDepthParallaxGL(canvas, img) {
  const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: false, antialias: true })
    || canvas.getContext('experimental-webgl', { alpha: true, premultipliedAlpha: false });
  if (!gl) return null;

  const vsSrc = `
    attribute vec2 aPos;
    varying vec2 vUv;
    void main() {
      vUv = vec2(aPos.x * 0.5 + 0.5, 0.5 - aPos.y * 0.5);
      gl_Position = vec4(aPos, 0.0, 1.0);
    }
  `;

  const fsSrc = `
    precision mediump float;
    varying vec2 vUv;
    uniform sampler2D uTex;
    uniform vec2 uCam;
    uniform float uTime;
    uniform vec2 uAspect;

    vec3 sampleBg(vec2 uv) {
      vec3 tl = texture2D(uTex, vec2(0.04, 0.04)).rgb;
      vec3 tr = texture2D(uTex, vec2(0.96, 0.04)).rgb;
      vec3 bl = texture2D(uTex, vec2(0.04, 0.92)).rgb;
      vec3 br = texture2D(uTex, vec2(0.96, 0.92)).rgb;
      vec3 top = mix(tl, tr, clamp(uv.x, 0.0, 1.0));
      vec3 bot = mix(bl, br, clamp(uv.x, 0.0, 1.0));
      return mix(top, bot, clamp(uv.y, 0.0, 1.0));
    }

    float getObjMask(vec2 uv) {
      vec3 c = texture2D(uTex, clamp(uv, 0.0, 1.0)).rgb;
      vec3 bg = sampleBg(uv);
      float diff = length(c - bg);
      float sat = max(c.r, max(c.g, c.b)) - min(c.r, min(c.g, c.b));
      float lum = dot(c, vec3(0.299, 0.587, 0.114));
      float bgLum = dot(bg, vec3(0.299, 0.587, 0.114));
      float chromaMask = smoothstep(0.085, 0.19, diff);
      float gumOrMetal = smoothstep(0.09, 0.17, sat);
      float whiteOrShadow = smoothstep(0.07, 0.16, abs(lum - bgLum));
      return clamp(max(chromaMask, max(gumOrMetal, whiteOrShadow)), 0.0, 1.0);
    }

    float getDepth(vec2 uv) {
      float m = getObjMask(uv);
      vec3 c = texture2D(uTex, clamp(uv, 0.0, 1.0)).rgb;
      float lum = dot(c, vec3(0.299, 0.587, 0.114));
      float highlight = smoothstep(0.55, 0.96, lum) * 0.25;
      return clamp(m * 0.85 + highlight * m, 0.0, 1.0);
    }

    void main() {
      vec2 baseUv = (vUv - 0.5) * uAspect + 0.5;
      vec2 shift = uCam * 0.042;

      vec2 uv = baseUv;
      float stepSize = 1.0 / 8.0;
      float curLayer = 1.0;
      vec2 dUv = shift * stepSize;
      vec2 curUv = baseUv + shift * 0.5;
      float curDepth = getDepth(curUv);

      for (int i = 0; i < 8; i++) {
        if (curLayer <= curDepth) break;
        curUv -= dUv;
        curDepth = getDepth(curUv);
        curLayer -= stepSize;
      }

      uv = clamp(curUv, 0.002, 0.998);
      vec4 col = texture2D(uTex, uv);

      // Moyenne douce sur le masque pour un détourage sans grain ni halo
      float epsM = 0.004;
      float mCenter = getObjMask(uv);
      float mAvg = (mCenter * 2.0 + getObjMask(uv + vec2(epsM, 0.0)) + getObjMask(uv - vec2(epsM, 0.0))
                 + getObjMask(uv + vec2(0.0, epsM)) + getObjMask(uv - vec2(0.0, epsM))) / 6.0;
      float objAlpha = smoothstep(0.18, 0.65, mAvg);

      float edgeFade = smoothstep(0.0, 0.04, vUv.x) * smoothstep(1.0, 0.96, vUv.x)
                     * smoothstep(0.0, 0.04, vUv.y) * smoothstep(1.0, 0.96, vUv.y);
      float alpha = objAlpha * edgeFade;

      // Normale 3D et reflet spéculaire studio uniquement sur l'objet
      float eps = 0.008;
      float dx = getDepth(uv + vec2(eps, 0.0)) - getDepth(uv - vec2(eps, 0.0));
      float dy = getDepth(uv + vec2(0.0, eps)) - getDepth(uv - vec2(0.0, eps));
      vec3 normal = normalize(vec3(-dx * 3.5, -dy * 3.5, 1.0));
      vec3 lightDir = normalize(vec3(uCam.x * 1.8 + sin(uTime * 0.9) * 0.35, -uCam.y * 1.8 + 0.45, 1.0));
      vec3 viewDir = vec3(0.0, 0.0, 1.0);
      vec3 halfVec = normalize(lightDir + viewDir);
      float spec = pow(max(dot(normal, halfVec), 0.0), 28.0) * objAlpha;

      col.rgb += vec3(1.0, 0.97, 0.92) * spec * 0.32;
      gl_FragColor = vec4(col.rgb, alpha);
    }
  `;

  function compile(type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) return null;
    return s;
  }

  const vs = compile(gl.VERTEX_SHADER, vsSrc);
  const fs = compile(gl.FRAGMENT_SHADER, fsSrc);
  if (!vs || !fs) return null;

  const prog = gl.createProgram();
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return null;

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

  const aPos = gl.getAttribLocation(prog, 'aPos');
  const uCam = gl.getUniformLocation(prog, 'uCam');
  const uTime = gl.getUniformLocation(prog, 'uTime');
  const uAspect = gl.getUniformLocation(prog, 'uAspect');

  const tex = gl.createTexture();
  const engine = {
    ready: false,
    aspect: [1, 1],
    resize(w, h) {
      gl.viewport(0, 0, w, h);
      const imgR = (img.naturalWidth || 1) / (img.naturalHeight || 1);
      const boxR = w / Math.max(1, h);
      if (boxR > imgR) {
        this.aspect = [1.0, imgR / boxR];
      } else {
        this.aspect = [boxR / imgR, 1.0];
      }
    },
    render(camX, camY, time) {
      if (!this.ready) return;
      gl.useProgram(prog);
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.enableVertexAttribArray(aPos);
      gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.uniform2f(uCam, camX, camY);
      gl.uniform1f(uTime, time);
      gl.uniform2f(uAspect, this.aspect[0], this.aspect[1]);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
  };

  const upload = () => {
    try {
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
      engine.ready = true;
      engine.resize(canvas.width, canvas.height);
    } catch (_) {
      engine.ready = false;
    }
  };

  if (img.complete && img.naturalWidth > 0) upload();
  else img.addEventListener('load', upload, { once: true });

  return engine;
}

function drawSignatureFx(st, t) {
  const { ctx, w, h, mode, particles, phaseOffset } = st;
  if (!ctx || !w || !h) return;
  ctx.clearRect(0, 0, w, h);

  if (mode === 'mist') {
    for (const pt of particles) {
      pt.phase += pt.speed;
      pt.x += pt.vx + Math.sin(pt.phase) * 0.0005;
      pt.y += pt.vy;
      if (pt.y < 0.14 || pt.x < 0.25 || pt.x > 0.78) {
        pt.x = 0.44 + Math.random() * 0.22;
        pt.y = 0.45 + Math.random() * 0.22;
      }
      const alpha = (0.28 + 0.45 * Math.sin(pt.phase)) * (st.hover ? 1 : 0.78);
      ctx.beginPath();
      ctx.arc(pt.x * w, pt.y * h, pt.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, alpha).toFixed(2)})`;
      ctx.fill();
    }
  } else if (mode === 'prism') {
    const sweep = ((t * 0.35 + phaseOffset) % 1.6) - 0.3;
    const grad = ctx.createLinearGradient(sweep * w - 90, 0, sweep * w + 90, h);
    grad.addColorStop(0, 'rgba(255,255,255,0)');
    grad.addColorStop(0.5, 'rgba(255, 250, 240, 0.16)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    for (const pt of particles) {
      pt.phase += pt.speed * 1.2;
      const pulse = Math.max(0, Math.sin(pt.phase));
      if (pulse < 0.35) continue;
      const px = (0.28 + pt.x * 0.48) * w;
      const py = (0.22 + pt.y * 0.55) * h;
      const len = pt.r * 2.8 * pulse;
      ctx.strokeStyle = `rgba(255, 252, 245, ${(pulse * 0.65).toFixed(2)})`;
      ctx.lineWidth = 1.1;
      ctx.beginPath();
      ctx.moveTo(px - len, py);
      ctx.lineTo(px + len, py);
      ctx.moveTo(px, py - len);
      ctx.lineTo(px, py + len);
      ctx.stroke();
    }
  } else if (mode === 'whitening') {
    const waveX = (0.5 + Math.sin(t * 1.1 + phaseOffset) * 0.36) * w;
    const g = ctx.createRadialGradient(waveX, h * 0.48, 4, waveX, h * 0.48, w * 0.28);
    g.addColorStop(0, 'rgba(225, 245, 255, 0.32)');
    g.addColorStop(0.45, 'rgba(240, 250, 255, 0.12)');
    g.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);

    for (const pt of particles) {
      pt.phase += pt.speed;
      pt.y -= 0.0011;
      if (pt.y < 0.2) pt.y = 0.72;
      const alpha = 0.2 + 0.4 * Math.sin(pt.phase);
      ctx.beginPath();
      ctx.arc((0.2 + pt.x * 0.6) * w, pt.y * h, pt.r * 0.85, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(235, 248, 255, ${Math.max(0, alpha).toFixed(2)})`;
      ctx.fill();
    }
  } else if (mode === 'scan3d') {
    const scanY = (0.18 + ((Math.sin(t * 1.25 + phaseOffset) + 1) * 0.5) * 0.64) * h;
    const beam = ctx.createLinearGradient(0, scanY - 26, 0, scanY + 26);
    beam.addColorStop(0, 'rgba(245, 232, 206, 0)');
    beam.addColorStop(0.5, 'rgba(255, 246, 224, 0.28)');
    beam.addColorStop(1, 'rgba(245, 232, 206, 0)');
    ctx.fillStyle = beam;
    ctx.fillRect(w * 0.16, scanY - 26, w * 0.68, 52);

    ctx.strokeStyle = 'rgba(255, 250, 235, 0.62)';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(w * 0.18, scanY);
    ctx.lineTo(w * 0.82, scanY);
    ctx.stroke();

    for (const pt of particles) {
      const py = (0.2 + pt.y * 0.6) * h;
      const dist = Math.abs(py - scanY);
      if (dist < 38) {
        const glow = (1 - dist / 38) * 0.75;
        ctx.beginPath();
        ctx.arc((0.24 + pt.x * 0.52) * w, py, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 248, 228, ${glow.toFixed(2)})`;
        ctx.fill();
      }
    }
  }
}
