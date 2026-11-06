import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const publicCvDir = path.join(repoRoot, 'public', 'cv');
const photoPath = path.join(repoRoot, 'public', 'image.png');

const CHROME_CANDIDATES = [
  process.env.CHROME_BIN,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
  '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
].filter(Boolean);

function findChrome() {
  for (const bin of CHROME_CANDIDATES) {
    if (fs.existsSync(bin)) return bin;
  }
  throw new Error('Could not find Google Chrome binary. Set CHROME_BIN to your Chromium/Chrome executable.');
}

const photoBase64 = `data:image/png;base64,${fs.readFileSync(photoPath).toString('base64')}`;

const cvData = {
  fr: {
    htmlLang: 'fr',
    filename: 'GuinonAlvaro_CV_fr.pdf',
    showPhoto: true,
    name: 'Álvaro M. Guiñón',
    role: 'Développeur web · Java / Spring Boot / Angular',
    contactLine1: [
      { text: '40370 Rion-des-Landes, France' },
      { text: '(+33) 6 51 64 34 94', href: 'tel:+33651643494' },
      { text: 'alvaro@guinon.dev', href: 'mailto:alvaro@guinon.dev' },
      { text: 'Permis B' },
    ],
    contactLine2: [
      { label: 'Web', text: 'guinon.dev/fr', href: 'https://guinon.dev/fr/' },
      { label: 'GitHub', text: 'github.com/alguimo', href: 'https://github.com/alguimo' },
      { label: 'LinkedIn', text: 'linkedin.com/in/alvaroguinon', href: 'https://www.linkedin.com/in/alvaroguinon/?locale=fr-FR' },
    ],
    summary:
      'Après sept ans dans le produit digital et les médias chez GAMETV (Movistar eSports), j’ai obtenu un BTS Développeur d’Applications Web en parallèle d’un temps plein et je poursuis une Licence d’Ingénierie Informatique à l’UOC. Je cherche à rejoindre une équipe de développement autour de Java, Spring Boot et Angular.',
    sections: {
      experience: 'Expérience professionnelle',
      education: 'Formation',
      projects: 'Projets sélectionnés',
      skills: 'Compétences et langues',
    },
    experience: [
      {
        role: 'Consultant technologique indépendant',
        company: 'GAMETV · Movistar eSports',
        location: 'Télétravail',
        period: '05/2025 – 09/2025',
        bullets: [
          'Migration technique de Movistar eSports vers WordPress avec maintien de la continuité du site.',
          'Audit de maintenabilité du code et mise en place d’une CMP (RGPD) et des outils de mesure d’audience.',
        ],
      },
      {
        role: 'Développeur Full-Stack · stage',
        company: 'Integra Consultores',
        location: 'Castellón',
        period: '03/2025 – 05/2025',
        bullets: [
          'Développement d’applications web avec Angular côté frontend et Java / Spring Boot côté backend.',
          'Création d’API REST avec Spring Data JPA / Hibernate, DTO, mappers MapStruct et couches découplées.',
        ],
      },
      {
        role: 'Head of Digital Product',
        company: 'GAMETV · Movistar eSports',
        location: 'Alcobendas',
        period: '01/2022 – 03/2025',
        bullets: [
          'Coordination des équipes de développement et des prestataires techniques ; direction de l’équipe éditoriale.',
          'SEO technique et rapports Looker Studio (GA4, Metricool) pour le suivi des KPIs et le reporting client Movistar.',
        ],
      },
      {
        role: 'Rédacteur et directeur de rédaction',
        company: 'GAMETV · Movistar eSports',
        location: 'Alcobendas',
        period: '07/2018 – 01/2022',
        bullets: [
          'Promotion interne comme directeur de rédaction en 2020 ; coordination des flux de publication digitale.',
        ],
      },
    ],
    education: [
      {
        degree: 'Licence d’Ingénierie Informatique',
        institution: 'Universitat Oberta de Catalunya (UOC)',
        period: '09/2025 – aujourd’hui',
        detail: 'En cours · 132/240 ECTS',
      },
      {
        degree: 'BTS Développeur d’Applications Web (DAW · Bac+2)',
        institution: 'ILERNA',
        period: '09/2022 – 06/2025',
        detail: 'En parallèle d’un temps plein',
      },
      {
        degree: 'Licence en Journalisme',
        institution: 'Université de Valence',
        period: '09/2014 – 06/2018',
        detail: '',
      },
    ],
    complementaryLabel: 'Certifications complémentaires',
    complementaryValue: 'Certificat Google Data Analytics (SQL, R, visualisation) · Formation SEO technique (Aula SEO).',
    projects: [
      {
        name: 'ChooseTheName',
        url: 'https://github.com/alguimo/choosethename',
        stack: 'Java 17 · Spring Boot 3 · Angular 17 · PostgreSQL · Docker',
        description:
          'Application collaborative de vote par tours : API REST depuis un contrat OpenAPI, migrations Flyway, JWT et tests unitaires, d’intégration et RestAssured sur GitHub Actions.',
      },
      {
        name: 'Convertisseur WEDA',
        url: 'https://github.com/alguimo/xml-parser',
        stack: 'Python · CustomTkinter · lxml · ReportLab · Inno Setup',
        description:
          'Utilitaire Windows convertissant en mémoire les exports XML du logiciel médical français WEDA en PDF A4 sur deux colonnes, avec surveillance de dossier et mise à jour SHA-256.',
      },
      {
        name: 'Cooperativa',
        url: 'https://github.com/alguimo/cooperativa',
        stack: 'Node.js · Express · Resend · Railway · DNS',
        description:
          'Maintenance d’un site existant en production : migration des e-mails vers Resend, filtre anti-spam (honeypot et langue), catalogue avec loupe et déploiement Railway.',
      },
    ],
    skills: [
      {
        label: 'Stack principal',
        value: 'Java 17, Spring Boot 3, JPA / Hibernate, SQL (PostgreSQL, MariaDB), Angular 17, TypeScript, HTML/CSS, Astro, OpenAPI, Flyway, MapStruct, Docker, Git, GitHub Actions.',
      },
      {
        label: 'Données et analyse',
        value: 'Python (pandas, NumPy, SciPy, lxml, BeautifulSoup4, ReportLab), bases de R et de statistique.',
      },
      {
        label: 'Produit et web',
        value: 'SEO technique, Google Analytics (GA4), Looker Studio, CMP / RGPD, WordPress, Node.js, PHP 8.',
      },
      {
        label: 'Langues',
        value: 'Espagnol (langue maternelle) · Catalan (C1) · Anglais (B2 · Cambridge First) · Français (B2 · usage quotidien).',
      },
    ],
  },

  es: {
    htmlLang: 'es',
    filename: 'GuinonAlvaro_CV_es.pdf',
    showPhoto: true,
    name: 'Álvaro M. Guiñón',
    role: 'Desarrollador web · Java / Spring Boot / Angular',
    contactLine1: [
      { text: '40370 Rion-des-Landes, Francia' },
      { text: '(+34) 620 95 63 84', href: 'tel:+34620956384' },
      { text: '(+33) 651 643 494', href: 'tel:+33651643494' },
      { text: 'alvaro@guinon.dev', href: 'mailto:alvaro@guinon.dev' },
    ],
    contactLine2: [
      { label: 'Web', text: 'guinon.dev/es', href: 'https://guinon.dev/es/' },
      { label: 'GitHub', text: 'github.com/alguimo', href: 'https://github.com/alguimo' },
      { label: 'LinkedIn', text: 'linkedin.com/in/alvaroguinon', href: 'https://www.linkedin.com/in/alvaroguinon/?locale=es-ES' },
      { text: 'Carnet B' },
    ],
    summary:
      'Desarrollador web formado en Java, Spring Boot y Angular tras siete años trabajando en producto digital, analítica y coordinación de equipos en GAMETV (Movistar eSports). Completé el CFGS de Desarrollo de Aplicaciones Web (DAW) a jornada completa y curso Ingeniería Informática en la UOC. Busco incorporarme a un equipo en España, Francia o remoto europeo.',
    sections: {
      experience: 'Experiencia profesional',
      education: 'Formación',
      projects: 'Proyectos seleccionados',
      skills: 'Tecnologías e idiomas',
    },
    experience: [
      {
        role: 'Consultor tecnológico independiente',
        company: 'GAMETV · Movistar eSports',
        location: 'Remoto',
        period: '05/2025 – 09/2025',
        bullets: [
          'Migración técnica de Movistar eSports a WordPress manteniendo la continuidad operativa del portal.',
          'Auditoría de mantenibilidad de código e implementación de una CMP (RGPD) y medición de audiencia.',
        ],
      },
      {
        role: 'Desarrollador Full-Stack · prácticas',
        company: 'Integra Consultores',
        location: 'Castellón',
        period: '03/2025 – 05/2025',
        bullets: [
          'Desarrollo de aplicaciones web con Angular en frontend y Java / Spring Boot en backend.',
          'Creación de APIs REST con Spring Data JPA / Hibernate, DTOs, mappers con MapStruct y capas desacopladas.',
        ],
      },
      {
        role: 'Head of Digital Product',
        company: 'GAMETV · Movistar eSports',
        location: 'Alcobendas',
        period: '01/2022 – 03/2025',
        bullets: [
          'Coordinación de equipos de desarrollo y proveedores técnicos; dirección del equipo editorial.',
          'SEO técnico e informes en Looker Studio (GA4, Metricool) para seguimiento de KPIs y reporting a Movistar.',
        ],
      },
      {
        role: 'Redactor y director de redacción',
        company: 'GAMETV · Movistar eSports',
        location: 'Alcobendas',
        period: '07/2018 – 01/2022',
        bullets: [
          'Promoción interna a director de redacción en 2020; coordinación de flujos de publicación digital.',
        ],
      },
    ],
    education: [
      {
        degree: 'Grado en Ingeniería Informática',
        institution: 'Universitat Oberta de Catalunya (UOC)',
        period: '09/2025 – actualidad',
        detail: 'En curso · 132/240 ECTS',
      },
      {
        degree: 'CFGS Desarrollo de Aplicaciones Web (DAW)',
        institution: 'ILERNA',
        period: '09/2022 – 06/2025',
        detail: 'Compaginado con jornada completa',
      },
      {
        degree: 'Grado en Periodismo',
        institution: 'Universidad de Valencia',
        period: '09/2014 – 06/2018',
        detail: '',
      },
    ],
    complementaryLabel: 'Certificaciones complementarias',
    complementaryValue: 'Certificado Google Data Analytics (SQL, R, visualización) · Formación SEO técnico (Aula SEO).',
    projects: [
      {
        name: 'ChooseTheName',
        url: 'https://github.com/alguimo/choosethename',
        stack: 'Java 17 · Spring Boot 3 · Angular 17 · PostgreSQL · Docker',
        description:
          'Aplicación colaborativa de votación por rondas: API REST desde contrato OpenAPI, migraciones Flyway, JWT y tests unitarios, de integración y RestAssured en GitHub Actions.',
      },
      {
        name: 'Convertisseur WEDA',
        url: 'https://github.com/alguimo/xml-parser',
        stack: 'Python · CustomTkinter · lxml · ReportLab · Inno Setup',
        description:
          'Utilidad para Windows que convierte en memoria exportaciones XML del software médico WEDA en PDF A4 a dos columnas, con carpeta vigilada y actualización verificada por SHA-256.',
      },
      {
        name: 'Cooperativa',
        url: 'https://github.com/alguimo/cooperativa',
        stack: 'Node.js · Express · Resend · Railway · DNS',
        description:
          'Mantenimiento de una web en producción: migración de correo a Resend, filtrado anti-spam (honeypot e idioma), catálogo con lupa y despliegue en Railway.',
      },
    ],
    skills: [
      {
        label: 'Stack principal',
        value: 'Java 17, Spring Boot 3, JPA / Hibernate, SQL (PostgreSQL, MariaDB), Angular 17, TypeScript, HTML/CSS, Astro, OpenAPI, Flyway, MapStruct, Docker, Git, GitHub Actions.',
      },
      {
        label: 'Datos y análisis',
        value: 'Python (pandas, NumPy, SciPy, lxml, BeautifulSoup4, ReportLab), bases de R y estadística.',
      },
      {
        label: 'Producto y web',
        value: 'SEO técnico, Google Analytics (GA4), Looker Studio, CMP / RGPD, WordPress, Node.js, PHP 8.',
      },
      {
        label: 'Idiomas',
        value: 'Español (nativo) · Catalán (C1) · Inglés (B2 · Cambridge First) · Francés (B2).',
      },
    ],
  },

  en: {
    htmlLang: 'en',
    filename: 'GuinonAlvaro_CV_en.pdf',
    showPhoto: false,
    name: 'Álvaro M. Guiñón',
    role: 'Web developer · Java / Spring Boot / Angular',
    contactLine1: [
      { text: '40370 Rion-des-Landes, France' },
      { text: '(+33) 651 643 494', href: 'tel:+33651643494' },
      { text: 'alvaro@guinon.dev', href: 'mailto:alvaro@guinon.dev' },
    ],
    contactLine2: [
      { label: 'Web', text: 'guinon.dev/en', href: 'https://guinon.dev/en/' },
      { label: 'GitHub', text: 'github.com/alguimo', href: 'https://github.com/alguimo' },
      { label: 'LinkedIn', text: 'linkedin.com/in/alvaroguinon', href: 'https://www.linkedin.com/in/alvaroguinon/?locale=en-US' },
    ],
    summary:
      'Web developer trained in Java, Spring Boot, and Angular after seven years working in digital product, analytics, and team coordination at GAMETV (Movistar eSports). I completed a Higher National Diploma in Web Application Development (DAW) while working full-time and am studying Computer Engineering at UOC. Open to roles in France, Spain, or European remote.',
    sections: {
      experience: 'Professional experience',
      education: 'Education',
      projects: 'Selected projects',
      skills: 'Skills and languages',
    },
    experience: [
      {
        role: 'Independent technology consultant',
        company: 'GAMETV · Movistar eSports',
        location: 'Remote',
        period: '05/2025 – 09/2025',
        bullets: [
          'Supervised and executed the technical migration of Movistar eSports to WordPress while maintaining site continuity.',
          'Audited code maintainability and implemented a Consent Management Platform (CMP / GDPR) and audience analytics.',
        ],
      },
      {
        role: 'Full-Stack Developer · internship',
        company: 'Integra Consultores',
        location: 'Castellón',
        period: '03/2025 – 05/2025',
        bullets: [
          'Built web applications with Angular on the frontend and Java / Spring Boot on the backend.',
          'Created REST APIs with Spring Data JPA / Hibernate, DTOs, MapStruct mappers, and decoupled service layers.',
        ],
      },
      {
        role: 'Head of Digital Product',
        company: 'GAMETV · Movistar eSports',
        location: 'Alcobendas',
        period: '01/2022 – 03/2025',
        bullets: [
          'Coordinated external development teams and technical vendors; led the digital roadmap and editorial team.',
          'Led technical SEO and built Looker Studio dashboards (GA4, Metricool) for KPI tracking and Movistar reporting.',
        ],
      },
      {
        role: 'Writer and managing editor',
        company: 'GAMETV · Movistar eSports',
        location: 'Alcobendas',
        period: '07/2018 – 01/2022',
        bullets: [
          'Promoted internally to managing editor in 2020; coordinated digital publishing workflows and quality standards.',
        ],
      },
    ],
    education: [
      {
        degree: 'B.Sc. in Computer Engineering',
        institution: 'Universitat Oberta de Catalunya (UOC)',
        period: '09/2025 – present',
        detail: 'In progress · 132/240 ECTS',
      },
      {
        degree: 'Higher National Diploma in Web Application Development (DAW)',
        institution: 'ILERNA',
        period: '09/2022 – 06/2025',
        detail: 'Completed while working full-time',
      },
      {
        degree: 'B.A. in Journalism',
        institution: 'University of Valencia',
        period: '09/2014 – 06/2018',
        detail: '',
      },
    ],
    complementaryLabel: 'Certifications and additional training',
    complementaryValue: 'Google Data Analytics Certificate (SQL, R, visualization) · Technical SEO training (Aula SEO).',
    projects: [
      {
        name: 'ChooseTheName',
        url: 'https://github.com/alguimo/choosethename',
        stack: 'Java 17 · Spring Boot 3 · Angular 17 · PostgreSQL · Docker',
        description:
          'Collaborative group voting app: Spring Boot REST API from an OpenAPI contract, Flyway migrations, JWT, and unit, integration, and RestAssured tests on GitHub Actions.',
      },
      {
        name: 'Convertisseur WEDA',
        url: 'https://github.com/alguimo/xml-parser',
        stack: 'Python · CustomTkinter · lxml · ReportLab · Inno Setup',
        description:
          'Windows utility converting French WEDA medical XML exports in memory into two-column A4 PDFs, with watched-folder tray mode and SHA-256 verified updates.',
      },
      {
        name: 'Cooperativa',
        url: 'https://github.com/alguimo/cooperativa',
        stack: 'Node.js · Express · Resend · Railway · DNS',
        description:
          'Production website maintenance: migrated email delivery to Resend, added honeypot and language spam filtering, built a catalog with label zoom, and deployed on Railway.',
      },
    ],
    skills: [
      {
        label: 'Main stack',
        value: 'Java 17, Spring Boot 3, JPA / Hibernate, SQL (PostgreSQL, MariaDB), Angular 17, TypeScript, HTML/CSS, Astro, OpenAPI, Flyway, MapStruct, Docker, Git, GitHub Actions.',
      },
      {
        label: 'Data and analysis',
        value: 'Python (pandas, NumPy, SciPy, lxml, BeautifulSoup4, ReportLab), foundations of R and statistics.',
      },
      {
        label: 'Product and web',
        value: 'Technical SEO, Google Analytics (GA4), Looker Studio, CMP / GDPR, WordPress, Node.js, PHP 8.',
      },
      {
        label: 'Languages',
        value: 'Spanish (native) · Catalan (C1) · English (B2 · Cambridge First) · French (B2).',
      },
    ],
  },
};

function escapeHtml(str) {
  return str
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function renderContactItems(items) {
  return items
    .map((item) => {
      const prefix = item.label ? `<span class="meta-label">${escapeHtml(item.label)}:</span> ` : '';
      const content = item.href
        ? `<a href="${escapeHtml(item.href)}">${escapeHtml(item.text)}</a>`
        : escapeHtml(item.text);
      return `<span class="contact-item">${prefix}${content}</span>`;
    })
    .join('<span class="sep">·</span>');
}

// 1-Column ATS-friendly layout (ES, EN, FR)
function renderAtsHtml(cv) {
  return `<!doctype html>
<html lang="${cv.htmlLang}">
<head>
  <meta charset="utf-8" />
  <title>${escapeHtml(cv.name)} — CV</title>
  <style>
    :root {
      --ink: #20252b;
      --muted: #586169;
      --line: #cdd2d5;
      --accent: #174e70;
      --sans: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Segoe UI", Arial, sans-serif;
    }

    @page {
      size: A4;
      margin: 14mm 15.5mm 13.5mm 15.5mm;
    }

    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    html, body {
      margin: 0;
      padding: 0;
      background: #ffffff;
      color: var(--ink);
      font-family: var(--sans);
      font-size: 9.25pt;
      line-height: 1.4;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    .header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 18px;
      padding-bottom: 9px;
      border-bottom: 1.5px solid var(--ink);
    }

    .header-main {
      min-width: 0;
      flex: 1;
    }

    h1 {
      margin: 0;
      font-size: 22pt;
      font-weight: 650;
      letter-spacing: -0.03em;
      line-height: 1.02;
      color: var(--ink);
    }

    .role {
      margin: 3px 0 6px;
      font-size: 10.5pt;
      font-weight: 600;
      color: var(--accent);
    }

    .contact-line {
      font-size: 8.5pt;
      color: var(--muted);
      line-height: 1.45;
    }

    .contact-item {
      white-space: nowrap;
    }

    .contact-line a {
      color: var(--ink);
    }

    .contact-links a {
      color: var(--accent);
      text-decoration: underline;
      text-decoration-color: #a9becb;
      text-underline-offset: 2px;
    }

    .meta-label {
      color: var(--muted);
      font-weight: 600;
    }

    .sep {
      margin: 0 6px;
      color: #9aa2a9;
    }

    .photo {
      width: 68px;
      height: 68px;
      object-fit: cover;
      filter: grayscale(100%);
      flex-shrink: 0;
    }

    .summary {
      margin: 9px 0 0;
      font-size: 9.2pt;
      line-height: 1.42;
    }

    section {
      margin-top: 11px;
    }

    h2 {
      margin: 0 0 6px;
      padding-bottom: 2.5px;
      font-size: 10.3pt;
      font-weight: 650;
      letter-spacing: -0.02em;
      color: var(--accent);
      border-bottom: 1px solid var(--line);
    }

    .entry {
      margin-bottom: 6.5px;
    }

    .entry:last-child {
      margin-bottom: 0;
    }

    .entry-head {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 12px;
    }

    .entry-title {
      font-size: 9.45pt;
      font-weight: 700;
      color: var(--ink);
    }

    .entry-org {
      font-weight: 600;
      color: var(--accent);
    }

    .entry-meta {
      font-size: 8.35pt;
      color: var(--muted);
      white-space: nowrap;
      flex-shrink: 0;
    }

    ul {
      margin: 2.5px 0 0;
      padding-left: 15px;
    }

    li {
      margin-bottom: 1.5px;
    }

    li:last-child {
      margin-bottom: 0;
    }

    .edu-row {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 3.5px;
    }

    .edu-detail {
      color: var(--muted);
      font-size: 8.65pt;
    }

    .cert-line {
      margin: 5.5px 0 0;
      padding-top: 4.5px;
      border-top: 1px solid #e3e6e8;
      font-size: 8.75pt;
      color: var(--ink);
    }

    .cert-label {
      font-weight: 700;
      color: var(--ink);
    }

    .project {
      margin-bottom: 6px;
    }

    .project:last-child {
      margin-bottom: 0;
    }

    .project-title a {
      font-size: 9.35pt;
      font-weight: 700;
      color: var(--ink);
      text-decoration: underline;
      text-decoration-color: #a9becb;
      text-underline-offset: 2px;
    }

    .project-stack {
      font-size: 8.2pt;
      color: var(--accent);
      font-weight: 500;
    }

    .project-desc {
      margin: 1.5px 0 0;
      font-size: 8.95pt;
      line-height: 1.37;
    }

    .skills-list {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .skills-list li {
      margin-bottom: 2.5px;
      font-size: 8.95pt;
      line-height: 1.37;
    }

    .skill-label {
      font-weight: 700;
      color: var(--ink);
    }
  </style>
</head>
<body>
  <header class="header">
    <div class="header-main">
      <h1>${escapeHtml(cv.name)}</h1>
      <div class="role">${escapeHtml(cv.role)}</div>
      <div class="contact-line">${renderContactItems(cv.contactLine1)}</div>
      <div class="contact-line contact-links">${renderContactItems(cv.contactLine2)}</div>
    </div>
    ${cv.showPhoto ? `<img class="photo" src="${photoBase64}" alt="${escapeHtml(cv.name)}" />` : ''}
  </header>

  <p class="summary">${escapeHtml(cv.summary)}</p>

  <section>
    <h2>${escapeHtml(cv.sections.experience)}</h2>
    ${cv.experience
      .map(
        (job) => `
      <article class="entry">
        <div class="entry-head">
          <div><span class="entry-title">${escapeHtml(job.role)}</span> · <span class="entry-org">${escapeHtml(job.company)}</span></div>
          <div class="entry-meta">${escapeHtml(job.period)} · ${escapeHtml(job.location)}</div>
        </div>
        <ul>
          ${job.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join('')}
        </ul>
      </article>`,
      )
      .join('')}
  </section>

  <section>
    <h2>${escapeHtml(cv.sections.education)}</h2>
    ${cv.education
      .map(
        (ed) => `
      <div class="edu-row">
        <div>
          <span class="entry-title">${escapeHtml(ed.degree)}</span> · <span class="entry-org">${escapeHtml(ed.institution)}</span>${ed.detail ? `<span class="edu-detail"> · ${escapeHtml(ed.detail)}</span>` : ''}
        </div>
        <div class="entry-meta">${escapeHtml(ed.period)}</div>
      </div>`,
      )
      .join('')}
    <p class="cert-line"><span class="cert-label">${escapeHtml(cv.complementaryLabel)} :</span> ${escapeHtml(cv.complementaryValue)}</p>
  </section>

  <section>
    <h2>${escapeHtml(cv.sections.projects)}</h2>
    ${cv.projects
      .map(
        (p) => `
      <article class="project">
        <div class="entry-head">
          <div class="project-title"><a href="${escapeHtml(p.url)}">${escapeHtml(p.name)}</a></div>
          <div class="project-stack">${escapeHtml(p.stack)}</div>
        </div>
        <p class="project-desc">${escapeHtml(p.description)}</p>
      </article>`,
      )
      .join('')}
  </section>

  <section>
    <h2>${escapeHtml(cv.sections.skills)}</h2>
    <ul class="skills-list">
      ${cv.skills
        .map(
          (s) =>
            `<li><span class="skill-label">${escapeHtml(s.label)}:</span> ${escapeHtml(s.value)}</li>`,
        )
        .join('')}
    </ul>
  </section>
</body>
</html>`;
}

// Editorial print edition for handing in person in France:
// Faithfully adapts the typography, proportions, whitespace, and sobriety of guinon.dev onto a single A4 sheet.
function renderFrenchPrintEditorialHtml(cv) {
  const printJobs = [
    {
      role: 'Consultant technologique indépendant',
      company: 'GAMETV · Movistar eSports',
      period: '05/2025 – 09/2025',
      bullets: [
        'Supervision et exécution de la migration technique de Movistar eSports vers WordPress en maintenant la continuité du site.',
        'Audit du code existant et revue de la maintenabilité.',
        'Mise en place d’une CMP (conformité RGPD) et d’outils de mesure d’audience.',
      ],
    },
    {
      role: 'Développeur Full-Stack · stage',
      company: 'Integra Consultores',
      period: '03/2025 – 05/2025',
      bullets: [
        'Développement d’applications web avec Angular côté frontend et Java / Spring Boot côté backend.',
        'Création et consommation d’API REST avec Spring Data JPA et Hibernate.',
        'Utilisation de DTO, mappers MapStruct et séparation entre contrôleurs et services.',
      ],
    },
    {
      role: 'Head of Digital Product',
      company: 'GAMETV · Movistar eSports',
      period: '01/2022 – 03/2025',
      bullets: [
        'Coordination des équipes de développement et des prestataires techniques.',
        'Définition de la roadmap digitale, direction de l’équipe éditoriale et optimisation du SEO technique et éditorial.',
        'Création de rapports quotidiens et mensuels sous Looker Studio (Google Analytics, Metricool) pour le suivi des KPIs et le reporting client Movistar.',
      ],
    },
    {
      role: 'Rédacteur et directeur de rédaction',
      company: 'GAMETV · Movistar eSports',
      period: '07/2018 – 01/2022',
      bullets: [
        'Promotion interne au poste de directeur de rédaction en 2020 ; coordination des flux de publication digitale et des standards de qualité.',
      ],
    },
  ];

  const printEdu = [
    {
      degree: 'Licence d’Ingénierie Informatique',
      institution: 'Universitat Oberta de Catalunya (UOC)',
      detail: 'Technologies de l’information et de la communication · En cours (132/240 ECTS validés)',
      period: '09/2025 – aujourd’hui',
    },
    {
      degree: 'BTS Développeur d’Applications Web (DAW · Bac+2)',
      institution: 'ILERNA',
      detail: 'Formation obtenue en parallèle d’un poste à temps plein de Head of Digital Product',
      period: '09/2022 – 06/2025',
    },
    {
      degree: 'Licence en Journalisme',
      institution: 'Université de Valence',
      detail: 'Communication, analyse de l’information et rédaction structurée',
      period: '09/2014 – 06/2018',
    },
  ];

  const printCerts = [
    {
      name: 'Certificat professionnel Google Data Analytics',
      org: 'Google',
      detail: 'Analyse de données, SQL, bases de R et visualisation',
    },
    {
      name: 'Formation spécialisée en SEO technique et éditorial',
      org: 'Aula SEO',
      detail: 'Audit technique, indexation et architecture web',
    },
  ];

  return `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <title>${escapeHtml(cv.name)} — CV</title>
  <style>
    :root {
      --ink: #20252b;
      --muted: #626b73;
      --line: #cdd2d5;
      --line-soft: #e3e6e8;
      --accent: #174e70;
      --sans: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif;
    }

    @page {
      size: A4;
      margin: 14mm 15.5mm 13.5mm 15.5mm;
    }

    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    html, body {
      margin: 0;
      padding: 0;
      background: #ffffff;
      color: var(--ink);
      font-family: var(--sans);
      font-size: 9.2pt;
      line-height: 1.42;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    /* Intro header mirroring guinon.dev */
    .intro {
      display: grid;
      grid-template-columns: 43mm minmax(0, 1fr);
      gap: 9.5mm;
      align-items: start;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--line);
    }

    .intro-photo {
      width: 88px;
      height: 88px;
      object-fit: cover;
      filter: grayscale(1);
      display: block;
    }

    h1 {
      margin: 0;
      font-size: 27pt;
      font-weight: 650;
      letter-spacing: -0.05em;
      line-height: 0.96;
      color: var(--ink);
    }

    .role {
      margin: 6px 0 0;
      font-size: 10.6pt;
      font-weight: 600;
      color: var(--accent);
    }

    .summary {
      margin: 7.5px 0 0;
      font-size: 9.2pt;
      line-height: 1.43;
      color: var(--ink);
    }

    /* Asymmetric 2-column layout mirroring guinon.dev */
    .layout {
      display: grid;
      grid-template-columns: 43mm minmax(0, 1fr);
      gap: 9.5mm;
      padding-top: 12px;
    }

    aside section + section {
      margin-top: 17px;
    }

    aside h2 {
      margin: 0 0 6px;
      color: var(--muted);
      font-size: 8.1pt;
      font-weight: 700;
    }

    aside p, aside li {
      margin: 0;
      font-size: 8.6pt;
      line-height: 1.43;
      color: var(--ink);
    }

    aside p + p {
      margin-top: 3.5px;
    }

    aside ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    aside li + li {
      margin-top: 3px;
    }

    .aside-links {
      margin-top: 8px;
      padding-top: 7.5px;
      border-top: 1px solid var(--line-soft);
    }

    .aside-accent {
      color: var(--accent);
      font-weight: 500;
    }

    .aside-muted {
      color: var(--muted);
    }

    /* Main column */
    .content > section + section {
      margin-top: 12px;
      padding-top: 11px;
      border-top: 1px solid var(--line);
    }

    .content > section > h2 {
      margin: 0 0 8px;
      color: var(--accent);
      font-size: 12.8pt;
      font-weight: 650;
      letter-spacing: -0.03em;
      line-height: 1.05;
    }

    /* Experience entries */
    .job + .job {
      margin-top: 7.5px;
      padding-top: 7px;
      border-top: 1px solid var(--line-soft);
    }

    .row-head {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 8px;
    }

    .item-title {
      font-size: 9.45pt;
      font-weight: 650;
      color: var(--ink);
    }

    .item-org {
      font-size: 8.75pt;
      color: var(--accent);
    }

    .item-date {
      font-size: 8pt;
      color: var(--muted);
      white-space: nowrap;
      flex-shrink: 0;
    }

    .job ul {
      margin: 3.5px 0 0;
      padding-left: 14.5px;
      font-size: 8.85pt;
      line-height: 1.39;
    }

    .job li + li {
      margin-top: 2px;
    }

    /* Education entries — each degree clearly separated */
    .edu + .edu {
      margin-top: 6.5px;
      padding-top: 6px;
      border-top: 1px solid var(--line-soft);
    }

    .edu-note {
      margin: 1.5px 0 0;
      color: var(--muted);
      font-size: 8.35pt;
      line-height: 1.36;
    }

    /* Independent Complementary Certifications section */
    .cert + .cert {
      margin-top: 5.5px;
      padding-top: 5px;
      border-top: 1px solid var(--line-soft);
    }
  </style>
</head>
<body>
  <section class="intro">
    <div>
      <img class="intro-photo" src="${photoBase64}" alt="${escapeHtml(cv.name)}" />
    </div>
    <div>
      <h1>${escapeHtml(cv.name)}</h1>
      <p class="role">${escapeHtml(cv.role)}</p>
      <p class="summary">${escapeHtml(cv.summary)}</p>
    </div>
  </section>

  <div class="layout">
    <aside>
      <section>
        <h2>Contact</h2>
        <p class="aside-accent"><a href="mailto:alvaro@guinon.dev">alvaro@guinon.dev</a></p>
        <p><a href="tel:+33651643494">(+33) 6 51 64 34 94</a></p>
        <p>40370 Rion-des-Landes</p>
        <p class="aside-muted">Permis B</p>
        <div class="aside-links">
          <p class="aside-accent"><a href="https://guinon.dev/fr/">guinon.dev/fr</a></p>
          <p><a href="https://github.com/alguimo">github.com/alguimo</a></p>
          <p><a href="https://www.linkedin.com/in/alvaroguinon/?locale=fr-FR">linkedin.com/in/alvaroguinon</a></p>
        </div>
      </section>

      <section>
        <h2>Stack principal</h2>
        <ul>
          <li>Java 17 · Spring Boot 3</li>
          <li>SQL · JPA / Hibernate</li>
          <li>REST / OpenAPI · Flyway</li>
          <li>Angular 17 · TypeScript</li>
          <li>Astro · HTML · CSS</li>
          <li>Docker · Git · CI</li>
        </ul>
      </section>

      <section>
        <h2>Données et analyse</h2>
        <p class="aside-muted">Python (pandas, NumPy, SciPy, lxml, ReportLab), bases de R et de statistique.</p>
      </section>

      <section>
        <h2>Produit digital et web</h2>
        <p class="aside-muted">SEO technique, GA4, Looker Studio, CMP / RGPD, WordPress, Node.js et PHP.</p>
      </section>

      <section>
        <h2>Langues</h2>
        <ul>
          <li>Espagnol · langue maternelle</li>
          <li>Catalan · C1</li>
          <li>Anglais · B2 (Cambridge)</li>
          <li>Français · B2</li>
        </ul>
      </section>
    </aside>

    <div class="content">
      <section>
        <h2>Expérience professionnelle</h2>
        ${printJobs
          .map(
            (job) => `
          <article class="job">
            <div class="row-head">
              <div><span class="item-title">${escapeHtml(job.role)}</span> · <span class="item-org">${escapeHtml(job.company)}</span></div>
              <span class="item-date">${escapeHtml(job.period)}</span>
            </div>
            <ul>
              ${job.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join('')}
            </ul>
          </article>`,
          )
          .join('')}
      </section>

      <section>
        <h2>Formation</h2>
        ${printEdu
          .map(
            (ed) => `
          <div class="edu">
            <div class="row-head">
              <div><span class="item-title">${escapeHtml(ed.degree)}</span> · <span class="item-org">${escapeHtml(ed.institution)}</span></div>
              <span class="item-date">${escapeHtml(ed.period)}</span>
            </div>
            ${ed.detail ? `<p class="edu-note">${escapeHtml(ed.detail)}</p>` : ''}
          </div>`,
          )
          .join('')}
      </section>

      <section>
        <h2>Formations complémentaires</h2>
        ${printCerts
          .map(
            (c) => `
          <div class="cert">
            <div><span class="item-title">${escapeHtml(c.name)}</span> · <span class="item-org">${escapeHtml(c.org)}</span></div>
            <p class="edu-note">${escapeHtml(c.detail)}</p>
          </div>`,
          )
          .join('')}
      </section>
    </div>
  </div>
</body>
</html>`;
}

const chromeBin = findChrome();
fs.mkdirSync(publicCvDir, { recursive: true });

const extraOutDir = process.argv[2] ? path.resolve(process.argv[2]) : null;
if (extraOutDir) {
  fs.mkdirSync(extraOutDir, { recursive: true });
}

const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'guinon-cv-'));

try {
  for (const [lang, cv] of Object.entries(cvData)) {
    const htmlPath = path.join(tmpDir, `cv-${lang}.html`);
    const pdfPath = path.join(publicCvDir, cv.filename);
    fs.writeFileSync(htmlPath, renderAtsHtml(cv), 'utf8');

    execFileSync(
      chromeBin,
      [
        '--headless=new',
        '--disable-gpu',
        '--no-pdf-header-footer',
        '--print-to-pdf-no-header',
        `--print-to-pdf=${pdfPath}`,
        `file://${htmlPath}`,
      ],
      { stdio: 'ignore' },
    );

    console.log(`Generated ${pdfPath}`);
    if (extraOutDir) {
      const dest = path.join(extraOutDir, cv.filename);
      fs.copyFileSync(pdfPath, dest);
      console.log(`Copied to ${dest}`);
    }
  }

  const visualHtmlPath = path.join(tmpDir, 'cv-fr-impression.html');
  const visualFilename = 'GuinonAlvaro_CV_fr_impression.pdf';
  const visualOutPath = extraOutDir
    ? path.join(extraOutDir, visualFilename)
    : path.join(publicCvDir, visualFilename);
  fs.writeFileSync(visualHtmlPath, renderFrenchPrintEditorialHtml(cvData.fr), 'utf8');
  execFileSync(
    chromeBin,
    [
      '--headless=new',
      '--disable-gpu',
      '--no-pdf-header-footer',
      '--print-to-pdf-no-header',
      `--print-to-pdf=${visualOutPath}`,
      `file://${visualHtmlPath}`,
    ],
    { stdio: 'ignore' },
  );
  console.log(`Generated editorial print edition: ${visualOutPath}`);
} finally {
  fs.rmSync(tmpDir, { recursive: true, force: true });
}
