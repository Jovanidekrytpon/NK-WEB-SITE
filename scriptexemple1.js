// Script pour le diaporama
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    
    // Cacher tous les slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    // Revenir au premier slide s'il n'y a plus d'images
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Afficher le slide actuel
    slides[slideIndex - 1].style.display = "block";

    // Défiler automatiquement toutes les 2 secondes
    setTimeout(showSlides, 2000);
}
