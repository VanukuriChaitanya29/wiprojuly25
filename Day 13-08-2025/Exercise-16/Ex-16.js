let images = [
    "https://picsum.photos/id/237/300/200",
    "https://picsum.photos/id/109/300/200",
    "https://picsum.photos/id/239/300/200",
    "https://picsum.photos/id/1015/300/200"
];

let currentIndex = 0;
let galleryImage = document.getElementById("galleryImage");

function updateImage() {
    galleryImage.src = images[currentIndex];
}

updateImage();

document.getElementById("nextBtn").addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

document.getElementById("prevBtn").addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});
