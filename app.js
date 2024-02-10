const $=document;
const text=$.querySelector(".text");
let textStr=[];
$.body.addEventListener("keyup",function(event){
    let userKey=event.key;
    userKey=userKey.toUpperCase();
    let key=$.getElementById(userKey);
    if(event.code!="Space"){
        key.classList.add("hit");
        // setInterval(function(){
        //     key.classList.remove("hit");
        // },1000);
        key.addEventListener("animationend",function(){
                key.classList.remove("hit");
            
        })
    };
    if(event.code==="Space"){
        textStr.push("  ");
    }else if(event.code!="Backspace"){
        textStr.push(key.innerHTML);
    };
    if(event.code==="Backspace"){
        textStr.splice(textStr.length-1,1);
    };
    text.innerHTML=textStr.join('');
});