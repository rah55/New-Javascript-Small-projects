let inp = document.querySelector("input");
let btn= document.querySelector("button");
let ul =document.querySelector("ul");


btn.addEventListener("click", function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    ul.appendChild(item);
    let dltBtn = document.createElement("button");

    dltBtn.innerText="delete";
    item.appendChild(dltBtn);

  
    inp.value="";
});

ul.addEventListener("click",function(event){
    console.log(event.target);
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
    }

})