"use strict";
//paginacja https://www.youtube.com/watch?v=IqYiVHrO2U8
//paginacja https://github.com/TylerPottsDev/vanillajs-pagination/blob/master/main.js
console.log(`Hello world!`);
const list = document.querySelector(".projects__list");
const side = document.querySelector(".side");

fetch("https://api.github.com/users/maczi01/repos?sort=updated&direction=desc")
    .then(res => res.json())
    .then(res => {
        res.map(r => {
            const {name, html_url, description, homepage} = r;
            list.innerHTML += `
  <li class="project">
        <div class="project__container">

        <img src="../assets/img/githubico.svg" class="project__logo" alt="logo github">
        <h3 class="project__title">${name}</h3>
        <p class="project__description">${description}</p>
    </div>
    <footer class="project__footer">
        <a class="project__link project__link--demo" href="${html_url}">Demo</a>
        <a class="project__link project__link--code" href="${homepage}">Repository</a>
        </footer>
        </li>`
        })
    });

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        side.classList.add('side--visible');
        side.classList.remove('side');
    } else {
        side.classList.remove('side--visible');
        side.classList.add('side');
    }
});

