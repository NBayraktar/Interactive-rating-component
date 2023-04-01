document.addEventListener('click', (e) => {
  if (e.target.dataset.one) {
    changeColor(0)
  } else if (e.target.dataset.two) {
    changeColor(1)
  } else if (e.target.dataset.three) {
    changeColor(2)
  } else if (e.target.dataset.four) {
    changeColor(3)
  } else if (e.target.dataset.five) {
    changeColor(4)
  }
})

function changeColor(i) {
  if (document.querySelectorAll('.orange')) {
    document.querySelectorAll('.rate-num')[i].classList.add('orange')
  }
}