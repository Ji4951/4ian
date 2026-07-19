const openBtn = document.getElementById("openBtn");

openBtn.addEventListener("click", () => {

    // Kalau fungsi stopFlowers ada, jalankan
    if (typeof stopFlowers === "function") {
        stopFlowers();
    }

    // Fade kartu
    document.querySelector(".container").style.transition = "opacity .8s";
    document.querySelector(".container").style.opacity = "0";

    // Baru pindah halaman
    setTimeout(() => {
        window.location.href = "password.html";
    }, 900);

});

document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();

        document.body.classList.add("fade-out");

        setTimeout(() => {
            window.location = this.href;
        }, 400);
    });
});