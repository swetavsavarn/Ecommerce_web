
const imgs = document.getElementById("imgs");

const img = document.querySelectorAll("#imgs img");

let idx = 0;

function run() {
    idx++;

    // if(idx<=0)
    // {
    //     idx = img.length;
    // }
    if (idx > img.length-1) {
        idx = 0;
    }
    // if(idx>img.length-1)
    // {  
    //     idx--;
    //     // idx = idx%img.length;
    // }


    imgs.style.transform = `translateX(${-idx * 1000}px)`;
}

setInterval(run, 2000);

const btn = document.getElementById("btn");
const container= document.getElementById("container");

const nav = document.getElementById("nav");

btn.addEventListener("click", () => {
    nav.classList.toggle("active");
    btn.classList.toggle("active");
});

const hii = document.getElementById('hii');

hii.addEventListener('click',() => {
    
    createNotification();
})

function createNotification() {
    const notification = document.createElement('div');
    notification.classList.add('toast');
    notification.innerText = "Hello! Welcome to Our E-commerce Website"
    container.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 2000);
}

const open = document.getElementById("open");

const close = document.getElementById("close");

const popup = document.getElementById("popupcontainer");

open.addEventListener("click",()=> {
    popup.classList.add("active");
    setTimeout(() => {
        popup.classList.remove("active")
    }, 5000);
   
})
close.addEventListener("click",() => 
{
    popup.classList.remove("active")
})


const dark = document.getElementById("darkmode");
dark.addEventListener("click", ()=> {
    window.confirm("Want to change the  theme ?");
   var  ibody = document.body;
   ibody.classList.toggle("dark");
})
window.addEventListener('load',()=> {
    popup.classList.add("active");
     setTimeout(() => {
        popup.classList.remove("active")
    }, 5000);
})

const zoom = document.getElementById("zoom");

const zoomimg = document.getElementById("zoomimg");

zoom.addEventListener("mousemove", (e) => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
 
    zoomimg.style.transformOrigin = `${x}px ${y}px`;

    zoomimg.style.transform = "scale(2.5)";
})
zoom.addEventListener("mouseleave",() => {
    zoomimg.style.transformOrigin = "center center";
    zoomimg.style.transform = "scale(1)";
})