let Create = document.querySelector('.create')

Create.addEventListener('click', () => {
    window.location.href = "../CreatePoste/Create.html"
})
let LogOut = document.querySelector('.LogOut')

LogOut.addEventListener('click', () => {
    localStorage.clear()
    window.location.href = '../Accueil/Accueil.html'
})

async function gethis() {
    let response = await fetch('http://127.0.0.1:4529/getAllArticles')
    let main = await response.json()
    let articlesmachin = document.querySelector('.main')
    let localUser = localStorage.getItem('session')

    for(const Articles of main ) {
        let ok = document.createElement('div')
        ok.classList.add('poste1')
        ok.innerHTML = 
        `<p class="h1">${Articles.title}</p>
        <img src="${Articles.image}">
        <p class="descript">${Articles.description}</p>
        <p class="location">${Articles.location}</p>
        <p class="price">${Articles.price}</p>`
        if(Articles.userid === localUser) {
            ok.innerHTML += `<button class="Suppr" onclick="Supprimer">Suppr</a>`
        } else {
            console.log('ok')
        }
        articlesmachin.appendChild(ok)
    };
}

let Supprimer = document.querySelector('.Suppr')
Supprimer.addEventListener('click', () => {
    window.location.href = '../Scroll-Page/Scroll.html'
})
gethis()

