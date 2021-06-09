const slider1 = document.getElementById("glide1");  
const slider2 = document.getElementById("glide2"); 
if(slider1) 
new Glide(slider1, { 
type: "carousel", 
startAt:0, 
autoplay: 3000, 
hoverpause:true,
perView:1, 
animationDuration:800, 
animationTimingFunc:"linear",
}).mount(); 
 
if(slider2) 
new Glide(slider2, { 
type: "carousel", 
startAt:0, 
autoplay: 2000, 
hoverpause:false,
perView:4, 
animationDuration:800, 
animationTimingFunc:"linear", 
breakpoints:{ 
    1200:{ 
        perView:3,
    }, 
    786:{ 
        perView:2,
    },
}
}).mount();