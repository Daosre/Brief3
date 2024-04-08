async function handleregister() {
    let firstName = document.querySelector('.Name').value
    let lastName = document.querySelector('.LastName').value
    let email = document.querySelector('.Mail').value
    let password = document.querySelector('.Password').value

    let newUser = {
        firstName: firstName,
        lastName : lastName,
        email: email,
        password: password
    }

    let request = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(newUser)
    }

    let apiRequest = await fetch('http://127.0.0.1:4529/register', request)
    let reponse = await apiRequest
    console.log(reponse)
         setTimeout(() => {
             window.location.href="../Scroll-Page/Scroll.html"
         }, 3000)
    }

    async function handleLogin() {
        let email = document.querySelector('.Maiil').value
        let password = document.querySelector('.Passsword').value
        let error = document.querySelector('.error')

        let LogUser = {
            email: email,
            password: password
        }

        let request = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(LogUser)
        }          
        let apiRequest = await fetch('http://127.0.0.1:4529/login', request)
            let reponse = await apiRequest
            if(reponse.status === 200) {
                window.location.href = '../Scroll-Page/Scroll.html'
            } else {
                error.innerHTML = "Demerde toi c'est pas bon"
            }
    } 
    