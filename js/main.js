let slideIndex = 1
let slides = document.querySelectorAll('.item')
showSlides(slideIndex)

function plusSlide() {
    showSlides(slideIndex += 1)
    clearInterval(s)
}
function minusSlide() {
    showSlides(slideIndex -= 1)
    clearInterval(s)
}
function wave() {
  showSlides(slideIndex += 1)
}

function showSlides(n) {
    n > slides.length? slideIndex =1 : null
    n < 1 ? slideIndex = slides.length : null
  slides.forEach((item,i) => slides[i].style.display = 'none')
  slides[slideIndex - 1].style.display = "block";
}
let s = setInterval(wave,2500)
