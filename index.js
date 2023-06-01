const ratingEls = document.querySelectorAll(".rating")
const btnEl = document.getElementById("btn")
const containerEl = document.getElementById("container")

let selectedRating = ""

ratingEls.forEach((ratingEl) => {
  ratingEl.addEventListener("click", () => {
    removeActive()
    selectedRating = event.target.innerText || event.target.parentNode.innerText
    event.target.classList.add("active")
    event.target.parentNode.classList.add("active")
  })
})

btnEl.addEventListener("click", () => {
  if (selectedRating !== "") {
    containerEl.innerHTML = `
    <strong>Obrigado!</strong>
    <br>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <br>
    <p>Nós agradecemos seu feedback, ele é muito importante para melhorarmos a experiência com o usuário.</p>
    `
  }
})


function removeActive() {
  ratingEls.forEach((ratingEl) => {
    ratingEl.classList.remove("active")
  })
}