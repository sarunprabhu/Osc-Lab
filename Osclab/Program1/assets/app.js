let images=["./img1.jpg",
    "./img2.jpg",
    "./img3.jpg",
    "./img4.jpg",
    "./img5.jpg"
    

];
let index=0;
let slide=document.getElementById("slide_show");
let changeImage=()=>{
    index++;
    if(index >=images.length)
    {
        index=0;

    }
slide.src=images[index];
}
setInterval(changeImage,2000);