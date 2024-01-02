document.addEventListener("DOMContentLoaded", function() {
    const numbers = document.querySelectorAll(".number");

    function showNumbers() {
        numbers.forEach((number, index) => {
            setTimeout(() => {
                number.style.animationDelay = `${index * 0.2}s`;
                number.style.opacity = 1;
                number.style.transform = "translateY(0)";
            }, 500);
        });
    }

    showNumbers();
});