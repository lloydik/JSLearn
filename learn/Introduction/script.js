'use strict';
let headerRu = ['<h1>Введение. .innerHTML. Кнопка</h1>'];
let headerEn = ['<h1>Introduction. innerHTML. button</h1>'];
let mainRu = [
            `<p>Привет! Добро пожаловать на первый урок по JavaScript. Давай сначала поговорим о самом языке.</p>   <p>Первое что яхотел сказать: JavaScript &#8800; Java. Многие путают эти два языка и они не видят разницы между этими языками. Java выглядит так:</p>
<pre class="code">
<code class="code">
    <span class="keyword">class </span><span class="title">HelloWorld</span>{
            <span class="keyword">public static void </span> <span class="title">main</span> <span class="args">(String args [])</span> {
            <span class="keyword">System</span>.<span class="keyword">out</span>.<span class="title">println</span>(<span class="text">"Hello World"</span>);
            }
        }
</code>
</pre>
        <p>JavaScript выглядит так:</p>
        <pre class="code">
    <code class="code">
    <span class="keyword">&#60;script&#62;</span>
        <span class="keyword">alert</span>(<span class="text">"Hello World!"</span>);
    <span class="keyword">&#60;/script&#62;</span>
    </code>
        </pre>

        <p>Не путаем! Вторая вещь которую я хотел рассказать: JavaScript - стандарт ECMAScript(Это уже сам язык программирования).</p><p>Теперь переходим к написанию программ. Мы будем работать в документе в котором лежит наш HTML или в отдельном файле. Нашей средой разработки будет <a href="http://brackets.io/">Brackets</a>. Давайте кодить!</p> <p>Наш код мы должны писать в HTML файле внутри тега &#60;script&#62; который находится перед &#60;/body>. Мы должны его разместить как здесь:</p>

        <pre class="code">
<code class="code">
<span>&#60;!DOCTYPE html></span>
<span>&#60;html lang="en"></span>
    <span>&#60;head></span>
        <span>&#60;meta charset="UTF-8"></span>
        <span>&#60;title>JS Learn&#60;/title></span>
        <span>&#60;link rel="stylesheet" href="style.css"></span>
    <span>&#60;/head></span>
    <span>&#60;body></span>
        <span> &#60;p>JS - cool!&#60;/p></span>
    <span class="attention">&#60;script&#62;&#60;/script&#62;</span>
    <span>&#60;/body></span>
<span>&#60;/html&#62;</span>
</code>
        </pre>
        <p>Также Вы можете писать код в файле. Но ты должен писать этот тег как здесь(Мы должны указать источник):</p>
        <pre class="code">
<code class="code">
<span>&#60;!DOCTYPE html></span>
<span>&#60;html lang="en"></span>
    <span>&#60;head></span>
        <span>&#60;meta charset="UTF-8"></span>
        <span>&#60;title>JS Learn&#60;/title></span>
        <span>&#60;link rel="stylesheet" href="style.css"></span>
    <span>&#60;/head></span>
    <span>&#60;body></span>
        <span> &#60;p>JS - cool!&#60;/p></span>
    <span class="attention">&#60;script src="name_of_JSscript.js"&#62;&#60;/script&#62;</span>
    <span>&#60;/body></span>
<span>&#60;/html&#62;</span>
</code>
        </pre>
        <p class="attention">Нам теперь осталось подсоединить современный JS (на котором мы и будем работать). Нам надо написать в начале каждого скрипта <span class="keyword">"use strict";</span></p> <p>Давай напишем первую программу на JS. Первая вещь которую умеет менять JS - менять HTML код страницы. Как нам сделать это? Очень просто. мы должны использовать .innerHTML. Например:</p>
<pre class="code">
<code class="code">
<span class="keyword">&#60;script&#62;</span>
    <span class="keyword">"use strict";</span>
    <span class="elem">elem</span>.<span class="keyword">innerHTML</span> = <span class="text">"someText"</span>;
<span class="keyword">&#60;/script&#62;</span>
</code>
        </pre>
        <p>В этом коде мы меняем внутренний HTML код элемента <span class="elem">elem</span>. Наш элемент <span class="elem">elem</span> сейчас выглядит так:</p>
        <pre class="code">
<code class="code">
&#60;p <span class="keyword">id</span>=<span class="text">"elem"</span>&#62;someText&#60;/p&#62;
</code>
        </pre>
        <p>elem - это id HTML тега. В JS мы всегда используем id мы не можем использовать классы! Вот так выглядит полный код(HTML + JS):</p>
        <pre class="code">
<code class="code">
<span>&#60;!DOCTYPE html></span>
<span class="keyword">&#60;html lang=<span class="text">"en"</span>></span>
    <span class="keyword">&#60;head></span>
        <span class="keyword">&#60;meta charset=<span class="text">"UTF-8"</span>></span>
        <span class="keyword">&#60;title><span class="title">JS Learn</span>&#60;/title></span>
    <span class="keyword">&#60;/head></span>
    <span class="keyword">&#60;body></span>
        <span class="keyword">&#60;p id=<span class="text">"elem"</span>&#62;<span class="title">JS - cool!</span>&#60;/p></span>
    <span class="keyword">&#60;script&#62;</span>
        <span class="keyword">"use strict";</span>
        <span class="elem">elem</span>.<span class="keyword">innerHTML</span> = <span class="text">"someText"</span>;
    <span class="keyword">&#60;/script&#62;</span>
    <span class="keyword">&#60;/body></span>
<span class="keyword">&#60;/html&#62;</span>
</code>
        </pre>
        <p>Хорошо мы видим на нашей странице someText. Но мы не види текст которые был до этого. Мы можем не только заменять но также и добавлять элементы. Мы можем написать <span class="elem">elem</span>.<span class="keyword">innerHTML</span> = <span class="elem">elem</span>.<span class="keyword">innerHTML</span> + <span class="text">"someText"</span>; или <span class="elem">elem</span>.<span class="keyword">innerHTML</span> += <span class="text">"someText"</span>;((a = a + b) == (a += b))</p>
        <pre class="code">
<code class="code">
<span>&#60;!DOCTYPE html></span>
<span class="keyword">&#60;html lang=<span class="text">"en"</span>></span>
    <span class="keyword">&#60;head></span>
        <span class="keyword">&#60;meta charset=<span class="text">"UTF-8"</span>></span>
        <span class="keyword">&#60;title><span class="title">JS Learn</span>&#60;/title></span>
    <span class="keyword">&#60;/head></span>
    <span class="keyword">&#60;body></span>
        <span class="keyword">&#60;p id=<span class="text">"elem"</span>&#62;<span class="title">JS - cool!</span>&#60;/p></span>
    <span class="keyword">&#60;script&#62;</span>
        <span class="keyword">"use strict";</span>
        <span class="elem">elem</span>.<span class="keyword">innerHTML</span> += <span class="text">" someText"</span>;
    <span class="keyword">&#60;/script&#62;</span>
    <span class="keyword">&#60;/body></span>
<span class="keyword">&#60;/html&#62;</span>
</code>
        </pre>
        <p>Результат первого примера(<span class="elem">elem</span>.<span class="keyword">innerHTML</span> = <span class="text">"someText"</span>): someText</p><p>Результат второго примера(<span class="elem">elem</span>.<span class="keyword">innerHTML</span> += <span class="text">" someText"</span>;): JS-cool! someText</p> <p>Давайте добавим интерактив. Сейчас мы должны добавить кнопку с помощью тега <span class="attention">&#60;button>&#60;/button></span>. Пусть id кнопки будет - btn. Ее текст будет - click. Так выглядит наша кнопка:<span class="keyword">&#60;button id=<span class="text">"btn"</span>><span class="title">click</span>&#60;/button></span>. Давайте добавим нашу кнопку на страницу.</p>
        <pre class="code">
<code class="code">
<span>&#60;!DOCTYPE html></span>
<span class="keyword">&#60;html lang=<span class="text">"en"</span>></span>
    <span class="keyword">&#60;head></span>
        <span class="keyword">&#60;meta charset=<span class="text">"UTF-8"</span>></span>
        <span class="keyword">&#60;title><span class="title">JS Learn</span>&#60;/title></span>
    <span class="keyword">&#60;/head></span>
    <span class="keyword">&#60;body></span>
        <span class="keyword">&#60;button id=<span class="text">"btn"</span>&#62;<span class="title">click</span>&#60;/p></span>
        <span class="keyword">&#60;p id=<span class="text">"elem"</span>&#62;<span class="title">JS - cool!</span>&#60;/p></span>
    <span class="keyword">&#60;script&#62;</span>
        <span class="keyword">"use strict";</span>
        <span class="elem">elem</span>.<span class="keyword">innerHTML</span> += <span class="text">" someText"</span>;
    <span class="keyword">&#60;/script&#62;</span>
    <span class="keyword">&#60;/body></span>
<span class="keyword">&#60;/html&#62;</span>
</code>
        </pre>
        <p>Сейчас нам нужен скрипт для кнопки. Мы можем добавить прослушку события на кнопку. <span class="attention">btn.addEventListener("click" function(){//some_code});</span> -  Добавит прослушку событий на кнопку. Например: Я хочу сделать кликер. Мне нуджна переменная кнопка и текст. Чтобы объявить переменную используется - let. Все переменные в JS динамично типизированны. Давайте напишем простой кликер</p>
        <pre class="code">
<code class="code">
<span>&#60;!DOCTYPE html></span>
<span class="keyword">&#60;html lang=<span class="text">"en"</span>></span>
    <span class="keyword">&#60;head></span>
        <span class="keyword">&#60;meta charset=<span class="text">"UTF-8"</span>></span>
        <span class="keyword">&#60;title><span class="title">JS Learn</span>&#60;/title></span>
    <span class="keyword">&#60;/head></span>
    <span class="keyword">&#60;body></span>
        <span class="keyword">&#60;button id=<span class="text">"btn"</span>&#62;<span class="title">click</span>&#60;/button></span>
        <span class="keyword">&#60;p id=<span class="text">"elem"</span>&#62;<span class="title">JS - cool!</span>&#60;/p></span>
    <span class="keyword">&#60;script&#62;</span>
        <span class="keyword">"use strict";</span>
        <span class="com">//Объявляем переменную кол-ва кликов</span>
        <span class="keyword">let</span> <span class="title">clickCount</span> = 0;
        <span class="com">//Добавляем прослушку нажатия кнопки</span>
        <span class="elem">btn</span>.<span class="keyword">addEventListener(<span class="text">"click"</span> function(){
            <span class="title">clickCount++;</span><span class="com">//clickCount += 1</span>
            <span class="com">//Обновляем информацию</span>
            <span class="elem">elem</span>.<span class="keyword">innerHTML</span> = <span class="text">clickCount</span>;
        });</span>
    <span class="keyword">&#60;/script&#62;</span>
    <span class="keyword">&#60;/body></span>
<span class="keyword">&#60;/html&#62;</span>
</code>
        </pre>
        <p>Также такую прослушку можно ставить на разные теги(div p и т.д.). Например: <span class="attention">divId.addEventListener("click" function(){});</span></p> <p>Поздравляю! Теперь ты можешь создавать веб-кликер! Ты можешь стилизировать игру и сделать более интересной!</p>`
        ];
let mainEn = [
`<p>Hello! Welcome to first lesson of JavaScript. lets talk about JavaScript.</p> <p>The first thing I wanted to say is that JavaScript &#8800; Java. Many confuse these two languages and they dont see the difference between them. This is what Java looks like:</p>
<pre class="code">
<code class="code">
<span class="keyword">class </span><span class="title">HelloWorld</span>{
        <span class="keyword">public static void </span> <span class="title">main</span> <span class="args">(String args [])</span> {
        <span class="keyword">System</span>.<span class="keyword">out</span>.<span class="title">println</span>(<span class="text">"Hello World"</span>);
        } 
    }
</code>
</pre>
        <p>JavaScript looks like:</p>
        <pre class="code">
    <code class="code">
    <span class="keyword">&#60;script&#62;</span>
        <span class="keyword">alert</span>(<span class="text">"Hello World!"</span>);
    <span class="keyword">&#60;/script&#62;</span>
    </code>
        </pre>
        <p>Secondly: JavaScript - implementation of the ECMAScript standard.</p>
        <p>Now we pass to where we will write Javascript. Our development environment will be the place where we wrote HTML. I work in <a href="http://brackets.io/">Brackets</a>. Lets code!</p><p>Where We must write our code? In HTML. Set tag &#60;script&#62; before &#60;/body>. Like here:</p>
        <pre class="code">
<code class="code">
<span>&#60;!DOCTYPE html></span>
<span>&#60;html lang="en"></span>
    <span>&#60;head></span>
        <span>&#60;meta charset="UTF-8"></span>
        <span>&#60;title>JS Learn&#60;/title></span>
        <span>&#60;link rel="stylesheet" href="style.css"></span>
    <span>&#60;/head></span>
    <span>&#60;body></span>
        <span> &#60;p>JS - cool!&#60;/p></span>
    <span class="attention">&#60;script&#62;&#60;/script&#62;</span>
    <span>&#60;/body></span>
<span>&#60;/html&#62;</span>
</code>
        </pre>
        <p>You can write js in HTML or in file. But you must write this tag like that:</p>
        <pre class="code">
<code class="code">
<span>&#60;!DOCTYPE html></span>
<span>&#60;html lang="en"></span>
    <span>&#60;head></span>
        <span>&#60;meta charset="UTF-8"></span>
        <span>&#60;title>JS Learn&#60;/title></span>
        <span>&#60;link rel="stylesheet" href="style.css"></span>
    <span>&#60;/head></span>
    <span>&#60;body></span>
        <span> &#60;p>JS - cool!&#60;/p></span>
    <span class="attention">&#60;script src="name_of_JSscript.js"&#62;&#60;/script&#62;</span>
<span>&#60;/body></span>
<span>&#60;/html&#62;</span>
</code>
        </pre>
        <p class="attention">In order for us to connect modern JS (on which we will work) we need to write at the beginning of each script <span class="keyword">"use strict";</span></p><p>And then the script will connect from the file. Lets make your first program on JS. The first thing JS can do is change the HTML code. How do we do this? Very easy. We must use .innerHTML. For example:</p>
<pre class="code">
<code class="code">
<span class="keyword">&#60;script&#62;</span>
    <span class="keyword">"use strict";</span>
    <span class="elem">elem</span>.<span class="keyword">innerHTML</span> = <span class="text">"someText"</span>;
<span class="keyword">&#60;/script&#62;</span>
</code>
        </pre>
        <p>In this code we change inner HTML code of element <span class="elem">elem</span>. How element <span class="elem">elem</span> now looks like this:</p>
        <pre class="code">
<code class="code">
&#60;p <span class="keyword">id</span>=<span class="text">"elem"</span>&#62;someText&#60;/p&#62;
</code>
        </pre>
        <p>elem - it is id of HTML tag. In JS we always use id we cant use classes! There is ful code(HTML + JS):</p>
        <pre class="code">
<code class="code">
<span>&#60;!DOCTYPE html></span>
<span class="keyword">&#60;html lang=<span class="text">"en"</span>></span>
    <span class="keyword">&#60;head></span>
        <span class="keyword">&#60;meta charset=<span class="text">"UTF-8"</span>></span>
        <span class="keyword">&#60;title><span class="title">JS Learn</span>&#60;/title></span>
    <span class="keyword">&#60;/head></span>
    <span class="keyword">&#60;body></span>
        <span class="keyword">&#60;p id=<span class="text">"elem"</span>&#62;<span class="title">JS - cool!</span>&#60;/p></span>
    <span class="keyword">&#60;script&#62;</span>
        <span class="keyword">"use strict";</span>
        <span class="elem">elem</span>.<span class="keyword">innerHTML</span> = <span class="text">"someText"</span>;
    <span class="keyword">&#60;/script&#62;</span>
    <span class="keyword">&#60;/body></span>
<span class="keyword">&#60;/html&#62;</span>
</code>
        </pre>
        <p>Ok we see in our page someText. But we dont see previous text. We can not only replace but also add elements. We can write <span class="elem">elem</span>.<span class="keyword">innerHTML</span> = <span class="elem">elem</span>.<span class="keyword">innerHTML</span> + <span class="text">"someText"</span>; or <span class="elem">elem</span>.<span class="keyword">innerHTML</span> += <span class="text">"someText"</span>;((a = a + b) == (a += b))</p>
        <pre class="code">
<code class="code">
<span>&#60;!DOCTYPE html></span>
<span class="keyword">&#60;html lang=<span class="text">"en"</span>></span>
    <span class="keyword">&#60;head></span>
        <span class="keyword">&#60;meta charset=<span class="text">"UTF-8"</span>></span>
        <span class="keyword">&#60;title><span class="title">JS Learn</span>&#60;/title></span>
    <span class="keyword">&#60;/head></span>
    <span class="keyword">&#60;body></span>
        <span class="keyword">&#60;p id=<span class="text">"elem"</span>&#62;<span class="title">JS - cool!</span>&#60;/p></span>
    <span class="keyword">&#60;script&#62;</span>
        <span class="keyword">"use strict";</span>
        <span class="elem">elem</span>.<span class="keyword">innerHTML</span> += <span class="text">" someText"</span>;
    <span class="keyword">&#60;/script&#62;</span>
    <span class="keyword">&#60;/body></span>
<span class="keyword">&#60;/html&#62;</span>
</code>
        </pre>
        <p>result of First example(<span class="elem">elem</span>.<span class="keyword">innerHTML</span> = <span class="text">"someText"</span>): someText</p>
        <p>result of Second example(<span class="elem">elem</span>.<span class="keyword">innerHTML</span> += <span class="text">" someText"</span>;): JS-cool! someText</p>
        <p>Lets add interactive. Now we must add button by tag <span class="attention">&#60;button>&#60;/button></span>. Let the id of this button be btn. And text will be - click. So our button is  
        <span class="keyword">&#60;button id=<span class="text">"btn"</span>><span class="title">click</span>&#60;/button></span>. Lets add our button to our page.</p>
        <pre class="code">
<code class="code">
<span>&#60;!DOCTYPE html></span>
<span class="keyword">&#60;html lang=<span class="text">"en"</span>></span>
    <span class="keyword">&#60;head></span>
        <span class="keyword">&#60;meta charset=<span class="text">"UTF-8"</span>></span>
        <span class="keyword">&#60;title><span class="title">JS Learn</span>&#60;/title></span>
    <span class="keyword">&#60;/head></span>
    <span class="keyword">&#60;body></span>
        <span class="keyword">&#60;button id=<span class="text">"btn"</span>&#62;<span class="title">click</span>&#60;/p></span>
        <span class="keyword">&#60;p id=<span class="text">"elem"</span>&#62;<span class="title">JS - cool!</span>&#60;/p></span>
    <span class="keyword">&#60;script&#62;</span>
        <span class="keyword">"use strict";</span>
        <span class="elem">elem</span>.<span class="keyword">innerHTML</span> += <span class="text">" someText"</span>;
    <span class="keyword">&#60;/script&#62;</span>
    <span class="keyword">&#60;/body></span>
<span class="keyword">&#60;/html&#62;</span>
</code>
        </pre>
        <p>Now we need script for our button. We can add the event listener on the button. <span class="attention">btn.addEventListener("click" function(){//some_code});</span> - add event listener on our button.For example: I want to make a clicker. I need one variable button and text. To declare a variable use - let. All variables in JS are dynamically typed. Lets write simple clicker</p>
        <pre class="code">
<code class="code">
<span>&#60;!DOCTYPE html></span>
<span class="keyword">&#60;html lang=<span class="text">"en"</span>></span>
    <span class="keyword">&#60;head></span>
        <span class="keyword">&#60;meta charset=<span class="text">"UTF-8"</span>></span>
        <span class="keyword">&#60;title><span class="title">JS Learn</span>&#60;/title></span>
    <span class="keyword">&#60;/head></span>
    <span class="keyword">&#60;body></span>
        <span class="keyword">&#60;button id=<span class="text">"btn"</span>&#62;<span class="title">click</span>&#60;/button></span>
        <span class="keyword">&#60;p id=<span class="text">"elem"</span>&#62;<span class="title">JS - cool!</span>&#60;/p></span>
    <span class="keyword">&#60;script&#62;</span>
        <span class="keyword">"use strict";</span>
        <span class="keyword">let</span> <span class="title">clickCount</span> = 0;<span class="com">//Declare a variable</span>
        <span class="com">//Add Click listener</span>
        <span class="elem">btn</span>.<span class="keyword">addEventListener(<span class="text">"click"</span> function(){
            <span class="title">clickCount++;</span><span class="com">//clickCount += 1</span>
            <span class="com">//update information</span>
            <span class="elem">elem</span>.<span class="keyword">innerHTML</span> = <span class="text">clickCount</span>;
        });</span>
    <span class="keyword">&#60;/script&#62;</span>
    <span class="keyword">&#60;/body></span>
<span class="keyword">&#60;/html&#62;</span>
</code>
        </pre>
        <p>Also you can add event listener to other tags(div p etc.). for example: <span class="attention">divId.addEventListener("click" function(){});</span></p>
        <p>Congrats! Now you create a web-clicker! You can style your game and make her more interesting!</p>`
        ];
let menuEn = ["<a href='../index.html'>Learn</a><a href='../index.html'><img class='home' src='../../img/JS-logo.png'></a><a href='../../about.html'>About</a> <img id='switchLanguage' src='../../img/SLRussia.png'>"];
let menuRu = ["<a href='../index.html'>Изучить</a><a href='../index.html'><img class='home' src='../../img/JS-logo.png'></a><a href='../../about.html'>О проекте</a><img id='switchLanguage' src='../../img/SLRussia.png'>"];

let footerRu= ['Глазырин Артём, Кукин Максим', '<a href = "https://informatics.ru/"><img src ="../../img/Logo.svg"></a>'];
let footerEn= ['Glazyrin Artem, Kukin Maxim', '<a href = "https://informatics.ru/"><img src ="../../img/Logo.svg"></a>'];

let RuPage = [menuRu, headerRu, mainRu, footerRu];
let EnPage = [menuEn, headerEn, mainEn, footerEn];

let en = false;
let array = document.body.children;
let count1 = array.length-1;

function setContent() {
    console.log(array);
    if (en) {
        for (let i = 0; i < count1; i++) {
                array[i].innerHTML = RuPage[i];
        }
        switchLanguage.setAttribute("src", "../../img/SLEnglish.jpg");
    } else {
        for (let i = 0; i < count1; i++) {
                array[i].innerHTML = EnPage[i];
        }
        switchLanguage.setAttribute("src", "../../img/SLRussia.png");
    }
    document.querySelector('#menu > #switchLanguage').addEventListener('click', function() {
    setContent();
    });
    en = !en;
    return;
}

setContent();