let screen = document.getElementById("screen");
let add = document.getElementById("add")
let minus = document.getElementById("minus")
let fragment = document.createDocumentFragment();
let value = 0 ;
let number = 16 ;

// click add screen: +1
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

// initial screen: 64*64 
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

// initial screen: 64*64 
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

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}





