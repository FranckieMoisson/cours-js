let imgCarrousel = [
    "https://www.wildfinland.org/files/2513/8443/9207/00228141.jpg",
    "https://www.wildfinland.org/files/3114/1690/2292/80250605.jpg",
    "https://www.wildfinland.org/files/5314/1690/2094/201402LR70171_eagles.jpg"
]
let occurenceCarrousel = 0;

setInterval(function() {
    let img = document.querySelector('#slider img')
    img.src = imgCarrousel[occurenceCarrousel];
    occurenceCarrousel++
    if (occurenceCarrousel == imgCarrousel.length) {
        occurenceCarrousel = 0;
    }
}, 5000)


//  @param text: string - Chaine de caractere a malanger

function randomText(text = "Franckie le Boss") {
    let tableau = text.split(""); // Convertir une chaine de caracteres en tableau
    tableau = arrayToStringRandom(tableau).join(''); // Appel a la function
    return tableau; // Return une string aleatoire
}

// arrayToStringRandom - Renvoi un nouveau tableau avec les elements de l'ancien mais de maniere aleatoire
function arrayToStringRandom(tab = []) {
    let tabRandom = [] // Tableau des entiers deja recuperer - Eviter les doublons de caractere
    let random, newArray = []; // Creation de deux variables - random est la variable qui stockera le nombre aleatoire - newArray sera le nouveau tableau cree a partir des nombres aleatoires.

    // Permet de generer tous les carat. selon la taille du tableau (tab - tableau envoyez a l'appel de la fonction)
    for (let i = 0; i < tab.length; i++) {
        do {
            random = getRandomInt(0, tab.length); // retour un entier aleatoire compris entre 0 et la taille du tableau (tab)
        } while (tabRandom.includes(random)); // Verifie si l'entier a deja ete recuperer
        tabRandom.push(random); // Ajouter l'entier aleatoire dans le tableau (tabRandom)
        newArray.push(tab[random]); // Ajouter le caract. aleatoire dans le tableau (newArray)
        console.log(random);
    }
    return newArray; // Retourne le nouveau tableau
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

let baliseA = document.querySelectorAll("#header > nav a")
for (let i = 0; i < baliseA.length; i++) {
    baliseA[i].innerHTML = randomText(baliseA[i].innerHTML); // Appel a la fonction
}
console.log(baliseA)

randomText("Yvan le Killer"); // Appel a la fonction

let tabImagesArticles = [
    "https://api.curaytor.io/sites/1271/media/202009/m3.jpg?w=290&h=180",
    "https://flat56.com/wp-content/uploads/2018/09/Virtual-Hug-GIF-Image-for-Whatsapp-and-Facebook-26.gif",
    "https://vignette.wikia.nocookie.net/thedescendants/images/c/c3/Morgana_%28Disney%29.jpg"
]

let dataImagesHtml = document.querySelectorAll("#services img")

for (let i = 0; i < dataImagesHtml.length; i++) {
    dataImagesHtml[i].addEventListener("click", function() {
        dataImagesHtml[i].src = tabImagesArticles[i]
    })
}