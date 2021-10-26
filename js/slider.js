
const 
  slider2 = document.querySelector(".slider2")
  , slider3 = document.querySelector(".slider3")
  , counter2 = document.querySelector(".counter2")
  , counter3 = document.querySelector(".counter3");
if ($(window).width() < 767) {

    function slidingProgress2() {
        slider2.style.background = `linear-gradient(to right, #FF8642 ${slider2.value}%, #ddd 1%)`,
        counter2.innerHTML = slider2.value + "%"
    }
    function slidingProgress3() {
        slider3.style.background = `linear-gradient(to right, #FF8642 ${slider3.value}%, #ddd 1%)`,
        counter3.innerHTML = slider3.value + "%"
    }
    slider2.addEventListener("input", slidingProgress2),
    slider3.addEventListener("input", slidingProgress3)
} else {

    function slidingProgress2() {
        slider2.style.background = `linear-gradient(to right, #FF8642 ${slider2.value}%, #ddd 1%)`,
        counter2.innerHTML = slider2.value + "%",
        counter2.style.left = slider2.value + "%"
    }
    function slidingProgress3() {
        slider3.style.background = `linear-gradient(to right, #FF8642 ${slider3.value}%, #ddd 1%)`,
        counter3.innerHTML = slider3.value + "%",
        counter3.style.left = slider3.value + "%"
    }
   
    slider2.addEventListener("input", slidingProgress2),
    slider3.addEventListener("input", slidingProgress3)
}