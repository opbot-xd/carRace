/*const fs = require('fs');*/
document.addEventListener('DOMContentLoaded', function () {
    var tim=0;
    var hs=''
    /*fs.readFile('highscore.txt', (err, data) => {
        if (err) throw err;
       
        hs=(data.toString());
      });
    console.log(parseInt(hs))*/
    var sound1=document.createElement("AUDIO");
    var sound2=document.createElement("AUDIO");
    var sound3=document.createElement("AUDIO");
    sound1.src="./music/engine.mp3"
    sound2.src="./music/crash.mp3"
    sound3.src="./music/crash2.mp3"
    sound1.autoplay= true
    sound1.play()
    sound1.loop=true;
    document.addEventListener('keydown', function (e) {
        if (e.key == 'ArrowLeft') {
            MoveLeft()
        }
        if (e.key == 'ArrowRight') {
            MoveRight()
        }
    })
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    function MoveLeft() {
        let player = document.querySelector(".mycar")
        let current = parseFloat(getComputedStyle(player).left) - 30

        player.style.left = current + 'px'
        if ((current) < 409) {
            GameOver()
        }
    }
    function MoveRight() {
        let player = document.querySelector(".mycar")
        let current = parseFloat(getComputedStyle(player).left) + 30
        console.log(current)
        player.style.left = current + 'px'
        if ((current) >= 1128) {
            GameOver()
        }
    }
    function GameOver() {
        sound1.pause(    )
        sound2.play()
        //sound3.play()
        
        console.log("over")
        tim=tim*10
        clearTimeout(checkDead)
        let road = document.querySelector(".road")
        road.classList.remove("road-animate")
        alert(`Game Over\nYour Score is:${tim}`)
        location.reload()
    }
    let enemy = document.querySelector('.enemy')
    enemy.addEventListener('animationiteration', function () {
        /*count++;
        if(count%2===0){
            let x=getComputedStyle(enemy).animationDuration
            let y=parseFloat(x.substring(0,3))
            if(y!=0.7){
                y=y-0.1
            }
            enemy.style.animationDuration = y + 's'
        }*/
        let randomNumber1 = randomNumber(26, 68);
        enemy.style.left = randomNumber1 + '%';
    })
    checkDead = setInterval(function () {
        let player = document.querySelector(".mycar")
        let playerleft = parseFloat(getComputedStyle(player).left)
        let enemy = document.querySelector(".enemy")
        let enemyleft = parseFloat(getComputedStyle(enemy).left)
        let enemytop = parseFloat(getComputedStyle(enemy).top)
        let range = playerleft - enemyleft
        if (range > (-38) && range < 140 && enemytop > 520 && enemytop < 700) {
            GameOver()
        }
        tim++;
    }, 100)
    /*speedInc = setInterval(function () {
        let enemy = document.querySelector('.enemy')
        let x = getComputedStyle(enemy).animationDuration
        let y = parseFloat(x.substring(0, 3))
        if (y > 0.7) {
            y = y - 0.3
        }
        enemy.style.animationDuration = y + 's'
    }, 2000)*/
})