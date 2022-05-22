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

    function playerClick() {
        if (document.getElementById("red").addEventListener("click", () => {
            red.play();
            PlayerChoice.push("red")
            check(PlayerChoice, store)

        })) ;
        else if (document.getElementById("yellow").addEventListener("click", () => {
            yellow.play();
            PlayerChoice.push("yellow")
            check(PlayerChoice, store)
        })) ;
        else if (document.getElementById("blue").addEventListener("click", () => {
            blue.play()
            PlayerChoice.push("blue")
            check(PlayerChoice, store)
        })) ;
        else if (document.getElementById("green").addEventListener("click", () => {
            green.play();
            PlayerChoice.push("green")
            check(PlayerChoice, store)
        })) ;


    }


    function fade(ele) {
        var main = ele.style.visibility;
        ele.style.visibility = 'hidden';
        setTimeout(function () {
            ele.style.visibility = main;
        }, 300);
    }


    function check(array1, array2) {

        for (var i = 0; i < array1.length; i++) {
            var stat = false
            if (array1[i] == array2[i]) {
                stat = true
            } else {
                stat = false
                lost()
            }

        }
        if (array1.length == array2.length && stat == true) {
            setTimeout(function () {
                game();
            }, 1000)
        }

    }


    function lost() {
        lose.play();
        level = 0;
        document.getElementById("main").innerText = "Game Over...Press any key to restart"
        PlayerChoice = []
        store = []
        document.removeEventListener("keypress", x)
        document.addEventListener("keypress", game)


    }

}


