document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".read-more").addEventListener("click", () => {
        window.open("about.html", "_blank");
    });

    //not working for some stupid reason
    // document.querySelectorAll(".logo").forEach((logo) => {
    //     logo.addEventListener("click", () => {
    //         window.location.href = "index.html";
    //     });
    // });
});

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
        faqQuestions.forEach((item) => {
            if (item !== question) {
                item.classList.remove("active"); // Remove 'active' class to reset arrow rotation
                item.nextElementSibling.style.maxHeight = null; // Collapse the answer
            }
        });

        question.classList.toggle("active");

        const answer = question.nextElementSibling;

        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});

let loadingScreen = document.querySelector(".loadingScreen");
window.addEventListener("load", function () {
    setTimeout(function () {
        loadingScreen.style.display = "none";
    }, 2000); // 2000ms delay
});
