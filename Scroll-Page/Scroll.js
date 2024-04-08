let Create = document.querySelector('.create')

Create.addEventListener('click', () => {
    window.location.href = "../CreatePoste/Create.html"
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
        `<p>${Articles.title}</p>
        <img src="${Articles.image}">
        <p>${Articles.description}</p>
        <p>${Articles.location}</p>
        <p>${Articles.price}</p>`
        articlesmachin.appendChild(ok)
    });
}
gethis()