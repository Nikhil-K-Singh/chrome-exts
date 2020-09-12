document.addEventListener('DOMContentLoaded',function ()
{
    console.log("ran");
    const imagePaths = ["pic1.jpg","pic2.jpg","pic3.jpg"];
    const image = imagePaths[Math.floor(Math.random()*imagePaths.length)];
    console.log(image);
    document.getElementById("image").setAttribute(
        "src",
        `./images/${image}`
    )
},
false);