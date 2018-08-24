$(document).ready(function () {

// ----------------VARIABLES----------------
// CHARACTER VARIABLES
var luke = 
'<div class="card col-sm-3" id="luke-card" style="width:120px">' +
    '<img class="card-img-top" src="assets/images/lukeSky.jpg" width="120px" alt="luke skywalker">' +
    '<div class="card-body">' +
        '<h4 class="card-title">Luke</h4>' +
        '<p class="card-text" id="luke-points"></p>' +
    '</div>' +
'</div>'
var rey =
'<div class="card col-sm-3" id="rey-card" style="width:120px">' +
    '<img class="card-img-top" src="assets/images/rey.png" width="120px" alt="rey">' +
    '<div class="card-body">' +
        '<h4 class="card-title">Rey</h4>' +
        '<p class="card-text" id="rey-points"></p>' +
    '</div>' +
'</div>'
var kylo = 
'<div class="card col-sm-3" id="kylo-card" style="width:120px">' +
    '<img class="card-img-top" src="assets/images/kyloRen.jpg" width="120px" alt=" kylo ren">' +
    '<div class="card-body">' +
        '<h4 class="card-title">Kylo</h4>' +
        '<p class="card-text" id="kylo-points"></p>' +
    '</div>' +
'</div>'
var snoke =
'<div class="card col-sm-3" id="snoke-card" style="width:120px">' +
    '<img class="card-img-top" src="assets/images/snoke.jpg" width="120px" alt="snoke">' +
    '<div class="card-body">' +
        '<h4 class="card-title">Snoke</h4>' +
        '<p class="card-text" id="snoke-points"></p>' +
    '</div>' +
'</div>'

// var characters = ["luke", "rey", "kylo", "snoke"];

// var enemyCharacters = [];
// var defeatedCharacters = [];
// var userHealth = 0;
// var defenderHealth = 0;

// HEALTH VARIABLES
var lukeHealth = 150;
var reyHealth = 100;
var kyloHealth = 120;
var snokeHealth = 180;

    // PRINT HEALTH POINTS TO CARDS
    $("#luke-points").text("Health Points: " + lukeHealth);
    $("#rey-points").text("Health Points: " + reyHealth);
    $("#kylo-points").text("Health Points: " + kyloHealth);
    $("#snoke-points").text("Health Points: " + snokeHealth);

// ATTACK VARIABLES
var attackPower = 8;
var counterPower = 25;

// ----------------GAME----------------
// CHOOSE CHARACTER

// CHOOSE TO PLAY AS LUKE
$("#luke-card").on("click", function() {
    $(".choose-player").html("");
    $("#your-area").html(luke);
    $("#enemies-area").html(rey + kylo + snoke);
        $("#luke-points").text("Health Points: " + lukeHealth);
        $("#rey-points").text("Health Points: " + reyHealth);
        $("#kylo-points").text("Health Points: " + kyloHealth);
        $("#snoke-points").text("Health Points: " + snokeHealth);

    // CHOOSE REY AS DEFENDER
    $("#rey-card").on("click", function () {
        $("#defender-area").html(rey);
        $("#enemies-area").html(kylo + snoke);
            $("#luke-points").text("Health Points: " + lukeHealth);
            $("#rey-points").text("Health Points: " + reyHealth);
            $("#kylo-points").text("Health Points: " + kyloHealth);
            $("#snoke-points").text("Health Points: " + snokeHealth);
        // ATTACK
        $(".attack-btn").on("click", function () {
            reyHealth = reyHealth - attackPower;
            lukeHealth = lukeHealth - counterPower;
            attackPower = attackPower + 8;
                $("#luke-points").text("Health Points: " + lukeHealth);
                $("#rey-points").text("Health Points: " + reyHealth);
                $("#kylo-points").text("Health Points: " + kyloHealth);
                $("#snoke-points").text("Health Points: " + snokeHealth);
        });
    });
    // CHOOSE KYLO AS DEFENDER
    $("#kylo-card").on("click", function () {
        $("#defender-area").html(kylo);
        $("#enemies-area").html(rey + snoke);
            $("#luke-points").text("Health Points: " + lukeHealth);
            $("#rey-points").text("Health Points: " + reyHealth);
            $("#kylo-points").text("Health Points: " + kyloHealth);
            $("#snoke-points").text("Health Points: " + snokeHealth);
        // ATTACK
        $(".attack-btn").on("click", function () {
            kyloHealth = kyloHealth - attackPower;
            lukeHealth = lukeHealth - counterPower;
            attackPower = attackPower + 8;
                $("#luke-points").text("Health Points: " + lukeHealth);
                $("#rey-points").text("Health Points: " + reyHealth);
                $("#kylo-points").text("Health Points: " + kyloHealth);
                $("#snoke-points").text("Health Points: " + snokeHealth);
        });
    });
    // CHOOSE SNOKE AS DEFENDER
    $("#snoke-card").on("click", function () {
        $("#defender-area").html(snoke);
        $("#enemies-area").html(rey + kylo);
            $("#luke-points").text("Health Points: " + lukeHealth);
            $("#rey-points").text("Health Points: " + reyHealth);
            $("#kylo-points").text("Health Points: " + kyloHealth);
            $("#snoke-points").text("Health Points: " + snokeHealth);
        // ATTACK
        $(".attack-btn").on("click", function () {
            snokeHealth = snokeHealth - attackPower;
            lukeHealth = lukeHealth - counterPower;
            attackPower = attackPower + 8;
                $("#luke-points").text("Health Points: " + lukeHealth);
                $("#rey-points").text("Health Points: " + reyHealth);
                $("#kylo-points").text("Health Points: " + kyloHealth);
                $("#snoke-points").text("Health Points: " + snokeHealth);
        });
    });
});

// CHOOSE TO PLAY AS REY
$("#rey-card").on("click", function () {
    $(".choose-player").html("");
    $("#your-area").html(rey);
    $("#enemies-area").html(luke + kylo + snoke);
        $("#luke-points").text("Health Points: " + lukeHealth);
        $("#rey-points").text("Health Points: " + reyHealth);
        $("#kylo-points").text("Health Points: " + kyloHealth);
        $("#snoke-points").text("Health Points: " + snokeHealth);

    // CHOOSE LUKE AS DEFENDER
    $("#luke-card").on("click", function () {
        $("#defender-area").html(luke);
        $("#enemies-area").html(kylo + snoke);
            $("#luke-points").text("Health Points: " + lukeHealth);
            $("#rey-points").text("Health Points: " + reyHealth);
            $("#kylo-points").text("Health Points: " + kyloHealth);
            $("#snoke-points").text("Health Points: " + snokeHealth);
        // ATTACK
        $(".attack-btn").on("click", function () {
            lukeHealth = lukeHealth - attackPower;
            reyHealth = reyHealth - counterPower;
            attackPower = attackPower + 8;
                $("#luke-points").text("Health Points: " + lukeHealth);
                $("#rey-points").text("Health Points: " + reyHealth);
                $("#kylo-points").text("Health Points: " + kyloHealth);
                $("#snoke-points").text("Health Points: " + snokeHealth);
        });
    });
    // CHOOSE KYLO AS DEFENDER
    $("#kylo-card").on("click", function () {
        $("#defender-area").html(kylo);
        $("#enemies-area").html(luke + snoke);
            $("#luke-points").text("Health Points: " + lukeHealth);
            $("#rey-points").text("Health Points: " + reyHealth);
            $("#kylo-points").text("Health Points: " + kyloHealth);
            $("#snoke-points").text("Health Points: " + snokeHealth);
        // ATTACK
        $(".attack-btn").on("click", function () {
            kyloHealth = kyloHealth - attackPower;
            reyHealth = reyHealth - counterPower;
            attackPower = attackPower + 8;
                $("#luke-points").text("Health Points: " + lukeHealth);
                $("#rey-points").text("Health Points: " + reyHealth);
                $("#kylo-points").text("Health Points: " + kyloHealth);
                $("#snoke-points").text("Health Points: " + snokeHealth);
        });
    });
    // CHOOSE SNOKE AS DEFENDER
    $("#snoke-card").on("click", function () {
        $("#defender-area").html(snoke);
        $("#enemies-area").html(luke + kylo);
            $("#luke-points").text("Health Points: " + lukeHealth);
            $("#rey-points").text("Health Points: " + reyHealth);
            $("#kylo-points").text("Health Points: " + kyloHealth);
            $("#snoke-points").text("Health Points: " + snokeHealth);
        // ATTACK
        $(".attack-btn").on("click", function () {
            snokeHealth = snokeHealth - attackPower;
            reyHealth = reyHealth - counterPower;
            attackPower = attackPower + 8;
                $("#luke-points").text("Health Points: " + lukeHealth);
                $("#rey-points").text("Health Points: " + reyHealth);
                $("#kylo-points").text("Health Points: " + kyloHealth);
                $("#snoke-points").text("Health Points: " + snokeHealth);
        });
    });
});

// CHOOSE TO PLAY AS KYLO
$("#kylo-card").on("click", function () {
    $(".choose-player").html("");
    $("#your-area").html(kylo);
    $("#enemies-area").html(luke + rey + snoke);
        $("#luke-points").text("Health Points: " + lukeHealth);
        $("#rey-points").text("Health Points: " + reyHealth);
        $("#kylo-points").text("Health Points: " + kyloHealth);
        $("#snoke-points").text("Health Points: " + snokeHealth);

    // CHOOSE LUKE AS DEFENDER
    $("#luke-card").on("click", function () {
        $("#defender-area").html(luke);
        $("#enemies-area").html(rey + snoke);
            $("#luke-points").text("Health Points: " + lukeHealth);
            $("#rey-points").text("Health Points: " + reyHealth);
            $("#kylo-points").text("Health Points: " + kyloHealth);
            $("#snoke-points").text("Health Points: " + snokeHealth);
        // ATTACK
        $(".attack-btn").on("click", function () {
            lukeHealth = lukeHealth - attackPower;
            kyloHealth = kyloHealth - counterPower;
            attackPower = attackPower + 8;
                $("#luke-points").text("Health Points: " + lukeHealth);
                $("#rey-points").text("Health Points: " + reyHealth);
                $("#kylo-points").text("Health Points: " + kyloHealth);
                $("#snoke-points").text("Health Points: " + snokeHealth);
        });
    });
    // CHOOSE REY AS DEFENDER
    $("#rey-card").on("click", function () {
        $("#defender-area").html(rey);
        $("#enemies-area").html(luke + snoke);
            $("#luke-points").text("Health Points: " + lukeHealth);
            $("#rey-points").text("Health Points: " + reyHealth);
            $("#kylo-points").text("Health Points: " + kyloHealth);
            $("#snoke-points").text("Health Points: " + snokeHealth);
        // ATTACK
        $(".attack-btn").on("click", function () {
            reyHealth = reyHealth - attackPower;
            kyloHealth = kyloHealth - counterPower;
            attackPower = attackPower + 8;
                $("#luke-points").text("Health Points: " + lukeHealth);
                $("#rey-points").text("Health Points: " + reyHealth);
                $("#kylo-points").text("Health Points: " + kyloHealth);
                $("#snoke-points").text("Health Points: " + snokeHealth);
        });
    });
    // CHOOSE SNOKE AS DEFENDER
    $("#snoke-card").on("click", function () {
        $("#defender-area").html(snoke);
        $("#enemies-area").html(luke + rey);
            $("#luke-points").text("Health Points: " + lukeHealth);
            $("#rey-points").text("Health Points: " + reyHealth);
            $("#kylo-points").text("Health Points: " + kyloHealth);
            $("#snoke-points").text("Health Points: " + snokeHealth);
        // ATTACK
        $(".attack-btn").on("click", function () {
            snokeHealth = snokeHealth - attackPower;
            kyloHealth = kyloHealth - counterPower;
            attackPower = attackPower + 8;
                $("#luke-points").text("Health Points: " + lukeHealth);
                $("#rey-points").text("Health Points: " + reyHealth);
                $("#kylo-points").text("Health Points: " + kyloHealth);
                $("#snoke-points").text("Health Points: " + snokeHealth);
        });
    });
});

// CHOOSE TO PLAY AS SNOKE
$("#snoke-card").on("click", function () {
    $(".choose-player").html("");
    $("#your-area").html(snoke);
    $("#enemies-area").html(luke + rey + kylo);
        $("#luke-points").text("Health Points: " + lukeHealth);
        $("#rey-points").text("Health Points: " + reyHealth);
        $("#kylo-points").text("Health Points: " + kyloHealth);
        $("#snoke-points").text("Health Points: " + snokeHealth);

    // CHOOSE LUKE AS DEFENDER
    $("#luke-card").on("click", function () {
        $("#defender-area").html(luke);
        $("#enemies-area").html(rey + kylo);
            $("#luke-points").text("Health Points: " + lukeHealth);
            $("#rey-points").text("Health Points: " + reyHealth);
            $("#kylo-points").text("Health Points: " + kyloHealth);
            $("#snoke-points").text("Health Points: " + snokeHealth);
        // ATTACK
        $(".attack-btn").on("click", function () {
            lukeHealth = lukeHealth - attackPower;
            snokeHealth = snokeHealth - counterPower;
            attackPower = attackPower + 8;
                $("#luke-points").text("Health Points: " + lukeHealth);
                $("#rey-points").text("Health Points: " + reyHealth);
                $("#kylo-points").text("Health Points: " + kyloHealth);
                $("#snoke-points").text("Health Points: " + snokeHealth);
        });
    });
    // CHOOSE REY AS DEFENDER
    $("#rey-card").on("click", function () {
        $("#defender-area").html(rey);
        $("#enemies-area").html(luke + kylo);
            $("#luke-points").text("Health Points: " + lukeHealth);
            $("#rey-points").text("Health Points: " + reyHealth);
            $("#kylo-points").text("Health Points: " + kyloHealth);
            $("#snoke-points").text("Health Points: " + snokeHealth);
        // ATTACK
        $(".attack-btn").on("click", function () {
            reyHealth = reyHealth - attackPower;
            snokeHealth = snokeHealth - counterPower;
            attackPower = attackPower + 8;
                $("#luke-points").text("Health Points: " + lukeHealth);
                $("#rey-points").text("Health Points: " + reyHealth);
                $("#kylo-points").text("Health Points: " + kyloHealth);
                $("#snoke-points").text("Health Points: " + snokeHealth);
        });
    });
    // CHOOSE KYLO AS DEFENDER
    $("#kylo-card").on("click", function () {
        $("#defender-area").html(kylo);
        $("#enemies-area").html(luke + rey);
            $("#luke-points").text("Health Points: " + lukeHealth);
            $("#rey-points").text("Health Points: " + reyHealth);
            $("#kylo-points").text("Health Points: " + kyloHealth);
            $("#snoke-points").text("Health Points: " + snokeHealth);
        // ATTACK
        $(".attack-btn").on("click", function () {
            kyloHealth = kyloHealth - attackPower;
            snokeHealth = snokeHealth - counterPower;
            attackPower = attackPower + 8;
                $("#luke-points").text("Health Points: " + lukeHealth);
                $("#rey-points").text("Health Points: " + reyHealth);
                $("#kylo-points").text("Health Points: " + kyloHealth);
                $("#snoke-points").text("Health Points: " + snokeHealth);
        });
    });
});

// ------------------------------------------------
});