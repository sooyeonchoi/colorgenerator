const divs = document.querySelectorAll(".box"),
  gradient = document.querySelector(".gradient");

function rndRgb() {
  let red = Math.floor(Math.random() * 256)
    .toString(16)
    .toUpperCase();
  let green = Math.floor(Math.random() * 256)
    .toString(16)
    .toUpperCase();
  let blue = Math.floor(Math.random() * 256)
    .toString(16)
    .toUpperCase();
  let color = `#${red}${green}${blue}`;
  return color; //-> rgb(10,123,44)
}

/*
const rndRgba =  () => {
  let color = ``;
  let red = Math.floor(Math.random()*256) //-> 0 - 255
  let green = Math.floor(Math.random()*256)
  let blue = Math.floor(Math.random()*256)
    let alpha = (Math.random()*1).toFixed(1)

  color = `rgba(${red},${green},${blue}, ${alpha})`
  return color //-> rgb(10,123,44)
} 

const rndHex = () => {
  let color = `#`
  let letters = "a,b,c,d,e,f".split(",")
  letters.map(letter => letter.toUpperCase())
  let numbers = [0,1,2,3,4,5,6,7,8,9]
  let array = [...letters, ...numbers]
  
  for (let i = 0; i < 6; i++) {
    color += `${array[Math.ceil(Math.random()*16)]}`
  }
  return color
  
} */
/*   const gradient = `linear-gradient(180deg,${rndRgba()},${rndRgba()})`; */

const copy = data => {
  const element = document.createElement("textarea");

  element.setAttribute("id", "copied");

  element.value = data;

  document.body.appendChild(element);

  element.select();

  document.execCommand("copy");

  document.body.removeChild(element);
};

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", e => {
    let commonColor = rndRgb();
    e.style.backgroundColor = commonColor;

    copy(commonColor);
  });
}
