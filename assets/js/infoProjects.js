  localStorage.clear();
  console.log('1');
  const projects = [
    {
      id: 1,
      title: "CineRolling+ (estilo Netflix)",
      subtitle: "Web con catálogo de películas",
      category: "Web Development",
      client: "RollingCode School",
      date: "January 2023 - March 2023",
      url: "http://cine-rolling.netlify.app",
      technologies: "JavaScript, HTML, CSS y Bootstrap.",
      deploy: "Netlify",
      description: {
        overview: "Se desarrolla una web con catálogo de películas.",
        features: [
          "Registro y login para usuarios y administradores.",
          "Envío de correos electrónicos utilizando SMTP.",
          "Lista de favoritos.",
          "Buscador de películas.",
          "Sección de administrador para modificar el contenido."
        ],
        details: [
          "Desarrollado con HTML, CSS, Bootstrap y JavaScript.",
          "En cuanto al CRUD y manejo de información se utilizó Local Storage.",
          "Vista adaptada para vista desktop, tablet y mobile (vertical y horizontal).",
          "Herramientas de trabajo: Trello, Git y GitHub."
        ]
      },
      images: [
        "assets/img/portfolio/cine1.JPG",
        "assets/img/portfolio/cine-lion.JPG",
        "assets/img/portfolio/cine5.JPG",
        "assets/img/portfolio/cine6.JPG",
        "assets/img/portfolio/cine2.JPG"
      ]
    },
    {
      id: 2,
      title: "Vet-Rolling",
      subtitle: "Plataforma de gestión veterinaria",
      category: "Web Development",
      client: "RollingCode School",
      date: "January 2024 - March 2024",
      url: "http://vet-rolling.netlify.app",
      technologies: "Reactjs, MongoDB, Nodejs, Expressjs, JavaScript, HTML, CSS, Bootstrap",
      deploy: "Netlify (Frontend) - Render (Backend)",
      description: {
        overview: "VETROLLING es una aplicación web para veterinarias que integra todas las tecnologías del Stack MERN, tanto en el frontend como en el backend.",
        features: [
          "Registro y login seguro para usuarios y administradores.",
          "Conexión con backend y base de datos NoSQL (MongoDB).",
          "Ruteo intuitivo y manejo de estados para una navegación fluida.",
          "Administración de usuarios y turnos (CRUD).",
          "Gestión de tokens para autenticación segura.",
          "Encriptación de contraseñas para protección de datos sensibles.",
          "Integración de API externa para el clima.",
          "Envío automático de emails para notificaciones.",
          "Aplicación responsive adaptada a dispositivos móviles, tablets y PC de escritorio."
        ],
        details: [
          "Frontend: Desplegado en Netlify, desarrollado con Reactjs y Vite, utilizando dependencias como axios, react-router-dom, react-bootstrap, bootstrap, react-icons, sonner, sweetalert2, emailjs.",
          "Backend: Desplegado en Render. Desarrollado con Node.js, Express y MongoDB, utilizando dependencias como mongoose, express, bcrypt, cors, dotenv, jsonwebtoken, morgan.",
          "Podés registrarte como usuario o también ingresar con perfil de administrador para probar funciones de administrador: admin@example.com, contraseña: Admin123#."
        ]
      },
      images: [
        "assets/img/portfolio/vetrolling-landing-1.jpg",
        "assets/img/portfolio/vet-rolling/vetrolling-users.jpg",
        "assets/img/portfolio/vet-rolling/vetrolling-turnos.jpg",
        "assets/img/portfolio/vet-rolling/vetrolling-register.jpg",
      ]
    },
    {
      id: 3,
      title: "Inmobiliaria Rojas Roganti",
      subtitle: "Sitio web para negocio inmobiliario.",
      category: "Web Development",
      client: "Inmobiliaria Rojas Roganti",
      date: "May 2023 - June 2023",
      url: "http://inmobiliariarojasroganti.com",
      technologies: "WordPress",
      plugins: "Elementor, WooCommerce",
      theme: "Astra",
      description: {
        overview: "Desarrollo y optimización de sitio inmobiliario con WordPress.",
        features: [
          "Desarrollo de un sitio web atractivo y funcional utilizando la versatilidad de WordPress.",
          "Integración de funcionalidades clave mediante plugins.",
          "Ajustes de diseño y aplicando estilos CSS."
        ],
        details: [
          "Optimización para SEO y rendimiento.",
          "Integración de formularios de contacto y mapas.",
          "Presentación visualmente agradable y coherente.",
          "Diseño responsive adaptado a dispositivos móviles, tablets y PC de escritorio."
        ]
      },
      images: [
        "assets/img/portfolio/inmo-front1.2.jpg",
        "assets/img/portfolio/inmo/1.JPG",
        "assets/img/portfolio/inmo/2.JPG",
        "assets/img/portfolio/inmo/3.JPG",
        "assets/img/portfolio/inmo/4.JPG",
        "assets/img/portfolio/inmo/5.JPG",
      ]
    },
    {
      id: 4,
      title: "TinyProjects JavaScript",
      subtitle: "Pequeños proyectos realizados con JavaScript",
      category: "Web Development",
      client: "RollingCode School",
      date: "January 2023 - March 2023",
      url: "http://tinyprojects-js.netlify.app",
      technologies: "JavaScript, HTML, CSS y Bootstrap.",
      deploy: "Netlify",
      description: {
        overview: "Algunos proyectos realizados durante mis primeros contactos con JavaScript.",
        features: [
          "Ecommerce",
          "Simpsons CRUD",
          "Lista de tareas",
          "Vaca en corral",
          "Fecha y hora",
          "Clon de Google",
          "Cronómetro",
          "Temporizador",
          "Tirar dado"
        ],
        details: [
          "Cada proyecto muestra mi capacidad para resolver problemas encontrando soluciones creativas.",
          "Implementación de lógica básica de programación.",
          "Diseño adaptado para diferentes dispositivos.",
          "Utilización de tecnologías como HTML, CSS y JavaScript."
        ]
      },
      images: [
        "assets/img/portfolio/tinyprojects/simpsons.jpg",
        "assets/img/portfolio/tinyprojects/carrito.jpg",
        "assets/img/portfolio/tinyprojects/lista-tareas.jpg",
        "assets/img/portfolio/tinyprojects/vaca.jpg",
        "assets/img/portfolio/tinyprojects/reloj.jpg",
        "assets/img/portfolio/tinyprojects/clon-google.jpg",
        "assets/img/portfolio/tinyprojects/cronometro.jpg",
        "assets/img/portfolio/tinyprojects/temporizador.jpg",
        "assets/img/portfolio/tinyprojects/dado.jpg"
      ]
    },
    {
      id: 5,
      title: "OnlySports",
      subtitle: "Blog sobre deportes",
      category: "Web Development",
      client: "RollingCode School",
      date: "August 2022 - October 2022",
      url: "http://onlysports.netlify.app",
      technologies: "HTML, CSS y Bootstrap.",
      deploy: "Netlify",
      description: {
        overview: "Blog sobre deportes creado con HTML, CSS y Bootstrap.",
        features: [
          "Páginas de inicio, entrada de cada noticia, contacto, galería de fotos, acerca de nosotros e inicio de sesión.",
          "Modal para registro.",
          "Diseño responsive adaptable a desktop, celular y tablet."
        ],
        details: [
          "Estructura de navegación clara y fácil de usar.",
          "Optimización para SEO y rendimiento.",
          "Integración de comentarios y formularios de contacto.",
          "Gestión de contenido mediante un CMS (WordPress)."
        ]
      },
      images: [
        "assets/img/portfolio/onlysports-2.jpg",
        "assets/img/portfolio/onlysports/onlysports-3.jpg",
        "assets/img/portfolio/onlysports/onlysports-4.jpg",
        "assets/img/portfolio/onlysports/onlysports-5.jpg",
        "assets/img/portfolio/onlysports/onlysports-6.jpg",
        "assets/img/portfolio/onlysports/onlysports-7.jpg",
      ]
    }
  ];

  const formatText = (text) => text.replace(/\n/g, '<br>');

  // Guardar los proyectos en localStorage si no están guardados
  if (!localStorage.getItem('portfolio-projects')) {
    localStorage.setItem('portfolio-projects', JSON.stringify(projects));
  }
  