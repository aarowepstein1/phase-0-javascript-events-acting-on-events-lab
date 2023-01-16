const dodger = document.getElementById("dodger");

document.addEventListener("keydown", function (event) {
    if (e.key === "ArrowLeft") {
       moveDodgerLeft(); 
    }
  });
  function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
      moveDodgerRight();
    }
  });

function moveDodgerUp() {
    const bottomNums = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNums, 10);

    if (bottom < 380) {
        dodger.style.bottom = `${bottom + 1}px`
    }
  }
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
      moveDodgerUp();
    }
  });