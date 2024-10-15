const api="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
const inputVal= document.querySelector("input");

document.querySelector("#btn").addEventListener("click",generate);

function generate(){
    const link=api +inputVal.value;
    document.querySelector("img").setAttribute("src",link);
    display.classList.add("imgBox");
}