async function addArtciles() {
    let title = document.querySelector('.title')
    let image = document.querySelector('.ImageUrl')
    let description = document.querySelector('.text-description')
    let location = document.querySelector('.location')
    let price = document.querySelector('.price')

    let newArticles = {
        title: title,
        image : image,
        description: description,
        location: location,
        price: price
    }

    let request = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(newArticles)
    }

    let apiRequest = await fetch('http://127.0.0.1:4529/register', request)
    let reponse = await apiRequest
    console.log(reponse)

    }