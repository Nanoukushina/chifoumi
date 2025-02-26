let wins = 0;
let loses = 0;
let rounds = 0;
const maxRounds = 3;

const choices = ["papier", "caillou", "ciseaux"];

const gameStatus = document.getElementById("gameStatus");
const scoreDiv = document.getElementById("score");

const paper = document.getElementById("paper");
const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const resetButton = document.getElementById("reset");

function runGame(userChoice) {
    // Si le nombre maximum de manches est atteint, on ne fait rien
    if (rounds >= maxRounds) return;
    
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";

    // Détermine le résultat de la manche
    switch (userChoice + "_" + computerChoice) {
        case "papier_ciseaux":
        case "caillou_papier":
        case "ciseaux_caillou":
            loses++;
            result = "Vous perdez !";
            break;

        case "papier_caillou":
        case "caillou_ciseaux":
        case "ciseaux_papier":
            wins++;
            result = "Vous gagnez !";
            break;

        case "papier_papier":
        case "caillou_caillou":
        case "ciseaux_ciseaux":
            result = "Égalité !";
            break;
    }
    
    rounds++; // On incrémente le nombre de manches jouées

    // Mise à jour du statut du jeu et du score
    gameStatus.innerHTML = `Manche ${rounds} / ${maxRounds} <br> Vous : ${userChoice} | Ordinateur : ${computerChoice} <br> ${result}`;
    scoreDiv.innerHTML = `Vous: ${wins} | Ordinateur: ${loses}`;

    // Si c'est la dernière manche, on affiche le résultat final
    if (rounds === maxRounds) {
        let finalMessage = "";
        if (wins > loses) {
            finalMessage = "Félicitations, vous avez gagné la partie !";
        } else if (loses > wins) {
            finalMessage = "Dommage, l'ordinateur a gagné la partie !";
        } else {
            finalMessage = "La partie est nulle !";
        }
        gameStatus.innerHTML += `<br><strong>Partie terminée ! ${finalMessage}</strong>`;
    }
}

// Ajout des événements sur les choix du joueur
paper.addEventListener("click", () => runGame("papier"));
rock.addEventListener("click", () => runGame("caillou"));
scissors.addEventListener("click", () => runGame("ciseaux"));

// Réinitialisation du jeu
resetButton.addEventListener("click", () => {
    wins = 0;
    loses = 0;
    rounds = 0;
    gameStatus.innerHTML = "Sélectionnez votre arme !";
    scoreDiv.innerHTML = "Moi: 0 | Ordinateur: 0";
});
