let value = '';
document.addEventListener('click', (e) => {

  if (e.target.dataset.rateOne) {
    value = document.querySelector('.label-one').innerHTML;
  } else if (e.target.dataset.rateTwo) {
    value = document.querySelector('.label-two').innerHTML;
  } else if (e.target.dataset.rateThree) {
    value = document.querySelector('.label-three').innerHTML;
  } else if (e.target.dataset.rateFour) {
    value = document.querySelector('.label-four').innerHTML;
  } else if (e.target.dataset.rateFive) {
    value = document.querySelector('.label-five').innerHTML;
  }

  document.addEventListener('submit', display);
})

function display(e) {
  if (value !== '') {
    document.querySelector('.rating-state').innerHTML = `You selected ${value} out of 5`;
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.modal').style.display = 'block';
    e.preventDefault()
  } else {
    alert('Please choose rate 1 to 5!');
  }
}