// FAQ

const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        if(answer.style.display === "block"){
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }

    });

});


// ANIMATED STATS

function animateValue(id, start, end, duration, suffix = "") {

    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;

    let stepTime = Math.abs(Math.floor(duration / range));

    const obj = document.getElementById(id);

    const timer = setInterval(() => {

        current += increment;

        obj.innerHTML = current + suffix;

        if(current == end){
            clearInterval(timer);
        }

    }, stepTime);

}

animateValue("businesses", 0, 8, 1000, "M+");
animateValue("transactions", 0, 10, 1200, "T+");
animateValue("countries", 0, 100, 1500, "+");
animateValue("uptime", 0, 99, 1500, "%");