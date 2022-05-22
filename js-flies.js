let screen = document.getElementById("screen");
let add = document.getElementById("add")
let minus = document.getElementById("minus")
let fragment = document.createDocumentFragment();
// store square size
let value = 0 ;
// store number per side
let number = 16 ;

// initial screen: 16*16 square per side
for(i=0; i<number*number; i++){
    let square = document.createElement('div');
    value = 580/number;
    square.style.width = `${value}px`
    square.style.height = `${value}px`
    square.style.border = "solid"
    square.setAttribute('class','square');
    fragment.appendChild(square);
};
screen.append(fragment);

let square = document.querySelectorAll("div.square")
square.forEach((square)=> {
    square.addEventListener("mouseover",()=>{
        square.style.backgroundColor = "yellow";
    })
});

// click add :  +1 square per side 
add.addEventListener('click',()=>{
    number = number + 1;
    removeAllChildNodes(screen);
    for(i=0; i<number*number; i++){
        let square = document.createElement('div');
        value = 580/number;
        square.style.width = `${value}px`
        square.style.height = `${value}px`
        square.style.border = "solid"
        square.setAttribute('class','square');
        fragment.appendChild(square);
    };
    screen.append(fragment);

    let square = document.querySelectorAll("div.square")
square.forEach((square)=> {
    square.addEventListener("mouseover",()=>{
        square.style.backgroundColor = "yellow";
    })
});
})

// click minus :  -1 square per side 
minus.addEventListener('click',()=>{
    number = number - 1;
    removeAllChildNodes(screen);
    for(i=0; i<number*number; i++){
        let square = document.createElement('div');
        value = 580/number;
        square.style.width = `${value}px`
        square.style.height = `${value}px`
        square.style.border = "solid"
        square.setAttribute('class','square');
        fragment.appendChild(square);
    };
    screen.append(fragment);

    let square = document.querySelectorAll("div.square")
square.forEach((square)=> {
    square.addEventListener("mouseover",()=>{
        square.style.backgroundColor = "yellow";
    })
});
})


// remove all element
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}





