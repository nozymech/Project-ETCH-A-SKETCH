let screen = document.getElementById("screen");
let add = document.getElementById("add")
let minus = document.getElementById("minus")
let fragment = document.createDocumentFragment();
let value = 15 ;

add.addEventListener('click',()=>{
    value = value + 1;
    removeAllChildNodes(screen);
    for(i=0; i<3000; i++){
        let square = document.createElement('div');
        square.style.width = `${value}px`
        square.style.height = `${value}px`
        square.style.border = "solid"
        square.setAttribute('class','square');
        fragment.appendChild(square);
    };
    screen.append(fragment);
})


minus.addEventListener('click',()=>{
    value = value - 1;
    removeAllChildNodes(screen);
    for(i=0; i<3000; i++){
        let square = document.createElement('div');
        square.style.width = `${value}px`
        square.style.height = `${value}px`
        square.style.border = "solid"
        square.setAttribute('class','square');
        fragment.appendChild(square);
    };
    screen.append(fragment);
})

for(i=0; i<3000; i++){
    let square = document.createElement('div');
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





