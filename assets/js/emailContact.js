// document.getElementById('contactForm').addEventListener('submit', function(event) {
//   event.preventDefault();

//   let name = document.getElementById('name').value;
//   let email = document.getElementById('email').value;
//   let subject = document.getElementById('subject').value;
//   let message = document.querySelector('textarea[name="message"]').value;

//   let messageContact = `
//   <html>
//   <body style="font-family: Arial, sans-serif; margin: 0; padding: 0;">
//     <table role="presentation" style="width: 100%; border-collapse: collapse; border: 0; border-spacing: 0; background: #ffffff;">
//       <tr>
//         <td style="padding: 20px;">
//           <h3 style="color:gainsboro;font-size: large; font-weight:600; margin: 20px 0;">
//             Recibiste un mensaje de <span style="font-weight:700; color:rgb(15, 59, 95)">${email}</span>: 
//           </h3>
//           <p><strong>Nombre:</strong> ${name}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Asunto:</strong> ${subject}</p>
//           <p><strong>Mensaje:</strong></p>
//           <p style="margin: 0 0 20px 0; line-height: 1.2em; font-size: 18px">
//             ${message}
//           </p>
//         </td>
//       </tr>
//     </table>
//   </body>
//   </html>
//   `;

//   Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "tomascesar1993@gmail.com",
//     Password : "D19478D06661B455EB35D0C3E6D2BCEC7099",
//     To : 'tomascesar1993@gmail.com',
//     From : 'tomascesar1993@gmail.com',
//     Subject : subject,
//     Body : messageContact,
//   }).then(message => confirmContact(message));
    
//   async function confirmContact(message) {
//     let response = await message;
//     if(response === "OK"){ 
//       Swal.fire({
//         title: 'Mensaje enviado correctamente!',
//         text: 'Gracias por tu contacto, te responderé a la brevedad.',
//         icon: 'success',
//         confirmButtonText: 'Aceptar'
//       });
//       console.log('joia');
//       document.getElementById('contactForm').reset();
//     } else {
//       Swal.fire({
//         title: 'Error!',
//         text: 'Ha ocurrido un problema, vuelve a intentarlo.',
//         icon: 'error',
//         confirmButtonText: 'Aceptar'
//       });
//       console.log('ptm');
//     }
//   }
// });


// document.getElementById('contactForm').addEventListener('submit', function(event) {
//   event.preventDefault();

//   let name = document.getElementById('name').value;
//   let email = document.getElementById('email').value;
//   let subject = document.getElementById('subject').value;
//   let message = document.querySelector('textarea[name="message"]').value;

//   let messageContact = `
  
//   `;

//   Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "tomascesar1993@gmail.com",
//     Password : "D19478D06661B455EB35D0C3E6D2BCEC7099",
//     To : 'tomascesar1993@gmail.com',
//     From : 'tomascesar1993@gmail.com',
//     Subject : subject,
//     Body : messageContact,
//   }).then(response => {
//     console.log(response); // Añade un log para verificar la respuesta del servidor SMTP
//     if (response === "OK") {
//       Swal.fire({
//         title: 'Mensaje enviado correctamente!',
//         text: 'Gracias por tu contacto, te responderé a la brevedad.',
//         icon: 'success',
//         confirmButtonText: 'Aceptar'
//       });
//       document.getElementById('contactForm').reset();
//     } else {
//       Swal.fire({
//         title: 'Error!',
//         text: 'Ha ocurrido un problema, vuelve a intentarlo.',
//         icon: 'error',
//         confirmButtonText: 'Aceptar'
//       });
//       console.error('Error: ', response); // Añade un log para verificar el error
//     }
//   }).catch(error => {
//     console.error('Error: ', error); // Añade un log para capturar errores en la promesa
//     Swal.fire({
//       title: 'Error!',
//       text: 'Ha ocurrido un problema, vuelve a intentarlo.',
//       icon: 'error',
//       confirmButtonText: 'Aceptar'
//     });
//   });
// });


document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  let messageContent = `
      <html>
      <style>
          body: Verdana, sans-serif;
      </style>
      <body style="margin:0;padding: 0;">
          <table class="container-table" role="presentation" style="width: 100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff" >
              <tr>
                  <td align="center" style="padding:0">
                      <table role="presentation" style="width:602px;border-collapse:collapse;border:1px solid #ffffff;border-spacing:0;text-align:left;">
                          <tr>
                              <td align="center" style="padding:40px 35px;">
                                  <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                                      <tr>
                                          <td align="center" style="padding: 0 0 20px 0;">
                                              <h3 style="color:"gainsboro";font-size: large; font-weight:600; margin: 20px 0;">
                                                  Recibiste un mensaje de <span style="font-weight:700; color:rgb(15, 59, 95)">${name} (${email})</span>:
                                              </h3>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td align="center" style="padding:0;">
                                              <p style="margin: 0 0 20px 0; line-height: 1.2em; font-size: 18px">
                                                  ${message}
                                              </p>
                                          </td>
                                          <tr><td style="background-color:#364852; padding: 1px; "></td></tr>
                                      </tr>
                                  </table>
                              </td>
                          </tr>
                      </table>
                  </td>
              </tr>
          </table>
      </body>
      </html>
  `;

  Email.send({
      Host: "smtp.elasticemail.com",
      Username: "tomascesar1993@gmail.com",
      Password: "D19478D06661B455EB35D0C3E6D2BCEC7099",
      To: 'tomascesar1993@gmail.com',
      From: 'tomascesar1993@gmail.com',
      Subject: subject,
      Body: messageContent,
  }).then(function(message) {
      confirmContact(message);
  });
});

async function confirmContact(message) {
  let response = await message;
  if (response === "OK") {
      const Toast = Swal.mixin({
          toast: true,
          position: 'center',
          showConfirmButton: false,
          timer: 5000,
          timerProgressBar: true,
          didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer);
              toast.addEventListener('mouseleave', Swal.resumeTimer);
          }
      });

      Toast.fire({
          showCloseButton: true,
          background: '#0A1A2A',
          color: 'white',
          width: '600px',
          icon: 'success',
          title: `<h5 class="text-warning">Mensaje enviado correctamente!</h5><p>Gracias por tu contacto, te responderé a la brevedad.</h4>`
      });
      document.getElementById('contactForm').reset();
  } else {
    Swal.fire({
              title: 'Error!',
              text: 'Ha ocurrido un problema, vuelve a intentarlo.',
              icon: 'error',
              confirmButtonText: 'Aceptar'
            });
  }
}
