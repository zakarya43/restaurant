
let options = document.querySelectorAll(".opt");

options.forEach((e) => {

    e.addEventListener("click", () => {
        options.forEach((e)=> {
            e.classList.remove("active")
        });
        e.classList.add("active");
    })

});

let txts = document.querySelectorAll(".txt");

let imgs = document.querySelectorAll(".s-img");
// txts[0].style.zIndex = "3";

options.forEach((e)=>{
    e.addEventListener("click",()=>{
        imgs.forEach(e=>{
            e.classList.add("fade");
        })
        txts.forEach(e=>{
            e.classList.add("txt-fade");
        })


        if(e.classList.contains("o-1")){


            imgs.forEach(e=>{
                if(e.classList.contains("i-1")){
                    e.classList.remove("fade");
                }
            })

            txts.forEach( e => {
                if(e.classList.contains("t-1")){e.classList.remove("txt-fade")}});

        }else if(e.classList.contains("o-2")){


            imgs.forEach(e=>{
                if(e.classList.contains("i-2")){
                    e.classList.remove("fade");
                }
            })

            txts.forEach( e => {
                if(e.classList.contains("t-2")){e.classList.remove("txt-fade")}});
        }else{


            imgs.forEach(e=>{
                if(e.classList.contains("i-3")){
                    e.classList.remove("fade");
                }
            })

            txts.forEach( e => {
                if(e.classList.contains("t-3")){e.classList.remove("txt-fade")}});
        }
    });
});

let emailInput = document.querySelector(".email");
let validValue = /\w+@\w+.(com|net|org|io)/ig;
let EmailvalidMessage = document.querySelector(".email-valmessage");

emailInput.addEventListener("input", ()=>{
    if(emailInput.value.match(validValue)){
        emailInput.style.borderBottom = "green solid 1px";
        EmailvalidMessage.style.display = "none";
        emailInput.style.color = "black";
    }else{
        EmailvalidMessage.style.display = "block";
        emailInput.style.borderBottom = "#B54949 solid 1px";
        emailInput.classList.add("nvalid");
        emailInput.style.color = "#B54949";
    }
})

let pdInputs = document.querySelectorAll(".p-d");
let pdvalMsg = document.querySelector(".pd-val-msg");
let pdTxt = document.querySelector(".pick-date p")


pdInputs.forEach((e)=>{
    e.addEventListener("input", ()=>{
        if(pdInputs[0].value.length == 2 && pdInputs[1].value.length == 2 && pdInputs[2].value.length == 4){
            for(let i=0; i<3; i++){
            pdInputs[i].style.borderBottom = "green solid 1px";
            pdInputs[i].style.color = "black";
            }
            pdvalMsg.style.display = "none";
            pdTxt.style.color = "black";
        }else{
            pdvalMsg.style.display = "block";
            pdTxt.style.color = "#B54949";
            for(let i=0; i<3; i++){
                pdInputs[i].style.color = "#B54949";
                pdInputs[i].style.borderBottom = "#B54949 solid 1px";
                pdInputs[i].classList.add("nvalid");
                }
        }
    })
})


let ptInputs = document.querySelectorAll(".p-t");
let ptvalMsg = document.querySelector(".pt-val-msg");
let ptTxt = document.querySelector(".pick-time p")


ptInputs.forEach((e)=>{
    e.addEventListener("input", ()=>{
        if(ptInputs[0].value.length == 2 && ptInputs[1].value.length == 2){
            for(let i=0; i<3; i++){
            ptInputs[i].style.borderBottom = "green solid 1px";
            ptInputs[i].style.color = "black";
            }
            ptvalMsg.style.display = "none";
            ptTxt.style.color = "black";
        }else{
            ptvalMsg.style.display = "block";
            ptTxt.style.color = "#B54949";
            for(let i=0; i<2; i++){
                ptInputs[i].style.color = "#B54949";
                ptInputs[i].style.borderBottom = "#B54949 solid 1px";
                ptInputs[i].classList.add("nvalid");
                }
        }
    })
})

let count = 2;
let counterTxt = document.querySelector(".res-counter p");
let decBtn = document.querySelector(".decreasebtn");
let incBtn = document.querySelector(".increasebtn");

counterTxt.innerHTML = `${count} people`;

incBtn.addEventListener("click", ()=>{
    count+=1;
    counterTxt.innerHTML = `${count} people`
})
decBtn.addEventListener("click", ()=>{
    count-=1;
    counterTxt.innerHTML = `${count} people`
})
