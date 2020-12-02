const news__blockis = document.querySelectorAll(".news__block");
let dataObj = [{urlImg: "img/top-new.jpg", titleSrc: "Что гуглят во время пандемии. 13 графиков ", textSrc: "Как коронавирус повлиял на поисковые запросы? Как …х, запросах в Google с марта по ноябрь 2020 года.", comentSrc: "1488 комментариев", tagSrc: "Коронавирус"},{urlImg: "img/new1.jpg", titleSrc: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", textSrc: "", comentSrc: "1 комментарий", tagSrc: "Коронавирус"},{urlImg: "img/new2.jpg", titleSrc: "Youtube представил «бесконечный клип» на популярную песню", textSrc: "", comentSrc: "", tagSrc: "Коронавирус"},{urlImg: "img/new3.jpg", titleSrc: "Инди-разработчик выпустил на PC бесплатный симулятор PS5", textSrc: "", comentSrc: "1 комментарий", tagSrc: ""},{urlImg: "img/new4.jpg", titleSrc: "Начальника службы безопасности Apple обвинили в по… взятку айпадами за, разрешение на ношение оружия", textSrc: "", comentSrc: "1 комментарий", tagSrc: "Коронавирус"},{urlImg: "img/new5.jpg", titleSrc: "Tesla Model X взломали за 90 секунд через уязвимости брелока и Bluetooth", textSrc: "", comentSrc: "", tagSrc: "Коронавирус"},{urlImg: "img/top-new.jpg", titleSrc: "Что гуглят во время пандемии. 13 графиков ", textSrc: "Как коронавирус повлиял на поисковые запросы? Как …х, запросах в Google с марта по ноябрь 2020 года.", comentSrc: "1488 комментариев", tagSrc: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=zdarova&bold=true&fontsize=36", titleSrc: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", textSrc: "", comentSrc: "1 комментарий", tagSrc: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=pidor&bold=true&fontsize=36", titleSrc: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", textSrc: "", comentSrc: "1 комментарий", tagSrc: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=ebuchiy&bold=true&fontsize=36", titleSrc: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", textSrc: "", comentSrc: "1 комментарий", tagSrc: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=nu sho&bold=true&fontsize=36", titleSrc: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", textSrc: "", comentSrc: "1 комментарий", tagSrc: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=ty?&bold=true&fontsize=36", titleSrc: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", textSrc: "", comentSrc: "1 комментарий", tagSrc: "Коронавирус"},{urlImg: "img/top-new.jpg", titleSrc: "Что гуглят во время пандемии. 13 графиков ", textSrc: "Как коронавирус повлиял на поисковые запросы? Как …х, запросах в Google с марта по ноябрь 2020 года.", comentSrc: "1488 комментариев", tagSrc: "Коронавирус"},{urlImg: "img/new1.jpg", titleSrc: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", textSrc: "", comentSrc: "1 комментарий", tagSrc: "Коронавирус"},{urlImg: "img/new2.jpg", titleSrc: "Youtube представил «бесконечный клип» на популярную песню", textSrc: "", comentSrc: "", tagSrc: "Коронавирус"},{urlImg: "img/new3.jpg", titleSrc: "Инди-разработчик выпустил на PC бесплатный симулятор PS5", textSrc: "", comentSrc: "1 комментарий", tagSrc: ""},{urlImg: "img/new4.jpg", titleSrc: "Начальника службы безопасности Apple обвинили в по… взятку айпадами за, разрешение на ношение оружия", textSrc: "", comentSrc: "1 комментарий", tagSrc: "Коронавирус"},{urlImg: "img/new5.jpg", titleSrc: "Tesla Model X взломали за 90 секунд через уязвимости брелока и Bluetooth", textSrc: "", comentSrc: "", tagSrc: "Коронавирус"},{urlImg: "img/top-new.jpg", titleSrc: "Что гуглят во время пандемии. 13 графиков ", textSrc: "Как коронавирус повлиял на поисковые запросы? Как …х, запросах в Google с марта по ноябрь 2020 года.", comentSrc: "1488 комментариев", tagSrc: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=zdarova&bold=true&fontsize=36", titleSrc: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", textSrc: "", comentSrc: "1 комментарий", tagSrc: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=pidor&bold=true&fontsize=36", titleSrc: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", textSrc: "", comentSrc: "1 комментарий", tagSrc: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=ebuchiy&bold=true&fontsize=36", titleSrc: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", textSrc: "", comentSrc: "1 комментарий", tagSrc: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=nu sho&bold=true&fontsize=36", titleSrc: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", textSrc: "", comentSrc: "1 комментарий", tagSrc: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=ty?&bold=true&fontsize=36", titleSrc: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", textSrc: "", comentSrc: "1 комментарий", tagSrc: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=nu sho&bold=true&fontsize=36", titleSrc: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", textSrc: "", comentSrc: "1 комментарий", tagSrc: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=ty?&bold=true&fontsize=36", titleSrc: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", textSrc: "", comentSrc: "1 комментарий", tagSrc: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=nu sho&bold=true&fontsize=36", titleSrc: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", textSrc: "", comentSrc: "1 комментарий", tagSrc: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=ty?&bold=true&fontsize=36", titleSrc: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", textSrc: "", comentSrc: "1 комментарий", tagSrc: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=nu sho&bold=true&fontsize=36", titleSrc: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", textSrc: "", comentSrc: "1 комментарий", tagSrc: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=ty?&bold=true&fontsize=36", titleSrc: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", textSrc: "", comentSrc: "1 комментарий", tagSrc: "Коронавирус"}];
let pages = Math.ceil(dataObj.length / 6);
let newsDiv = '<div class="news__block"><img class="news__img" src="urlImg" alt=""><a class="news__link" href=""></a><div class="news__block-text"><div class="news__title">titleSrc</div><div class="news__text">textSrc</div><div class="news__coment">comentSrc</div><div class="news__tag">tagSrc</div></div></div>';
let newsBttn = '<li id="replace0"><a href="#">replace1</a></li>'
console.log(pages);
function generator(template, array, iziCounter) {
    for (let key in array[iziCounter]) {
        template = template.replace(key, array[iziCounter][key]);
    }
    return template;
}

function generatorBttn(template, iziCounter) {
    template = template.replace('replace0', 'page' + iziCounter).replace('replace1', iziCounter+1);
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
        news__page.insertAdjacentHTML('beforeend', generator(newsDiv, dataObj, k)); //добавление результата функции в верстку
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
