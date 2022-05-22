window.onload=function () {


    var colors = ["green", "yellow", "red", "blue"]
    var red = new Audio("sounds/red.mp3")
    var yellow = new Audio("sounds/yellow.mp3")
    var green = new Audio("sounds/green.mp3")
    var blue = new Audio("sounds/blue.mp3")
    var lose = new Audio("sounds/wrong.mp3")


    store = [];
    PlayerChoice = [];
    var level = 0;

    var x = function (r) {
        game()
        playerClick()
    };

}


