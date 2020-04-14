"use strict";

console.log(`Hello world!`);
const list = document.querySelector(".projects__list");
fetch("https://api.github.com/users/maczi01/repos?sort=updated&direction=desc")
    .then(res => res.json()).then(res => {
    const repos = res;
    repos.map(r => {
        const {name, html_url, description, homepage} = r
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
})
