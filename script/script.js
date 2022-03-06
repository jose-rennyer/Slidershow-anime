let sliders = document.querySelectorAll(".slider--item").length
let sliderDaVez = 0
let sliderHeight = document.querySelector(".slider--item").clientHeight


document.querySelector(".slider-buttons").style.height = `${sliderHeight}px`
document.querySelector(".slider-width").style.width = `calc(100vw * ${sliders})`

function prev(){
    sliderDaVez--
    if(sliderDaVez < 0){
        sliderDaVez = sliders - 1
    }
    atualizarSlide()
}
function prox(){
    sliderDaVez++
    if(sliderDaVez > sliders - 1){
        sliderDaVez = 0
    }
    atualizarSlide()
}

function atualizarSlide(){
    let sliderSize = document.querySelector(".slider--item").clientWidth

    document.querySelector(".slider-width").style.marginLeft = `-${sliderDaVez * sliderSize}px`
}

//mini-slider - com seleção abaixo
//Proximo slider project

let numslider = document.querySelectorAll(".sliderDaVez").length
let sliderDoMomento = 0;
let sliderInfo = document.querySelector(".sliderDaVez")
let areaslider = document.querySelector(".slider-area")
let novoslide = document.querySelector(".novo-slide")
//let sliderheight = document.querySelector(".sliderDaVez").clientHeight;
//let sliderWidth = document.querySelector(".sliderDaVez").clientWidth;

areaslider.style.width = `${novoslide.clientWidth * numslider}px`


function atualize(num){
    document.querySelector(".slider-area").style.marginLeft = `-${num * sliderInfo.clientWidth}px`
}

document.querySelectorAll(".bola").forEach(function(item, index){
    item.setAttribute("data-key", index)
    let ind = item.getAttribute("data-key")
    item.addEventListener("click", function(){
        atualize(ind)
    })
})