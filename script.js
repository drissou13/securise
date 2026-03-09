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
    scanElement.innerHTML += scanLines[i]+"<br>";
    i++;
    setTimeout(runScan,800);
  } else {
    showTip();
  }
}
runScan();

// ASTUCES 365 (exemple avec 10, compléter pour 365)
const tips = [
{tip:"Active l’authentification à deux facteurs", exp:"Même si un pirate obtient ton mot de passe, il aura besoin d'un second code."},
{tip:"Utilise des mots de passe longs", exp:"Les mots de passe longs sont beaucoup plus difficiles à pirater."},
{tip:"Ne clique pas sur les liens suspects", exp:"Les emails de phishing servent souvent à voler les comptes."},
{tip:"Mets ton système à jour", exp:"Les mises à jour corrigent des failles de sécurité utilisées par les pirates."},
{tip:"Utilise un gestionnaire de mots de passe", exp:"Cela permet de créer des mots de passe forts et différents pour chaque site."},
{tip:"Évite le Wi-Fi public non sécurisé", exp:"Le Wi-Fi public peut être intercepté par des pirates."},
{tip:"Sauvegarde régulièrement tes données", exp:"Une sauvegarde permet de récupérer tes données en cas de problème."},
{tip:"Active la vérification des applications installées", exp:"Vérifie les autorisations et supprime les applications suspectes."},
{tip:"Utilise un antivirus à jour", exp:"Un antivirus protège contre la majorité des malwares."},
{tip:"Ne réutilise pas tes mots de passe", exp:"Chaque compte doit avoir un mot de passe unique pour plus de sécurité."}
{ tip: "Active l’authentification à deux facteurs", "exp": "Même si un pirate obtient ton mot de passe, il aura besoin d'un second code." },
  { tip: "Utilise un gestionnaire de mots de passe", exp: "Il génère et stocke tes mots de passe complexes pour toi, fini le réemploi." },
{ tip: "Ne réutilise jamais le même mot de passe", exp: "Si un site est piraté, tous tes autres comptes deviennent vulnérables." },
{ tip: "Mets à jour tes logiciels régulièrement", exp: "Les mises à jour corrigent des failles de sécurité connues exploitées par les pirates." },
{ tip: "Utilise un pare-feu (Firewall)", exp: "Il bloque les connexions non autorisées entrantes et sortantes sur ton appareil." },
{ tip: "Ne clique pas sur les liens suspects dans les emails", exp: "C'est la méthode n°1 du phishing pour voler tes identifiants." },
{ tip: "Verrouille ton écran quand tu t'absentes", exp: "Une action simple pour éviter que quelqu'un utilise ton PC en ton absence." },
{ tip: "Désactive le Bluetooth quand il n'est pas utilisé", exp: "Cela réduit la surface d'attaque pour les pirates à proximité." },
{ tip: "Évite le Wi-Fi public sans VPN", exp: "Les réseaux ouverts permettent aux pirates d'intercepter tes données facilement." },
{ tip: "Sauvegarde tes données sur un support externe", exp: "En cas de ransomware, tes fichiers seront toujours accessibles hors ligne." },
{ tip: "Utilise le chiffrement de disque", exp: "Si ton appareil est volé, tes données resteront illisibles pour le voleur." },
{ tip: "Désactive la géolocalisation pour les apps inutiles", exp: "Cela protège ta vie privée et limite la collecte de données sur tes déplacements." },
{ tip: "Utilise le protocole HTTPS", exp: "Il garantit que la connexion entre ton navigateur et le site est chiffrée." },
{ tip: "Ne partage jamais tes codes de validation (OTP)", exp: "Si on te demande un code reçu par SMS, c'est une tentative de fraude." },
{ tip: "Nettoie ton historique de navigation régulièrement", exp: "Cela limite la quantité de traces que tu laisses sur les sites visités." },
{ tip: "Désactive le partage de fichiers sur réseau local", exp: "Sur un réseau inconnu, cela empêche les autres de voir tes dossiers partagés." },
{ tip: "Utilise un bloqueur de publicités", exp: "Il empêche le malvertising (publicités infectées par des malwares)." },
{ tip: "Vérifie l'expéditeur d'un mail avant d'ouvrir une pièce jointe", exp: "Les pirates usurpent souvent l'identité d'organismes connus." },
{ tip: "Désactive l'exécution automatique des macros", exp: "Les fichiers Office avec macros sont des vecteurs fréquents de virus." },
{ tip: "Utilise un moteur de recherche privé", exp: "Cela limite le profilage publicitaire et le suivi de tes recherches." },
{ tip: "Cache ta webcam quand tu ne l'utilises pas", exp: "Un simple cache empêche l'espionnage visuel." },
{ tip: "Ne télécharge pas de logiciels piratés", exp: "Ils contiennent très souvent des malwares cachés dans l'installeur." },
{ tip: "Fais attention aux raccourcisseurs d'URL", exp: "Ils masquent souvent la destination réelle du lien." },
{ tip: "Désactive les notifications push invasives", exp: "Certains sites abusent de cela pour envoyer des liens frauduleux." },
{ tip: "Utilise un VPN pour ton anonymat", exp: "Il masque ton adresse IP réelle et sécurise ton trafic internet." },
{ tip: "Vérifie les permissions des applications", exp: "Une lampe torche n'a pas besoin d'accéder à tes contacts." },
{ tip: "Change le mot de passe par défaut de ton routeur", exp: "C'est souvent le premier point d'accès pour les intrus." },
{ tip: "Désactive le WPS sur ton routeur", exp: "Le protocole WPS est facilement cassable par les outils de piratage Wi-Fi." },
{ tip: "Ne donne pas d'informations personnelles sur les réseaux sociaux", exp: "Les pirates utilisent ces données pour deviner tes questions de sécurité." },
{ tip: "Utilise le mode navigation privée pour tester", exp: "Cela évite que les cookies soient conservés." },
{ tip: "Ne réponds jamais aux sondages 'gagnez un iPhone'", exp: "C'est une arnaque classique pour collecter tes données personnelles." },
{ tip: "Utilise un antivirus à jour", exp: "Il protège ton système contre la majorité des menaces connues." },
{ tip: "Utilise une adresse mail secondaire", exp: "Pour les sites peu fiables ou les inscriptions temporaires." }

];

// ASTUCE DU JOUR via URL ou jour
function getTipIndex(){
  const params = new URLSearchParams(window.location.search);
  let idx = params.get("tip");
  if(idx===null){ idx = new Date().getDate() % tips.length; }
  return idx;
}
let index = getTipIndex();
let data = tips[index];

function showTip(){
  document.getElementById("tipBox").style.display="block";
  typeWriter(data.tip, document.getElementById("tip"));
  setTimeout(()=>{ typeWriter(data.exp, document.getElementById("explanation")); },1500);

  // Mettre l'astuce dans Open Graph
  document.querySelector("meta[property='og:description']")
          .setAttribute("content","Astuce cybersécurité : "+data.tip+" - "+data.exp);
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
function getTipText(){ return "🔐 Astuce cybersécurité du jour : "+data.tip+" - "+data.exp; }

function shareFacebook(){
  let url = "https://drissou13.github.io/securise/?tip="+index;
  window.open("https://www.facebook.com/sharer.php?u="+encodeURIComponent(url), "_blank");
}

function shareWhatsapp(){
  let text = "Astuce cybersécurité : "+data.tip;
  let url = "https://drissou13.github.io/securise/?tip="+index;
  window.open("https://wa.me/?text="+encodeURIComponent(text+" "+url), "_blank");
}

// BOUTON COPIER AVEC ANIMATION
function copyTip(){
  let text = getTipText();
  navigator.clipboard.writeText(text);
  let btn = document.getElementById("copyBtn");
  btn.classList.add("copied");
  setTimeout(()=>{ btn.classList.remove("copied"); },400);
}
