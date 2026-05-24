(function () {
  'use strict';

  const filterState = { active: 'all', query: '' };

  const projects = [
    {
      id: 'orientatec',
      name: 'Orientatec',
      type: 'fullstack',
      category: 'web',
      complexity: 'medium',
      featured: true,
      description: 'Plataforma web fullstack de orientación vocacional con mapa interactivo, autenticación multi-rol, panel admin con métricas en tiempo real, sistema de FAQ dinámico y puntos de interés georreferenciados. Desplegada en producción con Apache en servidor Linux.',
      fullDescription: 'Orientatec es una plataforma web fullstack diseñada para facilitar la orientación vocacional universitaria. Cuenta con un mapa interactivo que muestra puntos de interés académicos georreferenciados, autenticación multi-rol (administradores, orientadores, estudiantes) con sesiones PHP seguras, un panel de administración con métricas en tiempo real y visualización de datos, sistema de preguntas frecuentes dinámicas con búsqueda, y una base de datos MySQL optimizada. Desplegada en un servidor Linux con Apache, demostrando capacidad de llevar un proyecto a producción real.',
      features: ['Mapa interactivo con puntos georreferenciados', 'Autenticación multi-rol con sesiones PHP', 'Panel administrativo con métricas y dashboard', 'Sistema de FAQ dinámico con búsqueda', 'Despliegue en producción con Apache'],
      year: '2025',
      techs: ['PHP', 'JavaScript', 'CSS', 'SQL', 'HTML'],
      files: 178,
      size: '12.5 MB',
      badge: 'fullstack',
      githubUrl: 'https://github.com/Jesus26032005/orientatec',
      demoUrl: null
    },
    {
      id: 'bitcafe',
      name: 'BitCafe',
      type: 'fullstack',
      category: 'fullstack',
      complexity: 'high',
      featured: true,
      description: 'Ecosistema POS completo para cafetería: backend REST API con FastAPI + SQLAlchemy + JWT, cliente desktop PyQt6 con patrón MVC, app Android nativa con Jetpack Compose + Material 3, e integración de pagos Mercado Pago.',
      fullDescription: 'BitCafe es un ecosistema POS completo multi-capa para la gestión de pedidos y pagos en cafetería. El backend REST API está construido con FastAPI y SQLAlchemy, con autenticación JWT con refresh tokens, CRUD completo de productos/pedidos/usuarios, e integración del gateway de pagos Mercado Pago, todo documentado con Swagger/OpenAPI. El cliente de escritorio usa PyQt6 con patrón MVC y ttkbootstrap. La app Android está desarrollada con Kotlin, Jetpack Compose y Material 3, con Hilt para inyección de dependencias, Room para almacenamiento local y WorkManager para tareas en segundo plano.',
      features: ['Backend REST API con FastAPI + SQLAlchemy + JWT (refresh tokens)', 'App Android nativa con Jetpack Compose + Material 3 + Hilt + Room', 'Cliente desktop PyQt6 con arquitectura MVC y ttkbootstrap', 'Integración de pagos con Mercado Pago', 'API documentada con Swagger/OpenAPI', 'CRUD completo de productos, pedidos y usuarios'],
      year: '2025',
      techs: ['FastAPI', 'PyQt6', 'SQLAlchemy', 'Jetpack Compose', 'Mercado Pago', 'Hilt', 'Room', 'Kotlin', 'Python'],
      files: 228,
      size: '15.8 MB',
      badge: 'fullstack',
      githubUrl: 'https://github.com/Jesus26032005/bitcafe',
      demoUrl: null
    },
    {
      id: 'practicas-unidas',
      name: 'PracticasUnidas',
      type: 'desktop',
      category: 'computer-vision',
      complexity: 'high',
      featured: true,
      description: 'Aplicación de escritorio con más de 30 operaciones de procesamiento de imágenes: filtros espaciales y frecuenciales (FFT/DCT), detección de bordes (Canny, Sobel), segmentación HSV, morfología matemática y ecualización de histograma. Arquitectura MVC con OpenCV.',
      fullDescription: 'PracticasUnidas es una aplicación de escritorio para procesamiento de imágenes que implementa más de 30 operaciones distintas con una arquitectura MVC limpia. El pipeline de visión utiliza OpenCV para filtros espaciales (Gaussiano, Mediana, Bilateral) y frecuenciales (FFT, DCT), detección de bordes con los operadores Canny, Sobel y Laplaciano, segmentación por color en espacio HSV, morfología matemática (erosión, dilatación, apertura, cierre), y ecualización de histograma. El cómputo numérico se apoya en NumPy y SciPy, la visualización en Matplotlib, y la interfaz moderna usa ttkbootstrap.',
      features: ['Más de 30 operaciones de procesamiento de imágenes', 'Filtros espaciales y frecuenciales (FFT/DCT)', 'Detección de bordes (Canny, Sobel, Laplaciano)', 'Segmentación por color HSV y umbralización', 'Morfología matemática y ecualización de histograma'],
      year: '2025',
      techs: ['OpenCV', 'NumPy', 'SciPy', 'Matplotlib', 'Pillow', 'ttkbootstrap'],
      files: 22,
      size: '6.1 MB',
      badge: 'computer-vision',
      githubUrl: 'https://github.com/Jesus26032005/practicas-unidas',
      demoUrl: null
    },
    {
      id: 'union-zalor',
      name: 'Union Zalor',
      type: 'web',
      category: 'web',
      complexity: 'medium',
      featured: false,
      description: 'Portal web para comunidad gaming con autenticación de usuarios, perfiles personalizables, secciones de música y juegos, calendario de eventos, sistema de reglas y normativas, y módulo de soporte FAQ completo.',
      fullDescription: 'Union Zalor es un portal web diseñado para una comunidad gaming, con un sistema completo de autenticación y perfiles de usuario personalizables. Incluye secciones de contenido multimedia como música y juegos, un calendario interactivo de eventos y horarios, un sistema de reglas y normativas comunitarias, y un módulo de preguntas frecuentes con funcionalidad de soporte. Desarrollado con PHP, JavaScript, HTML y CSS, con una base de datos MySQL para la persistencia de datos de usuario y contenido.',
      features: ['Autenticación y perfiles de usuario', 'Secciones de música y contenido multimedia', 'Calendario de eventos y horarios', 'Sistema de reglas y normativas', 'Módulo de FAQ y soporte'],
      year: '2025',
      techs: ['PHP', 'CSS', 'HTML', 'JavaScript'],
      files: 188,
      size: '135 KB',
      badge: 'web',
      githubUrl: 'https://github.com/Jesus26032005/union-zalor',
      demoUrl: null
    },
  ];

  const skillsData = [
    {
      name: 'IA & Machine Learning',
      icon: 'icon-python',
      lucide: 'lucide-brain-circuit',
      color: 'var(--indigo)',
      desc: 'KNN, Random Forest, Naive Bayes, K-Means, PCA, Perceptron, GA, ACO — scikit-learn, DEAP, gplearn',
      level: 82
    },
    {
      name: 'Computer Vision',
      icon: 'icon-opencv',
      lucide: 'lucide-scan-eye',
      color: 'var(--rose)',
      desc: 'OpenCV, FFT/DCT, filtrado espacial y frecuencial, morfología, segmentación HSV, detección de bordes',
      level: 85
    },
    {
      name: 'NLP & Text Processing',
      icon: 'icon-python',
      lucide: 'lucide-message-square',
      color: 'var(--purple)',
      desc: 'spaCy, NLTK, Word2Vec, TF-IDF, t-SNE, SVD, clasificación de sentimientos, stemming, lematización',
      level: 72
    },
    {
      name: 'Backend & APIs',
      icon: 'icon-fastapi',
      lucide: 'lucide-server',
      color: 'var(--emerald)',
      desc: 'FastAPI, SQLModel, JWT, Mercado Pago, MySQL/SQLite — APIs REST con auth y pagos',
      level: 82
    },
    {
      name: 'Fullstack Web',
      icon: 'icon-php',
      lucide: 'lucide-globe',
      color: 'var(--purple)',
      desc: 'PHP, JavaScript, HTML/CSS, SQL, Apache — MVC web, sesiones, paneles admin, despliegues',
      level: 80
    },
    {
      name: 'Algoritmos & Teoría',
      icon: 'icon-c',
      lucide: 'lucide-sigma',
      color: 'var(--cyan)',
      desc: 'C, DFA/NFA, autómatas, lenguajes formales, algoritmos bioinspirados, programación dinámica',
      level: 76
    },
    {
      name: 'Ingeniería de Software',
      icon: 'icon-java',
      lucide: 'lucide-git-branch',
      color: 'var(--orange)',
      desc: 'MVC, Agile, Git, multi-paradigma (Java, Prolog, Lisp), patrones de diseño, documentación técnica',
      level: 70
    },
    {
      name: 'Mobile (Android)',
      icon: 'icon-android',
      lucide: 'lucide-smartphone',
      color: 'var(--emerald)',
      desc: 'Kotlin, Jetpack Compose, Material 3, Hilt, Room, Gradle — apps nativas Android',
      level: 68
    }
  ];

  const certifications = [
    {
      platform: 'Sololearn',
      name: 'Introducción a Python',
      issuer: 'Sololearn',
      date: 'May 2026',
      credentialId: 'CC-5Y1KF0DL',
      url: 'https://www.sololearn.com/certificates/CC-5Y1KF0DL',
      techs: ['Python', 'Fundamentos'],
      color: 'var(--emerald)'
    },
    {
      platform: 'Kaggle',
      name: 'Python',
      issuer: 'Kaggle',
      date: 'May 2026',
      credentialId: 'zaddkieljesus/python',
      url: 'https://www.kaggle.com/learn/certification/zaddkieljesus/python',
      techs: ['Python', 'Data Science'],
      color: 'var(--cyan)'
    },
    {
      platform: 'Sololearn',
      name: 'Introducción a Java',
      issuer: 'Sololearn',
      date: 'May 2026',
      credentialId: 'CC-UNWIXCWO',
      url: 'https://www.sololearn.com/certificates/CC-UNWIXCWO',
      techs: ['Java', 'OOP'],
      color: 'var(--emerald)'
    },
    {
      platform: 'Codecademy',
      name: 'Intro to Large Language Models (LLMs) Course',
      issuer: 'Codecademy',
      date: 'May 2026',
      credentialId: '1fb2fea548cf4c5f937545d9872a0c07',
      url: 'https://www.codecademy.com/profiles/object2419351211/certificates/1fb2fea548cf4c5f937545d9872a0c07',
      techs: ['LLMs', 'IA Generativa', 'NLP'],
      color: 'var(--indigo)'
    },
    {
      platform: 'Udemy',
      name: 'Universidad JavaScript - De Cero a Experto JavaScript!',
      issuer: 'Udemy',
      date: 'Sep 2025',
      credentialId: 'UC-7081b50d-3a25-4a3d-b9ef-b46476cccb60',
      url: 'https://www.udemy.com/certificate/UC-7081b50d-3a25-4a3d-b9ef-b46476cccb60/',
      techs: ['JavaScript', 'Frontend', 'Web'],
      color: 'var(--orange)'
    },
    {
      platform: 'Udemy',
      name: 'Programación en C de Cero a Experto con Estructuras de Datos',
      issuer: 'Udemy',
      date: 'Sep 2025',
      credentialId: 'UC-0fe28139-64ba-4489-be7d-0ed4fc06f22c',
      url: 'https://www.udemy.com/certificate/UC-0fe28139-64ba-4489-be7d-0ed4fc06f22c/',
      techs: ['C', 'Estructuras de Datos', 'Algoritmos'],
      color: 'var(--orange)'
    },
    {
      platform: 'Udemy',
      name: 'Máster en SQL Server: Desde Cero a Nivel Profesional [2024]',
      issuer: 'Udemy',
      date: 'Feb 2025',
      credentialId: 'UC-7e7a001b-c1b1-4be9-bd74-2391ef731f31',
      url: 'https://www.udemy.com/certificate/UC-7e7a001b-c1b1-4be9-bd74-2391ef731f31/',
      techs: ['SQL Server', 'Bases de Datos', 'Backend'],
      color: 'var(--orange)'
    },
    {
      platform: 'Codecademy',
      name: 'Intro to Generative AI Course',
      issuer: 'Codecademy',
      date: 'May 2026',
      credentialId: '28ccb695c353465a8785a036ad32d3b9',
      url: 'https://www.codecademy.com/profiles/object2419351211/certificates/28ccb695c353465a8785a036ad32d3b9',
      techs: ['IA Generativa', 'Inteligencia Artificial'],
      color: 'var(--indigo)'
    },
    {
      platform: 'Codecademy',
      name: 'Learn JavaScript Course',
      issuer: 'Codecademy',
      date: 'May 2026',
      credentialId: '705dcb15de0da4dd9d9fc4f3274b430e',
      url: 'https://www.codecademy.com/profiles/object2419351211/certificates/705dcb15de0da4dd9d9fc4f3274b430e',
      techs: ['JavaScript', 'Web'],
      color: 'var(--indigo)'
    },
    {
      platform: 'Cisco',
      name: 'Python Essentials 1',
      issuer: 'Cisco Networking Academy',
      date: 'May 2026',
      credentialId: '57d73af3-3124-4eab-9b41-b273fd9dacc1',
      url: 'https://www.credly.com/badges/57d73af3-3124-4eab-9b41-b273fd9dacc1/linked_in_profile',
      techs: ['Python', 'Programación'],
      color: 'var(--cyan)'
    }
  ];

  const techCloudItems = [
    'Python', 'C', 'Java', 'Prolog', 'Lisp',
    'PHP', 'JavaScript', 'Kotlin', 'SQL', 'Shell',
    'FastAPI', 'OpenCV', 'PyQt6', 'Jetpack Compose',
    'scikit-learn', 'spaCy', 'NLTK', 'Gensim',
    'SQLAlchemy', 'NumPy', 'SciPy', 'Matplotlib',
    'NetworkX', 'DEAP', 'SymPy',
    'Mercado Pago', 'Hilt', 'Room'
  ];

  function initNavbar() {
    const toggle = document.getElementById('menuToggle');
    const links = document.getElementById('navLinks');
    if (!toggle || !links) return;

    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      toggle.classList.toggle('active');
      toggle.setAttribute('aria-expanded', isOpen);
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.navbar')) {
        links.classList.remove('open');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function trackActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + entry.target.id) {
              link.classList.add('active');
            }
          });
        }
      });
    }, { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' });

    sections.forEach(s => observer.observe(s));
  }

  function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  function typeWriter(element, text, speed = 40) {
    let i = 0;
    element.classList.add('typing-cursor');
    element.textContent = '';
    function tick() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(tick, speed);
      } else {
        element.classList.remove('typing-cursor');
      }
    }
    tick();
  }

  function renderTechCloud() {
    const container = document.getElementById('techCloud');
    if (!container) return;

    container.innerHTML = techCloudItems.map(tech => {
      const iconMap = {
        'Python': 'icon-python',
        'C': 'icon-c',
        'Java': 'icon-java',
        'Prolog': 'icon-terminal',
        'Lisp': 'icon-terminal',
        'PHP': 'icon-php',
        'JavaScript': 'icon-javascript',
        'Kotlin': 'icon-kotlin',
        'SQL': 'icon-sql',
        'Shell': 'icon-shell',
        'FastAPI': 'icon-fastapi',
        'OpenCV': 'icon-opencv',
        'PyQt6': 'icon-pyqt',
        'Jetpack Compose': 'icon-compose',
        'scikit-learn': 'icon-python',
        'spaCy': 'icon-python',
        'NLTK': 'icon-python',
        'Gensim': 'icon-python',
        'SQLAlchemy': 'icon-sql',
        'NumPy': 'icon-numpy',
        'SciPy': 'icon-scipy',
        'Matplotlib': 'icon-matplotlib',
        'NetworkX': 'icon-python',
        'DEAP': 'icon-python',
        'SymPy': 'icon-python',
        'Mercado Pago': 'icon-mercadopago',
        'Hilt': 'icon-android',
        'Room': 'icon-sql'
      };
      const icon = iconMap[tech] || 'icon-python';
      return `<span class="tech-tag">
        <svg class="tech-icon" width="16" height="16"><use href="assets/icons.svg#${icon}"/></svg>
        ${tech}
      </span>`;
    }).join('');
  }

  function renderSkills() {
    const grid = document.getElementById('skillsGrid');
    if (!grid) return;

    grid.innerHTML = skillsData.map((skill, i) => `
      <div class="skill-card" style="animation-delay:${i * 0.08}s; opacity:0; animation:fadeUp 0.5s ease forwards">
        <div class="skill-header">
          <div class="skill-icon">
            <i class="${skill.lucide}"></i>
          </div>
          <div class="skill-header-info">
            <h3 class="skill-name" style="color:${skill.color}">${skill.name}</h3>
            <span class="skill-level">${skill.level}%</span>
          </div>
        </div>
        <p class="skill-desc">${skill.desc}</p>
        <div class="skill-bar-track">
          <div class="skill-bar-fill" style="width:${skill.level}%"></div>
        </div>
      </div>
    `).join('');
  }

  const projectMeta = {
    'orientatec': { icon: 'lucide-map-pin', gradient: 'linear-gradient(135deg, #6366f1, #a78bfa)' },
    'bitcafe': { icon: 'lucide-mug', gradient: 'linear-gradient(135deg, #34d399, #22d3ee)' },
    'practicas-unidas': { icon: 'lucide-image', gradient: 'linear-gradient(135deg, #fb7185, #f472b6)' },
    'union-zalor': { icon: 'lucide-users', gradient: 'linear-gradient(135deg, #fb923c, #f97316)' }
  };

  function renderProjects(list) {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;

    grid.innerHTML = list.map((p, i) => {
      const badgeClass = `badge-${p.badge}`;
      const dotClass = `complexity-${p.complexity}`;
      const featuredClass = p.featured ? 'featured' : '';
      const meta = projectMeta[p.id] || { icon: 'lucide-folder', gradient: 'linear-gradient(135deg, #6366f1, #818cf8)' };
      return `
        <div class="project-card ${featuredClass}" data-project-id="${p.id}" style="animation-delay:${i * 0.04}s">
          <div class="project-banner" style="background:${meta.gradient}">
            <i class="project-banner-icon ${meta.icon}"></i>
          </div>
          <div class="project-card-inner">
            <span class="project-badge ${badgeClass}">${p.category}</span>
            <h3 class="project-name">${p.name}</h3>
            <p class="project-desc">${p.fullDescription || p.description}</p>
            ${p.features ? `
            <div class="project-features">
              <h4 class="project-features-title">Características</h4>
              <ul class="project-feature-list">
                ${p.features.map(f => `<li>${f}</li>`).join('')}
              </ul>
            </div>` : ''}
            <div class="project-techs">
              ${p.techs.map(t => `<span class="project-tech">${t}</span>`).join('')}
            </div>
            <div class="project-actions">
              ${p.demoUrl ? `<a href="${p.demoUrl}" target="_blank" rel="noopener" class="project-action-btn demo"><i class="lucide-external-link"></i> Demo</a>` : ''}
            </div>
            <div class="project-stats">
              <span class="project-stat"><i class="lucide-calendar"></i> ${p.year || '—'}</span>
              <span class="project-stat">
                <span class="complexity-dot ${dotClass}"></span>
                ${p.complexity === 'high' ? 'alta' : 'media'}
              </span>
              <span class="project-stat"><i class="lucide-file-text"></i> ${p.files} archivos</span>
              <span class="project-stat"><i class="lucide-hard-drive"></i> ${p.size}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  function filterProjects() {
    let filtered = projects;

    if (filterState.active !== 'all') {
      filtered = filtered.filter(p => p.category === filterState.active);
    }

    if (filterState.query.trim()) {
      const q = filterState.query.toLowerCase().trim();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.techs.some(t => t.toLowerCase().includes(q))
      );
    }

    renderProjects(filtered);
    reloadIcons();
  }

  function initFilters() {
    const searchInput = document.getElementById('searchInput');
    const filterBtns = document.querySelectorAll('.filter-btn');

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        filterState.query = e.target.value;
        filterProjects();
      });
    }

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterState.active = btn.dataset.filter;
        filterProjects();
      });
    });
  }

  function renderCertifications() {
    const grid = document.getElementById('certsGrid');
    if (!grid) return;

    const platformIcons = {
      'Sololearn': 'lucide-graduation-cap',
      'Kaggle': 'lucide-bar-chart-3',
      'Codecademy': 'lucide-book-open',
      'Udemy': 'lucide-play-circle',
      'Cisco': 'lucide-network'
    };

    grid.innerHTML = certifications.map(c => {
      const platformColors = {
        'Sololearn': 'var(--emerald)',
        'Kaggle': 'var(--cyan)',
        'Codecademy': 'var(--indigo)',
        'Udemy': 'var(--orange)',
        'Cisco': 'var(--cyan)'
      };
      const pColor = platformColors[c.platform] || 'var(--text-secondary)';
      const icon = platformIcons[c.platform] || 'lucide-award';
      const idHtml = c.credentialId
        ? `<span class="cert-id">ID: ${c.credentialId}</span>`
        : `<span class="cert-id placeholder">ID pendiente</span>`;

      return `
        <div class="cert-card">
          <div class="cert-top">
            <span class="cert-platform" style="color:${pColor}"><i class="${icon}" style="font-size:0.9rem"></i> ${c.platform}</span>
            ${c.url !== '#'
              ? `<a href="${c.url}" target="_blank" rel="noopener" class="cert-link" title="Ver credencial"><i class="lucide-external-link"></i></a>`
              : `<span class="cert-link disabled" title="URL pendiente"><i class="lucide-lock"></i></span>`
            }
          </div>
          <h3 class="cert-name">${c.name}</h3>
          <span class="cert-issuer">${c.issuer}</span>
          <div class="cert-meta">
            <span class="cert-date"><i class="lucide-calendar"></i> ${c.date}</span>
            ${idHtml}
          </div>
          <div class="cert-techs">
            ${c.techs.map(t => `<span class="cert-tech">${t}</span>`).join('')}
          </div>
        </div>
      `;
    }).join('');
  }

  const learningItems = [
    { name: 'LLMs & IA Generativa', icon: 'lucide-brain-circuit' },
    { name: 'Computer Vision avanzada', icon: 'lucide-scan-eye' },
    { name: 'Arquitectura Backend', icon: 'lucide-server' },
    { name: 'Italiano', icon: 'lucide-languages' },
    { name: 'Sistemas Inteligentes', icon: 'lucide-cpu' },
    { name: 'Linux & Automatización', icon: 'lucide-terminal' },
    { name: 'Machine Learning Ops', icon: 'lucide-git-branch' }
  ];

  function renderLearning() {
    const grid = document.getElementById('learningGrid');
    if (!grid) return;
    grid.innerHTML = learningItems.map(item => `
      <span class="learning-pill">
        <i class="${item.icon}"></i> ${item.name}
      </span>
    `).join('');
  }

  const timelineData = [
    { date: '2024', title: 'Fundamentos de programación', desc: 'C, Python, algoritmos clásicos y estructuras de datos. Base sólida en lógica computacional.' },
    { date: '2024', title: 'Desarrollo web fullstack', desc: 'PHP, JavaScript, MySQL, Apache. Primer despliegue en producción con Orientatec.' },
    { date: '2025', title: 'Computer Vision', desc: 'OpenCV, FFT/DCT, filtrado espacial, segmentación. Más de 30 operaciones implementadas.' },
    { date: '2025', title: 'Machine Learning', desc: 'scikit-learn, KNN, Random Forest, Naive Bayes, PCA, clustering. Algoritmos bioinspirados con DEAP.' },
    { date: '2025', title: 'Arquitectura de software', desc: 'FastAPI, MVC, REST APIs, JWT, inyección de dependencias. Sistemas multi-capa con BitCafe.' },
    { date: '2025', title: 'Desarrollo Android', desc: 'Kotlin, Jetpack Compose, Material 3, Hilt, Room. Apps nativas con arquitectura moderna.' },
    { date: '2026', title: 'NLP y sistemas de lenguaje', desc: 'spaCy, NLTK, Word2Vec, TF-IDF. Clasificación de sentimientos y procesamiento textual.' },
    { date: '2026', title: 'IA Generativa y LLMs', desc: 'Prompt engineering, fine-tuning, generative AI. Integración de modelos de lenguaje en aplicaciones.' }
  ];

  function renderTimeline() {
    const container = document.getElementById('timelineContainer');
    if (!container) return;
    container.innerHTML = timelineData.map((item, i) => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">${item.date}</div>
        <div class="timeline-title">${item.title}</div>
        <div class="timeline-desc">${item.desc}</div>
      </div>
    `).join('');

    setTimeout(() => {
      container.querySelectorAll('.timeline-item').forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), i * 120);
      });
    }, 200);
  }

  function initTerminal() {
    const input = document.getElementById('terminalInput');
    const body = document.getElementById('terminalBody');
    if (!input || !body) return;

    const commands = {
      whoami: { text: 'Zaddkiel Martinez · Ingeniero en IA · ESCOM IPN', cls: 'highlight' },
      skills: { text: 'IA & ML · Computer Vision · NLP · Backend · Fullstack · Algoritmos · Software Eng. · Mobile', cls: 'skills' },
      tech: { text: 'Python · C · Java · Kotlin · FastAPI · OpenCV · scikit-learn · spaCy · NLTK · SQL · PHP · JavaScript', cls: 'tech' },
      projects: { text: 'Orientatec · BitCafe · PracticasUnidas · Union Zalor · BitCafe API', cls: 'projects' },
      certifications: { text: '10 certificaciones: Sololearn · Kaggle · Codecademy · Udemy · Cisco', cls: 'certs' },
      contact: { text: 'Email: zaddkielma@gmail.com · GitHub: @Jesus26032005 · LinkedIn: Zaddkiel Martinez', cls: 'highlight' },
      education: { text: 'Ingeniería en Inteligencia Artificial · ESCOM IPN · México', cls: 'highlight' },
      languages: { text: 'Español (Nativo) · Inglés (B1-B2) · Italiano (Aprendiendo)', cls: 'tech' },
      help: { text: 'whoami · skills · tech · projects · certifications · contact · education · languages · clear · help', cls: 'certs' },
      clear: { text: '', cls: '' }
    };

    function addLine(html, isCmd = false) {
      const line = document.createElement('div');
      line.className = 'terminal-line';
      if (isCmd) {
        line.innerHTML = `<span class="terminal-prompt">jmartinez@portfolio:~$</span> <span class="terminal-output">${html}</span>`;
      } else {
        line.innerHTML = html;
      }
      body.appendChild(line);
      body.scrollTop = body.scrollHeight;
    }

    function processCmd(val) {
      const cmd = val.trim().toLowerCase();
      addLine(cmd, true);
      if (cmd === 'clear') {
        body.innerHTML = '';
        return;
      }
      const result = commands[cmd];
      if (result) {
        if (result.text) {
          addLine(`<span class="terminal-output ${result.cls}">${result.text}</span>`);
        }
      } else {
        addLine(`<span class="terminal-output" style="color:#ec4899">comando no encontrado: ${cmd}. Escribe <span class="terminal-cmd">help</span></span>`);
      }
    }

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        processCmd(input.value);
        input.value = '';
      }
    });

    document.querySelector('.terminal')?.addEventListener('click', () => input.focus());
  }

  function initCursorGlow() {
    const glow = document.getElementById('cursor-glow');
    if (!glow) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = 'ontouchstart' in window;
    if (prefersReducedMotion || isTouchDevice) { glow.style.display = 'none'; return; }

    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;
    let rafId;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function tick() {
      currentX += (mouseX - currentX) * 0.05;
      currentY += (mouseY - currentY) * 0.05;
      glow.style.transform = `translate(${currentX - 150}px, ${currentY - 150}px)`;
      rafId = requestAnimationFrame(tick);
    }
    tick();

    document.addEventListener('visibilitychange', () => {
      if (document.hidden && rafId) cancelAnimationFrame(rafId);
    });
  }

  function observeSections() {
    const sections = document.querySelectorAll('.section');
    const options = {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, options);

    sections.forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(24px)';
      section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(section);
    });
  }

  let openModal;
  let lastFocusedEl = null;

  function initModal() {
    const overlay = document.getElementById('modalOverlay');
    const closeBtn = document.getElementById('modalClose');

    function getProjectById(id) {
      return projects.find(p => p.id === id);
    }

    openModal = function(projectId) {
      const p = getProjectById(projectId);
      if (!p) return;

      const meta = projectMeta[p.id] || { icon: 'lucide-folder', gradient: 'linear-gradient(135deg, #6366f1, #818cf8)' };
      const badgeClass = `badge-${p.badge}`;
      const isHigh = p.complexity === 'high';

      document.getElementById('modalBanner').style.background = meta.gradient;
      document.getElementById('modalBannerIcon').className = `${meta.icon} modal-banner-icon`;
      document.getElementById('modalBadge').className = `modal-badge ${badgeClass}`;
      document.getElementById('modalBadge').textContent = p.category;
      document.getElementById('modalTitle').textContent = p.name;
      document.getElementById('modalDesc').textContent = p.fullDescription || p.description;

      const featureList = document.getElementById('modalFeatureList');
      featureList.innerHTML = (p.features || []).map(f => `<li>${f}</li>`).join('');

      const techList = document.getElementById('modalTechList');
      techList.innerHTML = p.techs.map(t => `<span class="modal-tech-item">${t}</span>`).join('');

      const metaEl = document.getElementById('modalMeta');
      metaEl.innerHTML = `
        <span class="modal-meta-item"><i class="lucide-calendar"></i> ${p.year || '—'}</span>
        <span class="modal-meta-item"><span class="complexity-dot ${isHigh ? 'complexity-high' : 'complexity-medium'}"></span> ${isHigh ? 'Alta complejidad' : 'Complejidad media'}</span>
        <span class="modal-meta-item"><i class="lucide-file-text"></i> ${p.files} archivos</span>
        <span class="modal-meta-item"><i class="lucide-hard-drive"></i> ${p.size}</span>
      `;

      const actionsEl = document.getElementById('modalActions');
      actionsEl.innerHTML = `
        <button class="modal-action-btn close-btn" id="modalCloseAction">
          Cerrar
        </button>
        ${p.demoUrl ? `<a href="${p.demoUrl}" target="_blank" rel="noopener" class="modal-action-btn demo">
          <i class="lucide-external-link"></i> Ver demo
        </a>` : ''}
      `;

      document.getElementById('modalCloseAction').addEventListener('click', closeModal);

      reloadIcons();
      overlay.classList.add('open');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      setTimeout(() => document.getElementById('modalClose').focus(), 50);
    }

    function closeModal() {
      overlay.classList.remove('open');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (lastFocusedEl) { lastFocusedEl.focus(); lastFocusedEl = null; }
    }

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
    });
  }

  function reloadIcons() {
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
      document.querySelectorAll('i[class*="lucide-"]').forEach(el => {
        const m = el.className.match(/lucide-([a-z0-9-]+)/);
        if (m && !el.hasAttribute('data-lucide')) el.setAttribute('data-lucide', m[1]);
      });
      lucide.createIcons();
    }
  }

  function init() {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    initNavbar();
    initNavbarScroll();
    initBackToTop();
    trackActiveSection();
    initCursorGlow();
    renderTechCloud();
    renderSkills();
    renderCertifications();
    renderLearning();
    renderTimeline();
    initTerminal();
    renderProjects(projects);
    reloadIcons();
    initFilters();
    initModal();
    observeSections();

    

    setTimeout(() => {
      const subEl = document.querySelector('.hero-subtitle');
      if (subEl) {
        const fullText = subEl.innerText || subEl.textContent.replace(/\s+/g, ' ').trim();
        subEl.textContent = '';
        subEl.style.opacity = '1';
        typeWriter(subEl, fullText, 18);
      }
    }, 600);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
