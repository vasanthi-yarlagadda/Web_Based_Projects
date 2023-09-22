document.addEventListener("DOMContentLoaded", function() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  for (let anchor of anchorLinks) {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({
        behavior: "smooth"
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const nameInput = document.querySelector('input[type="text"]');
    const emailInput = document.querySelector('input[type="email"]');
    const messageInput = document.querySelector("textarea");
    
    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    alert("Request has been sent");

    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  });
});
