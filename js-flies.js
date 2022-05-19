const container = document.getElementById("container")
container.style.display = "flex";
container.style.flexWrap = "wrap"
container.style.width = "960px";
let number = 0;
let side = 0;
const btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
    number = prompt("How many number of squares per side do you need?");
    let numSquare = 0
    numSquare = number*number
    for(i=0; i<(numSquare); i++){
        const div = document.createElement('div')
        div.setAttribute('class','square');
        side = 960/number;
        div.style.width=`${side}px`;
        div.style.height=`${side}px`;
        div.style.outline= 'solid';
        container.append(div);

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
    }
})




