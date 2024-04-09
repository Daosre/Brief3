async function mastermind() {
    let request = {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json; charset=utf-8',
        },
    }
    let idarticle = localStorage.getItem('Article')
    console.log(idarticle)
    let response = await fetch(`http://127.0.0.1:4529/editArticle/${idarticle}`, request)
    console.log(response)
    // window.location.href = '../Scroll-Page/Scroll.html'
}
