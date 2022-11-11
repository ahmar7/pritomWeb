let hidden = document.getElementById("extras");
let svgrotate = document.getElementById("svgrotate");

let showMore = () => {
  hidden.classList.toggle("hide-it");
  svgrotate.classList.toggle("rotate-it");
};
// $(".slick-slide").slick();

// let slickSlide = document.getElementsByClassName("slick-slide");
// for (let i = 0; i < slickSlide.length; i++) {
//   const element = slickSlide[i];
//   console.log(element, "new");
// }
var i = 0;
var txt = "Lorem ipsum typing effect!"; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

// typing text animation script
$(document).ready(function () {
  var typed = new Typed(".typing", {
    strings: ["Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});
