const news__blockis = document.querySelectorAll(".news__block");

//let data =["img/top-new.jpg","Что гуглят во время пандемии. 13 графиков ","Как коронавирус повлиял на поисковые запросы? Как менялся пользовательский интерес, к тем или иным товарам и услугам? 13 графиков отвечают. Речь идёт об англоязычных, запросах в Google с марта по ноябрь 2020 года.","1488 комментариев","Коронавирус","img/new1.jpg","2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!","","1 комментарий","Коронавирус","img/new2.jpg","Youtube представил «бесконечный клип» на популярную песню","","","Коронавирус","img/new3.jpg","Инди-разработчик выпустил на PC бесплатный симулятор PS5","","1 комментарий","","img/new4.jpg","Начальника службы безопасности Apple обвинили в попытке дать взятку айпадами за, разрешение на ношение оружия","","1 комментарий","Коронавирус","img/new5.jpg","Tesla Model X взломали за 90 секунд через уязвимости брелока и Bluetooth","","","Коронавирус","img/top-new.jpg","Что гуглят во время пандемии. 13 графиков ","Как коронавирус повлиял на поисковые запросы? Как менялся пользовательский интерес, к тем или иным товарам и услугам? 13 графиков отвечают. Речь идёт об англоязычных, запросах в Google с марта по ноябрь 2020 года.","1488 комментариев","Коронавирус","https://place-hold.it/267x150/fff/c00?text=zdarova&bold=true&fontsize=36","2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!","","1 комментарий","Коронавирус","https://place-hold.it/267x150/fff/c00?text=pidor&bold=true&fontsize=36","2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!","","1 комментарий","Коронавирус","https://place-hold.it/267x150/fff/c00?text=ebuchiy&bold=true&fontsize=36","2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!","","1 комментарий","Коронавирус","https://place-hold.it/267x150/fff/c00?text=nu sho&bold=true&fontsize=36","2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!","","1 комментарий","Коронавирус","https://place-hold.it/267x150/fff/c00?text=ty?&bold=true&fontsize=36","2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!","","1 комментарий","Коронавирус"];

let dataObj = [{urlImg: "img/top-new.jpg", title: "Что гуглят во время пандемии. 13 графиков ", text: "Как коронавирус повлиял на поисковые запросы? Как …х, запросах в Google с марта по ноябрь 2020 года.", coment: "1488 комментариев", tag: "Коронавирус"},{urlImg: "img/new1.jpg", title: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", text: "", coment: "1 комментарий", tag: "Коронавирус"},{urlImg: "img/new2.jpg", title: "Youtube представил «бесконечный клип» на популярную песню", text: "", coment: "", tag: "Коронавирус"},{urlImg: "img/new3.jpg", title: "Инди-разработчик выпустил на PC бесплатный симулятор PS5", text: "", coment: "1 комментарий", tag: ""},{urlImg: "img/new4.jpg", title: "Начальника службы безопасности Apple обвинили в по… взятку айпадами за, разрешение на ношение оружия", text: "", coment: "1 комментарий", tag: "Коронавирус"},{urlImg: "img/new5.jpg", title: "Tesla Model X взломали за 90 секунд через уязвимости брелока и Bluetooth", text: "", coment: "", tag: "Коронавирус"},{urlImg: "img/top-new.jpg", title: "Что гуглят во время пандемии. 13 графиков ", text: "Как коронавирус повлиял на поисковые запросы? Как …х, запросах в Google с марта по ноябрь 2020 года.", coment: "1488 комментариев", tag: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=zdarova&bold=true&fontsize=36", title: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", text: "", coment: "1 комментарий", tag: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=pidor&bold=true&fontsize=36", title: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", text: "", coment: "1 комментарий", tag: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=ebuchiy&bold=true&fontsize=36", title: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", text: "", coment: "1 комментарий", tag: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=nu sho&bold=true&fontsize=36", title: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", text: "", coment: "1 комментарий", tag: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=ty?&bold=true&fontsize=36", title: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", text: "", coment: "1 комментарий", tag: "Коронавирус"},{urlImg: "img/top-new.jpg", title: "Что гуглят во время пандемии. 13 графиков ", text: "Как коронавирус повлиял на поисковые запросы? Как …х, запросах в Google с марта по ноябрь 2020 года.", coment: "1488 комментариев", tag: "Коронавирус"},{urlImg: "img/new1.jpg", title: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", text: "", coment: "1 комментарий", tag: "Коронавирус"},{urlImg: "img/new2.jpg", title: "Youtube представил «бесконечный клип» на популярную песню", text: "", coment: "", tag: "Коронавирус"},{urlImg: "img/new3.jpg", title: "Инди-разработчик выпустил на PC бесплатный симулятор PS5", text: "", coment: "1 комментарий", tag: ""},{urlImg: "img/new4.jpg", title: "Начальника службы безопасности Apple обвинили в по… взятку айпадами за, разрешение на ношение оружия", text: "", coment: "1 комментарий", tag: "Коронавирус"},{urlImg: "img/new5.jpg", title: "Tesla Model X взломали за 90 секунд через уязвимости брелока и Bluetooth", text: "", coment: "", tag: "Коронавирус"},{urlImg: "img/top-new.jpg", title: "Что гуглят во время пандемии. 13 графиков ", text: "Как коронавирус повлиял на поисковые запросы? Как …х, запросах в Google с марта по ноябрь 2020 года.", coment: "1488 комментариев", tag: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=zdarova&bold=true&fontsize=36", title: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", text: "", coment: "1 комментарий", tag: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=pidor&bold=true&fontsize=36", title: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", text: "", coment: "1 комментарий", tag: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=ebuchiy&bold=true&fontsize=36", title: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", text: "", coment: "1 комментарий", tag: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=nu sho&bold=true&fontsize=36", title: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", text: "", coment: "1 комментарий", tag: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=ty?&bold=true&fontsize=36", title: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", text: "", coment: "1 комментарий", tag: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=nu sho&bold=true&fontsize=36", title: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", text: "", coment: "1 комментарий", tag: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=ty?&bold=true&fontsize=36", title: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", text: "", coment: "1 комментарий", tag: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=nu sho&bold=true&fontsize=36", title: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", text: "", coment: "1 комментарий", tag: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=ty?&bold=true&fontsize=36", title: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", text: "", coment: "1 комментарий", tag: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=nu sho&bold=true&fontsize=36", title: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", text: "", coment: "1 комментарий", tag: "Коронавирус"},{urlImg: "https://place-hold.it/267x150/fff/c00?text=ty?&bold=true&fontsize=36", title: "2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!", text: "", coment: "1 комментарий", tag: "Коронавирус"}];

//let out = document.querySelector('.out');
//console.log(out);

//перевод массива в массив объектов
//let dataObj = [];
//for (let k = 0; k < 12; k++){
//    let obj = {};//+объект
//    obj.urlImg = data[0+k*5];//заполнение объекта
//    obj.title = data[1+k*5];
//    obj.text = data[2+k*5];
//    obj.coment = data[3+k*5];
//    obj.tag = data[4+k*5];
//    dataObj.push(obj);//запись объекта в массив
//    console.log(dataObj);
//};

   // console.log (data);

//let i = 0;
//for (let yobaKek of news__blockis) {
//    yobaKek.querySelector('img').src = data[0+i*5];
//    yobaKek.querySelector('.news__title').textContent = data[1+i*5];
//    yobaKek.querySelector('.news__text').textContent = data[2+i*5];

//    i = i+1;
//}
let pages = dataObj.length/6;

for (let pageCount = 0; pageCount < pages; pageCount++) {
    //Создание страницы новостей.
    let news__page = document.createElement('div');
    news__page.className = "news__blocks"+pageCount;


//Добавление страницы новостей в верстку
    let news__blocksContainer = document.querySelector('.news__blocks-container');
    news__blocksContainer.appendChild(news__page);



    for (let newsCount = 0; newsCount < 6; newsCount++) {
        console.log (newsCount+pageCount*6);
    //Создание блока с новостью.
    let news__div = document.createElement('div');
    news__div.className = "news__block";


    let div__img = news__div.appendChild(document.createElement('img'));
    div__img.className = "news__img";
    div__img.setAttribute("src", dataObj[newsCount+pageCount*6].urlImg);

    let div__a = news__div.appendChild(document.createElement('a'));
    div__a.className = "news__link";


    let div__blockText = news__div.appendChild(document.createElement('div'));
    div__blockText.className = "news__block-text";

        let inDiv__title = div__blockText.appendChild(document.createElement('div'));
        inDiv__title.className = "news__title";
        inDiv__title.textContent = dataObj[newsCount+pageCount*6].title;

        let inDiv__text = div__blockText.appendChild(document.createElement('div'));
        inDiv__text.className = "news__text";
        inDiv__text.textContent = dataObj[newsCount+pageCount*6].text;

        let inDiv__coment = div__blockText.appendChild(document.createElement('div'));
        inDiv__coment.className = "news__coment";
        inDiv__coment.textContent = dataObj[newsCount+pageCount*6].coment;

        let inDiv__tag = div__blockText.appendChild(document.createElement('div'));
        inDiv__tag.className = "news__tag";

            let inTag__a = inDiv__tag.appendChild(document.createElement('a'));
            inTag__a.className = "tag__name";
            inTag__a.setAttribute("href", "#");
            inTag__a.textContent = dataObj[newsCount+pageCount*6].tag;

//Добавление блока с новостью на страницу новостей.
    news__page.appendChild(news__div);
        }

}

let zalupa = document.querySelector('.news__blocks0').classList.add('visible');//отображение первой страницы


//жалкие попытки присрать пагинацию
for (let i = 0; i < pages; i++){

let news__blocksAll = document.querySelector('.news__blocks-container').querySelectorAll('div');
let news__blocks = document.querySelector('.news__blocks'+i);

let pageClickAll = document.querySelector('.news__footer-pages').querySelectorAll('li');
let pageClick = document.querySelector('#page'+i);

let pageNext = document.querySelector('.news__footer-list').querySelector('li');

pageClick.addEventListener("click", function() {

for (let pageDel of pageClickAll){                  //удаление класса active со всех кнопок
pageDel.classList.remove('active');

};
for (let blockDel of news__blocksAll){                  //удаление класса visible со всех блоков
    blockDel.classList.remove('visible')
    };

    news__blocks.classList.add('visible');

       pageClick.classList.add('active');           //добавление класса active на кнопку
});


pageNext.addEventListener("click", function() {

    for (let pageDel of pageClickAll){

            if (pageDel.classList.contains('active'))
            {
            pageDel.classList.remove('active');
            };
            let nomer = Number(pageDel.querySelector('a').textContent);
            console.log(nomer);

        let stranica = document.querySelector('#page'+nomer);
             console.log(stranica);
        stranica.classList.add('active');
        break;
    };



});

}



















































