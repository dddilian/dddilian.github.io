window.addEventListener("load", function () {

    let sec1ImgContainer = document.getElementById("sec1Img");

    let srcs = [
        "./assets/images/section1Items/images/1.jfif",
        "./assets/images/section1Items/images/2.jfif",
        "./assets/images/section1Items/images/3.jfif",
        "./assets/images/section1Items/images/4.jfif",
        "./assets/images/section1Items/images/5.jfif",
    ]

    setInterval(() => {
        sec1ImgContainer.src = srcs[Math.floor(Math.random() * (4 - 0 + 1) + 0)]; //The maximum is 4
    }, 1500);


    // function changePic() {
    //     sec1ImgContainer.src = srcs[Math.floor(Math.random() * (4 - 0 + 1) + 0)]; //The maximum is ]
    //     requestAnimationFrame(changePic)
    // }
    // requestAnimationFrame(changePic)

});