async function getAllUser() {
    let response = await fetch('http://127.0.0.1:4529/getAllUsers')
    let main = await response.json()
    let articlesmachin = document.querySelector('.main')


    for(const user of main ) {
        console.log(user.isActive)
    let div = document.createElement('div')
        div.classList.add('poste1')

        div.innerHTML = `<p class="h1">${user._id}</p>
        <img src="${user.firstName}">
        <p class="descript">${user.lastName}</p>
        <p class="location">${user.email}</p>
        <p class="price">${user.isActive}</p>
        <button class="ban" onclick="ban('${user._id}')">Ban</button>`
    }
        articlesmachin.appendChild(div)
    }
    getAllUser()
