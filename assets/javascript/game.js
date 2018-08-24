$(document).ready(function () {

// ----------------VARIABLES----------------
// CHARACTER VARIABLES
var characters = ["luke", "rey", "kylo", "snoke"];
var userCharacter = [];
var enemyCharacters = [];
var defender = [];
var defeatedCharacters = [];

// HEALTH VARIABLES
var lukeHealth = 120;
var reyHealth = 100;
var kyloHealth = 150;
var snokeHealth = 180;

    // PUSH HEALTH POINTS TO CARDS
    var lukePointsHtml = 
    "<h4 class='card-title'>Luke Skywalker</h4>" +
    "<p class='card-text'>Health Points: " + lukeHealth + "</p>";
    $("#luke-points").html(lukePointsHtml);

    var reyPointsHtml = 
    "<h4 class='card-title'>Rey</h4>" +
    "<p class='card-text'>Health Points: " + lukeHealth + "</p>";
    $("#rey-points").html(reyPointsHtml);

    var kyloPointsHtml = 
    "<h4 class='card-title'>Kylo Ren</h4>" +
    "<p class='card-text'>Health Points: " + lukeHealth + "</p>";
    $("#kylo-points").html(kyloPointsHtml);

    var snokePointsHtml = 
    "<h4 class='card-title'>Snoke</h4>" +
    "<p class='card-text'>Health Points: " + lukeHealth + "</p>";
    $("#snoke-points").html(snokePointsHtml);
    
// ATTACK VARIABLES
var attackPower = 8;
var counterPower = 25;

// ----------------GAME----------------
// CHOOSE CHARACTER
// $("#luke").on("click", function() {
//     console.log("luke clicked");
// });

// ------------------------------------------------
});