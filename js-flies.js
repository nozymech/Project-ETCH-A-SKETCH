let screen = document.getElementById("screen");
let fragment = document.createDocumentFragment();



for(i=0; i<1000; i++){
  let square = document.createElement('div');
  square.style.width = "30px"
  square.style.height = "30px"
  square.style.border = "solid"
  square.setAttribute('class','square');
  fragment.appendChild(square);
};
screen.append(fragment);

const square = document.querySelectorAll("div.square")
square.forEach((square)=> {
    square.addEventListener("mouseover",()=>{
        square.style.backgroundColor = "yellow";
    })
});