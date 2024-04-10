let Create = document.querySelector('.create')

Create.addEventListener('click', () => {
    window.location.href = "../CreatePoste/Create.html"
})

let LogOut = document.querySelector('.LogOut')

LogOut.addEventListener('click', () => {
    localStorage.clear()
    window.location.href = '../Accueil/Accueil.html'
})

let user = document.querySelector('.user')

Create.addEventListener('click', () => {
    window.location.href = "user.html"
})


async function gethis() {
    let response = await fetch('http://127.0.0.1:4529/getAllArticles')
    let main = await response.json()
    let articlesmachin = document.querySelector('.main')
    let localUser = localStorage.getItem('role')


    for(const Articles of main ) {
        let ok = document.createElement('div')
        ok.classList.add('poste1')
        ok.innerHTML = 
        `<p class="h1">${Articles.title}</p>
        <img src="${Articles.image}">
        <p class="descript">${Articles.description}</p>
        <p class="location">${Articles.location}</p>
        <p class="price">${Articles.price}</p>`

        if(localUser === "admin") {
            ok.innerHTML += `<button class="Suppr" onclick="Supprimer('${Articles._id}')">Suppr</button>
            <a href="../CreatePoste/Edit.html" class="edit" onclick="editer('${Articles._id}')">Edit</a>`
        }
        articlesmachin.appendChild(ok)
    };
}
async function Supprimer(oki) {
    let request = {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json; charset=utf-8',
        },
    }
    let response = await fetch(`http://127.0.0.1:4529/deleteArticles/${oki}`, request)
    window.location.href = `../Scroll-Page/Scroll.html`
}


async function editer(oki) {
    localStorage.setItem('Article', oki)
}


gethis()


