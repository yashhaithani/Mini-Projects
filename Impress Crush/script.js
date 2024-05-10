function changeEarthImage() {
    var selectElement = document.getElementById("earthImages");
    var selectedImage = selectElement.value;

    var earthImgElement = document.getElementById("earthImg");
    earthImgElement.src = selectedImage;
}
