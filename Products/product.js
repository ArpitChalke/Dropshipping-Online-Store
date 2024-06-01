//JS for preview images
function selectImage(imageSrc, element) {
    // Update the large image source
    document.getElementById('largeImage').src = imageSrc;

    // Remove the selected class from all small images
    const images = document.querySelectorAll('.small-image');
    images.forEach(img => img.classList.remove('selected'));

    // Add the selected class to the clicked image
    element.classList.add('selected');
}


// JS for buttons
function showDiv(divId) {
    const divs = document.querySelectorAll('.content-div');
    divs.forEach(div => {
        div.style.display = 'none';
    });
    const divbtn = document.querySelectorAll('.div-btn');
    divbtn.forEach(button => {
        button.style.cssText="color: black; background-color: light-gray";
    });
    
    document.getElementById(divId).style.display = 'block';
    document.getElementById(divId+"-btn").style.cssText = "color: white; background : black";

}