let left = document.querySelector("#left");
let right = document.querySelector("#right");
let scrollBar=document.querySelector("#image-gallery");
console.log(left);
console.log(scrollBar);


left.addEventListener("click",()=>{
    scrollBar.style.scrollBehavior ="smooth";
    scrollBar.scrollLeft -= 900;
});

right.addEventListener("click",()=>{
    scrollBar.style.scrollBehavior ="smooth";
    scrollBar.scrollLeft +=900;
});