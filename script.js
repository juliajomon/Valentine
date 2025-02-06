function redirectToGif() {
    window.location.href = "valentine_gif.html";
}

function moveButton(btn) {
    const x = Math.random() * (window.innerWidth - btn.clientWidth);
    const y = Math.random() * (window.innerHeight - btn.clientHeight);
    btn.style.position = "absolute";
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
}
function redirectToGif() {
    window.location.href = "valentine_gif.html";
}
