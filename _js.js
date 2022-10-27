
const btn = document.querySelector('.btn-print');

btn.onclick = () => printImage();

function printImage(){
    const target = document.querySelector('.container');
    html2canvas(target).then((canvas) => {
        const base64image = canvas.toDataURL("image/png");
        window.location.href = base64image;
    });
}