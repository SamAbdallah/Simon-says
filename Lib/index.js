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


    document.addEventListener("keypress", x)


    function game() {


        var random = colors[Math.floor(Math.random() * colors.length)];
        level += 1
        document.getElementById("main").innerHTML = "Level" + level;
        auto = document.getElementById(random)
        fade(auto)


        if (random=="red"){
            red.play()
        }
        else if(random=="blue"){
            blue.play()
        }
        else if(random=="yellow"){
            yellow.play()
        }
        else if(random=="green"){
            green.play()
        }


        store.push(random)
        PlayerChoice = []


    }

}


