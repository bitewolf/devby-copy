const news__blockis = document.querySelectorAll(".news__block");
let activeButton = 1;

let dataObj = [{urlImg: "img/top-new.jpg", title: "Что гуглят во время пандемии. 13 графиков ", text: "Как коронавирус повлиял на поисковые запросы? Как …х, запросах в Google с марта по ноябрь 2020 года.", coment: "1488 комментариев", tag: "Коронавирус"},{urlImg: "img/new1.jpg", title: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", text: "", coment: "1 комментарий", tag: "Коронавирус"},{urlImg: "img/new2.jpg", title: "Youtube представил «бесконечный клип» на популярную песню", text: "", coment: "", tag: "Коронавирус"},{urlImg: "img/new3.jpg", title: "Инди-разработчик выпустил на PC бесплатный симулятор PS5", text: "", coment: "1 комментарий", tag: ""},{urlImg: "img/new4.jpg", title: "Начальника службы безопасности Apple обвинили в по… взятку айпадами за, разрешение на ношение оружия", text: "", coment: "1 комментарий", tag: "Коронавирус"},{urlImg: "img/new5.jpg", title: "Tesla Model X взломали за 90 секунд через уязвимости брелока и Bluetooth", text: "", coment: "", tag: "Коронавирус"},{urlImg: "img/top-new.jpg", title: "Что гуглят во время пандемии. 13 графиков ", text: "Как коронавирус повлиял на поисковые запросы? Как …х, запросах в Google с марта по ноябрь 2020 года.", coment: "1488 комментариев", tag: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=zdarova&bold=true&fontsize=36", title: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", text: "", coment: "1 комментарий", tag: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=pidor&bold=true&fontsize=36", title: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", text: "", coment: "1 комментарий", tag: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=ebuchiy&bold=true&fontsize=36", title: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", text: "", coment: "1 комментарий", tag: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=nu sho&bold=true&fontsize=36", title: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", text: "", coment: "1 комментарий", tag: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=ty?&bold=true&fontsize=36", title: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", text: "", coment: "1 комментарий", tag: "Коронавирус"},{urlImg: "img/top-new.jpg", title: "Что гуглят во время пандемии. 13 графиков ", text: "Как коронавирус повлиял на поисковые запросы? Как …х, запросах в Google с марта по ноябрь 2020 года.", coment: "1488 комментариев", tag: "Коронавирус"},{urlImg: "img/new1.jpg", title: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", text: "", coment: "1 комментарий", tag: "Коронавирус"},{urlImg: "img/new2.jpg", title: "Youtube представил «бесконечный клип» на популярную песню", text: "", coment: "", tag: "Коронавирус"},{urlImg: "img/new3.jpg", title: "Инди-разработчик выпустил на PC бесплатный симулятор PS5", text: "", coment: "1 комментарий", tag: ""},{urlImg: "img/new4.jpg", title: "Начальника службы безопасности Apple обвинили в по… взятку айпадами за, разрешение на ношение оружия", text: "", coment: "1 комментарий", tag: "Коронавирус"},{urlImg: "img/new5.jpg", title: "Tesla Model X взломали за 90 секунд через уязвимости брелока и Bluetooth", text: "", coment: "", tag: "Коронавирус"},{urlImg: "img/top-new.jpg", title: "Что гуглят во время пандемии. 13 графиков ", text: "Как коронавирус повлиял на поисковые запросы? Как …х, запросах в Google с марта по ноябрь 2020 года.", coment: "1488 комментариев", tag: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=zdarova&bold=true&fontsize=36", title: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", text: "", coment: "1 комментарий", tag: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=pidor&bold=true&fontsize=36", title: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", text: "", coment: "1 комментарий", tag: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=ebuchiy&bold=true&fontsize=36", title: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", text: "", coment: "1 комментарий", tag: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=nu sho&bold=true&fontsize=36", title: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", text: "", coment: "1 комментарий", tag: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=ty?&bold=true&fontsize=36", title: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", text: "", coment: "1 комментарий", tag: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=nu sho&bold=true&fontsize=36", title: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", text: "", coment: "1 комментарий", tag: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=ty?&bold=true&fontsize=36", title: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", text: "", coment: "1 комментарий", tag: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=nu sho&bold=true&fontsize=36", title: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", text: "", coment: "1 комментарий", tag: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=ty?&bold=true&fontsize=36", title: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", text: "", coment: "1 комментарий", tag: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=nu sho&bold=true&fontsize=36", title: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", text: "", coment: "1 комментарий", tag: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=ty?&bold=true&fontsize=36", title: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", text: "", coment: "1 комментарий", tag: "Коронавирус"}];
let pages = dataObj.length / 6;

let newsDiv = '<div class="news__block"><img class="news__img" src="insImgUrl" alt=""><a class="news__link" href=""></a><div class="news__block-text"><div class="news__title">insTitle</div><div class="news__text">insText</div><div class="news__coment">insComment</div><div class="news__tag">insTag</div></div></div>';
function generator(template, array, counter) { //функция с генерацией новости
    let templateEdit = template.replace('insImgUrl', array[counter].urlImg).replace('insTitle', array[counter].title).replace('insText', array[counter].text).replace('insComment', array[counter].coment).replace('insTag', array[counter].tag);
    return templateEdit;
}
for (let pageCount = 0; pageCount < pages; pageCount++) {
    //Создание страницы новостей.
    let news__page = document.createElement('div');
    news__page.className = "news__blocks" + pageCount;
    //Добавление страницы новостей в верстку
    let news__blocksContainer = document.querySelector('.news__blocks-container');
    news__blocksContainer.appendChild(news__page);
    for (let newsCount = 0; newsCount < 6; newsCount++) {
        let k = newsCount + pageCount * 6;
        news__page.insertAdjacentHTML('beforeend', generator(newsDiv, dataObj, k)); //добавление результата функции в верстку
    }
}
document.querySelector('.news__blocks0').classList.add('visible'); //отображение первой страницы
let pageClickAll = document.querySelector('.news__footer-pages').querySelectorAll('li');
let pageNext = document.querySelector('.news__footer-list').querySelector('li');
let news__blocksAll = document.querySelector('.news__blocks-container').querySelectorAll('div');
//пагинация
function checkNxtBttn() {
    let NxtBttn = document.querySelector('.news__footer-list').querySelector('li');
    if (activeButton == 5) {
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
    if (activeButton !== 5) {
        hide();
        document.querySelector('.news__blocks' + activeButton).classList.add('visible');
        document.getElementById('page' + activeButton).classList.add('active');
        activeButton = activeButton + 1;
        checkNxtBttn();
    }
});
