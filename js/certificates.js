const cards = document.querySelectorAll(".certificate-card");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let current = 0;

function showSlide(index) {

    cards.forEach(card => card.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    cards[index].classList.add("active");
    dots[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {

    current++;

    if (current >= cards.length) {
        current = 0;
    }

    showSlide(current);

});

prevBtn.addEventListener("click", () => {

    current--;

    if (current < 0) {
        current = cards.length - 1;
    }

    showSlide(current);

});

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        current = index;

        showSlide(current);

    });

});

setInterval(() => {

    current++;

    if (current >= cards.length) {
        current = 0;
    }

    showSlide(current);

}, 4000);

showSlide(current);