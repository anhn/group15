"Use strict";

/*Javascriptkode for å vise slider*/

/*Denne delen av javascript-koden er basert på eksempelet for enkel slider som ble gitt i oppgaveteksten - https://www.w3schools.com/w3css/w3css_slideshow.asp*/
function plusDivs(n) {
    showDivs(slideIndex += n);
}

let slideIndex = 1;

function showDivs(n) {
    let x = document.getElementsByClassName("sliderbilde");
    let i;
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}

function hideDivs(n) {
    let x = document.getElementsByClassName("sliderbilde");
    let i;
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "none"; 
}

/*Kaller windowsizeshowdivs ved lasting av siden*/
windowSizeShowDivs();

/*Event listener som trigger hver gang størrelse på browser vindu endres*/
window.addEventListener('resize', windowSizeShowDivs);

/*Funksjon som setter viser og skjuler bilde avhengig av vindustørrelse w*/
function windowSizeShowDivs (w) {
	if (window.innerWidth >= 1024){
	showDivs(slideIndex);
	} else if (window.innerWidth < 1024) {
		hideDivs(slideIndex);
	}
}