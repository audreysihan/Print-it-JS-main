const slides = [
    {
        "image":"slide1.jpg",
        "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image":"slide2.jpg",
        "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image":"slide3.jpg",
        "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image":"slide4.png",
        "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
    }
]

//creation d'une variable qui détermine la position du carrousel
let position = 0;

const numberSlide = slides.length;

//recuperation de la balise image 
const img = document.querySelector(".banner-img");

//récuperation de la balise paragraphe
const p = document.querySelector("#banner p")

//création des points
createDots()

// recuperation des balises point
const listPoints = document.querySelectorAll(".dot");

//selection du premier point

updateDot()

//flèche gauche
const left = document.querySelector('.arrow_left');
left.addEventListener("click", function () {
    if (position == 0) {
        position = numberSlide - 1;
    }
    else {
        position--;
    }
        updateCaroussel(position);
		updateDot(); //mettre à jour les points
});

//flèche droite
const right = document.querySelector('.arrow_right');
right.addEventListener("click", function () {
    if (position == numberSlide - 1) {
        position = 0;
    } else {
            position++;
    }
    updateCaroussel(position);
	updateDot();
});

//les dots
function createDots(){
     const dots = document.querySelector(".dots");
    for (let index = 0; index < slides.length; index++) {
        // Pour chaque element dans la boucle je vais créer un dot
        const dot= document.createElement("div");
        dot.setAttribute("class", "dot");
        dots.appendChild(dot);
    }
}

//mettre le dot en actif sur la position
function updateDot() {
   for (let index = 0; index < listPoints.length; index++) {
    const dot = listPoints[index];
    if (index == position){
        dot.classList.add('dot_selected');
  }
  else{
    dot.classList.remove('dot_selected');
  }
    }
}

//changement des images et du texte en fonction de la position
function updateCaroussel(position){
    const element = slides[position];
        img.setAttribute("src" , "./assets/images/slideshow/"+ element.image);
		p.innerHTML = element.tagLine
}

