var imageNumber = 1;

var timer = setInterval(switchImage, 2000)

function switchImage() {
    imageNumber += 1;
    if (imageNumber > 3){
        imageNumber = 1
    }
    document.getElementById("Rappers").src = "./img/" + imageNumber + ".jpg";
}
document.getElementById("image-Button").onclick = switchImage;

