'use strict';
let menuEn = ["<a href='../index.html'>Learn</a><a href='../index.html'><img class='home' src='../../img/JS-logo.png'></a><a href='../../about.html'>About</a> <img id='switchLanguage' src='../../img/SLRussia.png'>"];
let menuRu = ["<a href='../index.html'>Изучить</a><a href='../index.html'><img class='home' src='../../img/JS-logo.png'></a><a href='../../about.html'>О проекте</a><img id='switchLanguage' src='../../img/SLRussia.png'>"];
let footerRu= ['Глазырин Артём, Кукин Максим', '<a href = "https://informatics.ru/"><img src ="../../img/Logo.svg"></a>'];
let footerEn= ['Glazyrin Artem, Kukin Maxim', '<a href = "https://informatics.ru/"><img src ="../../img/Logo.svg"></a>'];
let headerRu = ['<h1>classList. Условный оператор</h1>'];
let headerEn = ['<h1>classList. condition operator</h1>'];
let mainRu = [`
        <p>Привет!Добро пожаловать на второй урок по JavaScript. Сегодня мы поговорим о классах в css и условных операторах</p>
        <p>Сначала классы. Мы можем добавлять и удалять css лассы у элемента. classList позволяет это сделать. classList - по сути массив в каждом элементе, который хранит классы. Что может делать classList? classList может:</p>
        <ol>
            <li><span class="attention">.add('class')</span> - добавит класс <span class="keyword">class</span> в classList</li>
            <li><span class="attention">.remove('class')</span> - Удалит  class <span class="keyword">class</span> из classList</li>
            <li><span class="attention">.toggle('class')</span> -Сменит состояние класса <span class="keyword">class</span> (удалит если такой класс был, добавит если не было)</li>
            <li><span class="attention">.contains('class')</span> - проверит есть ли класс <span class="keyword">class</span> в списке, если да вернет true, иначе false</li>
        </ol>
        <p>Зачем нам нужен classList? Чтобы упралять стилями! Пример кода будет выглядеть так:</p>
        <pre class="code">
<code class="code">
<span>&#60;!DOCTYPE html></span>
<span class="keyword">&#60;html lang=<span class="text">"en"</span>></span>
    <span class="keyword">&#60;head></span>
        <span class="keyword">&#60;meta charset=<span class="text">"UTF-8"</span>></span>
        <span class="keyword">&#60;title><span class="title">JS Learn</span>&#60;/title></span>
    <span class="keyword">&#60;/head></span>
    
    <span class="keyword">&#60;style></span>
        <span class="title">body</span>{
            <span class="keyword">font-family</span>: <span class="args">sans-serif</span>;
            <span class="keyword">text-align</span>: <span class="args">center</span>;
        }
        <span class="title">#square</span>{
            <span class="keyword">width</span>: <span class="args">100px</span>;
            <span class="keyword">text-align</span>: <span class="args">center</span>;
            <span class="keyword">height</span>: <span class="args">100px</span>;
            <span class="keyword">border</span>: <span class="args">3px solid #2d3436</span>;
            <span class="keyword">background-color</span>: <span class="args">#55efc4</span>;
            <span class="keyword">transition</span>: <span class="args">0.3s</span>;
            <span class="keyword">margin</span>: <span class="args">auto</span>;
        }
        <span class="title">.rounded</span>{
            <span class="keyword">border-radius</span>: <span class="args">50px</span>;
        }
    <span class="keyword">&#60;/style></span>
    
    <span class="keyword">&#60;body></span>
        <span class="keyword"> &#60;div id=<span class="text">"block"</span>&#60;/div></span>
        <span class="keyword">&#60;script&#62;</span>
        <span class="keyword">"use strict";</span>
        <span class="elem">square</span>.<span class="title">addEventListener</span>(<span class="text">'click'</span>, <span class="args">function</span>(){
            <span class="com">//меняем состояние класса</span>
            <span class="elem">square</span>.<span class="keyword">classList</span>.<span class="title">toggle</span>(<span class="text">'rounded'</span>);
        });
        <span class="keyword">&#60;/script&#62;</span>
    <span class="keyword">&#60;/body></span>
<span class="keyword">&#60;/html&#62;</span>
</code>
        </pre>
        <p>Попробуйте запустить этот код, и может быть вы сможете лучше понять classList. Мы можем использовать classList к примеру: для кнопки "Показать полностью". Code:</p>
        <pre class="code">
<code class="code">
<span>&#60;!DOCTYPE html></span>
<span class="keyword">&#60;html lang=<span class="text">"en"</span>></span>
    <span class="keyword">&#60;head></span>
        <span class="keyword">&#60;meta charset=<span class="text">"UTF-8"</span>></span>
        <span class="keyword">&#60;title><span class="title">JS Learn</span>&#60;/title></span>
    <span class="keyword">&#60;/head></span>
    
    <span class="keyword">&#60;style></span>
        <span class="title">img</span>{
            <span class="keyword">width</span>: <span class="args">300px</span>;
            <span class="keyword">background-image</span>: <span class="args">url("URL")</span>;
            <span class="keyword">background-position</span>: <span class="args">center center</span>;
            <span class="keyword">background-size</span>: <span class="args">cover</span>;
            <span class="keyword">transition</span>: <span class="args">all 0.5s</span>;
            <span class="keyword">height</span>: <span class="args">222px</span>;
        }
        <span class="title">button</span>{
            <span class="keyword">border-radius</span>: <span class="args">10px</span>;
            <span class="keyword">font-size</span>: <span class="args">column</span>;
            <span class="keyword">margin-top</span>: <span class="args">center</span>;
            <span class="keyword">padding</span>: <span class="args">15px</span>;
        }
        <span class="title">main</span>{
            <span class="keyword">display</span>: <span class="args">flex</span>;
            <span class="keyword">flex-direction</span>: <span class="args">center</span>;
            <span class="keyword">justify-content</span>: <span class="args">100px</span>;
            <span class="keyword">align-items</span>: <span class="args">center</span>;
        }
        <span class="title">.small</span>{
            <span class="keyword">height</span>: <span class="args">20px</span>;
        }
    <span class="keyword">&#60;/style></span>
    
    <span class="keyword">&#60;body></span>
        <span class="keyword">&#60;main></span>
            <span class="keyword">&#60;div class=<span class="text">"small"</span> id=<span class="text">"img"</span>>&#60;/div></span>
             <span class="keyword">&#60;button id="plus">Show full&#60;/button></span>
        <span class="keyword">&#60;/main></span>
        <span class="keyword">&#60;script&#62;</span>
        <span class="keyword">"use strict";</span>
        <span class="elem">plus</span>.<span class="title">addEventListener</span>(<span class="text">'click'</span>, <span class="args">function</span>(){
            <span class="com">//Меняем состояние класса</span>
            <span class="elem">img</span>.<span class="keyword">classList</span>.<span class="title">toggle</span>(<span class="text">'small'</span>);
        });
        <span class="keyword">&#60;/script&#62;</span>
    <span class="keyword">&#60;/body></span>
<span class="keyword">&#60;/html&#62;</span>
</code>
        </pre>
        <p>Что делать если нам надо производить некоторые действия при определенном условии? Мы должны использовать условный оператор- if. Структура:</p>
        <pre class="code">
<code class="code">
<span class="keyword">if</span>(condition1){
<span class="com">//твой код если condition1 == true</span>
<span class="com">//Например: clickCount > 100</span>
}
<span class="keyword">else if</span>(condition2){
<span class="com">//твой код если condition2 == true</span>
<span class="com">//но condition1 == false</span>
<span class="com">//Например: clickCount &#60; 100</span>
}
<span class="keyword">else</span>{
<span class="com">//твой код если condition2 == false</span>
<span class="com">//и condition1 == false</span>
<span class="com">//clickCount == 100</span>
}
</code>
        </pre>
        <p>Например: мы можем считать возраст пользователя. Пользователь ввожит в поле свой возраст и наш скрипт обрабатывает его.</p>
        <pre class="code">
<code class="code">
<span>&#60;!DOCTYPE html></span>
<span class="keyword">&#60;html lang=<span class="text">"en"</span>></span>
    <span class="keyword">&#60;head></span>
        <span class="keyword">&#60;meta charset=<span class="text">"UTF-8"</span>></span>
        <span class="keyword">&#60;title><span class="title">JS Learn</span>&#60;/title></span>
    <span class="keyword">&#60;/head></span>
    
    <span class="keyword">&#60;body></span>
        <span class="keyword">&#60;main></span>
            <span class="keyword">&#60;input id=<span class="text">"ageField"</span>>&#60;/div></span>
             <span class="keyword">&#60;button id="btn">Registrate&#60;/button></span>
        <span class="keyword">&#60;/main></span>
        
        <span class="keyword">&#60;script&#62;</span>
        <span class="keyword">"use strict";</span>
        <span class="elem">btn</span>.<span class="title">addEventListener</span>(<span class="text">'click'</span>, <span class="args">function</span>(){
            <span class="com">//Пользователь совершеннолетний?</span>
            <span class="keyword">if</span>(<span class="elem">ageField</span>.<span class="keyword">value</span> >= 18)
            {
                </span><span class="com">//печатаем Welcome!</span>
                <span class="keyword">alert(<span class = "text">"Welcome!"</span>);
            }
            <span class="keyword">else</span>
            {
                <span class="com">//иначе печатаем Come back later:)</span>
                <span class="keyword">alert(<span class = "text">"Come back later:)"</span>);</span>
            }
        });
        <span class="keyword">&#60;/script&#62;</span>
    <span class="keyword">&#60;/body></span>
<span class="keyword">&#60;/html&#62;</span>
</code>
        </pre>
        <p>Развлекайся :)</p>
        <a href="#" title="Вернуться к началу страницы" class="topNubex"><i class="fa fa-arrow-up" aria-hidden="true"></i></a>` ];
let mainEn = [
`<p>Hello! Welcome to second lesson of JavaScript. Today we will talk about classes in css and condition operator</p>
        <p>Firstly let's talk about classes. We can add and remove classes on elements. The classList property is responsible for this. classList - essentially an array in each element that stores classes. What can do classList? classList can</p>
        <ol>
            <li><span class="attention">.add('class')</span> - adding class <span class="keyword">class </span> to classList</li>
            <li><span class="attention">.remove('class')</span> - Removing  class <span class="keyword">class </span> from classList</li>
            <li><span class="attention">.toggle('class')</span> - switches the state of the class <span class="keyword">class </span> (deletes if such a class is in the list, adds if not)</li>
            <li><span class="attention">.contains('class')</span> - checks if <span class="keyword">class </span> is in the list, if yes returns true, otherwise false</li>
        </ol>
        <p>Why do we need a classList? To manage styles! How code looks like?</p>
        <pre class="code">
<code class="code">
<span>&#60;!DOCTYPE html></span>
<span class="keyword">&#60;html lang=<span class="text">"en"</span>></span>
    <span class="keyword">&#60;head></span>
        <span class="keyword">&#60;meta charset=<span class="text">"UTF-8"</span>></span>
        <span class="keyword">&#60;title><span class="title">JS Learn</span>&#60;/title></span>
    <span class="keyword">&#60;/head></span>
    
    <span class="keyword">&#60;style></span>
        <span class="title">body</span>{
            <span class="keyword">font-family</span>: <span class="args">sans-serif</span>;
            <span class="keyword">text-align</span>: <span class="args">center</span>;
        }
        <span class="title">#square</span>{
            <span class="keyword">width</span>: <span class="args">100px</span>;
            <span class="keyword">text-align</span>: <span class="args">center</span>;
            <span class="keyword">height</span>: <span class="args">100px</span>;
            <span class="keyword">border</span>: <span class="args">3px solid #2d3436</span>;
            <span class="keyword">background-color</span>: <span class="args">#55efc4</span>;
            <span class="keyword">transition</span>: <span class="args">0.3s</span>;
            <span class="keyword">margin</span>: <span class="args">auto</span>;
        }
        <span class="title">.rounded</span>{
            <span class="keyword">border-radius</span>: <span class="args">50px</span>;
        }
    <span class="keyword">&#60;/style></span>
    
    <span class="keyword">&#60;body></span>
        <span class="keyword"> &#60;div id=<span class="text">"block"</span>&#60;/div></span>
        <span class="keyword">&#60;script&#62;</span>
        <span class="keyword">"use strict";</span>
        <span class="elem">square</span>.<span class="title">addEventListener</span>(<span class="text">'click'</span>, <span class="args">function</span>(){
            <span class="com">//switch state of our class</span>
            <span class="elem">square</span>.<span class="keyword">classList</span>.<span class="title">toggle</span>(<span class="text">'rounded'</span>);
        });
        <span class="keyword">&#60;/script&#62;</span>
    <span class="keyword">&#60;/body></span>
<span class="keyword">&#60;/html&#62;</span>
</code>
        </pre>
        <p>Try this code, and maybe you can understand why classList - good. we can use it for button "Show full". Code:</p>
        <pre class="code">
<code class="code">
<span>&#60;!DOCTYPE html></span>
<span class="keyword">&#60;html lang=<span class="text">"en"</span>></span>
    <span class="keyword">&#60;head></span>
        <span class="keyword">&#60;meta charset=<span class="text">"UTF-8"</span>></span>
        <span class="keyword">&#60;title><span class="title">JS Learn</span>&#60;/title></span>
    <span class="keyword">&#60;/head></span>
    
    <span class="keyword">&#60;style></span>
        <span class="title">img</span>{
            <span class="keyword">width</span>: <span class="args">300px</span>;
            <span class="keyword">background-image</span>: <span class="args">url("URL")</span>;
            <span class="keyword">background-position</span>: <span class="args">center center</span>;
            <span class="keyword">background-size</span>: <span class="args">cover</span>;
            <span class="keyword">transition</span>: <span class="args">all 0.5s</span>;
            <span class="keyword">height</span>: <span class="args">222px</span>;
        }
        <span class="title">button</span>{
            <span class="keyword">border-radius</span>: <span class="args">10px</span>;
            <span class="keyword">font-size</span>: <span class="args">column</span>;
            <span class="keyword">margin-top</span>: <span class="args">center</span>;
            <span class="keyword">padding</span>: <span class="args">15px</span>;
        }
        <span class="title">main</span>{
            <span class="keyword">display</span>: <span class="args">flex</span>;
            <span class="keyword">flex-direction</span>: <span class="args">center</span>;
            <span class="keyword">justify-content</span>: <span class="args">100px</span>;
            <span class="keyword">align-items</span>: <span class="args">center</span>;
        }
        <span class="title">.small</span>{
            <span class="keyword">height</span>: <span class="args">20px</span>;
        }
    <span class="keyword">&#60;/style></span>
    
    <span class="keyword">&#60;body></span>
        <span class="keyword">&#60;main></span>
            <span class="keyword">&#60;div class=<span class="text">"small"</span> id=<span class="text">"img"</span>>&#60;/div></span>
             <span class="keyword">&#60;button id="plus">Show full&#60;/button></span>
        <span class="keyword">&#60;/main></span>
        <span class="keyword">&#60;script&#62;</span>
        <span class="keyword">"use strict";</span>
        <span class="elem">plus</span>.<span class="title">addEventListener</span>(<span class="text">'click'</span>, <span class="args">function</span>(){
            <span class="com">//switch state of our class</span>
            <span class="elem">img</span>.<span class="keyword">classList</span>.<span class="title">toggle</span>(<span class="text">'small'</span>);
        });
        <span class="keyword">&#60;/script&#62;</span>
    <span class="keyword">&#60;/body></span>
<span class="keyword">&#60;/html&#62;</span>
</code>
        </pre>
        <p>Ok. it's good, funny and so on. What to do if we need to perform actions under a certain condition? We must use condition operator - if. Structure of If</p>
        <pre class="code">
<code class="code">
<span class="keyword">if</span>(condition1){
<span class="com">//your code if condition1 is true</span> 
<span class="com">//For example: clickCount > 100</span>
}
<span class="keyword">else if</span>(condition2){
<span class="com">//your code if condition2 is true</span>
<span class="com">//but condition1 is false</span>
<span class="com">//clickCount &#60; 100</span>
}
<span class="keyword">else</span>{
<span class="com">//your code if condition2 is false</span>
<span class="com">//and condition1 is false</span>
<span class="com">//clickCount == 100</span>
}
</code>
        </pre>
        <p>For example: We can read age of user. User enter in field his age and our script Handles age.</p>
        <pre class="code">
<code class="code">
<span>&#60;!DOCTYPE html></span>
<span class="keyword">&#60;html lang=<span class="text">"en"</span>></span>
    <span class="keyword">&#60;head></span>
        <span class="keyword">&#60;meta charset=<span class="text">"UTF-8"</span>></span>
        <span class="keyword">&#60;title><span class="title">JS Learn</span>&#60;/title></span>
    <span class="keyword">&#60;/head></span>
    
    <span class="keyword">&#60;body></span>
        <span class="keyword">&#60;main></span>
            <span class="keyword">&#60;input id=<span class="text">"ageField"</span>>&#60;/div></span>
             <span class="keyword">&#60;button id="btn">Registrate&#60;/button></span>
        <span class="keyword">&#60;/main></span>
        
        <span class="keyword">&#60;script&#62;</span>
        <span class="keyword">"use strict";</span>
        <span class="elem">btn</span>.<span class="title">addEventListener</span>(<span class="text">'click'</span>, <span class="args">function</span>(){
            <span class="keyword">if</span>(<span class="elem">ageField</span>.<span class="keyword">value</span> >= 18)
            {
                <span class="com">//Check if the user is an adult</span>
                <span class="com">//print Welcome!</span>
                <span class="keyword">alert(<span class = "text">"Welcome!"</span>);</span>
            }
            <span class="keyword">else</span>
            {
                <span class="com">//else print Come back later:)</span>
                <span class="keyword">alert(<span class = "text">"Come back later:)"</span>);</span>
            }
        });
        <span class="keyword">&#60;/script&#62;</span>
    <span class="keyword">&#60;/body></span>
<span class="keyword">&#60;/html&#62;</span>
</code>
        </pre>
        <p>Have fun with this knowledge :)</p>
        <a href="#" title="Вернуться к началу страницы" class="topNubex"><i class="fa fa-arrow-up" aria-hidden="true"></i></a>`
        ];

let RuPage = [menuRu, headerRu, mainRu, footerRu];
let EnPage = [menuEn, headerEn, mainEn, footerEn];

let en = false;
let array = document.body.children;
let count1 = array.length-2;

function setContent() {
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