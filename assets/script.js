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


//let numero = 0;
const bannerImg = document.querySelector('.banner-img');
const arrowLeft = document.getElementById('arrow_left');
const arrowRight = document.getElementById('arrow_right');
const tagline = document.querySelector('#banner p');
const dots = document.querySelector('.dots');
let currentImageIndex = 0;

function createDot(index){
let dot = document.createElement("span");
dot.classList.add("dot")
dot.addEventListener('click', function(){
	currentImageIndex = index
	setslide()
	console.log(index)
})


dots.appendChild(dot)
}


for (let i = 0; i< slides.length; i++){
	createDot(i)
}


//fonction Changeslide avantinsertion des bullets points
//function ChangeSlide(sens) {
//	numero += sens;
//	if (numero > slides.length - 1) {
//	  numero = 0;
//	}
//	if (numero < 0) {
//	  numero = slides.length - 1;
//	}



  //bullets points

  

  function selectDot(index) {
	const dots = document.querySelectorAll(".dot");
	for (let i = 0; i < dots.length; i++) {
	  dots[i].classList.remove("dot_selected");
	}
	dots[index].classList.add("dot_selected");
  }

  window.addEventListener("load", () => {
	selectDot(currentImageIndex);
  });

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
  function setslide(){
	bannerImg.src = "./assets/images/slideshow/" + slides[currentImageIndex].image;
	selectDot(currentImageIndex);

	//pour l'ajout des taglines en fonction de l'image
  tagline.innerHTML = slides[currentImageIndex].tagLine;
  }

//	bannerImg.src = "./assets/images/slideshow/" + slides[currentImageIndex].image;
//	tagline.innerHTML = slides[numero].tagLine;
 // }
  

arrowLeft.addEventListener("click", () => {
  ChangeSlide(-1);
});

arrowRight.addEventListener("click", () => {
  ChangeSlide(1);
});
