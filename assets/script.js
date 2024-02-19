const slides = [
	{

		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{

		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{

		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{

		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


//déclaration variables
const bannerImg = document.querySelector('.banner-img');
const arrowLeft = document.getElementById('arrow_left');
const arrowRight = document.getElementById('arrow_right');
const tagline = document.querySelector('#banner p');
const dots = document.querySelector('.dots');
let currentImageIndex = 0;

//création de la fonction ChangeSlide pour changer l'image affichée en fonction de la valeur de la variable currentImageIndex
function ChangeSlide(sens) {
	currentImageIndex += sens;
	if (currentImageIndex > slides.length - 1) {
		currentImageIndex = 0;
	}
	if (currentImageIndex < 0) {
		currentImageIndex = slides.length - 1;
	}
	setslide()
}

//création de la fonction setslide pour mettre à jour la source de l'image avec le chemin correspondant
function setslide() {
	bannerImg.src = "./assets/images/slideshow/" + slides[currentImageIndex].image;
	selectDot(currentImageIndex);

	//pour l'ajout des taglines en fonction de l'image
	tagline.innerHTML = slides[currentImageIndex].tagLine;
}

arrowLeft.addEventListener("click", () => {
	ChangeSlide(-1);
});

arrowRight.addEventListener("click", () => {
	ChangeSlide(1);
});

//fonction création dot
function createDot(index) {
	let dot = document.createElement("span");
	dot.classList.add("dot")
	dot.addEventListener('click', function () {
		currentImageIndex = index
		setslide()
		console.log(index)
	})

	dots.appendChild(dot)
}

for (let i = 0; i < slides.length; i++) {
	createDot(i)
}

//fonction pour dot sélectionné en fonction de l'image

function selectDot(index) {
	const dotSelect = document.querySelectorAll(".dot");
	for (let i = 0; i < dotSelect.length; i++) {
		dotSelect[i].classList.remove("dot_selected");
	}
	dotSelect[index].classList.add("dot_selected");
}
//appel de la fonction selectDot pour que le bon bullet point apparaisse lorsque la page est chargée
window.addEventListener("load", () => {
	selectDot(currentImageIndex);
});




