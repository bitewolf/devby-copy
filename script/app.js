const name = "Чел";
let age = 1488;
let boo = true;

const news__blocks = document.querySelector(".news__blocks");
const news__blocks2 = document.querySelector(".news__blocks2");
const pageClick = document.querySelector('#page1');
const pageClick2 = document.querySelector('#page2');



pageClick.addEventListener("click", function() {
    news__blocks.classList.add('visible');
    news__blocks2.classList.remove('visible');
    pageClick.classList.add('active');
    pageClick2.classList.remove('active');

});

pageClick2.addEventListener("click", function() {
    news__blocks.classList.remove('visible');
    news__blocks2.classList.add('visible');
    pageClick.classList.remove('active');
    pageClick2.classList.add('active');
});
