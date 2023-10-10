function changeBackground(color) {
    document.body.style.background = color;
}
function generateColor() {
    var red = parseInt(document.getElementById("red").value);
    var green = parseInt(document.getElementById("green").value);
    var blue = parseInt(document.getElementById("blue").value);
    
    if (isNaN(red) || red < 0 || red > 255 || isNaN(green) || green < 0 || green > 255 || isNaN(blue) || blue < 0 || blue > 255) {
      alert("Please enter valid RGB values between 0 and 255.");
      return;
    }
    var color = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.getElementById("colorArea").style.backgroundColor = color;
}