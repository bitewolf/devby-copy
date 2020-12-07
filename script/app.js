//burger
let nav = document.querySelector('#nav');
let navToggle = document.querySelector('#navToggle');

navToggle.addEventListener("click", function () {
        if (nav.classList.contains('show')) {
            nav.classList.remove('show')
        } else
            nav.classList.add('show');

    });






const news__blockis = document.querySelectorAll(".news__block");

let newsDiv = '<div class="news__block"><img class="news__img" src="urlImg" alt=""><a class="news__link" href=""></a><div class="news__block-text"><div class="news__title">titleSrc</div><div class="news__text">textSrc</div><div class="news__coment">comentSrc</div><div class="news__tag">tagSrc</div></div></div>';
let newsBttn = '<li id="replace0"><a href="#">replace1</a></li>'
async function getResponse() {
    let response = await fetch('http://localhost:3000/posts');
    return await response.json();
}
let pages = 5;

function renderPage(array, template, iziCounter) {
    for (let key in array[iziCounter]) {
        template = template.replace(key, array[iziCounter][key]);
    }
    return template;
}

function generatorBttn(template, iziCounter) {
    template = template.replace('replace0', 'page' + iziCounter).replace('replace1', iziCounter + 1);
    return template;
}
let bttnFooter = document.querySelector('.news__footer-pages')
for (let pageCount = 0; pageCount < pages; pageCount++) {
    let news__page = document.createElement('div'); //Создание страницы новостей.
    news__page.className = "news__blocks" + pageCount;
    let news__blocksContainer = document.querySelector('.news__blocks-container'); //Добавление страницы новостей в верстку
    news__blocksContainer.appendChild(news__page);
    for (let newsCount = 0; newsCount < 6; newsCount++) {
        let k = newsCount + pageCount * 6;
        getResponse().then(resp => renderPage(resp, newsDiv, k)).then(resp => news__page.insertAdjacentHTML('beforeend', resp)); //добавление результата функции в верстку
    }
    bttnFooter.insertAdjacentHTML('beforeend', generatorBttn(newsBttn, pageCount));
}
let firstButtonActive = document.querySelector('#page0').classList.add('active');
document.querySelector('.news__blocks0').classList.add('visible'); //отображение первой страницы
let pageClickAll = document.querySelector('.news__footer-pages').querySelectorAll('li');
let pageNext = document.querySelector('.news__footer-list').querySelector('li');
let news__blocksAll = document.querySelector('.news__blocks-container').querySelectorAll('div');
//пагинация
function checkNxtBttn() {
    let NxtBttn = document.querySelector('.news__footer-list').querySelector('li');
    if (activeButton == pages) {
        NxtBttn.classList.add('disable');
    }
    else {
        NxtBttn.classList.remove('disable');
    }
}

function hide() {
    for (let pageDel of pageClickAll) { //удаление класса active со всех кнопок
        pageDel.classList.remove('active')
    }
    for (let blockDel of news__blocksAll) { //удаление класса visible со всех блоков
        blockDel.classList.remove('visible')
    }
}
for (let i = 0; i < pages; i++) {
    let news__blocks = document.querySelector('.news__blocks' + i);
    let pageClick = document.querySelector('#page' + i);
    pageClick.addEventListener("click", function () {
        hide();
        news__blocks.classList.add('visible');
        pageClick.classList.add('active'); //добавление класса active на кнопку
        activeButton = Number(pageClick.querySelector('a').textContent);
        checkNxtBttn();
    });
}
pageNext.addEventListener("click", function () {
    if (activeButton !== pages) {
        hide();
        document.querySelector('.news__blocks' + activeButton).classList.add('visible');
        document.getElementById('page' + activeButton).classList.add('active');
        activeButton = activeButton + 1;
        checkNxtBttn();
    }
});
