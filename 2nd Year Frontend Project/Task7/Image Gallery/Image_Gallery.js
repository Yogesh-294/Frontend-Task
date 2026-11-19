
function changeImage(element, title) {

    let mainImage = document.getElementById("mainImage");

    mainImage.src = element.src.replace("w=400", "w=1200");

    document.getElementById("imageTitle").innerText =
        title;

    let thumbnails = document.querySelectorAll(".gallery img");

    thumbnails.forEach(function(img) {
        img.style.borderColor = "transparent";
    });

    element.style.borderColor = "#a87957";
}
