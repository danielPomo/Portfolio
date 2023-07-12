let stars = document.getElementById("stars")
let moon = document.getElementById("moon")
let mountainsBehind = document.getElementById("mountains-behind")
let mountainsFront = document.getElementById("mountains-front");
let parallaxText = document.getElementById("paralax-text")
let header = document.querySelector("header")

window.addEventListener("scroll", function () {
    let scrollY = window.scrollY
    stars.style.left = scrollY * 0.35 + "px"
    moon.style.top = scrollY * 1.05 + "px"
    mountainsBehind.style.top = scrollY * 0.05 + "px"
    mountainsFront.style.top = scrollY * 0 + "px"
    parallaxText.style.marginRight = scrollY * 4 + "px"
    parallaxText.style.marginTop = scrollY * 1.5 + "px"
    header.style.top = scrollY * 0.5 + "px"
} )
