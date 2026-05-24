/* Francisco Quintana Art — interactions + EN/ES i18n */
(function () {
  'use strict';

  /* ---------- header background on scroll ---------- */
  var header = document.getElementById('header');
  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- mobile menu ---------- */
  var burger = document.getElementById('burger');
  function closeMenu() {
    document.body.classList.remove('menu-open');
    burger.setAttribute('aria-expanded', 'false');
  }
  burger.addEventListener('click', function () {
    var open = document.body.classList.toggle('menu-open');
    burger.setAttribute('aria-expanded', String(open));
  });
  document.querySelectorAll('.nav__link').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });

  /* ---------- reveal on scroll ---------- */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- current year ---------- */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* ===================================================================
     Bilingual content (EN / ES)
     =================================================================== */
  var I18N = {
    en: {
      nav_commerce: 'Commercialization',
      nav_curatories: 'Curatories & Appraisals',
      nav_representation: 'Representation',
      nav_about: 'About',
      nav_contact: 'Contact',

      hero_eyebrow: 'Gallery · Bogotá',
      hero_title_1: 'Contemporary',
      hero_title_2: 'Art',
      hero_sub: 'Latin American',

      intro_overline: 'The Gallery',
      intro_lede_a: 'Championing contemporary Latin-American art —',
      intro_lede_b: 'from emerging voices to established names.',
      intro_meta: 'Commercialization · Curatorship · Appraisals · Representation',

      practice_overline: 'What we do',
      practice_title: 'A practice built around the work —<br>and the people behind it.',
      svc1_title: 'Commercialization',
      svc1_text: 'Buying and selling art for different audiences and markets. From young artists with great potential to artists positioned in the market. Also, we help you selling your artworks. To see the catalogue go to more information.',
      svc2_title: 'Curatories & Appraisals',
      svc2_text: 'Organization and development of all production of art exhibitions and auctions. In addition, appraisals to know the estimate of the commercial value of art pieces or collections.',
      svc3_title: 'Representation',
      svc3_text: 'We believe in new talents, in passionate young people who want to immerse themselves in a life full of art. In addition, artist that have a personal aspect that makes their work differentiable and unique.',
      more: 'More information',

      exh_kicker: 'Exhibitions & Auctions',
      exh_title: 'Where the work meets its audience.',
      exh_text: 'From the first studio visit to the night of the opening, we produce art exhibitions and auctions end to end — and appraise pieces and collections so their commercial value is understood with clarity.',
      exh_cta: 'View programme',

      rep_kicker: 'Representation',
      rep_title: 'Backing artists with a voice of their own.',
      rep_text: 'We believe in new talents — passionate young people who want to immerse themselves in a life full of art, and artists whose personal vision makes their work unmistakably their own. We stand beside them, from the studio to the collection.',
      rep_cta: 'Work with us',

      contact_overline: 'Get in touch',
      contact_title: 'Contact us',
      label_studio: 'Gallery',
      label_email: 'Email',
      label_phone: 'Phone',
      form_name: 'Name',
      form_email: 'Email',
      form_subject: 'Subject',
      form_message: 'Message',
      form_send: 'Send message',
      footer_tag: 'Contemporary Latin-American Art'
    },
    es: {
      nav_commerce: 'Comercialización',
      nav_curatories: 'Curaduría y Avalúos',
      nav_representation: 'Representación',
      nav_about: 'Nosotros',
      nav_contact: 'Contacto',

      hero_eyebrow: 'Galería · Bogotá',
      hero_title_1: 'Arte',
      hero_title_2: 'Contemporáneo',
      hero_sub: 'Latinoamericano',

      intro_overline: 'La Galería',
      intro_lede_a: 'Impulsamos el arte contemporáneo latinoamericano —',
      intro_lede_b: 'desde nuevas voces hasta nombres consagrados.',
      intro_meta: 'Comercialización · Curaduría · Avalúos · Representación',

      practice_overline: 'Qué hacemos',
      practice_title: 'Una práctica construida en torno a la obra —<br>y a quienes están detrás de ella.',
      svc1_title: 'Comercialización',
      svc1_text: 'Compra y venta de arte para distintos públicos y mercados. Desde jóvenes artistas con gran potencial hasta artistas posicionados en el mercado. También te ayudamos a vender tus obras. Para ver el catálogo, ve a más información.',
      svc2_title: 'Curaduría y Avalúos',
      svc2_text: 'Organización y desarrollo de toda la producción de exposiciones y subastas de arte. Además, avalúos para conocer el valor comercial estimado de obras o colecciones.',
      svc3_title: 'Representación',
      svc3_text: 'Creemos en los nuevos talentos, en jóvenes apasionados que quieren sumergirse en una vida llena de arte. Además, en artistas con un sello personal que hace su obra diferenciable y única.',
      more: 'Más información',

      exh_kicker: 'Exposiciones y Subastas',
      exh_title: 'Donde la obra encuentra a su público.',
      exh_text: 'Desde la primera visita al taller hasta la noche de la inauguración, producimos exposiciones y subastas de principio a fin — y avaluamos obras y colecciones para que su valor comercial se entienda con claridad.',
      exh_cta: 'Ver programa',

      rep_kicker: 'Representación',
      rep_title: 'Respaldamos a artistas con voz propia.',
      rep_text: 'Creemos en los nuevos talentos — jóvenes apasionados que quieren sumergirse en una vida llena de arte, y artistas cuya visión personal hace que su obra sea inconfundiblemente suya. Los acompañamos, del taller a la colección.',
      rep_cta: 'Trabaja con nosotros',

      contact_overline: 'Hablemos',
      contact_title: 'Contáctanos',
      label_studio: 'Galería',
      label_email: 'Correo',
      label_phone: 'Teléfono',
      form_name: 'Nombre',
      form_email: 'Correo',
      form_subject: 'Asunto',
      form_message: 'Mensaje',
      form_send: 'Enviar mensaje',
      footer_tag: 'Arte Contemporáneo Latinoamericano'
    }
  };

  function applyLang(lang) {
    var dict = I18N[lang] || I18N.en;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n')];
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-lang') === lang);
    });
    try { localStorage.setItem('fqa-lang', lang); } catch (e) {}
  }

  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang')); });
  });

  var saved = 'en';
  try {
    var stored = localStorage.getItem('fqa-lang');
    if (stored === 'en' || stored === 'es') saved = stored;
    else if ((navigator.language || '').slice(0, 2).toLowerCase() === 'es') saved = 'es';
  } catch (e) {}
  if (saved !== 'en') applyLang(saved);

  /* ---------- contact form → pre-filled email ---------- */
  var form = document.getElementById('contactForm');
  var note = document.getElementById('formNote');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var es = document.documentElement.lang === 'es';
      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var subject = form.subject.value.trim() || (es ? 'Consulta desde la web' : 'Website enquiry');
      var msg = form.message.value.trim();
      var body = (es ? 'Nombre: ' : 'Name: ') + name + '\n' +
                 (es ? 'Correo: ' : 'Email: ') + email + '\n\n' + msg;
      window.location.href = 'mailto:Quico20042003@yahoo.es?subject=' +
        encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      note.hidden = false;
      note.textContent = es
        ? 'Gracias — se abrirá tu correo para enviar el mensaje.'
        : 'Thank you — your email app will open to send the message.';
    });
  }
})();
