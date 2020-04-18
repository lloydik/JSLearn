'use strict';
        let headerRu = ['&nbsp;'];
        let headerEn = ['&nbsp;'];
        let mainRu = [
            ['Добро Пожаловать!'],
            ['Давай выберем тему для изучения'],
            ['<img src="../img/js-logo%20(1).png">'],
            ['Введение. addEventListener. innerHTML'],
            ['classList. Условный оператор'],
        ];

        let mainEn = [
            ['Welcome!'],
            ['Let\'s choose your theme for learning!'],
            ['<img src="../img/js-logo%20(1).png">'],
            ['Introduction. addEventListener. innerHTML'],
            ['classList. condition operator'],
        ];
        let menuEn= ['Learn', '<img class="home" src="../img/JS-logo.png">','About', ''];
        let menuRu= ['Изучить', '<img class="home" src="../img/JS-logo.png">','О проекте', ''];
        let footerRu= ['Глазырин Артём', '<a href = "https://informatics.ru/"><img src ="../img/Logo.svg"></a>'];
        let footerEn= ['Glazyrin Artem', '<a href = "https://informatics.ru/"><img src ="../img/Logo.svg"></a>'];
        let olRu = [];
        let olEn = [];
        
        
        
        let RuPage = [];
        RuPage.push(headerRu);
        RuPage.push(menuRu);
        RuPage.push(mainRu);
        RuPage.push(footerRu);
        let EnPage = [];
        EnPage.push(headerEn);
        EnPage.push(menuEn);
        EnPage.push(mainEn);
        EnPage.push(footerEn);
        let en = true;
        function setContent() {
            let array = document.body.children;
            let count1 = array.length;
            if (en) {
                for (let i = 1; i < count1; i++) {
                    let count2 = array[i].childElementCount;
                    for (let j = 0; j < count2; j++) {
                        array[i].children[j].innerHTML = RuPage[i][j];
                    }
                }
                switchLanguage.setAttribute('src', '../img/SLEnglish.jpg');
            } else {
                for (let i = 1; i < count1; i++) {
                    let count2 = array[i].childElementCount;
                    for (let j = 0; j < count2; j++) {
                        array[i].children[j].innerHTML = EnPage[i][j];
                    }
                }
                switchLanguage.setAttribute('src', '../img/SLRussia.png');
            }
            en = !en;
        }
        switchLanguage.addEventListener('click', function() {
            setContent();
        });