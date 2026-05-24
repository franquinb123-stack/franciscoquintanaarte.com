/* Francisco Quintana Arte — interactions + ES/EN i18n (Spanish default) */
(function () {
  'use strict';

  /* ---------- header background on scroll ---------- */
  var header = document.getElementById('header');
  if (header) {
    var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 40); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- mobile menu ---------- */
  var burger = document.getElementById('burger');
  if (burger) {
    var closeMenu = function () {
      document.body.classList.remove('menu-open');
      burger.setAttribute('aria-expanded', 'false');
    };
    burger.addEventListener('click', function () {
      var open = document.body.classList.toggle('menu-open');
      burger.setAttribute('aria-expanded', String(open));
    });
    document.querySelectorAll('.nav__link').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
  }

  /* ---------- reveal on scroll ---------- */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- current year ---------- */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* ---------- hero slideshow ---------- */
  var slides = document.querySelectorAll('.hero__slides .hero__img');
  var dots = document.querySelectorAll('.hero__dots button');
  if (slides.length > 1) {
    var cur = 0;
    var show = function (i) {
      slides[cur].classList.remove('active');
      if (dots[cur]) dots[cur].classList.remove('active');
      cur = (i + slides.length) % slides.length;
      slides[cur].classList.add('active');
      if (dots[cur]) dots[cur].classList.add('active');
    };
    dots.forEach(function (d, i) { d.addEventListener('click', function () { show(i); restart(); }); });
    var timer;
    var restart = function () { clearInterval(timer); timer = setInterval(function () { show(cur + 1); }, 6000); };
    if (!reduce) restart();
  }

  /* ===================================================================
     Bilingual content (ES default / EN) — verbatim site copy
     =================================================================== */
  var I18N = {
    es: {
      brand_sub: 'Arte',
      nav_comercializacion: 'Comercialización',
      nav_curadurias: 'Servicios',
      nav_representacion: 'Representación',
      nav_quienes: 'Quiénes Somos',
      nav_contacto: 'Contacto',

      hero_eyebrow: 'Galería · Bogotá, Colombia',
      hero_t1: 'Arte Contemporáneo',
      hero_t2: 'Latinoamericano',

      intro_overline: 'La Galería',
      intro_statement: 'Enfocada en el arte',
      intro_statement_em: 'latinoamericano contemporáneo.',
      intro_meta: 'Bogotá · Colombia',
      services_label: 'Servicios',

      svc1_title: 'Comercialización',
      svc1_text: 'Compra y venta de arte para distintos públicos y mercados, desde jóvenes talentos con gran proyección hasta artistas consolidados. También te acompañamos y asesoramos en la compra y venta de tu colección.',
      svc2_title: 'Servicios',
      svc2_text: 'Producción integral de exposiciones y subastas de arte, de principio a fin. Realizamos avalúos para conocer el valor comercial de piezas individuales o colecciones completas.',
      svc3_title: 'Representación',
      svc3_text: 'Creemos en los nuevos talentos: jóvenes apasionados por el arte, con un sello propio que hace su obra única e inconfundible. Los acompañamos en cada etapa de su carrera.',
      more: 'Más información',

      contact_overline: 'Contáctanos',
      contact_title: 'Contáctanos',
      label_addr: 'Dirección',
      label_email: 'Correo',
      label_phone: 'Teléfono',
      form_name: 'Nombre',
      form_email: 'Correo',
      form_subject: 'Asunto',
      form_message: 'Mensaje',
      form_send: 'Enviar',

      /* comercialización */
      com_title: 'Comercialización',
      com_intro: 'Para mayor información sobre obras y nuestro portafolio, visítanos en Instagram en <a href="https://www.instagram.com/franciscoquintanaarte/" target="_blank" rel="noopener">Franciscoquintanarte</a> y contáctate con nosotros.',
      com_artists: 'Artistas',
      com_more: 'entre otros',

      /* curadurías */
      cur_title: 'Servicios',
      cur_h1: 'Curadurías',
      cur_p1: 'Exposición, valuación, manejo, preservación y administración de bienes artísticos para crear una conexión entre las piezas para crear algo más grande que la suma de las piezas individuales. La conexión de las piezas con un contexto crea una historia, que es como la gente al final va a recordar el conjunto.',
      cur_h2: 'Avalúos',
      cur_p2: 'Ya sea con fines de seguro o con fines comerciales, conozca el valor de sus bienes artísticos. Un avalúo le asegura una venta o compra justa, si piensa heredar su colección o recibió como herencia obras de arte, es necesario saber el monto al que asciende la adquisición cualquiera que sea el destino de las obras.',
      cur_h3: 'Otros Servicios',
      cur_p3: 'También organizamos otro tipo de eventos como lo son subastas de arte. Así mismo, organizamos exposiciones propias y participamos en ferias internacionales de arte.',
      cur_clients: 'Clientes — Participaciones',

      /* quiénes somos */
      q_title: 'Quiénes Somos',
      q_bio: 'Francisco Quintana Calderón lleva en el mundo del arte desde 1985, empezó trabajando en la galería Quintana junto a sus hermanos, comercializando importantes artistas como Fernando Botero, Enrique Grau y Antonio Barrera. Además, teniendo participación en importantes ferias a nivel mundial como ARCO Madrid, Art Miami, FIAC Paris, entre otras. En el año 2000, decide independizarse y fundar la galería Francisco Quintana Arte enfocada en arte latinoamericano contemporáneo, comercializando arte en distintos mercados y para distintos públicos. Dada su experiencia en el sector también realiza curadurías y avalúos de arte.',
      q_media: 'Media',

      /* representación */
      rep_title: 'Representación',
      rep_intro: 'Francisco Quintana Arte cree en los nuevos talentos, en jóvenes apasionados por el arte con un gran potencial y con técnicas innovadoras que hagan destacar su obra. Si estás interesado en mostrarnos tu obra ponte en contacto con nosotros.',
      rep_artists: 'Artistas',
      rep_press: 'Prensa',
      rep_fairs: 'Ferias Internacionales',

      foot_copy: '© 2020 Francisco Quintana Arte'
    },
    en: {
      brand_sub: 'Art',
      nav_comercializacion: 'Commercialization',
      nav_curadurias: 'Services',
      nav_representacion: 'Representation',
      nav_quienes: 'About us',
      nav_contacto: 'Contact',

      hero_eyebrow: 'Gallery · Bogotá, Colombia',
      hero_t1: 'Contemporary Art',
      hero_t2: 'Latin-American',

      intro_overline: 'The Gallery',
      intro_statement: 'Focused on',
      intro_statement_em: 'contemporary Latin-American art.',
      intro_meta: 'Bogotá · Colombia',
      services_label: 'Services',

      svc1_title: 'Commercialization',
      svc1_text: 'Buying and selling art across audiences and markets — from emerging talents with great promise to established names. We also guide and advise you on buying and selling your collection.',
      svc2_title: 'Services',
      svc2_text: 'End-to-end production of art exhibitions and auctions. We also appraise individual pieces and entire collections to establish their commercial value.',
      svc3_title: 'Representation',
      svc3_text: 'We believe in new talent — passionate young artists with a personal voice that makes their work unmistakably their own. We stand by them at every stage of their careers.',
      more: 'More information',

      contact_overline: 'Contact us',
      contact_title: 'Contact us',
      label_addr: 'Address',
      label_email: 'Email',
      label_phone: 'Phone',
      form_name: 'Name',
      form_email: 'Email',
      form_subject: 'Subject',
      form_message: 'Message',
      form_send: 'Send',

      com_title: 'Commercialization',
      com_intro: 'For more information about artworks and our portfolio, please visit us on Instagram at <a href="https://www.instagram.com/franciscoquintanaarte/" target="_blank" rel="noopener">Franciscoquintanarte</a> and contact us.',
      com_artists: 'Artists',
      com_more: 'among others',

      cur_title: 'Services',
      cur_h1: 'Curatorships',
      cur_p1: 'Exhibition, valuation, management, preservation and administration of artistic assets to create a connection between the pieces, to produce something greater than the sum of the individual pieces. The connection of the pieces with a context creates a story, which is how people in the end will remember the set.',
      cur_h2: 'Appraisals',
      cur_p2: 'Whether for insurance or commercial purposes, know the value of your artistic assets. An appraisal assures you of a fair sale or purchase, if you plan to inherit your collection or received works of art as inheritance, it is necessary to know the amount of the acquisition regardless of the destination of the works.',
      cur_h3: 'Other Services',
      cur_p3: 'We also organize other types of events such as art auctions. As well, we organize our own exhibitions and participate in international art fairs.',
      cur_clients: 'Clients — Participations',

      q_title: 'About us',
      q_bio: 'Francisco Quintana Calderón has been in the art world since 1985, he began working in Quintana gallery with his brothers, commercializing important artists such as Fernando Botero, Enrique Grau and Antonio Barrera. In addition, taking part in important worldwide fairs such as ARCO Madrid, Art Miami, FIAC Paris, among others. In 2000, he decided to become independent and fund Francisco Quintana Art gallery focused on contemporary Latin American art, commercializing art in different markets and for different audiences. Given his experience in the sector, he also conducts curatorships and art appraisals.',
      q_media: 'Media',

      rep_title: 'Representation',
      rep_intro: 'Francisco Quintana Art believes in new talents, in young people passionate about art with great potential and with innovative techniques that make their work stand out. If you are interested in showing us your work, contact us.',
      rep_artists: 'Artists',
      rep_press: 'Press',
      rep_fairs: 'International Art Fairs',

      foot_copy: '© 2020 Francisco Quintana Arte'
    }
  };

  function applyLang(lang) {
    var dict = I18N[lang] || I18N.es;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n')];
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n-ph')];
      if (v != null) el.setAttribute('placeholder', v);
    });
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-lang') === lang);
    });
    try { localStorage.setItem('fqa-lang', lang); } catch (e) {}
  }

  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang')); });
  });

  var saved = 'es';
  try {
    var stored = localStorage.getItem('fqa-lang');
    if (stored === 'en' || stored === 'es') saved = stored;
  } catch (e) {}
  applyLang(saved);

  /* ---------- contact form → pre-filled email ---------- */
  var form = document.getElementById('contactForm');
  var note = document.getElementById('formNote');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var es = document.documentElement.lang !== 'en';
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
