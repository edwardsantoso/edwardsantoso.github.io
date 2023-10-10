// script.js
document.addEventListener("DOMContentLoaded", function () {
    const backup = document.getElementById("backup");
    const divone_button = document.getElementById("divone");
    const div_one = document.getElementById("divone_target");
    const divtwo_button = document.getElementById("divtwo");
    const div_two = document.getElementById("divtwo_target");
    const divthree_button = document.getElementById("divthree");
    const div_three = document.getElementById("divthree_target");
    const divfour_button = document.getElementById("divfour");
    const div_four = document.getElementById("divfour_target");
    const divfive_button = document.getElementById("divfive");
    const div_five = document.getElementById("divfive_target");
    const divsix_button = document.getElementById("divsix");
    const div_six = document.getElementById("divsix_target");

    backup.addEventListener("click", function () {
        // Scroll to the target section
        back_up.scrollIntoView({ behavior: "smooth" });
    });

    divone_button.addEventListener("click", function () {
        // Scroll to the target section
        div_one.scrollIntoView({ behavior: "smooth" });
    });
    divtwo_button.addEventListener("click", function () {
        // Scroll to the target section
        div_two.scrollIntoView({ behavior: "smooth" });
    });
    divthree_button.addEventListener("click", function () {
        // Scroll to the target section
        div_three.scrollIntoView({ behavior: "smooth" });
    });
    divfour_button.addEventListener("click", function () {
        // Scroll to the target section
        div_four.scrollIntoView({ behavior: "smooth" });
    });
    divfive_button.addEventListener("click", function () {
        // Scroll to the target section
        div_five.scrollIntoView({ behavior: "smooth" });
    });
    divsix_button.addEventListener("click", function () {
        // Scroll to the target section
        div_six.scrollIntoView({ behavior: "smooth" });
    });
});
