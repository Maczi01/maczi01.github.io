"use strict";
//paginacja https://www.youtube.com/watch?v=IqYiVHrO2U8
//paginacja https://github.com/TylerPottsDev/vanillajs-pagination/blob/master/main.js
//underliny https://codepen.io/cassie-codes/pen/rNNGdmw
console.log(`Hello world!`);
const list = document.querySelector(".projects__list");
const side = document.querySelector(".side");

fetch("https://api.github.com/users/maczi01/repos?sort=updated&direction=desc")
    .then(res => res.json())
    .then(res => {
        res.map(r => {
                const {name, html_url, description, homepage, language} = r;
                list.innerHTML += `
  <li class="project">
        <div class="project__container">
        <img src="../assets/img/githubico.svg" class="project__logo" alt="logo github">
        <h3 class="project__title">${name}</h3>
        <div class="project__language">
        <p class="${changeDotColor(language)}">${language}</p>
        
        </div> 
        <p class="project__description">${description}</p>
        
    </div>
     
    <footer class="project__footer">
        ${homepage ? `<a class="project__link project__link--demo" href="${homepage}"target="_blank" rel="nofollow noreferrer" title="Demo: ${name}.">Demo</a>`
                    : ""}
        <a class="project__link project__link--code" href="${html_url}" target="_blank" rel="nofollow noreferrer"  title="Source code: ${name}.">Repository</a>
        </footer>
        </li>`
            }
        )
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

function changeDotColor(language) {
    switch (language) {
        case "HTML":
            return "project__language--item1";
        case "Java":
            return "project__language--item2";
        case "JavaScript":
            return "project__language--item3";
        default:
            return "project__language--item4";
    }
}

