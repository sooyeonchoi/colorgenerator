const divs = document.querySelectorAll(".box"),
  gradient = document.querySelector(".gradient");

function rndRgb() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return [red, green, blue]; //-> rgb(10,123,44)
}

function rndHex(c) {
  let hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(l) {
  return ("#" + rndHex(l[0]) + rndHex(l[1]) + rndHex(l[2])).toUpperCase();
}
console.log(rgbToHex(rndRgb()));

const copy = data => {
  const element = document.createElement("textarea");

  element.setAttribute("id", "copied");

  element.value = data;

  document.body.appendChild(element);

  element.select();

  document.execCommand("copy");

  document.body.removeChild(element);
};

divs.forEach((e, i) => {
  e.addEventListener("click", e => {
    let color = rgbToHex(rndRgb());
    e.target.style.backgroundColor = color;
    copy(color);
  });
});
