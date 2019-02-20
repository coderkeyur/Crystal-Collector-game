
var crystalOne = Math.floor(Math.random() * 12) +1;
var crystalTwo = Math.floor(Math.random() * 12) +1;
var crystalThree = Math.floor(Math.random() * 12) +1;
var crystalFour = Math.floor(Math.random() * 12) +1;

var randomNumber = Math.floor(Math.random() * 120 - 19 + 1) + 19;

var totalScore = 0;

var wins = 0;
var loss = 0;

$(".random-number").text("Random Number: " + (randomNumber));

$(".crystal-one").on("click", function(){
    this.value = crystalOne;
    totalScore = totalScore + crystalOne;
    addcrystal ();
    checkscore ();
});

$(".crystal-two").on("click", function(){
    this.value = crystalTwo;
    totalScore = totalScore + crystalTwo;
    addcrystal ();
    checkscore ();
});

$(".crystal-three").on("click", function(){
    this.value = crystalThree;
    totalScore = totalScore + crystalThree;
    addcrystal ();
    checkscore ();
});

$(".crystal-four").on("click", function(){
    this.value = crystalFour;
    totalScore = totalScore + crystalFour;
    addcrystal ();
    checkscore ();
});

function addcrystal () {
    $(".your-score").text("Your Score: " + (totalScore));
}

function checkscore () {
    if (totalScore === randomNumber) {
        wins++;
        $("#win-count").text ("Win Count: " + (wins));
        resetgame();
    } else if (totalScore > randomNumber) {
        loss++;
        $("#loss-count").text ("Loss Count: " + (loss));
        resetgame();
    }
}

function resetgame() {
    totalScore = 0;
    $(".your-score").text("Your Score: " + (totalScore));
    crystalOne = Math.floor(Math.random() * 12) +1;
    crystalTwo = Math.floor(Math.random() * 12) +1;
    crystalThree = Math.floor(Math.random() * 12) +1;
    crystalFour = Math.floor(Math.random() * 12) +1;
    randomNumber = Math.floor(Math.random() * 120 - 19 + 1) + 19;
    $(".random-number").text("Random Number: " + (randomNumber));
}