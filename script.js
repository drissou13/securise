// FAUX SCAN
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
  } else {
    showTip();
  }
}

runScan();

// ASTUCES
const tips = [
{tip:"Active l’authentification à deux facteurs", exp:"Même si un pirate obtient ton mot de passe, il aura besoin d'un second code."},
{tip:"Utilise des mots de passe longs", exp:"Les mots de passe longs sont beaucoup plus difficiles à pirater."},
{tip:"Ne clique pas sur les liens suspects", exp:"Les emails de phishing servent souvent à voler les comptes."},
{tip:"Mets ton système à jour", exp:"Les mises à jour corrigent des failles de sécurité utilisées par les pirates."},
{tip:"Utilise un gestionnaire de mots de passe", exp:"Cela permet de créer des mots de passe forts et différents pour chaque site."}
];

// ASTUCE DU JOUR via paramètre URL ou jour
function getTipIndex(){
  const params = new URLSearchParams(window.location.search);
  let idx = params.get("tip");
  if(idx === null){ idx = new Date().getDate() % tips.length; }
  return idx;
}

let index = getTipIndex();
let data = tips[index];

function showTip(){
  document.getElementById("tipBox").style.display="block";
  typeWriter(data.tip, document.getElementById("tip"));
  setTimeout(()=>{ typeWriter(data.exp, document.getElementById("explanation")); },1500);

  // MAJ Open Graph
  document.querySelector("meta[property='og:description']")
          .setAttribute("content","Astuce cybersécurité : " + data.tip + " - " + data.exp);
}

// EFFET ÉCRITURE
function typeWriter(text, element){
  let i=0;
  function typing(){
    if(i<text.length){
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing,40);
    }
  }
  typing();
}

// COMPTEUR
let learned = localStorage.getItem("learnedDays") || 0;
document.getElementById("daysLearned").innerText = learned;
function markLearned(){
  learned++;
  localStorage.setItem("learnedDays",learned);
  document.getElementById("daysLearned").innerText = learned;
}

// PARTAGE
function getTipText(){ return "🔐 Astuce cybersécurité du jour : " + data.tip + " - " + data.exp; }

function shareFacebook(){
  let url = "https://drissou13.github.io/securise/?tip=" + index;
  window.open("https://www.facebook.com/sharer.php?u=" + encodeURIComponent(url), "_blank");
}

function shareWhatsapp(){
  let text = "Astuce cybersécurité : " + data.tip;
  let url = "https://drissou13.github.io/securise/?tip=" + index;
  window.open("https://wa.me/?text=" + encodeURIComponent(text + " " + url), "_blank");
}

// BOUTON COPIER AVEC ANIMATION
function copyTip(){
  let text = getTipText();
  navigator.clipboard.writeText(text);

  let btn = document.getElementById("copyBtn");
  btn.classList.add("copied");
  setTimeout(()=>{ btn.classList.remove("copied"); },400);
}