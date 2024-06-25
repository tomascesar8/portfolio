// Función para obtener los proyectos del localStorage
const saveProjects = () => {
  const projectsLS = JSON.parse(localStorage.getItem('portfolio-projects'));
  return projectsLS || []; // Si no hay proyectos, retorna un arreglo vacío
}

// Función para cargar la información del proyecto en la página de detalles
const loadProjectDetails = (projectId) => {
  const allProjects = saveProjects();
  const project = allProjects.find(proj => proj.id == projectId);
  console.log(project);

  if (project) {
      const portfolioDetailsSlider = document.querySelector('.portfolio-details-slider .swiper-wrapper');
      const portfolioInfo = document.querySelector('.portfolio-info');
      const portfolioDescription = document.querySelector('.portfolio-description');

      // Insertar las imágenes del proyecto
      project.images.forEach(image => {
          const swiperSlide = document.createElement('div');
          swiperSlide.classList.add('swiper-slide', 'rounded-4');
          swiperSlide.innerHTML = `<img class="border border-5 rounded-4" src="${image}" alt="">`;
          portfolioDetailsSlider.appendChild(swiperSlide);
      });

      if (project.id==2) {
        portfolioInfo.innerHTML = `
          <h2 class="fw-bold mb-3"> <a class="text-decoration-underline" href="${project.url}" target="_blank"> ${project.title} </a> </h2>
          <p class="fw-bold fst-italic text-secondary">${project.subtitle}</p>
          <ul>
              <li><strong>Category</strong>: ${project.category}</li>
              <li><strong>Client</strong>: ${project.client}</li>
              <li><strong>Date</strong>: ${project.date}</li>
              <li><strong>Project URL</strong>: <a class="text-decoration-underline" href="${project.url}" target="_blank">${project.url}</a></li>
              <p>
                <p className="mb-2 subtitle-about-us text-decoration-underline"><strong class="text-decoration-underline">Frontend:</strong></p>
                <li>
                  <span class="fw-bolder text-success">Tecnologías:</span> 
                  React con Vite. 
                </li>
                <li><span class="fw-bolder text-success "> Dependencias:</span>
                  axios, react-router-dom, react-bootstrap, bootstrap, react-icons, sonner, sweetalert2, emailjs.
                </li>
                <li class="fst-italic fw-bold text-secondary">*Deploy en Netlify</li>
              </p>
              <p>
                <p className="mb-2 subtitle-about-us text-decoration-underline"><strong class="text-decoration-underline">Backend:</strong></p>
                <li>
                  <span class="fw-bolder text-success ">Tecnologías:</span> 
                  Node.js con Express y MongoDB.
                </li>
                <li>
                  <span class="fw-bolder text-success"> Dependencias:</span>
                  mongoose, express, bcrypt, cors, dotenv,
                  jsonwebtoken, morgan.
                </li>
                <li class="fst-italic fw-bold text-secondary">*Deploy en Render </li>
              </p>
          </ul>
      `;
        
        portfolioDescription.innerHTML = `
        <Container>
          <Row>
            <Col>
              <div className="container-description">
                <h2 className="title-about-us mt-2">
                  <span className="title-about-proyect d-sm-inline fw-bold text-secondary">
                    PROYECTO FINAL
                  </span>
                  <span className="title-about-proyect d-sm-inline fw-bold text-secondary">
                    FULL STACK (MERN)
                  </span> <br />
                  <span className="title-about-academy d-block pt-2 fs-3 fw-bolder">- ACADEMIA ROLLINGCODE SCHOOL -</span>
                </h2>
                <p className="parraf-about-us pt-5 pb-2 fs-4">
                  <span className="fw-bolder">VetRolling</span> es una aplicación
                  web para una veterinaria que
                  <span className=" text-decoration-underline">
                    ofrece las siguientes funciones y características:
                  </span>
                </p>
                <ul
                  className="parraf-about-list"
                  style={{
                    textAlign: "left",
                    fontSize: "1.1rem",
                    padding: 0,
                    margin: "10px auto",
                    width: "80%",
                  }}
                >
                  <li class="mb-3">
                    Conexión con backend y <span className="fw-bold">base de datos NoSQL</span><span className="fw-bold text-secondary fst-italic"> (MongoDB)</span>. 
                  </li>
                  <li class="my-3">
                    Ruteo intuitivo <span className="fw-bold text-secondary fst-italic">(react-router-dom)</span> y manejo de estados para una navegación fluida. <span className="fw-bold text-secondary fst-italic">(useState & useEffect)</span>
                  </li>
                  <li class="my-3">
                    <span>
                      Administración de usuarios y turnos (CRUD). <span className="fw-bold"><em><span className="fw-bold text-decoration-underline text-success text-uppercase">Se puede ingresar con usuario: <span className="fw-bold text-danger" style={{ textTransform: 'none' }}>admin@example.com (contraseña: Admin123#)</span> para probar estas funciones.</span></em></span>
                    </span> <span className="fw-bold text-secondary fst-italic">(axios)</span>
                  </li>
                  <li class="my-3">
                    Registro de usuarios y login para <span className="fw-bold text-secondary fst-italic">usuarios y administradores</span>.
                  </li>
                  <li class="my-3">
                    Gestión de tokens para una autenticación segura. <span className="fw-bold text-secondary fst-italic">(jsonwebtoken)</span>
                  </li>
                  <li class="my-3">
                    Encryptación de contraseñas para la seguridad de información sensible. <span className="fw-bold text-secondary fst-italic">(bcrypt)</span>
                  </li>
                  <li class="my-3">
                    Generación de contexto para optimizar la interacción entre componentes. <span className="fw-bold text-secondary fst-italic">(useContext)</span>
                  </li>
                  <li class="my-3">Integración de API externa para el clima. <span className="fw-bold text-secondary fst-italic">(OpenWeather API)</span></li>
                  <li class="my-3">Envío automático de emails para notificaciones. <span className="fw-bold text-secondary fst-italic">(EmailJS API)</span></li>
                  <li class="mb-5"><span className="fw-bold">App resposive</span> adaptada tanto a dispositivos móviles, tablets y pc de escritorio.</li>
                  <hr className="text-secondary"/>
        
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        `
      }else{
          // Insertar la información del proyecto
      // Insertar la información del proyecto
      portfolioInfo.innerHTML = `
          ${project.title.length < 15 ? `<h2 class="fw-bold mb-3" style="color: #173b6c">${project.title}</h2>` 
          : 
          `<h3 class="fw-bold mb-3"><a class="text-decoration-underline" href="${project.url}" target="_blank"> ${project.title} </a></h3>`}
          
          <p class="fw-bold fst-italic text-secondary">${project.subtitle}</p>
          <ul>
              <li><strong>Category</strong>: ${project.category}</li>
              <li><strong>Client</strong>: ${project.client}</li>
              <li><strong>Date</strong>: ${project.date}</li>
              <li><strong>Project URL</strong>: <a class="text-decoration-underline" href="${project.url}" target="_blank">${project.url}</a></li>
              <li><strong>Technologies:</strong> ${project.technologies}</li>
              ${project.id==3 ? 
                `<li><strong>Theme: </strong> ${project.theme}</li>
                 <li><strong>Plugins: </strong> ${project.plugins}</li>` 
              :
                `<li><strong>Deploy: </strong> ${project.deploy}</li>`}
          </ul>
      `;

          // Insertar la descripción del proyecto
          portfolioDescription.innerHTML = `
          <h2>Description</h2>
          <p><strong>${project.description.overview}</strong></p>
          <h3>Features:</h3>
          <ul>
            ${project.description.features.map(feature => `<li>${feature}</li>`).join('')}
          </ul>
          <h3>Details:</h3>
          <ul>
            ${project.description.details.map(detail => `<li>${detail}</li>`).join('')}
          </ul>
        `;
      }
  } else {
      console.log('Proyecto no encontrado');
  }
}

// Obtener el ID del proyecto desde el hash de la URL
const projectId = window.location.hash.substring(1);
loadProjectDetails(projectId);

