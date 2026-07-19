const flowers = [
    "images/lily.png",
    "images/babysbreath.png",
    "images/daisywhite.png",
    "images/forgetmenotbiru.png",
    "images/tulipbirumuda.png"
];

function createFlower() {

    const flower = document.createElement("img");

    flower.src = flowers[Math.floor(Math.random() * flowers.length)];

    flower.classList.add("flower");

flower.style.left = Math.random() * window.innerWidth + "px";
flower.style.width = (25 + Math.random() * 20) + "px";
flower.style.opacity = 0.7 + Math.random() * 0.3;
flower.style.transform = `rotate(${Math.random() * 360}deg)`;
flower.style.animationDuration = (6 + Math.random() * 4) + "s";

    document.body.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 10000);

}

const letterPage = document.body;

let flowerInterval;

if(letterPage){
    flowerInterval = setInterval(createFlower, 150);
}

function stopFlowers() {

    clearInterval(flowerInterval);

    document.querySelectorAll(".flower").forEach(flower => {

        flower.style.transition =
            "opacity 1s ease, transform 1s ease";

        flower.style.opacity = "0";

        flower.style.transform += " translateY(80px)";
    });

}