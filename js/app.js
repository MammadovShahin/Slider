let items = $('.slider').find('.item');
let activeSlider = 0;

const handlePrev = () =>{
    clearInterval();
    if(activeSlider > 0){
        activeSlider = activeSlider -1;
        items.stop().fadeOut();
        items.eq(activeSlider).stop().fadeIn();
    }
    return false;
};

const handleNext = () =>{
    clearInterval();
    if(activeSlider < (items.length) - 1){
        activeSlider = activeSlider + 1;
        items.stop().fadeOut();
        items.eq(activeSlider).stop().fadeIn();

    } return false;
}

const autoSlider = () =>{
    if(activeSlider <items.length){
        activeSlider = activeSlider + 1;
    }
    if(activeSlider === items.length){
        activeSlider =0;
    }

    items.stop().fadeOut();
    items.eq(activeSlider).stop().fadeIn(); 

}

$(document).ready(function(){
    setInterval(() =>{
        autoSlider();
    }, 3000);
})