export type Lang = 'es' | 'en' | 'fr';

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  bullets: string[];
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  detail: string;
}

export interface ProjectItem {
  name: string;
  kind: string;
  description: string;
  detail: string;
  stack: string;
  url: string;
}

export interface PortfolioCopy {
  nav: { experience: string; projects: string; about: string; contact: string };
  role: string;
  summary: string;
  emailAction: string;
  contact: string;
  situation: string;
  situationText: string;
  location: string;
  stack: string;
  data: string;
  dataText: string;
  product: string;
  productText: string;
  languages: string;
  languageList: string[];
  experienceTitle: string;
  recentExperience: string;
  gametvPeriod: string;
  educationTitle: string;
  aboutTitle: string;
  about: string[];
  projectsTitle: string;
  contactTitle: string;
  contactText: string;
  footer: string;
  experience: ExperienceItem[];
  education: EducationItem[];
  projects: ProjectItem[];
}

// URLs are kept in one place so changing a repository never requires editing copy.
const commonProjects = {
  chooseTheName: 'https://github.com/alguimo/choosethename',
  weda: 'https://github.com/alguimo/xml-parser',
  analysis: 'https://github.com/alguimo/data-analysis-with-python-fcc',
  cooperativa: 'https://github.com/alguimo/cooperativa',
  rsvp: 'https://github.com/alguimo/RSVP',
};

export const portfolio: Record<Lang, PortfolioCopy> = {
  es: {
    nav: { experience: 'Experiencia', projects: 'Proyectos', about: 'Conóceme mejor', contact: 'Contacto' },
    role: 'Desarrollador web · Java / Spring Boot',
    summary:
      'Después de siete años trabajando en producto digital, equipos y medios, he completado un ciclo de Desarrollo de Aplicaciones Web y actualmente curso Ingeniería Informática. Busco incorporarme a un equipo donde pueda seguir creciendo como desarrollador, especialmente con Java, Spring Boot y Angular.',
    emailAction: 'Escribir por email',
    contact: 'Contacto',
    situation: 'Situación',
    situationText: 'Busco incorporarme a un equipo de desarrollo.',
    location: 'Francia, España o remoto europeo.',
    stack: 'Stack principal',
    data: 'Datos y análisis',
    dataText: 'En formación continua: Python (Pandas, NumPy, SciPy), parsing XML/HTML (lxml, BeautifulSoup4) y bases de R y estadística.',
    product: 'Producto digital y web',
    productText: 'SEO técnico y editorial, analítica de audiencia, CMP / RGPD, WordPress, Node.js y PHP.',
    languages: 'Idiomas',
    languageList: ['Español · nativo', 'Catalán · C1', 'Inglés · B2', 'Francés · B2'],
    experienceTitle: 'Experiencia profesional',
    recentExperience: 'Experiencia reciente',
    gametvPeriod: '07/2018 — 09/2025 · 7 años',
    educationTitle: 'Formación',
    aboutTitle: 'Conóceme mejor',
    about: [
      'Mi carrera profesional empezó en el mundo del periodismo digital, donde fui evolucionando hacia la dirección de producto de la mano de GameTV. En mis siete años en la empresa trabajé junto a proveedores técnicos e implementé soluciones de analítica y SEO, interpretando métricas de audiencia, automatizando informes, supervisando migraciones técnicas y haciendo el reporting integral al cliente en Movistar eSports.',
      'En contacto con la parte técnica me di cuenta de una cosa: me apasiona escribir historias, pero mi futuro iba a estar ligado a los datos y a participar en la construcción del software. Dos cosas que, personalmente, creo que también tienen mucho que ver con contar historias, aunque de una forma distinta.',
      'Así, entre 2022 y 2025 compaginé mi trabajo a jornada completa con el ciclo superior de Desarrollo de Aplicaciones Web (DAW). Tras finalizarlo con unas prácticas en Integra Consultores y tras completar la migración técnica de Movistar eSports —cuando amas un proyecto quieres despedirte de él de la mejor forma posible—, vi que el contexto había cambiado desde que decidí estudiar DAW.',
      'La revolución de la IA había llegado y entendí que escribir código ya no tenía el mismo valor por sí solo. Necesitaba comprender mejor la arquitectura de software y el análisis de datos si quería construir buenos sistemas, y para eso mi camino debía seguir por la Ingeniería Informática.',
      'En paralelo, surgió la oportunidad de instalarnos en Francia. ¿El problema? No hablaba ni una palabra de francés. Así que mi hoja de ruta para estos meses estaba clara: seguir formándome para diseñar buenos sistemas, profundizar en datos (Python y R) y aprender francés. Ahora, con más del 50% de la carrera superada y con un B2 de francés, busco una oportunidad para aplicar todo mi conocimiento. Soy un desarrollador junior, pero con una experiencia sólida desde el otro lado de la barrera, lo cual me da una perspectiva más completa del ciclo de vida del producto.',
      'Si quieres conocerme mejor, te invito a que me escribas. También puedes ver algunos de mis side-projects en mi perfil de GitHub. ¡Gracias por llegar hasta aquí!',
    ],
    projectsTitle: 'Proyectos seleccionados',
    contactTitle: 'Contacto',
    contactText: 'Si buscas un desarrollador en formación con experiencia previa coordinando producto y equipos técnicos, puedes escribirme directamente.',
    footer: 'Octubre 2026',
    // The first two entries are the recent roles; the last two form the GAMETV progression.
    experience: [
      { period: '05/2025 — 09/2025', role: 'Consultor tecnológico independiente', company: 'GAMETV · Movistar eSports · Alcobendas', bullets: ['Supervisión y ejecución de la migración de Movistar eSports a WordPress, manteniendo la continuidad del sitio.', 'Auditoría de código y revisión de mantenibilidad.', 'Implementación de una CMP y herramientas de medición de audiencia.'] },
      { period: '03/2025 — 05/2025', role: 'Desarrollador Full-Stack · prácticas', company: 'Integra Consultores · Castellón de la Plana', bullets: ['Desarrollo de aplicaciones con Angular en frontend y Java / Spring Boot en backend.', 'Creación y consumo de APIs REST con Spring Data JPA e Hibernate.', 'Aplicación de DTOs, mappers con MapStruct y separación entre controladores y servicios.'] },
      { period: '01/2022 — 03/2025', role: 'Head of Digital Product', company: 'GAMETV · Alcobendas', bullets: ['Coordinación de equipos de desarrollo y proveedores técnicos.', 'Definición del roadmap digital y dirección del equipo editorial.', 'Optimización de SEO técnico y editorial, con formación complementaria en Aula SEO.', 'Construcción en Looker Studio de informes diarios y mensuales integrando Metricool y Google Analytics para analizar KPIs de audiencia y preparar el reporting al cliente principal.'] },
      { period: '07/2018 — 01/2022', role: 'Redactor y director de redacción', company: 'GAMETV · Alcobendas', bullets: ['Promoción interna a director de redacción en 2020.', 'Coordinación de flujos de publicación digital y estándares de calidad.'] },
    ],
    education: [
      { period: '09/2025 — actualidad · 132/240 ECTS', degree: 'Grado en Ingeniería Informática', institution: 'Universitat Oberta de Catalunya', detail: 'Tecnologías de la información y la comunicación. En curso.' },
      { period: '09/2022 — 06/2025', degree: 'Técnico Superior en Desarrollo de Aplicaciones Web', institution: 'ILERNA', detail: 'Completado mientras trabajaba a jornada completa como Head of Digital Product.' },
      { period: '09/2014 — 06/2018', degree: 'Grado en Periodismo', institution: 'Universidad de Valencia', detail: 'Comunicación, análisis de información y redacción estructurada.' },
    ],
    projects: [
      { name: 'ChooseTheName', kind: 'Aplicación web · Java / Spring Boot / Angular', description: 'Aplicación colaborativa para proponer nombres y elegirlos mediante rondas de votación. Me ocupé del backend, el contrato OpenAPI, la persistencia con Flyway y el frontend Angular.', detail: 'El repositorio muestra la separación entre API y cliente, autenticación y despliegue con Docker Compose.', stack: 'Java 17 · Spring Boot 3 · Angular 17 · TypeScript · SQL · Docker', url: commonProjects.chooseTheName },
      { name: 'Convertisseur WEDA', kind: 'Aplicación de escritorio · Python', description: 'Pipeline que transforma exportaciones XML de un software médico en informes PDF legibles. El trabajo principal fue resolver el HTML escapado, limpiar los datos y controlar la paginación del documento.', detail: 'El procesamiento se realiza en memoria temporal y el proyecto se empaqueta como aplicación de escritorio.', stack: 'Python · lxml · BeautifulSoup4 · ReportLab · PyInstaller', url: commonProjects.weda },
      { name: 'Data Analysis with Python', kind: 'Análisis de datos · Pandas / NumPy / SciPy', description: 'Suite de análisis sobre varios datasets para practicar limpieza, ingeniería de variables, visualización y regresión lineal.', detail: 'Incluye cinco ejercicios con tests unitarios y más de 102.000 registros combinados entre datos censales, médicos y series temporales.', stack: 'Python · Pandas · NumPy · SciPy · Matplotlib · Seaborn', url: commonProjects.analysis },
      { name: 'Cooperativa', kind: 'Mantenimiento y despliegue · Node.js', description: 'Intervención sobre una aplicación existente con problemas de correo transaccional, spam y despliegue. Migré el envío a Resend, añadí un filtro por idioma y preparé el despliegue en Railway.', detail: 'Es un ejemplo de trabajo sobre un sistema heredado, no un proyecto construido desde cero.', stack: 'Node.js · Express · Resend · Railway · DNS', url: commonProjects.cooperativa },
      { name: 'RSVP', kind: 'Proyecto formativo · PHP / SQL / Docker', description: 'Sistema de gestión de eventos con un portal para organizadores y otro para invitados. Lo desarrollé durante el CFGS, con autenticación, confirmaciones, requisitos alimentarios y necesidades de transporte.', detail: 'El proyecto parte de PHP nativo y MariaDB/MySQL, y se organiza para ejecutarse con Docker Compose.', stack: 'PHP 8 · PDO · MariaDB · JavaScript · Docker Compose', url: commonProjects.rsvp },
    ],
  },
  en: {
    nav: { experience: 'Experience', projects: 'Projects', about: 'About me', contact: 'Contact' },
    role: 'Web developer · Java / Spring Boot',
    summary: 'After seven years working across digital product, teams and media, I completed a Higher National Diploma in Web Application Development and am currently studying Computer Engineering. I am looking to join a development team where I can keep growing, particularly with Java, Spring Boot and Angular.',
    emailAction: 'Email me', contact: 'Contact', situation: 'Current situation', situationText: 'Looking to join a development team.', location: 'France, Spain or European remote.', stack: 'Main stack', data: 'Data and analysis', dataText: 'Ongoing learning: Python (Pandas, NumPy, SciPy), XML/HTML parsing (lxml, BeautifulSoup4), and foundations of R and statistics.', product: 'Digital product and web', productText: 'Technical and editorial SEO, audience analytics, CMP / GDPR, WordPress, Node.js and PHP.', languages: 'Languages', languageList: ['Spanish · native', 'Catalan · C1', 'English · B2', 'French · B2'], experienceTitle: 'Professional experience', recentExperience: 'Recent experience', gametvPeriod: '07/2018 — 09/2025 · 7 years', educationTitle: 'Education', aboutTitle: 'A little more about me',
    about: [
      'My professional career began in digital journalism, where I gradually moved into product leadership at GameTV. During my seven years at the company, I worked alongside technical providers and implemented analytics and SEO solutions, interpreting audience metrics, automating reports, supervising technical migrations and handling the full reporting for the Movistar eSports client.',
      'While working with the technical side, I realised something: I love writing stories, but my future was going to be tied to data and to taking part in building software. Personally, I think both also have a lot to do with telling stories, although in a different way.',
      'So, between 2022 and 2025, I combined full-time work with a Higher National Diploma in Web Application Development (DAW). After completing it with an internship at Integra Consultores and completing the technical migration of Movistar eSports —when you love a project, you want to say goodbye to it in the best possible way—, I realised that the context had changed since I decided to study DAW.',
      'The AI revolution had arrived and I understood that writing code no longer had the same value on its own. I needed to understand software architecture and data analysis better if I wanted to build good systems, and that meant continuing with Computer Engineering.',
      'At the same time, the opportunity came up to move to France. The problem? I did not speak a word of French. So my roadmap for the coming months was clear: continue training to design good systems, deepen my knowledge of data (Python and R) and learn French. Now, with more than half of the degree completed and a B2 level in French, I am looking for an opportunity to apply everything I have learned. I am a junior developer, but I bring solid experience from the other side of the table, which gives me a broader perspective on the product lifecycle.',
      'If you would like to get to know me better, I invite you to write to me. You can also see some of my side projects on my GitHub profile. Thank you for making it this far!',
    ],
    projectsTitle: 'Selected projects', 
    contactTitle: 'Contact', 
    contactText: 'If you are looking for a developer in training with previous experience coordinating product and technical teams, you can contact me directly.', 
    footer: 'October 2026',
    experience: [
      { period: '05/2025 — 09/2025', role: 'Independent technology consultant', company: 'GAMETV · Movistar eSports · Alcobendas', bullets: ['Supervised and executed the migration of Movistar eSports to WordPress while maintaining site continuity.', 'Audited code and reviewed maintainability.', 'Implemented a CMP and audience measurement tools.'] },
      { period: '03/2025 — 05/2025', role: 'Full-Stack Developer · internship', company: 'Integra Consultores · Castellón de la Plana', bullets: ['Built applications with Angular on the frontend and Java / Spring Boot on the backend.', 'Created and consumed REST APIs with Spring Data JPA and Hibernate.', 'Applied DTOs, MapStruct mappers and separation between controllers and services.'] },
      { period: '01/2022 — 03/2025', role: 'Head of Digital Product', company: 'GAMETV · Alcobendas', bullets: ['Coordinated development teams and technical vendors.', 'Defined the digital roadmap and led the editorial team.', 'Improved technical and editorial SEO, supported by additional training at Aula SEO.', 'Built daily and monthly Looker Studio reports integrating Metricool and Google Analytics to analyse audience KPIs and prepare client reporting.'] },
      { period: '07/2018 — 01/2022', role: 'Writer and managing editor', company: 'GAMETV · Alcobendas', bullets: ['Promoted internally to managing editor in 2020.', 'Coordinated digital publishing workflows and quality standards.'] },
    ],
    education: [
      { period: '09/2025 — present · 132/240 ECTS', degree: 'B.Sc. in Computer Engineering', institution: 'Universitat Oberta de Catalunya', detail: 'Information and communication technologies. In progress.' },
      { period: '09/2022 — 06/2025', degree: 'Higher National Diploma in Web Application Development', institution: 'ILERNA', detail: 'Completed while working full-time as Head of Digital Product.' },
      { period: '09/2014 — 06/2018', degree: 'B.A. in Journalism', institution: 'University of Valencia', detail: 'Communication, information analysis and structured writing.' },
    ],
    projects: [
      { name: 'ChooseTheName', kind: 'Web application · Java / Spring Boot / Angular', description: 'Collaborative application for proposing names and choosing one through voting rounds. I worked on the backend, OpenAPI contract, Flyway persistence and Angular frontend.', detail: 'The repository shows the separation between API and client, authentication and Docker Compose deployment.', stack: 'Java 17 · Spring Boot 3 · Angular 17 · TypeScript · SQL · Docker', url: commonProjects.chooseTheName },
      { name: 'Convertisseur WEDA', kind: 'Desktop application · Python', description: 'Pipeline that turns medical software XML exports into readable PDF reports. The main work was handling escaped HTML, cleaning the data and controlling document pagination.', detail: 'Processing runs in temporary memory and the project is packaged as a desktop application.', stack: 'Python · lxml · BeautifulSoup4 · ReportLab · PyInstaller', url: commonProjects.weda },
      { name: 'Data Analysis with Python', kind: 'Data analysis · Pandas / NumPy / SciPy', description: 'A suite of analyses on several datasets covering data cleaning, feature engineering, visualisation and linear regression.', detail: 'It includes five exercises with unit tests and more than 102,000 combined records across census, medical and time-series data.', stack: 'Python · Pandas · NumPy · SciPy · Matplotlib · Seaborn', url: commonProjects.analysis },
      { name: 'Cooperativa', kind: 'Maintenance and deployment · Node.js', description: 'Work on an existing application with transactional email, spam and deployment problems. I moved email delivery to Resend, added a language filter and prepared the Railway deployment.', detail: 'This is an example of working on a legacy system rather than building a project from scratch.', stack: 'Node.js · Express · Resend · Railway · DNS', url: commonProjects.cooperativa },
      { name: 'RSVP', kind: 'Academic project · PHP / SQL / Docker', description: 'Event management system with one portal for organisers and another for guests. I built it during the web development diploma, including authentication, confirmations, dietary requirements and transport needs.', detail: 'The project uses native PHP and MariaDB/MySQL and runs through Docker Compose.', stack: 'PHP 8 · PDO · MariaDB · JavaScript · Docker Compose', url: commonProjects.rsvp },
    ],
  },
  fr: {
    nav: { experience: 'Expérience', projects: 'Projets', about: 'À propos', contact: 'Contact' },
    role: 'Développeur web · Java / Spring Boot', summary: 'Après sept ans dans le produit digital, les équipes et les médias, j’ai obtenu un BTS Développeur d’Applications Web et je suis actuellement une Licence d’Ingénierie Informatique. Je cherche à rejoindre une équipe de développement pour progresser, notamment avec Java, Spring Boot et Angular.', emailAction: 'Écrire par e-mail', contact: 'Contact', situation: 'Situation', situationText: 'Je cherche à rejoindre une équipe de développement.', location: 'France, Espagne ou télétravail européen.', stack: 'Stack principal', data: 'Données et analyse', dataText: 'Formation continue : Python (Pandas, NumPy, SciPy), parsing XML/HTML (lxml, BeautifulSoup4) et bases de R et de statistique.', product: 'Produit digital et web', productText: 'SEO technique et éditorial, analyse d’audience, CMP / RGPD, WordPress, Node.js et PHP.', languages: 'Langues', languageList: ['Espagnol · langue maternelle', 'Catalan · C1', 'Anglais · B2', 'Français · B2'], experienceTitle: 'Expérience professionnelle', recentExperience: 'Expérience récente', gametvPeriod: '07/2018 — 09/2025 · 7 ans', educationTitle: 'Formation', aboutTitle: 'Mieux me connaître',
    about: [
      'Ma carrière professionnelle a commencé dans le journalisme digital, avant d’évoluer vers la direction de produit chez GameTV. Pendant mes sept années dans l’entreprise, j’ai travaillé avec des prestataires techniques et mis en place des solutions d’analytics et de SEO, en interprétant les métriques d’audience, en automatisant des rapports, en supervisant des migrations techniques et en assurant le reporting complet pour le client Movistar eSports.',
      'Au contact de la partie technique, j’ai compris une chose : j’aime écrire des histoires, mais mon avenir allait être lié aux données et à la participation à la construction de logiciels. Personnellement, je pense que ces deux domaines ont aussi beaucoup à voir avec le fait de raconter des histoires, mais d’une manière différente.',
      'Ainsi, entre 2022 et 2025, j’ai préparé le BTS Développeur d’Applications Web (DAW) en parallèle d’un emploi à temps plein. Après l’avoir obtenu avec un stage chez Integra Consultores et après avoir finalisé la migration technique de Movistar eSports —quand on aime un projet, on veut lui dire au revoir de la meilleure manière possible—, j’ai constaté que le contexte avait changé depuis ma décision d’étudier le DAW.',
      'La révolution de l’IA était arrivée et j’ai compris qu’écrire du code n’avait plus la même valeur en soi. Je devais mieux comprendre l’architecture logicielle et l’analyse de données si je voulais construire de bons systèmes, et pour cela mon chemin devait continuer avec une Licence d’Ingénierie Informatique.',
      'En parallèle, l’occasion de nous installer en France s’est présentée. Le problème ? Je ne parlais pas un mot de français. Ma feuille de route pour les mois suivants était donc claire : continuer à me former pour concevoir de bons systèmes, approfondir les données (Python et R) et apprendre le français. Maintenant que plus de la moitié de la licence est validée et que j’ai un niveau B2 en français, je cherche une opportunité pour appliquer toutes mes connaissances. Je suis un développeur junior, mais j’apporte une solide expérience de l’autre côté de la barrière, ce qui me donne une perspective plus complète du cycle de vie d’un produit.',
      'Si vous souhaitez mieux me connaître, je vous invite à m’écrire. Vous pouvez également consulter certains de mes side-projects sur mon profil GitHub. Merci d’être arrivé jusqu’ici !',
    ],
    projectsTitle: 'Projets sélectionnés', 
    contactTitle: 'Contact', 
    contactText: 'Si vous recherchez un développeur en formation ayant déjà coordonné des produits et des équipes techniques, vous pouvez me contacter directement.', 
    footer: 'Octobre 2026',
    experience: [
      { period: '05/2025 — 09/2025', role: 'Consultant technologique indépendant', company: 'GAMETV · Movistar eSports · Alcobendas', bullets: ['Supervision et exécution de la migration de Movistar eSports vers WordPress, avec maintien de la continuité du site.', 'Audit du code et revue de la maintenabilité.', 'Mise en place d’une CMP et d’outils de mesure d’audience.'] },
      { period: '03/2025 — 05/2025', role: 'Développeur Full-Stack · stage', company: 'Integra Consultores · Castellón de la Plana', bullets: ['Développement d’applications avec Angular côté frontend et Java / Spring Boot côté backend.', 'Création et consommation d’API REST avec Spring Data JPA et Hibernate.', 'Utilisation de DTO, mappers MapStruct et séparation des contrôleurs et services.'] },
      { period: '01/2022 — 03/2025', role: 'Head of Digital Product', company: 'GAMETV · Alcobendas', bullets: ['Coordination des équipes de développement et des prestataires techniques.', 'Définition de la roadmap digitale et direction de l’équipe éditoriale.', 'Optimisation du SEO technique et éditorial, avec une formation complémentaire chez Aula SEO.', 'Création de rapports quotidiens et mensuels dans Looker Studio, intégrant Metricool et Google Analytics pour analyser les KPIs d’audience et préparer le reporting client.'] },
      { period: '07/2018 — 01/2022', role: 'Rédacteur et directeur de rédaction', company: 'GAMETV · Alcobendas', bullets: ['Promotion interne au poste de directeur de rédaction en 2020.', 'Coordination des flux de publication digitale et des standards de qualité.'] },
    ],
    education: [
      { period: '09/2025 — aujourd’hui · 132/240 ECTS', degree: 'Licence d’Ingénierie Informatique', institution: 'Universitat Oberta de Catalunya', detail: 'Technologies de l’information et de la communication. En cours.' },
      { period: '09/2022 — 06/2025', degree: 'BTS Développeur d’Applications Web', institution: 'ILERNA', detail: 'Formation obtenue en parallèle d’un poste à temps plein de Head of Digital Product.' },
      { period: '09/2014 — 06/2018', degree: 'Licence en Journalisme', institution: 'Université de Valence', detail: 'Communication, analyse de l’information et rédaction structurée.' },
    ],
    projects: [
      { name: 'ChooseTheName', kind: 'Application web · Java / Spring Boot / Angular', description: 'Application collaborative pour proposer des noms et en choisir un par tours de vote. J’ai travaillé sur le backend, le contrat OpenAPI, la persistance Flyway et le frontend Angular.', detail: 'Le dépôt montre la séparation entre API et client, l’authentification et le déploiement Docker Compose.', stack: 'Java 17 · Spring Boot 3 · Angular 17 · TypeScript · SQL · Docker', url: commonProjects.chooseTheName },
      { name: 'Convertisseur WEDA', kind: 'Application de bureau · Python', description: 'Pipeline transformant des exports XML médicaux en rapports PDF lisibles. Le travail principal portait sur le HTML échappé, le nettoyage des données et la pagination du document.', detail: 'Le traitement utilise une mémoire temporaire et le projet est empaqueté comme application de bureau.', stack: 'Python · lxml · BeautifulSoup4 · ReportLab · PyInstaller', url: commonProjects.weda },
      { name: 'Data Analysis with Python', kind: 'Analyse de données · Pandas / NumPy / SciPy', description: 'Suite d’analyses sur plusieurs jeux de données pour pratiquer le nettoyage, le feature engineering, la visualisation et la régression linéaire.', detail: 'Cinq exercices avec tests unitaires et plus de 102 000 entrées combinées issues de données de recensement, médicales et temporelles.', stack: 'Python · Pandas · NumPy · SciPy · Matplotlib · Seaborn', url: commonProjects.analysis },
      { name: 'Cooperativa', kind: 'Maintenance et déploiement · Node.js', description: 'Intervention sur une application existante confrontée à des problèmes d’e-mails, de spam et de déploiement. J’ai migré l’envoi vers Resend, ajouté un filtre linguistique et préparé le déploiement Railway.', detail: 'Un exemple de travail sur un système existant, plutôt que sur un projet créé de zéro.', stack: 'Node.js · Express · Resend · Railway · DNS', url: commonProjects.cooperativa },
      { name: 'RSVP', kind: 'Projet de formation · PHP / SQL / Docker', description: 'Système de gestion d’événements avec un portail organisateur et un portail invité. Je l’ai développé pendant le BTS, avec authentification, confirmations, besoins alimentaires et transport.', detail: 'Le projet utilise PHP natif et MariaDB/MySQL et s’exécute avec Docker Compose.', stack: 'PHP 8 · PDO · MariaDB · JavaScript · Docker Compose', url: commonProjects.rsvp },
    ],
  },
};
