import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  kruger,
  antena,
  cen2,
  pil,
  marvel,
  jobit,
  calendar,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "ReactJs Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Pasantías",
    company_name: "Rhelec Ingeniería",
    icon: antena,
    iconBg: "#FFFFFF",
    date: "Jan 2018 - May 2018",
    points: [
      "Gestión de Tickets e incidencias para soluciones Eléctricas, mecánicas y de Telecomunicaciones.",
      "Colaboración con diferentes equipos para la operación y mantenimiento preventivo, correctivo y emergente de radiobases.",
      "Uso herramientas analíticas y de visualización de datos pare recopilar información relacionada con Indicadores de gestión KPI.",
    ],
  },
  {
    title: "Soporte Técnico",
    company_name: "CEN",
    icon: cen2,
    iconBg: "#FFFFFF",
    date: "Oct 2018 - Dec 2022",
    points: [
      "Proporcioné asistencia técnica a colaboradores y clientes, resolviendo eficazmente problemas y consultas relacionados con sistemas.",
      "Realicé inspecciones regulares y actualizaciones de hardware y software en equipos y servidores para prevenir fallas.",
      "instalación y configuración de software y hardware esenciales, adaptando soluciones tecnológicas a las necesidades específicas.",
      "integración y despliegue de recursos tecnológicos.",
    ],
  },
  {
    title: "Asistente de sistemas",
    company_name: "PIL S.A.",
    icon: pil,
    iconBg: "#FFFFFF",
    date: "Jan 2023 - Feb 2023",
    points: [
      "Mantenimiento y limpieza de equipos de computación.",
      "Intsalación de servidores y equipos para el uso de colaboradores.",
      "Implementación de infraestructuras de redes.",
    ],
  },
  {
    title: "Consultor Técnico",
    company_name: "Kruger",
    icon: kruger,
    iconBg: "#FFFFFF",
    date: "Feb 2023 - Present",
    points: [
      "Desarrollo y mantenimiento de aplicaciones Web usando React.js y otras tecnologías relacionadas.",
      "Implementación de servicios y pantallas para el sistemas de planificación (ERP) de la empresa.",
      "Documentación de las diferentes APIs y servicios desarrollados.",
      "Uso de base de datos e implementación de scripts",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Marvel Search",
    description:
      "Aplicación web la cual consume una API de superhéroes de Marvel y permite a los usuarios realizar una búsqueda, en la cual podrán observar sus características.",
    tags: [
      {
        name: "Angular",
        color: "orange-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: marvel,
    source_code_link: "https://github.com/jner0/Heroes-App",
  },
  {
    name: "Job IT",
    description:
      "Aplicación web que permite a los usuarios buscar ofertas de trabajo, ver rangos de salarios estimados y localizar trabajos disponibles según su ubicación actual.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Calendar App",
    description:
      "Aplicación con inicio de sesión y registro, que permite agendar actividades en un calendario interactivo. Cuenta con su propio Backend desarrolado en NodeJs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
    ],
    image: calendar,
    source_code_link: "https://github.com/jner0/CalendarApp-Backend",
  },
];

export { services, technologies, experiences, testimonials, projects };
