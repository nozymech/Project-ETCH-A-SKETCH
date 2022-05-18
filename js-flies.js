const container = document.getElementById("container")
container.style.display = "flex";
container.style.flexWrap = "wrap"
container.style.width = "160px";



for(i=0; i<256; i++){
const div = document.createElement('div')
div.style.width="10px";
div.style.height="10px";
div.style.outline= 'solid';
container.append(div);
}

