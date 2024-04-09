async function mastermind() { 
    let title = document.querySelector('.title').value
let image = document.querySelector('.Img').value
let location = document.querySelector('.location').value
let price = document.querySelector('.price').value
let description = document.querySelector('.message').value
    let editArticle = {
        title : title,
        image : image,
        description : description,
        location : location,
        price : price
    }
    let request = {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(editArticle)
    }
    let idarticle = localStorage.getItem('Article')
    let response = await fetch(`http://127.0.0.1:4529/editArticle/${idarticle}`, request)
     window.location.href = '../Scroll-Page/Scroll.html'
    localStorage.removeItem('Article')
}
