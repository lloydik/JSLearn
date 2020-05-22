"use strict";
set_finish();

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function set_random_enemy() {
    let enemy = document.createElement('DIV');
    enemy.classList.add('enemy');
    enemy.style.left = getRandom(20, document.documentElement.clientWidth - 20) + 'px';
    enemy.style.top = getRandom(20, document.documentElement.clientHeight - 20) + 'px';
    document.body.querySelector('#playField').appendChild(enemy);
}

function check_enemies() {
    let enemyArr = document.querySelectorAll('.enemy');
    for (let i = 0; i < enemyArr.length; i++) {
        if ((player.getBoundingClientRect().left <= enemyArr[i].getBoundingClientRect().left + 10) && (player.getBoundingClientRect().left >= enemyArr[i].getBoundingClientRect().left - 10))
            alert("GOTCHA!");
    }
}
function set_finish(){
    let fin = document.createElement('DIV');
    fin.classList.add('finish');
    document.body.querySelector('#playField').appendChild(fin);
}

function enterDroppable(elem) {
      elem.style.background = 'pink';
    }

    function leaveDroppable(elem) {
      elem.style.background = '';
    }

function max(a, b) {
    if (a > b)
        return a;
    return b;
}

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function decToHex(n) {
    return n.toString(16);
}

function randomColor(col) {
    let r = 0;
    let g = 0;
    let b = 0; //176
    if (col == 'red') {
        g = randInt(0, 176);
        b = randInt(0, 176); //176
        r = max(g, b) + 80;
    } else if (col == 'green') {
        r = randInt(0, 176);
        b = randInt(0, 176); //176
        g = max(r, b) + 80;
    } else if (col == 'blue') {
        r = randInt(0, 176);
        g = randInt(0, 176); //176
        b = max(r, g) + 80;
    }
    let color = '#' + decToHex(r) + decToHex(g) + decToHex(b);
    return color;
}




let player = document.getElementById('player');
let currentDroppable = null;
player.style.backgroundColor = randomColor('red');
player.addEventListener('mousedown', function (e) {
    let coords = getCoords(player);
    let shiftX = 0;
    let shiftY = 0;
    if(e.pageY - coords.top > 0)
        shiftY = e.pageY - coords.top;
    if(e.pageX - coords.left > 0)
        shiftX = e.pageX - coords.left;

    player.style.position = 'absolute';
    document.querySelector("#playField").appendChild(player);
    moveAt(e);

    player.style.zIndex = 1000; // над другими элементами

    function moveAt(e) {
        if((e.pageX - shiftX >= 0) && (e.pageX - shiftX <= e.pageX))
            player.style.left = e.pageX - shiftX + 'px';
        else
            player.style.left = 0 + 'px';
        
        
        if((e.pageY - shiftY >= 0) && (e.pageY - shiftY <= e.pageY))
            player.style.top = e.pageY - shiftY + 'px';
        else
            player.style.top = 0 + 'px';
        let t = parseInt(document.documentElement.clientHeight)-100;
        let l = parseInt(document.documentElement.clientWidth)-100;
        if ((player.getBoundingClientRect().top >= t) && (player.getBoundingClientRect().left >= l))
        {
            let label = document.createElement('H1');
            let link = document.createElement('A');
            label.innerHTML = "YOU WIN!";
            link.innerHTML = "to the next level";
            link.setAttribute('href', '../level2/index.html');
            //label.style.left = getRandom(20, document.documentElement.clientWidth - 20) + 'px';
            //label.style.top = getRandom(20, document.documentElement.clientHeight - 20) + 'px';
            document.body.querySelector('#playField').removeChild(document.body.querySelector('#player'))
            document.body.querySelector('#playField').appendChild(label);
            document.body.querySelector('#playField').appendChild(link);
        }
    }

    document.onmousemove = function (e) {
        moveAt(e);
    };

    player.onmouseup = function () {
        document.onmousemove = null;
        player.onmouseup = null;
    };
});

player.ondragstart = function () {
    return false;
};

function getCoords(elem) { // кроме IE8-
    let box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}
