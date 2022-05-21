/*"Merci de nous avoir envoyé un message. Je ne pourrais pas y répondre.";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  }); */
  const message = "Merci de nous avoir envoyé un message. Je ne pourrais pas y répondre.";
  const contactForm= document.getElementById("contactForm");
  contactForm.addEventListener("submit", function (event) {event.preventDefault();
    alert(message);
  });