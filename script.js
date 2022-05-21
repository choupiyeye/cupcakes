"Merci de nous avoir envoyé un message. Je ne pourrais pas y répondre.";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });