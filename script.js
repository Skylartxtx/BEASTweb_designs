/*Beast*/
    /*for mobile*/
    if(window.innerWidth<760){
        var he3element=document.getElementById('Homeprompt');
        he3element.textContent='Click on the image above to start your adventure!'
    }

/*Card animation*/
let cards = document.querySelectorAll(".card");
/*set*/
function setActive(){
    /*remove active class for each*/
    cards.forEach((card)=>{
        card.classList.remove("active");
    })
    /*add active class to this card*/
    this.classList.add("active");
}
/*set click event for card*/
cards.forEach((card)=>{
    card.addEventListener("mouseenter",setActive);
    
});

/*set mouseleave for card*/
cards.forEach((card)=>{
    card.addEventListener("mouseleave",function(){
        this.classList.remove("active")
    });

});

/*PAGE ABOUT
const  tutor = document.querySelector(".teaching")
tutor.addEventListener("click",function)
*/
document.querySelector(".teaching").onclick =()=>{
    document.querySelector(".TeachingPicture").classList.add("active");
    document.querySelector(".Curtain").classList.add("active");
}

document.querySelector(".TeachingPicture .close-btn").onclick =()=>{
    document.querySelector(".TeachingPicture").classList.remove("active");
    document.querySelector(".Curtain").classList.remove("active");
}

/* for detial page1-Introduction*/
        let left=document.querySelector(".button-left")
        let right=document.querySelector(".button-right")
        let min=document.querySelectorAll(".min")
        let images=document.querySelector(".images")
        
        let index=0
        let time
        
            /*define the position for current picture*/
        function position(){
            images.style.left=(index * -100)+"%"
        }
            /*add position*/
        function add(){
            if(index>= min.length-1){
                index=0
            }else{
                index++
            }
        }
            /*desc position*/
        function desc(){
            if(index<1){
                index=min.length-1
            }else{
                /*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
                index--
            }
        }
            /*every 5s Introindex+1*/
        function timer(){
            time=setInterval(()=>{
                index++
                /*use function to determine*/
                desc()
                add()
                position()
            },5000)
        }
            /*botton*/
        left.addEventListener("click",()=>{
            desc()
            position()
            clearInterval(time)/*stop the Introtimer function when user use the button*/
            timer()/*restart Introtimer function again*/
        })
        right.addEventListener("click",()=>{
            add()
            position()
            clearInterval(time)/*stop the Introtimer function when user use the button*/
            timer()/*restart Introtimer function again*/
        })
        /*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
        for(let i=0;i<min.length;i++){
            min[i].addEventListener("click",()=>{
                index = i
                
                position()
                clearInterval(time)
                timer()
            })
        }
        
        timer()

/* for detial page2-Archeaology*/

let antiquePics = document.querySelectorAll(".antiquePic");
/*set*/
function enterHandler(e){
    
    e.target.setAttribute('zoomed',1)
}
function moveHandler(e){
    let rect = e.target.getBoundingClientRect()/*get the position*/
    let x=e.offsetX/rect.width
    let y=e.offsetY/rect.height

    e.target.style.setProperty('--x',x)/*css varables*/
    e.target.style.setProperty('--y',y)/*css varables*/
}
function leaveHandler(e){
    e.target.removeAttribute('zoomed')
   
}
/*set click event for card*/
antiquePics.forEach((antiquePic)=>{
    antiquePic.addEventListener("mouseenter",enterHandler);
    antiquePic.addEventListener("mousemove",moveHandler);
    antiquePic.addEventListener("mouseleave",leaveHandler)
});



/*
img.onmousemove = function (e) {
    
    let x = e.clientX;
    let y = e.clientY;
    if (x+200>window.innerWidth){           *check window*
        magnifier.style.left=window.innerWidth-200+'px';
    }else{
        magnifier.style.left = x +'px';

    }

    magnifier.style.top  = y +'px';
    let bgx = -x*5 +200/2+'px';
    let bgy = -y*5 +200/2+'px';
    console.log(bgx,bgy);
    magnifier.style.backgroundPosition = '${bgx} ${bgy}';

};

*/