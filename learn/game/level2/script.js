"use strict";
//[left, top, rotate, width, height]
let blockArr = [['200', '0', '0', '50', '500'], ['500', (document.documentElement.clientHeight - 500).toString(), '0', '50', '500'], ['800', '0', '0', '50', '500'], ['1100', (document.documentElement.clientHeight - 500).toString(), '0', '50', '500']];
set_finish();
set_blocks();
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

function check_colision() {
    
    for (let i = 0; i < blockArr.length; i++) {
        if (((player.getBoundingClientRect().bottom >= parseInt(blockArr[i][1])) && (player.getBoundingClientRect().right >= parseInt(blockArr[i][0])) && (player.getBoundingClientRect().left <= parseInt(blockArr[i][0]) +parseInt(blockArr[i][3])) && (player.getBoundingClientRect().top <= parseInt(blockArr[i][1]) + parseInt(blockArr[i][4])))) {
            document.location.reload(true);
        }
    }
    let t = parseInt(document.documentElement.clientHeight) - 100;
    let l = parseInt(document.documentElement.clientWidth) - 100;
    if ((player.getBoundingClientRect().bottom >= t) && (player.getBoundingClientRect().right >= l)) {
        let result = document.createElement('DIV');
        let label = document.createElement('H1');
        let link = document.createElement('A');
        label.innerHTML = "YOU WIN!";
        link.innerHTML = "to the next level";
        link.setAttribute('href', '../level3/index.html');
        document.body.removeChild(document.body.querySelector('#playField'))
        result.appendChild(label);
        result.appendChild(link);
        result.setAttribute('id', 'res');
        document.body.appendChild(result);
    }
}

function set_blocks() {
    for (let i = 0; i < blockArr.length; i++) {
        let block = document.createElement('DIV');
        block.style.backgroundColor = "black";
        block.style.position = "absolute";

        block.style.left = blockArr[i][0]+'px';
        block.style.top = blockArr[i][1]+'px';
        block.style.transform = "rotate(" + blockArr[i][2] + "deg)";
        block.style.width = blockArr[i][3] + 'px';
        block.style.height = blockArr[i][4] + 'px';
        document.querySelector('main').appendChild(block);
    }
}

function set_finish() {
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


function set_player(){
    player.style.left = '200px';
    player.style.top = '30px';
}

player.addEventListener('mousedown', function (e) {
    let coords = getCoords(player);
    let shiftX = 0;
    let shiftY = 0;
    if (e.pageY - coords.top > 0)
        shiftY = e.pageY - coords.top;
    if (e.pageX - coords.left > 0)
        shiftX = e.pageX - coords.left;

    player.style.position = 'absolute';
    document.querySelector("#playField").appendChild(player);
    moveAt(e);

    player.style.zIndex = 1000; // над другими элементами

    function moveAt(e) {
        if ((e.pageX - shiftX >= 0) && (e.pageX - shiftX <= e.pageX))
            player.style.left = e.pageX - shiftX + 'px';
        else
            player.style.left = 0 + 'px';


        if ((e.pageY - shiftY >= 0) && (e.pageY - shiftY <= e.pageY))
            player.style.top = e.pageY - shiftY + 'px';
        else
            player.style.top = 0 + 'px';
        
        check_colision();
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
