function changeBackground(color) {
  document.body.style.background = color;
}
function validateInput(input) {
  let num = parseInt(input);
  if (isNaN(num) || num < 0 || num > 255) {
    return false;
  }
  return true;
}

let newNum = 0;

function generateColor() {
  let redInput = document.getElementById("red");
  let greenInput = document.getElementById("green");
  let blueInput = document.getElementById("blue");
  let red = redInput.value;
  let green = greenInput.value;
  let blue = blueInput.value;

  if (validateInput(red) && validateInput(green) && validateInput(blue)) {
    let area = document.getElementById("colorArea");
    // let area1 = document.getElementById("colorSpace");
    area.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";

    let div = document.createElement('div');
    div.classList.add('item');
    div.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
    if (newNum < 15) {
      let body = document.querySelector('#colorSpace');
      body.appendChild(div);
      console.log(div);
      newNum++;
    } else if (newNum => 15) {
      let elements = document.querySelectorAll('.item');
      let body = document.querySelector('#colorSpace');
      body.innerHTML = '';
      body.appendChild(div);
      for (let i = 0; i < 14; i++) {
        body.appendChild(elements[i]);
      }
    }
  }
}

