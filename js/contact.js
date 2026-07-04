const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const button = form.querySelector("button");

    button.innerHTML = "✔ Message Sent";

    button.style.background = "#16A34A";

    setTimeout(()=>{

        button.innerHTML='<i class="fas fa-paper-plane"></i> Send Message';

        button.style.background="#2563EB";

        form.reset();

    },2500);

});