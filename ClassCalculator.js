let buttons = document.querySelectorAll(".btn");
let screen = document.querySelector("#screen");

buttons.forEach((button) => {
   button.addEventListener("click",(e) =>{
    if(e.target.innerText == "="){
        let result = eval(screen.innerText);
        screen.innerText = result;
    }
    else if(e.target.innerText == "AC"){
        screen.innerText = 0
    }
    else if(e.target.innerText == "DEL"){
        screen.innerText = screen.innerText.slice(0, -1)
    }
   else{
    if(screen.innerText == 0){
        screen.innerText = e.target.innerText;
    }else{
        screen.innerText +=e.target.innerText
    }
   }
   })
})