let flag=0;
//funtion controller is used to increase or decrease the flag on button click where prev=-1 and next=1 
function controller(x){
    flag+=x;
    slideshow(flag);
}
slideshow(flag); //calling of the function

function slideshow(num){
    let slides=document.getElementsByClassName("slide");

    if(num==slides.length){
        flag=0;
        num=0;
    }
    if(num<0){
        flag=slides.length-1;
        num=slides.length-1;
    }
    for(let y of slides){
        y.style.display="none";
    }

    slides[num].style.display="block";
}