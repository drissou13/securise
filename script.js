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


// astuces

const tips = [

{
tip:"Active l’authentification à deux facteurs",
exp:"Cela ajoute une seconde protection même si ton mot de passe est volé."
},

{
tip:"Utilise des mots de passe longs",
exp:"Plus un mot de passe est long, plus il est difficile à pirater."
},

{
tip:"Ne télécharge pas de fichiers inconnus",
exp:"Certains fichiers peuvent contenir des virus ou des malwares."
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
