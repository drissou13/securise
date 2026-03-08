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
[
  { "tip": "Active l’authentification à deux facteurs", "exp": "Même si un pirate obtient ton mot de passe, il aura besoin d'un second code." },
  { "tip": "Utilise un gestionnaire de mots de passe", "exp": "Il génère et stocke tes mots de passe complexes pour toi, fini le réemploi." },
  { "tip": "Ne réutilise jamais le même mot de passe", "exp": "Si un site est piraté, tous tes autres comptes deviennent vulnérables." },
  { "tip": "Mets à jour tes logiciels régulièrement", "exp": "Les mises à jour corrigent des failles de sécurité connues exploitées par les pirates." },
  { "tip": "Utilise un pare-feu (Firewall)", "exp": "Il bloque les connexions non autorisées entrantes et sortantes sur ton appareil." },
  { "tip": "Ne clique pas sur les liens suspects dans les emails", "exp": "C'est la méthode n°1 du phishing pour voler tes identifiants." },
  { "tip": "Verrouille ton écran quand tu t'absentes", "exp": "Une action simple pour éviter que quelqu'un utilise ton PC en ton absence." },
  { "tip": "Désactive le Bluetooth quand il n'est pas utilisé", "exp": "Cela réduit la surface d'attaque pour les pirates à proximité." },
  { "tip": "Évite le Wi-Fi public sans VPN", "exp": "Les réseaux ouverts permettent aux pirates d'intercepter tes données facilement." },
  { "tip": "Sauvegarde tes données sur un support externe", "exp": "En cas de ransomware, tes fichiers seront toujours accessibles hors ligne." },
  { "tip": "Utilise le chiffrement de disque", "exp": "Si ton appareil est volé, tes données resteront illisibles pour le voleur." },
  { "tip": "Désactive la géolocalisation pour les apps inutiles", "exp": "Cela protège ta vie privée et limite la collecte de données sur tes déplacements." },
  { "tip": "Utilise le protocole HTTPS", "exp": "Il garantit que la connexion entre ton navigateur et le site est chiffrée." },
  { "tip": "Ne partage jamais tes codes de validation (OTP)", "exp": "Si on te demande un code reçu par SMS, c'est une tentative de fraude." },
  { "tip": "Nettoie ton historique de navigation régulièrement", "exp": "Cela limite la quantité de traces que tu laisses sur les sites visités." },
  { "tip": "Désactive le partage de fichiers sur réseau local", "exp": "Sur un réseau inconnu, cela empêche les autres de voir tes dossiers partagés." },
  { "tip": "Utilise un bloqueur de publicités", "exp": "Il empêche le 'malvertising' (pubs infectées par des malwares)." },
  { "tip": "Vérifie l'expéditeur d'un mail avant d'ouvrir une pièce jointe", "exp": "Les pirates usurpent souvent l'identité d'organismes connus." },
  { "tip": "Désactive l'exécution automatique des macros", "exp": "Les fichiers Office avec macros sont des vecteurs fréquents de virus." },
  { "tip": "Utilise un moteur de recherche privé", "exp": "Cela limite le profilage publicitaire et le suivi de tes recherches." },
  { "tip": "Cache ta webcam quand tu ne l'utilises pas", "exp": "Un simple bout de ruban adhésif suffit à empêcher l'espionnage visuel." },
  { "tip": "Ne télécharge pas de logiciels piratés", "exp": "Ils contiennent très souvent des malwares cachés dans l'installeur." },
  { "tip": "Fais attention aux raccourcisseurs d'URL", "exp": "Ils masquent souvent la destination réelle du lien (vers un site malveillant)." },
  { "tip": "Désactive les notifications 'Push' invasives", "exp": "Certains sites abusent de cela pour envoyer des pubs ou des liens frauduleux." },
  { "tip": "Utilise un VPN pour ton anonymat", "exp": "Il masque ton adresse IP réelle et sécurise ton trafic internet." },
  { "tip": "Vérifie les permissions des applications", "exp": "Une lampe torche n'a pas besoin d'accéder à tes contacts ou photos." },
  { "tip": "Change le mot de passe par défaut de ton routeur", "exp": "C'est souvent le premier point d'accès pour les intrus sur ton réseau." },
  { "tip": "Désactive le WPS sur ton routeur", "exp": "Le protocole WPS est facilement cassable par les outils de piratage Wi-Fi." },
  { "tip": "Ne donne pas d'informations personnelles sur les réseaux sociaux", "exp": "Les pirates utilisent ces données pour deviner tes questions de sécurité." },
  { "tip": "Utilise le mode 'Navigation privée' pour tester", "exp": "Cela évite que les cookies de session ne soient conservés après la fermeture." },
  { "tip": "Ne réponds jamais aux sondages 'gagnez un iPhone'", "exp": "C'est une arnaque classique pour collecter tes données personnelles." },
  { "tip": "Désactive la lecture automatique des vidéos", "exp": "Cela évite de charger du contenu non désiré ou de consommer de la bande passante." },
  { "tip": "Utilise une adresse mail secondaire pour les sites douteux", "exp": "Si le site est piraté, ta boîte mail principale reste protégée." },
  { "tip": "Ne branche pas de clés USB trouvées dans la rue", "exp": "C'est une technique appelée 'USB drop' pour infecter ton PC dès le branchement." },
  { "tip": "Désactive le partage d'imprimante si inutile", "exp": "Cela ferme un port réseau potentiellement vulnérable." },
  { "tip": "Fais attention aux faux sites de support technique", "exp": "Ils essaient de te faire payer pour 'réparer' des problèmes inexistants." },
  { "tip": "Utilise un antivirus léger et reconnu", "exp": "Il détecte les menaces connues en temps réel sur ton système." },
  { "tip": "Ne sauvegarde pas tes mots de passe dans ton navigateur", "exp": "Ils peuvent être extraits par des malwares si ton PC est compromis." },
  { "tip": "Vérifie les certificats SSL sur les sites sensibles", "exp": "Regarde si le cadenas est bien fermé et le certificat valide." },
  { "tip": "Désactive l'UPnP sur ton routeur", "exp": "L'UPnP permet aux appareils de configurer le routeur automatiquement, ce qui est risqué." },
  { "tip": "Apprends à reconnaître les URLs de phishing", "exp": "Regarde attentivement si le domaine est `google.com` ou `g00gle.com`." },
  { "tip": "Désactive le partage de proximité (Airdrop/Nearby)", "exp": "Cela évite de recevoir des fichiers non sollicités." },
  { "tip": "Ne partage pas ton écran avec des inconnus", "exp": "C'est donner un accès total à ton ordinateur en temps réel." },
  { "tip": "Utilise des questions de sécurité complexes", "exp": "Ne réponds pas honnêtement si la réponse est trouvable sur Facebook." },
  { "tip": "Nettoie le cache DNS régulièrement", "exp": "Cela permet d'éviter d'être redirigé vers de fausses adresses." },
  { "tip": "Ne clique pas sur les pop-ups 'Votre PC est infecté'", "exp": "Ce sont toujours des publicités mensongères visant à te faire installer un virus." },
  { "tip": "Désactive le service 'Telnet' sur tes appareils", "exp": "Il n'est pas chiffré et transmet tes mots de passe en clair." },
  { "tip": "Sauvegarde tes codes de récupération (Backups)", "exp": "Si tu perds ton téléphone 2FA, ces codes sont ta seule porte de secours." },
  { "tip": "Utilise un filtre de confidentialité pour ton écran", "exp": "Si tu travailles en public, cela empêche les voisins de voir ton écran." },
  { "tip": "Désactive l'assistance vocale si tu ne l'utilises pas", "exp": "Cela empêche l'enregistrement inattendu de tes conversations." }
[
  { "tip": "Vérifie les extensions de ton navigateur", "exp": "Supprime celles que tu n'utilises plus, elles peuvent espionner ton surf." },
  { "tip": "Utilise des mots de passe sous forme de phrases", "exp": "Une phrase comme 'LeChatBleuMange3Pommes!' est plus facile à retenir et plus dure à cracker." },
  { "tip": "Désactive le Wi-Fi automatique", "exp": "Ton téléphone pourrait se connecter à un faux réseau portant le même nom qu'un réseau connu." },
  { "tip": "Vérifie l'adresse de destination des liens", "exp": "Survole un lien avec ta souris avant de cliquer pour voir la vraie URL en bas à gauche." },
  { "tip": "Ne laisse pas tes sessions ouvertes", "exp": "Déconnecte-toi toujours de tes comptes bancaires ou mails après usage sur un PC partagé." },
  { "tip": "Méfie-toi des clés USB publicitaires", "exp": "Même neuves, elles peuvent contenir des scripts malveillants injectés en usine." },
  { "tip": "Utilise un DNS sécurisé (comme Cloudflare ou Quad9)", "exp": "Ils bloquent souvent l'accès aux sites malveillants connus avant même qu'ils ne chargent." },
  { "tip": "Désactive la synchronisation cloud automatique", "exp": "Contrôle ce qui part sur internet, surtout tes photos privées ou documents sensibles." },
  { "tip": "Vérifie tes comptes sur 'Have I Been Pwned'", "exp": "Ce site te dit si ton adresse mail a été compromise dans une fuite de données majeure." },
  { "tip": "Supprime les anciennes applications", "exp": "Moins tu as d'apps, moins tu as de portes d'entrée potentielles pour un pirate." },
  { "tip": "Utilise une protection contre le pistage", "exp": "Active l'option 'Do Not Track' dans ton navigateur pour limiter le profilage." },
  { "tip": "Ne branche pas ton téléphone sur n'importe quel port USB", "exp": "Dans les lieux publics, utilise un 'USB data blocker' pour éviter le 'Juice Jacking'." },
  { "tip": "Vérifie les paramètres de confidentialité Facebook", "exp": "Assure-toi que tes publications ne sont pas visibles par tout le monde par défaut." },
  { "tip": "Chiffre tes fichiers sensibles avant de les uploader", "exp": "Même si le cloud est piraté, tes fichiers resteront illisibles sans ta clé." },
  { "tip": "Utilise un compte 'Utilisateur' au lieu d'Administrateur", "exp": "Au quotidien, cela empêche les virus de s'installer profondément dans le système." },
  { "tip": "Méfie-toi des QR Codes dans la rue", "exp": "Ils peuvent te rediriger vers des sites de phishing ou lancer des téléchargements." },
  { "tip": "Désactive le JavaScript pour les sites inconnus", "exp": "Cela bloque la majorité des attaques par navigateur, mais peut casser l'affichage." },
  { "tip": "Utilise l'authentification biométrique avec prudence", "exp": "Une empreinte ne se change pas, contrairement à un mot de passe." },
  { "tip": "Vérifie l'intégrité des fichiers téléchargés", "exp": "Compare le hash (SHA-256) du fichier avec celui fourni par l'éditeur." },
  { "tip": "Évite de lier tes comptes (Se connecter avec Google/FB)", "exp": "Si ton compte principal est piraté, l'attaquant accède à tous les services liés." },
  { "tip": "Désactive les services de localisation sur ton appareil photo", "exp": "Tes photos contiennent des données GPS cachées (EXIF) qui révèlent où tu habites." },
  { "tip": "Utilise un navigateur axé sur la vie privée", "exp": "Des options comme Brave ou Firefox offrent plus de protections natives que Chrome." },
  { "tip": "Vérifie les prélèvements sur ton compte bancaire", "exp": "Les pirates testent souvent de petits prélèvements de 1€ pour voir si tu réagis." },
  { "tip": "Ne réponds pas aux appels de numéros inconnus", "exp": "Le 'vishing' (phishing vocal) est utilisé pour soutirer des infos personnelles." },
  { "tip": "Utilise une machine virtuelle pour tester des logiciels", "exp": "Si le logiciel est un virus, il restera enfermé dans la boîte virtuelle." },
  { "tip": "Configure ton routeur en WPA3", "exp": "C'est la norme de sécurité Wi-Fi la plus récente et la plus robuste actuellement." },
  { "tip": "Désactive l'aperçu des messages sur l'écran verrouillé", "exp": "Cela empêche quelqu'un de voir tes codes de validation (2FA) sans ton code." },
  { "tip": "Ferme les onglets inutilisés", "exp": "Chaque onglet ouvert consomme des ressources et peut être une cible d'attaque." },
  { "tip": "Utilise des adresses mail jetables", "exp": "Pour télécharger un guide ou s'inscrire à une newsletter sans polluer ta boîte." },
  { "tip": "Ne stocke pas tes codes de secours sur ton PC", "exp": "Imprime-les et garde-les dans un endroit physique sécurisé." },
  { "tip": "Évite les 'cracks' de jeux vidéo", "exp": "C'est le moyen le plus rapide d'installer un mineur de cryptomonnaie sur ton PC." },
  { "tip": "Vérifie qui est connecté à ton Wi-Fi", "exp": "Utilise une application comme Fing pour voir si un voisin squatte ta connexion." },
  { "tip": "Utilise le chiffrement pour tes emails sensibles", "exp": "Des outils comme PGP ou ProtonMail garantissent que seul le destinataire peut lire." },
  { "tip": "Nettoie physiquement ton clavier et ton écran", "exp": "La poussière et les bactéries sont aussi des risques pour ton matériel." },
  { "tip": "Désactive la diffusion du nom de ton Wi-Fi (SSID)", "exp": "Cela rend ton réseau invisible pour le passant lambda (mais pas pour un pro)." },
  { "tip": "Méfie-toi des offres d'emploi trop belles", "exp": "Le recrutement factice est utilisé pour voler des copies de cartes d'identité." },
  { "tip": "Utilise une clé de sécurité physique (YubiKey)", "exp": "C'est la protection la plus forte contre le phishing de compte." },
  { "tip": "Désactive les macros dans Word et Excel", "exp": "La plupart des ransomwares arrivent via des macros malveillantes." },
  { "tip": "Vérifie la présence de 'Keyloggers' physiques", "exp": "Regarde si un petit adaptateur est branché entre ton clavier et le PC." },
  { "tip": "Utilise le 'Sandboxing'", "exp": "Exécute ton navigateur dans un bac à sable pour isoler les menaces du système." },
  { "tip": "Ne poste pas de photos de tes billets d'avion", "exp": "Le code-barres contient ton nom, ton numéro de passeport et tes infos de vol." },
  { "tip": "Configure une alerte de connexion sur tes comptes", "exp": "Reçois un mail dès qu'un nouvel appareil se connecte à ton compte." },
  { "tip": "Utilise un compte invité pour tes amis", "exp": "S'ils utilisent ton PC, ils n'auront pas accès à tes fichiers personnels." },
  { "tip": "Désactive le 'Fast Startup' sous Windows", "exp": "Cela permet un nettoyage plus complet de la mémoire RAM à chaque extinction." },
  { "tip": "Vérifie les applications au démarrage", "exp": "Supprime les logiciels inutiles qui ralentissent ton PC et collectent des données." },
  { "tip": "Utilise un câble Ethernet plutôt que le Wi-Fi", "exp": "C'est plus rapide, plus stable et beaucoup plus difficile à intercepter." },
  { "tip": "Désactive l'accès à distance (Remote Desktop)", "exp": "Sauf si tu en as absolument besoin, c'est une cible majeure pour les pirates." },
  { "tip": "Pense à la règle du 3-2-1 pour tes sauvegardes", "exp": "3 copies, 2 supports différents, 1 copie hors site (ou dans le cloud)." },
  { "tip": "Apprends les raccourcis clavier de sécurité", "exp": "Sur Windows, 'Win + L' verrouille instantanément ta session." },
  { "tip": "Sois sceptique par défaut", "exp": "La curiosité et l'urgence sont les deux leviers préférés des cybercriminels." }
[
  { "tip": "Désactive le partage de connexion auto", "exp": "Ton téléphone pourrait devenir un point d'accès ouvert sans que tu le remarques." },
  { "tip": "Vérifie les ports ouverts de ta box", "exp": "Utilise un scanner de ports en ligne pour voir si ta box expose des services inutiles." },
  { "tip": "Utilise une adresse mail différente pour ta banque", "exp": "Si ton mail 'public' est fuité, tes accès bancaires restent secrets." },
  { "tip": "Méfie-toi des câbles Lightning/USB-C inconnus", "exp": "Certains câbles modifiés (ex: O.MG Cable) peuvent injecter des virus." },
  { "tip": "Désactive l'UPnP sur tes caméras IP", "exp": "Cela évite qu'elles ne soient visibles par tout le monde sur internet (Shodan)." },
  { "tip": "Utilise un mot de passe pour ton BIOS/UEFI", "exp": "Cela empêche un intrus de démarrer ton PC sur une clé USB pirate." },
  { "tip": "Vérifie l'authenticité des logiciels open source", "exp": "Télécharge-les uniquement sur les dépôts officiels ou GitHub." },
  { "tip": "Désactive la réponse automatique aux mails", "exp": "Les spameurs l'utilisent pour confirmer que ton adresse est active." },
  { "tip": "Chiffre tes clés USB de travail", "exp": "Utilise BitLocker ou VeraCrypt pour protéger tes documents en cas de perte." },
  { "tip": "Mets à jour le firmware de ton imprimante", "exp": "Les imprimantes sont des cibles négligées mais très vulnérables." },
  { "tip": "Utilise des noms d'utilisateurs uniques", "exp": "Évite 'admin' ou 'root', choisis quelque chose de moins prévisible." },
  { "tip": "Désactive le débogage USB sur Android", "exp": "Ne l'active que si tu développes, sinon ton téléphone est plus vulnérable." },
  { "tip": "Vérifie tes abonnements 'cachés' (App Store/Play Store)", "exp": "Certaines apps de sécurité bidon facturent des prix exorbitants." },
  { "tip": "Utilise un coffre-fort numérique pour tes documents", "exp": "Idéal pour stocker une copie de ton passeport ou acte de naissance." },
  { "tip": "Évite de poster des photos de tes clés de maison", "exp": "Il est possible de dupliquer une clé à partir d'une simple photo haute définition." },
  { "tip": "Utilise le mode 'Invité' sur ton navigateur", "exp": "Pratique quand tu prêtes ton ordi pour une recherche rapide sans donner tes accès." },
  { "tip": "Sépare tes réseaux Wi-Fi (Invités vs Privé)", "exp": "Tes objets connectés (TV, ampoules) ne devraient pas accéder à ton PC principal." },
  { "tip": "Désactive la lecture des mails au format HTML", "exp": "Le format texte seul empêche le chargement de pixels espions." },
  { "tip": "Vérifie l'historique de tes positions Google", "exp": "Désactive-le ou supprime-le régulièrement pour limiter ton profilage." },
  { "tip": "N'accepte pas les cookies 'tout autoriser' sans réfléchir", "exp": "Prends 10 secondes pour refuser les cookies publicitaires de tiers." },
  { "tip": "Utilise un 'burn phone' pour voyager dans des zones risquées", "exp": "Un téléphone basique sans tes données personnelles est plus sûr." },
  { "tip": "Désactive AirDrop 'Tout le monde' sur iPhone", "exp": "Laisse-le sur 'Contacts uniquement' pour éviter le harcèlement numérique." },
  { "tip": "Apprends à lire une URL de droite à gauche", "exp": "Le vrai domaine est juste avant le '.com' ou '.fr' (ex: paypal.sécurité.com est 'sécurité.com')." },
  { "tip": "Ne laisse pas tes appareils charger sans surveillance", "exp": "Dans les lieux publics, le vol de matériel est le risque n°1." },
  { "tip": "Utilise un pseudonyme en ligne", "exp": "Ne lie pas ton identité réelle à tes commentaires ou pseudos de jeux." },
  { "tip": "Désactive l'aperçu automatique des pièces jointes", "exp": "Certains malwares se déclenchent dès l'affichage du document." },
  { "tip": "Vérifie les paramètres de partage de ton Google Drive", "exp": "On oublie souvent de retirer l'accès à d'anciens collaborateurs." },
  { "tip": "Utilise la navigation par onglets isolés (Containers)", "exp": "Firefox Multi-Account Containers empêche Facebook de te suivre sur d'autres sites." },
  { "tip": "Méfie-toi des extensions 'VPN gratuits'", "exp": "Beaucoup revendent tes données de navigation pour se financer." },
  { "tip": "Vérifie la version de ton navigateur", "exp": "Une version obsolète est une passoire face aux exploits 'Zero Day'." },
  { "tip": "Désactive la reconnaissance faciale pour déverrouiller", "exp": "Une simple photo ou un jumeau peut parfois tromper les systèmes bas de gamme." },
  { "tip": "Supprime les métadonnées de tes documents PDF", "exp": "Ils contiennent parfois le nom de l'auteur et le chemin des fichiers sur ton PC." },
  { "tip": "Utilise un bloqueur de scripts (NoScript)", "exp": "Pour les utilisateurs avancés, cela bloque tout code non autorisé sur une page." },
  { "tip": "Désactive les transferts d'appels inconnus", "exp": "Tape *#21# sur ton mobile pour vérifier si tes appels sont détournés." },
  { "tip": "Méfie-toi des clés de récupération envoyées par courrier", "exp": "Une technique de phishing physique pour te faire croire à une urgence." },
  { "tip": "Utilise un système d'exploitation sécurisé (ex: Tails)", "exp": "Pour un anonymat maximal, il ne laisse aucune trace sur l'ordinateur utilisé." },
  { "tip": "Vérifie les processus qui consomment trop de CPU", "exp": "Un ventilateur qui tourne à fond sans raison peut trahir un mineur de crypto." },
  { "tip": "Désactive le Wi-Fi de ton imprimante si tu utilises l'USB", "exp": "Inutile de laisser une porte ouverte si elle ne sert pas." },
  { "tip": "Ne partage pas ton code de déverrouillage devant une caméra", "exp": "Dans les lieux publics, les caméras de surveillance peuvent filmer ton code." },
  { "tip": "Utilise des services de paiement jetables", "exp": "Des apps comme Revolut permettent de créer des cartes bancaires virtuelles éphémères." },
  { "tip": "Désactive 'Ok Google' ou 'Hey Siri'", "exp": "Réduit les risques d'activation accidentelle et d'écoute passive." },
  { "tip": "Vérifie tes paramètres de confidentialité LinkedIn", "exp": "Évite que tes concurrents voient tout ton réseau ou tes recherches." },
  { "tip": "Utilise un 'Privacy Badger'", "exp": "Cette extension apprend à bloquer les trackers invisibles au fur et à mesure." },
  { "tip": "Désactive l'installation d'apps de sources inconnues", "exp": "Sur Android, garde cette option décochée par sécurité." },
  { "tip": "Vérifie le niveau de chiffrement de ton cloud", "exp": "Privilégie le chiffrement 'Zero-Knowledge' (seul toi as la clé)." },
  { "tip": "Ne réponds pas aux SMS 'Votre colis a un problème'", "exp": "C'est une arnaque massive visant à installer des malwares bancaires." },
  { "tip": "Méfie-toi des pop-ups de mise à jour Flash Player", "exp": "Flash est mort. Si un site te demande de le mettre à jour, c'est un virus." },
  { "tip": "Utilise un disque dur externe crypté", "exp": "Idéal pour tes backups physiques que tu transportes." },
  { "tip": "Désactive le NFC si tu ne t'en sers pas", "exp": "Évite les risques de paiements frauduleux ou de lecture de données à ton insu." },
  { "tip": "Sois discret sur ton matériel informatique en public", "exp": "Un ordinateur haut de gamme attire l'attention des voleurs et des pirates." }
[
  { "tip": "Vérifie les accès de ton compte Google", "exp": "Supprime les sites tiers auxquels tu as donné accès il y a des années." },
  { "tip": "Utilise des 'Passkeys' quand c'est possible", "exp": "C'est plus sûr qu'un mot de passe : c'est lié à ton appareil et biométrique." },
  { "tip": "Désactive l'aperçu des liens dans tes messageries", "exp": "Cela empêche ton adresse IP d'être révélée au serveur du lien." },
  { "tip": "Ne poste pas ton setup de bureau en entier", "exp": "Des détails comme ton badge ou des post-it peuvent trahir des secrets." },
  { "tip": "Utilise 'DuckDuckGo' pour tes recherches sensibles", "exp": "Contrairement à d'autres, il ne stocke pas ton historique de recherche." },
  { "tip": "Méfie-toi des fichiers .iso ou .img", "exp": "Ils sont souvent utilisés pour contourner les antivirus et monter un disque virtuel infecté." },
  { "tip": "Désactive la synchronisation des contacts", "exp": "Évite que les réseaux sociaux ne mappent tout ton répertoire téléphonique." },
  { "tip": "Utilise un filtre de lumière bleue le soir", "exp": "La cybersécurité, c'est aussi protéger ta santé pour rester vigilant." },
  { "tip": "Vérifie les avis avant d'installer une extension", "exp": "Une extension avec peu d'avis ou des avis robots est souvent un malware." },
  { "tip": "Ne partage pas ton code de carte bancaire au téléphone", "exp": "Aucune banque légitime ne te demandera jamais ton code secret par appel." },
  { "tip": "Désactive le Wi-Fi Direct", "exp": "C'est une faille potentielle pour prendre le contrôle de ton appareil à distance." },
  { "tip": "Utilise un navigateur différent pour tes paiements", "exp": "Garde un navigateur 'propre' sans extensions pour tes opérations bancaires." },
  { "tip": "Vérifie la date de dernière mise à jour d'une app", "exp": "Une app non mise à jour depuis 2 ans est une faille de sécurité ambulante." },
  { "tip": "Ne laisse pas tes enfants utiliser ton compte admin", "exp": "Ils pourraient désactiver l'antivirus ou installer des jeux infectés." },
  { "tip": "Désactive le partage de bibliothèque Steam/Jeux", "exp": "Sauf avec des personnes de confiance absolue, pour éviter les vols de compte." },
  { "tip": "Utilise le chiffrement de bout en bout (Signal/WhatsApp)", "exp": "Cela garantit que même l'hébergeur ne peut pas lire tes messages." },
  { "tip": "Vérifie les 'Shadow IT' au bureau", "exp": "N'utilise pas d'outils non approuvés par ton entreprise pour des données pro." },
  { "tip": "Méfie-toi des clés USB 'perdues' sur ton parking", "exp": "C'est un grand classique pour infiltrer un réseau d'entreprise." },
  { "tip": "Désactive la fonction 'Aide à l'amélioration' d'Apple/Google", "exp": "Cela évite l'envoi de logs contenant parfois des infos personnelles." },
  { "tip": "Utilise un nom de domaine personnalisé pour tes mails", "exp": "Si ton fournisseur ferme, tu gardes ton adresse en changeant d'hôte." },
  { "tip": "Vérifie les paramètres de ta Smart TV", "exp": "Désactive la reconnaissance automatique de contenu (ACR) qui suit ce que tu regardes." },
  { "tip": "Utilise une adresse physique type 'Boîte Postale'", "exp": "Pour tes achats en ligne, pour ne pas donner ton adresse exacte à n'importe qui." },
  { "tip": "Désactive le 'Cloud Backup' de ton gestionnaire de mots de passe", "exp": "Préfère une base de données locale synchronisée manuellement par toi-même." },
  { "tip": "Méfie-toi des messages 'URGENT' de ton patron", "exp": "L'arnaque au président utilise l'autorité pour te faire faire des virements." },
  { "tip": "Vérifie le dossier 'Spam' pour les alertes de sécurité", "exp": "Parfois, les vrais mails d'alerte y finissent par erreur." },
  { "tip": "Utilise un firewall matériel (ex: pfSense)", "exp": "Pour une protection pro de tout ton foyer au niveau du routeur." },
  { "tip": "Désactive le micro de ta console de jeux", "exp": "Évite que tes conversations de salon ne soient diffusées en ligne par erreur." },
  { "tip": "Vérifie les permissions 'Accessibilité' sur Android", "exp": "C'est la permission préférée des malwares pour espionner ton écran." },
  { "tip": "Ne réutilise pas tes anciennes questions de sécurité", "exp": "Le nom de ton premier chien est probablement facile à trouver sur le web." },
  { "tip": "Utilise un 'Ad-Blocker' au niveau DNS (Pi-hole)", "exp": "Bloque les pubs sur tous les appareils de la maison, même les Smart TV." },
  { "tip": "Désactive le Bluetooth sur tes enceintes connectées", "exp": "Évite qu'un voisin ne s'y connecte pour diffuser du contenu ou écouter." },
  { "tip": "Vérifie régulièrement ton fichier 'hosts' (Windows)", "exp": "Un malware peut le modifier pour rediriger Google vers un faux site." },
  { "tip": "N'installe pas de profils de configuration inconnus (iOS)", "exp": "Ils peuvent rediriger tout ton trafic internet vers un serveur pirate." },
  { "tip": "Utilise un gestionnaire de cookies (Cookie AutoDelete)", "exp": "Supprime les cookies dès que tu fermes un onglet." },
  { "tip": "Désactive l'aperçu du contenu des notifications", "exp": "Protège tes codes 2FA des regards indiscrets dans le métro." },
  { "tip": "Méfie-toi des 'tests de personnalité' sur Facebook", "exp": "Ils servent souvent à collecter des données pour du profilage politique." },
  { "tip": "Vérifie la présence d'un 'Cadenas' mais regarde le nom", "exp": "Un cadenas sur `secure-bank.ru` ne veut pas dire que c'est TA banque." },
  { "tip": "Désactive le chargement des images distantes (Mails)", "exp": "Empêche l'expéditeur de savoir si et quand tu as ouvert le mail." },
  { "tip": "Utilise 'Tor Browser' pour l'anonymat critique", "exp": "À n'utiliser que si ta sécurité physique ou ta liberté en dépend." },
  { "tip": "Vérifie tes paramètres de partage OneDrive/Dropbox", "exp": "Un lien 'public' peut être indexé par les moteurs de recherche." },
  { "tip": "Ne connecte pas ton téléphone pro au Wi-Fi de l'hôtel", "exp": "Préfère le partage de connexion 4G/5G de ton propre mobile." },
  { "tip": "Désactive le 'Remote Wipe' si tu n'as pas de backup", "exp": "Un pirate pourrait effacer ton téléphone à distance par pur plaisir." },
  { "tip": "Utilise un cache-caméra physique coulissant", "exp": "Plus propre et plus sûr qu'un bout de scotch qui laisse de la colle." },
  { "tip": "Méfie-toi des invitations LinkedIn de profils parfaits", "exp": "Le 'catfishing' professionnel sert à infiltrer des réseaux d'entreprises." },
  { "tip": "Vérifie la version de ton protocole TLS", "exp": "Assure-toi que ton navigateur utilise au moins TLS 1.2 ou 1.3." },
  { "tip": "Désactive l'envoi de rapports d'erreurs automatique", "exp": "Ces rapports contiennent parfois des bribes de mémoire vive (RAM) sensibles." },
  { "tip": "Utilise une multiprise avec protection contre les surtensions", "exp": "La sécurité, c'est aussi protéger tes composants contre la foudre." },
  { "tip": "Ne stocke pas de photos de tes cartes d'identité", "exp": "Si ton cloud est compromis, l'usurpation d'identité est garantie." },
  { "tip": "Désactive la réponse par SMS quand l'écran est verrouillé", "exp": "Empêche quelqu'un de répondre à ta place sans déverrouiller le téléphone." },
  { "tip": "Apprends à faire un 'Hard Reset' de tes appareils", "exp": "Utile pour effacer proprement tes données avant de vendre un vieux téléphone." }
[
  { "tip": "Change le nom de ton Wi-Fi (SSID)", "exp": "Évite de laisser le nom par défaut (ex: Livebox-1234) qui trahit ton opérateur." },
  { "tip": "Désactive le partage de fichiers Windows", "exp": "Si tu ne l'utilises pas, cela ferme le protocole SMB, cible fréquente d'attaques." },
  { "tip": "Vérifie les extensions .exe cachées", "exp": "Affiche les extensions de fichiers pour ne pas ouvrir 'image.jpg.exe' par erreur." },
  { "tip": "Utilise un mot de passe pour ton économiseur d'écran", "exp": "Dès que l'écran se met en veille, la session doit se verrouiller." },
  { "tip": "Évite les chargeurs publics 'gratuits'", "exp": "Ils peuvent transférer des données en plus de l'électricité (Juice Jacking)." },
  { "tip": "Méfie-toi des PDFs demandant un mot de passe", "exp": "C'est une ruse pour te faire taper ton mot de passe habituel dans un faux champ." },
  { "tip": "Désactive le microphone dans les paramètres Windows", "exp": "Coupe l'accès global pour toutes les apps et ne l'active qu'en réunion." },
  { "tip": "Vérifie les appareils connectés à ton compte Spotify", "exp": "Un compte piraté peut servir à booster des écoutes de façon invisible." },
  { "tip": "Utilise un disque dur externe pour tes backups", "exp": "Débranche-le après la sauvegarde pour le protéger des ransomwares." },
  { "tip": "Désactive l'assistance à distance (Quick Assist)", "exp": "C'est un outil souvent détourné par les faux supports techniques." },
  { "tip": "Vérifie les permissions de ta liseuse ou tablette", "exp": "Même ces appareils simples peuvent collecter des données de lecture." },
  { "tip": "Utilise un code PIN pour ta carte SIM", "exp": "Empêche quelqu'un d'utiliser ton forfait s'il vole ta carte SIM." },
  { "tip": "Évite de donner ton numéro de mobile aux sites", "exp": "Privilégie l'usage d'une application d'authentification (2FA) plutôt que le SMS." },
  { "tip": "Désactive le Wi-Fi sur ta console portable en extérieur", "exp": "Évite les scans sauvages et les connexions aux hotspots malveillants." },
  { "tip": "Nettoie la liste des réseaux Wi-Fi enregistrés", "exp": "Supprime les réseaux d'hôtels ou de gares où tu ne retourneras plus." },
  { "tip": "Vérifie les paramètres de partage de ton calendrier", "exp": "Assure-toi que tes rendez-vous privés ne sont pas visibles par toute l'entreprise." },
  { "tip": "Utilise des étiquettes physiques pour tes câbles", "exp": "Savoir quel câble va où évite de débrancher le pare-feu par erreur." },
  { "tip": "Méfie-toi des clés USB offertes en salon pro", "exp": "Elles sont souvent de mauvaise qualité ou pré-infectées." },
  { "tip": "Désactive la synchronisation de l'historique de presse-papiers", "exp": "Évite que tes copier-coller (parfois des mots de passe) partent dans le cloud." },
  { "tip": "Utilise un mot de passe robuste pour ton compte Ameli/Impôts", "exp": "Ces comptes sont les cibles prioritaires pour l'usurpation d'identité." },
  { "tip": "Vérifie l'URL après une redirection", "exp": "Un site peut sembler correct puis te rediriger vers une copie pirate." },
  { "tip": "Désactive le mode 'Debug' sur ta Smart TV", "exp": "Certaines TV laissent des ports ouverts pour les développeurs par défaut." },
  { "tip": "Utilise un VPN même en télétravail", "exp": "Cela sécurise le tunnel entre ton domicile et les serveurs de ton entreprise." },
  { "tip": "Méfie-toi des fichiers téléchargés via Discord/Telegram", "exp": "Les scripts malveillants y circulent très vite sous forme de 'cadeaux'." },
  { "tip": "Désactive l'accès aux fichiers hors connexion", "exp": "Si ton PC est volé, tes fichiers cloud ne seront pas stockés localement." },
  { "tip": "Vérifie le niveau de batterie de tes capteurs de sécurité", "exp": "Une alarme connectée ne sert à rien si sa pile est vide." },
  { "tip": "Utilise un navigateur 'durci' pour tes recherches", "exp": "Librewolf ou Mullvad Browser sont configurés pour une vie privée maximale." },
  { "tip": "Désactive le 'Cloud Print' si inutile", "exp": "Empêche l'impression de documents depuis n'importe où sur internet." },
  { "tip": "Méfie-toi des messages demandant de 'Valider ton compte'", "exp": "Les banques n'envoient jamais de liens directs pour validation." },
  { "tip": "Utilise une adresse mail dédiée aux réseaux sociaux", "exp": "Sépare tes loisirs de ta vie administrative et bancaire." },
  { "tip": "Vérifie les processus 'scvhost.exe' suspects", "exp": "Un virus peut essayer de se faire passer pour un processus système Windows." },
  { "tip": "Désactive le contenu distant dans Outlook", "exp": "Bloque les trackers qui indiquent à l'expéditeur que tu as lu son mail." },
  { "tip": "Utilise un disque SSD pour tes sauvegardes", "exp": "Ils sont plus résistants aux chocs physiques que les disques durs à plateaux." },
  { "tip": "Méfie-toi des publicités pour des antivirus gratuits", "exp": "C'est souvent du 'Scareware' qui installe lui-même des menaces." },
  { "tip": "Désactive le Bluetooth de ta voiture au parking", "exp": "Certains pirates scannent les parkings pour identifier les cibles intéressantes." },
  { "tip": "Utilise un 'Folder Lock' pour tes dossiers personnels", "exp": "Ajoute une couche de mot de passe sur tes dossiers les plus sensibles." },
  { "tip": "Vérifie régulièrement l'espace disque restant", "exp": "Un disque plein peut empêcher les mises à jour de sécurité de s'installer." },
  { "tip": "Désactive l'option 'Me garder connecté'", "exp": "Force-toi à te reconnecter pour éviter qu'une session reste active à l'infini." },
  { "tip": "Méfie-toi des extensions de fichiers doubles (ex: .txt.vbs)", "exp": "Windows masque parfois la deuxième extension, sois vigilant." },
  { "tip": "Utilise un chargeur mural officiel", "exp": "Les chargeurs contrefaits peuvent endommager la batterie et le système." },
  { "tip": "Désactive la webcam dans le Gestionnaire de périphériques", "exp": "Pour une sécurité logicielle totale si tu ne l'utilises jamais." },
  { "tip": "Vérifie les accès de ton compte Microsoft/Apple", "exp": "Regarde la liste des appareils de confiance et supprime les anciens." },
  { "tip": "Utilise une police de caractère lisible pour tes mots de passe", "exp": "Évite de confondre le 'I' majuscule, le 'l' minuscule et le chiffre '1'." },
  { "tip": "Désactive le partage d'imprimante Windows (Spooler)", "exp": "S'il n'est pas utilisé, c'est une source historique de failles critiques." },
  { "tip": "Méfie-toi des appels demandant d'installer 'AnyDesk'", "exp": "C'est l'outil n°1 utilisé par les brouteurs pour vider tes comptes." },
  { "tip": "Utilise un gestionnaire de mots de passe hors ligne (KeePass)", "exp": "Ta base de données reste chez toi, pas sur les serveurs d'une entreprise." },
  { "tip": "Vérifie l'intégrité de ton système (sfc /scannow)", "exp": "Une commande Windows simple pour vérifier que tes fichiers système sont sains." },
  { "tip": "Désactive les notifications sur l'écran de verrouillage Android", "exp": "Protège tes messages privés des regards indiscrets." },
  { "tip": "Utilise un alias mail pour tes achats Amazon/eBay", "exp": "Facilite le filtrage si ces sites commencent à t'envoyer trop de pubs." },
  { "tip": "Méfie-toi des sites de streaming 'gratuits'", "exp": "Ils sont truffés de scripts malveillants et de publicités infectées." }
[
  { "tip": "Utilise un mot de passe différent pour ton Wi-Fi", "exp": "Le mot de passe de ta box ne doit pas être celui de l'interface d'admin." },
  { "tip": "Désactive l'historique des fichiers récents", "exp": "Empêche quelqu'un qui utilise ton PC de voir tes derniers documents ouverts." },
  { "tip": "Vérifie la provenance de tes fichiers APK (Android)", "exp": "Ne télécharge jamais d'applications en dehors du Play Store ou F-Droid." },
  { "tip": "Utilise un écran de veille noir", "exp": "Économise de l'énergie et cache ton activité dès que tu t'éloignes." },
  { "tip": "Méfie-toi des demandes d'ajout d'amis sur Steam", "exp": "Souvent des bots qui veulent t'envoyer un lien de phishing pour ton inventaire." },
  { "tip": "Désactive le mode 'Toujours visible' du Bluetooth", "exp": "Rends ton appareil indétectable pour les scanners passifs." },
  { "tip": "Utilise un bloqueur de traqueurs sur mobile", "exp": "Des apps comme Lockdown ou DNSCloak protègent ta vie privée sur smartphone." },
  { "tip": "Vérifie les paramètres de ton compte Netflix", "exp": "Regarde s'il y a des profils inconnus, signe d'un compte partagé ou piraté." },
  { "tip": "Désactive la sauvegarde des photos WhatsApp dans la galerie", "exp": "Évite que des images reçues (parfois malveillantes) ne polluent ton cloud." },
  { "tip": "Utilise une clé USB pour tes mots de passe (Keyfile)", "exp": "Ajoute une sécurité physique à ton coffre-fort KeePass." },
  { "tip": "Méfie-toi des clés USB avec un bouton 'Connect'", "exp": "Elles peuvent agir comme un clavier et taper des commandes à ta place." },
  { "tip": "Désactive le Wi-Fi public dans les réglages système", "exp": "Empêche ton téléphone de chercher activement à se connecter partout." },
  { "tip": "Vérifie les 'Avis de sécurité' de tes apps bancaires", "exp": "Active les notifications pour chaque transaction, même de 0,01€." },
  { "tip": "Utilise un pseudo différent sur chaque forum", "exp": "Évite qu'on puisse croiser tes informations pour deviner ton identité." },
  { "tip": "Désactive l'envoi de statistiques d'utilisation (Telemetry)", "exp": "Limite les données que ton système envoie à l'éditeur." },
  { "tip": "Méfie-toi des emails de 'Changement de mot de passe'", "exp": "Si tu ne l'as pas demandé, ne clique sur rien et change-le manuellement." },
  { "tip": "Utilise un navigateur sans historique pour tes recherches médicales", "exp": "Évite que les régies publicitaires ne ciblent tes problèmes de santé." },
  { "tip": "Désactive le partage de données de santé (HealthKit/Google Fit)", "exp": "Ne partage ces infos qu'avec les apps dont tu as réellement besoin." },
  { "tip": "Vérifie le cryptage de tes appels (icône cadenas)", "exp": "Assure-toi que tes appels vocaux passent par un canal sécurisé." },
  { "tip": "Utilise un 'Fake GPS' (avec prudence)", "exp": "Pour tester des apps sans donner ta position réelle (Android uniquement)." },
  { "tip": "Désactive l'accès au micro pour le navigateur", "exp": "Ne l'autorise qu'au cas par cas pour tes appels visio." },
  { "tip": "Méfie-toi des chargeurs solaires bas de gamme", "exp": "Ils peuvent délivrer un voltage instable qui endommage tes circuits." },
  { "tip": "Utilise un gestionnaire de téléchargement (JDownloader)", "exp": "Permet de scanner les fichiers avant qu'ils ne soient ouverts." },
  { "tip": "Désactive l'aperçu des messages dans la barre de tâches", "exp": "Empêche un collègue de lire tes messages en passant derrière toi." },
  { "tip": "Vérifie la date d'expiration de ton domaine (si tu en as un)", "exp": "Un domaine expiré peut être racheté pour intercepter tes mails." },
  { "tip": "Utilise un VPN pour tes téléchargements légaux", "exp": "Protège ton adresse IP des regards indiscrets sur les réseaux P2P." },
  { "tip": "Désactive le 'Cloud Search' dans Windows", "exp": "Empêche tes recherches locales d'être envoyées aux serveurs de Microsoft." },
  { "tip": "Méfie-toi des demandes de codes de parrainage", "exp": "C'est souvent un moyen de lier ton identité à celle d'un inconnu." },
  { "tip": "Utilise un sac à dos 'Anti-vol'", "exp": "Avec des fermetures cachées pour protéger ton matériel en déplacement." },
  { "tip": "Désactive la reconnaissance d'image automatique (Cloud)", "exp": "Évite que tes photos ne soient analysées pour du profilage marketing." },
  { "tip": "Vérifie tes paramètres de confidentialité YouTube", "exp": "Garde tes listes de lecture et tes abonnements privés par défaut." },
  { "tip": "Utilise un mot de passe pour tes fichiers compressés (.zip)", "exp": "Chiffre le contenu pour que personne ne puisse voir la liste des fichiers." },
  { "tip": "Désactive le 'Fast User Switching' si tu es seul", "exp": "Libère de la mémoire et ferme les sessions inactives." },
  { "tip": "Méfie-toi des sites de 'Conversion PDF' gratuits", "exp": "Ils conservent souvent une copie de tes documents sur leurs serveurs." },
  { "tip": "Utilise une adresse mail spécifique pour tes objets connectés", "exp": "Isole tes ampoules et caméras du reste de ta vie numérique." },
  { "tip": "Désactive l'accès à la localisation pour ton navigateur", "exp": "Empêche les sites de savoir dans quelle ville tu te trouves." },
  { "tip": "Vérifie les 'Security Keys' enregistrées sur Facebook/Google", "exp": "Supprime les clés que tu n'utilises plus ou que tu as perdues." },
  { "tip": "Utilise un 'User Agent Switcher'", "exp": "Pour faire croire aux sites que tu utilises un autre système et limiter le fingerprinting." },
  { "tip": "Désactive le chargement automatique des polices Google Fonts", "exp": "Utilise une extension pour bloquer les requêtes vers les serveurs Google." },
  { "tip": "Méfie-toi des 'Bots' sur les messageries", "exp": "N'interagis pas avec des comptes automatisés qui demandent des infos." },
  { "tip": "Utilise un disque dur externe crypté pour tes photos", "exp": "Tes souvenirs méritent une protection contre le vol physique." },
  { "tip": "Désactive le partage de connexion via USB", "exp": "Évite qu'un PC infecté ne pompe la connexion de ton téléphone." },
  { "tip": "Vérifie les applications qui ont accès à ton calendrier", "exp": "Supprime les vieux outils de productivité que tu n'utilises plus." },
  { "tip": "Utilise un mot de passe pour ton application de notes", "exp": "Tes idées et tes listes peuvent contenir des infos sensibles." },
  { "tip": "Désactive l'envoi de 'Diagnostics' sur ton routeur", "exp": "Limite les données partagées avec le constructeur de ta box." },
  { "tip": "Méfie-toi des câbles HDMI 'intelligents'", "exp": "Certains peuvent injecter du contenu ou capturer des images." },
  { "tip": "Utilise un filtre de confidentialité magnétique", "exp": "Pratique pour l'enlever quand tu es seul et le remettre en public." },
  { "tip": "Désactive le Bluetooth de tes écouteurs quand ils sont rangés", "exp": "Économise la batterie et ferme une porte d'accès." },
  { "tip": "Vérifie les permissions de ton application de clavier (mobile)", "exp": "Un clavier malveillant peut enregistrer tout ce que tu tapes (Keylogger)." },
  { "tip": "Utilise une machine virtuelle pour tes opérations bancaires", "exp": "Crée un environnement ultra-propre et jetable pour chaque session." },
  { "tip": "Désactive la synchronisation de tes favoris dans le cloud", "exp": "Garde ta liste de sites préférés localement sur ton appareil." },
  { "tip": "Méfie-toi des demandes de 'Screen Sharing' impromptues", "exp": "Ne montre jamais ton écran à quelqu'un que tu ne connais pas physiquement." },
  { "tip": "Utilise un nom d'hôte personnalisé pour ton PC", "exp": "Évite 'PC-DE-JEAN' qui donne ton nom sur le réseau local." },
  { "tip": "Désactive le Wi-Fi 2.4GHz si tu utilises le 5GHz", "exp": "Réduit les interférences et la surface d'attaque sans fil." },
  { "tip": "Vérifie les 'Appels d'urgence' configurés sur ton mobile", "exp": "Assure-toi que les bons contacts seront prévenus en cas de pépin." },
  { "tip": "Utilise un mot de passe pour ton compte de messagerie vocale", "exp": "Empêche l'écoute de tes messages par des tiers malveillants." },
  { "tip": "Désactive l'UPnP sur tous tes appareils domestiques", "exp": "C'est la règle d'or pour éviter les trous de sécurité automatiques." },
  { "tip": "Méfie-toi des sites qui forcent le mode plein écran", "exp": "Ils peuvent simuler une fausse barre d'adresse pour te tromper." },
  { "tip": "Utilise une extension pour bloquer les mineurs de crypto", "exp": "Empêche les sites d'utiliser ton processeur pour gagner de l'argent." },
  { "tip": "Désactive le partage de ton statut 'En ligne'", "exp": "Protège ton calme et évite d'indiquer quand tu es actif." },
  { "tip": "Vérifie les comptes liés à ton numéro de téléphone", "exp": "Fais le ménage dans les services qui utilisent ton mobile pour la récup'." },
  { "tip": "Utilise un VPN 'Kill Switch'", "exp": "Coupe internet instantanément si la connexion VPN lâche." },
  { "tip": "Désactive l'accès à distance pour ton NAS", "exp": "N'y accède que via ton réseau local ou un tunnel VPN sécurisé." },
  { "tip": "Méfie-toi des emails avec des polices de caractères bizarres", "exp": "Utilisé pour contourner les filtres anti-spam automatiques." },
  { "tip": "Utilise un mot de passe pour ton application de banque", "exp": "Ajoute une couche (FaceID ou PIN) même si le téléphone est déverrouillé." },
  { "tip": "Désactive le service 'SSDP' sur Windows", "exp": "S'il n'est pas utilisé, il peut être exploité pour des attaques DDoS." },
  { "tip": "Vérifie tes réglages de confidentialité Instagram", "exp": "Limite qui peut te taguer ou voir tes stories." },
  { "tip": "Utilise un navigateur 'Portable' sur clé USB", "exp": "Pour surfer sur un PC étranger sans laisser aucune trace locale." },
  { "tip": "Désactive l'envoi de rapports de crash sur ton mobile", "exp": "Évite l'envoi de logs techniques vers les serveurs des constructeurs." },
  { "tip": "Méfie-toi des QR Codes sur les horodateurs", "exp": "Des pirates collent de faux codes pour voler tes infos de carte." },
  { "tip": "Utilise un mot de passe pour ton application mail mobile", "exp": "Une protection de plus si tu prêtes ton téléphone 2 minutes." },
  { "tip": "Désactive la fonction 'Rejoindre automatiquement les réseaux'", "exp": "Contrôle manuellement chaque connexion Wi-Fi." },
  { "tip": "Vérifie les 'Appareils de confiance' sur ton compte Amazon", "exp": "Supprime les anciens téléphones ou tablettes vendus." },
  { "tip": "Utilise un 'DNS via HTTPS' (DoH)", "exp": "Chiffre tes requêtes DNS pour que ton fournisseur internet ne les voie pas." },
  { "tip": "Désactive le micro des caméras intérieures quand tu es là", "exp": "Garantis ton intimité sonore au quotidien." },
  { "tip": "Méfie-toi des emails 'Votre abonnement expire demain'", "exp": "Vérifie toujours sur le site officiel sans cliquer sur le lien du mail." },
  { "tip": "Utilise un mot de passe pour ton application de photos", "exp": "Protège tes clichés personnels des regards curieux." },
  { "tip": "Désactive le partage de ton emplacement sur Google Maps", "exp": "Ne le partage qu'avec des proches et pour une durée limitée." },
  { "tip": "Vérifie tes paramètres de confidentialité TikTok", "exp": "Limite la portée de tes vidéos et les données collectées." },
  { "tip": "Utilise la règle d'or : en cas de doute, on ne clique pas", "exp": "Le meilleur antivirus, c'est ton esprit critique." }
]
  ]
  ]
  ]
  ]
  ]
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
