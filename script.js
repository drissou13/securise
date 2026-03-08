const scanLines = [

"> Initialisation du système...",
"> Scan réseau...",
"> Vérification du pare-feu...",
"> Analyse des vulnérabilités...",
"> Vérification des mots de passe...",
"> Recherche de logiciels suspects...",
"> Scan terminé ✔"

];

let scanElement = document.getElementById("scan");

let i = 0;

function runScan(){

if(i < scanLines.length){

scanElement.innerHTML += scanLines[i] + "<br>";

i++;

setTimeout(runScan,800);

}else{

showTip();

}

}

runScan();


// ASTUCES

const tips = [

{
tip:"Active l’authentification à deux facteurs",
exp:"Même si un pirate obtient ton mot de passe, il aura besoin d'un second code pour accéder à ton compte."
},

{
tip:"Utilise des mots de passe longs",
exp:"Les mots de passe longs sont beaucoup plus difficiles à pirater par force brute."
},

{
tip:"Ne clique pas sur les liens suspects",
exp:"Beaucoup de pirates utilisent des emails de phishing pour voler tes identifiants."
},

{
tip:"Mets ton système à jour",
exp:"Les mises à jour corrigent des failles de sécurité utilisées par les pirates."
},

{
tip:"Utilise un gestionnaire de mots de passe",
exp:"Cela permet de créer des mots de passe forts et différents pour chaque site."
}

];


function showTip(){

let day = new Date().getDate();

let data = tips[day % tips.length];

document.getElementById("tipBox").style.display = "block";

typeWriter(data.tip, document.getElementById("tip"));

setTimeout(()=>{

typeWriter(data.exp, document.getElementById("explanation"));

},1500);

}


// effet écriture

function typeWriter(text, element){

let i = 0;

function typing(){

if(i < text.length){

element.innerHTML += text.charAt(i);

i++;

setTimeout(typing,40);

}

}

typing();

}


// compteur apprentissage

let learned = localStorage.getItem("learnedDays") || 0;

document.getElementById("daysLearned").innerText = learned;

function markLearned(){

learned++;

localStorage.setItem("learnedDays",learned);

document.getElementById("daysLearned").innerText = learned;

}


// récupérer texte astuce

function getTipText(){

let tip = document.getElementById("tip").innerText;

let exp = document.getElementById("explanation").innerText;

return "🔐 Astuce cybersécurité du jour : " + tip + " - " + exp;

}


// Facebook

function shareFacebook(){

let text = encodeURIComponent(getTipText());

let url = encodeURIComponent("https://drissou13.github.io/securise/");

window.open(
"https://www.facebook.com/sharer/sharer.php?u=" + url + "&quote=" + text,
"_blank"
);

}


// WhatsApp

function shareWhatsapp(){

let text = encodeURIComponent(getTipText());

window.open(
"https://wa.me/?text=" + text + "%20https://drissou13.github.io/securise/",
"_blank"
);

}


// Twitter / X

function shareTwitter(){

let text = encodeURIComponent(getTipText());

window.open(
"https://twitter.com/intent/tweet?text=" + text + "&url=https://drissou13.github.io/securise/",
"_blank"
);

}
function updateOG(){

let tip = document.getElementById("tip").innerText;
let exp = document.getElementById("explanation").innerText;

let text = "🔐 Astuce cybersécurité du jour : " + tip + " - " + exp;

document
.querySelector("meta[property='og:description']")
.setAttribute("content", text);

}
