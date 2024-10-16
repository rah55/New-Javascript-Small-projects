const notes=document.querySelector(".note");
const btn = document.querySelector("button");
const note=document.querySelectorAll(".para");




btn.addEventListener("click",function(){

let paragraph=document.createElement("p");
let image=document.createElement("img");
image.src="remove.png";
paragraph.className="para";
image.className="delete"
paragraph.setAttribute("contentEditable","true")
notes.appendChild(paragraph).appendChild(image);

});


notes.addEventListener("click",function(e){
    if(e.target.tagName=="IMG"){
        e.target.parentElement.remove();
    }
})