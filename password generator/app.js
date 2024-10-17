const upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol="[]{}!@#$%^&*()><?/':";

const maxLength=12;

const allChar= upperCase +lowerCase+number+symbol;

const inputValue=document.querySelector("input");



function createPassword(){
    let password="";
    password = upperCase[Math.floor(Math.random()*upperCase.length)];
    password= password +lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password= password +number[Math.floor(Math.random()*number.length)];
    password= password +symbol[Math.floor(Math.random()*symbol.length)];

    while(maxLength>password.length){
        password =password +allChar[Math.floor(Math.random()*allChar.length)];   
    }
    inputValue.value=password;
}

document.querySelector("button").addEventListener("click",createPassword);

document.querySelector("#copy").addEventListener("click",function(){
    inputValue.select();
    document.execCommand("copy");
})