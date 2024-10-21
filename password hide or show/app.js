

let password=document.querySelector("input");
let image=document.querySelector("img");
console.log(password);
console.log(image);




image.addEventListener("click",check);

function check(){
    if(password.type=="password"){
        password.setAttribute("type","text");
        image.setAttribute("src","eye.png");
    }else {
       
        password.setAttribute("type","password")
        image.setAttribute("src","hidden.png");
    }
}