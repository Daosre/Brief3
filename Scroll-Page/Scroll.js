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
    console.log(response)

    let articlesmachin = document.querySelector('.main')
    
    main.forEach((Articles) => {
        let ok = document.createElement('div')
        ok.classList.add('poste1')
        ok.innerHTML = 
        `<p class="h1">${Articles.title}</p>
        <img src="${Articles.image}">
        ${Articles.description}
        <p class="location">${Articles.location}</p>
        <p class="price">${Articles.price}</p>`
        articlesmachin.appendChild(ok)
    });
}
gethis()

