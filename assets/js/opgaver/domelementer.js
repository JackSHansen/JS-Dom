/* DOMcelementer */



/* Opgave 1.1
Du skal finde elementet med id="redFigure" og console logge det.
Du skal finde elementet med id="yellowFigure" og console logge det. 
*/

let redFigureElement = document.getElementById("redFigure");
console.log("Elementet med id 'redFigure':", redFigureElement);


let yellowFigureElement = document.getElementById("yellowFigure");
console.log("Elementet med id 'yellowFigure':", yellowFigureElement);


/* opgave 1.2
Du skal ændre baggrundsfarve på de to elementer du har fundet i opgave 1.1
farven på elementerne skal være blå. brug evt. elelement.style.backgroundColor
*/


redFigureElement.style.backgroundColor = "blue";

yellowFigureElement.style.backgroundColor = "blue";



/* opgave 2.1
Du skal oprette følgende HTML elementer i Elementet med id opgaveTwo.
- et h2 med teksten: Opgave 2.1 løsning
- et p med teksten: Jeg har løst opgave 2.1
*/


let opgaveTwoElement = document.getElementById("opgaveTwo");


let h2Element = document.createElement("h2");
h2Element.textContent = "Opgave 2.1 løsning";


let pElement = document.createElement("p");
pElement.textContent = "Jeg har løst opgave 2.1";


opgaveTwoElement.appendChild(h2Element);
opgaveTwoElement.appendChild(pElement);


// opgave 3 liveHTML lists
/* opgave 3.1
Du skal finde alle elementer med klassen purpleFigures og console logge resultatet
*/

let purpleFigures = document.getElementsByClassName("purpleFigures");
let purpleFiguresArray = Array.from(purpleFigures);
console.log("Elementer med klassen 'purpleFigures':", purpleFiguresArray);

/* opgave 3.2
Du skal finde alle elementer med klassen purpleFigures og bruge array.from() til at konvertere listen
til et array hvor du kan bruge map funktionen til at ændre baggrundsfarven til rød.
array.from beskrivelse HER: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
*/

purpleFiguresArray.map(function (element) {
    element.style.backgroundColor = "red";
});


/* opgave 3.3
Brug din array til at ændre h3 elementets, inden i purpleFigures, tekst til RED. du kan bruge
myElement.children[0].innerHTML til at ændre 1. child elements inner html.
*/



purpleFiguresArray.map(function (element) {
    element.style.backgroundColor = "red";
    let h3Element = element.children[0];
    if (h3Element && h3Element.tagName === "H3") {
        h3Element.innerHTML = "RED";
    }
});


/* opgave 4
opret DOM elementer i elementet med id opgaveFour, udfra data objectet myData.
Du skal vælge element tags der giver mening i forbindelse med HTML5 semantisk tagging.
Fyld dine elementers innerHtML eller andre atributter med dine data
*/

const myData = {
    name: 'tiger',
    image: 'assets/img/standard_tiger.jpg',
    description: 'En tiger er et stort, katteagtig rovdyr med orange og sort striber i pelsen og skarpe tænder og kløer.'
};


let opgaveFourElement = document.getElementById("opgaveFour");


let figureElement = document.createElement("figure");


let imgElement = document.createElement("img");
imgElement.src = myData.image;  
imgElement.alt = myData.name;   


let figcaptionElement = document.createElement("figcaption");
figcaptionElement.textContent = myData.description;  


figureElement.appendChild(imgElement);
figureElement.appendChild(figcaptionElement);


opgaveFourElement.appendChild(figureElement);



