// Your code here
const dodger = document.getElementById('dodger');

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);
  
    if (left < 360) { // assuming the game width is 400px
      dodger.style.left = `${left + 1}px`;
    }
  }
