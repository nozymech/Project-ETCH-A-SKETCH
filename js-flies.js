const container = document.getElementById("container")
container.style.display = "flex";
container.style.flexWrap = "wrap"
container.style.width = "480px";


// create 256 square 
for(i=0; i<256; i++){
    const div = document.createElement('div')
    div.setAttribute('class','square');
    div.style.width="30px";
    div.style.height="30px";
    div.style.outline= 'solid';
    container.append(div);
}

const square = document.querySelectorAll('div.square')
// get all div class name = square
square.forEach((square)=> {
    // use forEach to loop all square & code want to excute to every square 
    square.addEventListener("mouseover", ()=> {
        square.style.backgroundColor = "yellow";
    })
    square.addEventListener("mouseout", ()=> {
        square.style.backgroundColor = "";
    })
} )



