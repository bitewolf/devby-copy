

const news__blockis = document.querySelectorAll(".news__block");

let data =["file:///C:/to_sho_dev_by/img/top-new.jpg","Что гуглят во время пандемии. 13 графиков ","Как коронавирус повлиял на поисковые запросы? Как менялся пользовательский интерес, к тем или иным товарам и услугам? 13 графиков отвечают. Речь идёт об англоязычных, запросах в Google с марта по ноябрь 2020 года.","1488 комментариев","Коронавирус","file:///C:/to_sho_dev_by/img/new1.jpg","2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!","","1 комментарий","Коронавирус","file:///C:/to_sho_dev_by/img/new2.jpg","Youtube представил «бесконечный клип» на популярную песню","","","Коронавирус","file:///C:/to_sho_dev_by/img/new3.jpg","Инди-разработчик выпустил на PC бесплатный симулятор PS5","","1 комментарий","","file:///C:/to_sho_dev_by/img/new4.jpg","Начальника службы безопасности Apple обвинили в попытке дать взятку айпадами за, разрешение на ношение оружия","","1 комментарий","Коронавирус","file:///C:/to_sho_dev_by/img/new5.jpg","Tesla Model X взломали за 90 секунд через уязвимости брелока и Bluetooth","","","Коронавирус","file:///C:/to_sho_dev_by/img/top-new.jpg","Что гуглят во время пандемии. 13 графиков ","Как коронавирус повлиял на поисковые запросы? Как менялся пользовательский интерес, к тем или иным товарам и услугам? 13 графиков отвечают. Речь идёт об англоязычных, запросах в Google с марта по ноябрь 2020 года.","1488 комментариев","Коронавирус","file:///C:/to_sho_dev_by/img/new1.jpg","2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!","","1 комментарий","Коронавирус","file:///C:/to_sho_dev_by/img/new1.jpg","2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!","","1 комментарий","Коронавирус","file:///C:/to_sho_dev_by/img/new1.jpg","2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!","","1 комментарий","Коронавирус","file:///C:/to_sho_dev_by/img/new1.jpg","2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!","","1 комментарий","Коронавирус","file:///C:/to_sho_dev_by/img/new1.jpg","2 наших коллег в СИЗО КГБ, 9 — проходят по уголовным делам. Свободу журналистам!","","1 комментарий","Коронавирус"];

    console.log (data);

//let i = 0;
//for (let yobaKek of news__blockis) {
//    yobaKek.querySelector('img').src = data[0+i*5];
//    yobaKek.querySelector('.news__title').textContent = data[1+i*5];
//    yobaKek.querySelector('.news__text').textContent = data[2+i*5];

//    i = i+1;
//}
let pages = data.length/30;
console.log (pages);
for (let pageCount = 0; pageCount < pages; pageCount++) {
    //Создание страницы новостей.
    let news__page = document.createElement('div');
    news__page.className = "news__blocks"+pageCount;
//Добавление страницы новостей в верстку
    let news__blocksContainer = document.querySelector('.news__blocks-container');
    news__blocksContainer.appendChild(news__page);



    for (let newsCount = 0; newsCount < 6; newsCount++) {
    //Создание блока с новостью.
    let news__div = document.createElement('div');
    news__div.className = "news__block";


    let div__img = news__div.appendChild(document.createElement('img'));
    div__img.className = "news__img";
    div__img.setAttribute("src", data[0+newsCount*5+pageCount*30]);

    let div__a = news__div.appendChild(document.createElement('a'));
    div__a.className = "news__link";


    let div__blockText = news__div.appendChild(document.createElement('div'));
    div__blockText.className = "news__block-text";

        let inDiv__title = div__blockText.appendChild(document.createElement('div'));
        inDiv__title.className = "news__title";
        inDiv__title.textContent = data[1+newsCount*5+pageCount*30];

        let inDiv__text = div__blockText.appendChild(document.createElement('div'));
        inDiv__text.className = "news__text";
        inDiv__text.textContent = data[2+newsCount*5+pageCount*30];

        let inDiv__coment = div__blockText.appendChild(document.createElement('div'));
        inDiv__coment.className = "news__coment";
        inDiv__coment.textContent = data[3+newsCount*5+pageCount*30];

        let inDiv__tag = div__blockText.appendChild(document.createElement('div'));
        inDiv__tag.className = "news__tag";

            let inTag__a = inDiv__tag.appendChild(document.createElement('a'));
            inTag__a.className = "tag__name";
            inTag__a.setAttribute("href", "#");
            inTag__a.textContent = data[4+newsCount*5+pageCount*30];

//Добавление блока с новостью на страницу новостей.
    news__page.appendChild(news__div);
        }

}




for (let i = 0; i < pages; i++){


let news__blocks = document.querySelector('.news__blocks'+i);
let pageClick = document.querySelector('#page'+i);

pageClick.addEventListener("click", function() {
    news__blocks.classList.add('visible');
    pageClick.classList.add('active');

});
console.log (news__blocks, pageClick);
}



















































