// highScore.js 

let scoresBtn = document.querySelector( 
	"#view-high-scores"
); 

// Rank previous scores in order by 
// Retrieving scores from localStorage 

function printHighscores() { 
    let highscores = JSON.parse(localStorage.getItem("highscores")) || []; 
    highscores.sort(function (a, b) { 
        return b.score - a.score; 
    }); 

    let highscoresList = document.getElementById("highscoresList");

    highscores.forEach(function (score) { 
        let liTag = document.createElement("li"); 
        liTag.textContent = score.name + " - " + score.score; 

        highscoresList.appendChild(liTag);
    });
}

// Clear previous scores when users click clear 
function clearHighscores() { 
    window.localStorage.removeItem( 
        "highscores"
    ); 
    window.location.reload(); 
} 
document.getElementById( 
    "clear"
).onclick = clearHighscores; 
printHighscores();
