const nextBtn = document.getElementById("nextBtn");
const giftSection = document.getElementById("giftSection");

let typed = false;
nextBtn.onclick = () => {
    nextBtn.style.display = "none";
    giftSection.style.display = "block";
};

const box=document.getElementById("giftBox");
const teddy=document.getElementById("teddyArea");
const message=document.getElementById("message");

const lines = [
"I'm not a real teddy bear...",
"I only exist on this little website.",
"So whenever you see me,",
"I hope you'll remember...",
"that someone out there wishes...",
"you nothing but happiness.",
"And...",
"Happy one month since we met, Ian.",
"See you in our next chapter :)",
"- Jian"
];

box.onclick = () => {

    if (typed) return;

    typed = true;

    box.src = "images/gift-open.png";

    setTimeout(() => {

        teddy.classList.remove("hidden");

        typeLines();

    }, 600);

};

function typeLines(){

let i=0;

function show(){

    if(i >= lines.length) return;

    const p = document.createElement("p");
    p.className = "line";
    p.textContent = lines[i];

    message.appendChild(p);

    // 


    setTimeout(() => {
        p.classList.add("show");
    }, 50);

    i++;

    setTimeout(show, 1800);

}

box.style.animation = "pop .5s ease";

show();

}
