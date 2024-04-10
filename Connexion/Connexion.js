let id;
let role;
async function handleregister() {
  let firstName = document.querySelector(".Name").value;
  let lastName = document.querySelector(".LastName").value;
  let email = document.querySelector(".Mail").value;
  let password = document.querySelector(".Password").value;
  let error = document.querySelector(".error1");

  let newUser = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  };

  let request = {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(newUser),
  };

  let apiRequest = await fetch("http://127.0.0.1:4529/register", request);
  let reponse = await apiRequest;
  if (reponse.status === 200) {
    user = await reponse.json();
    console.log(user);
    localStorage.setItem("session", user.id);
    localStorage.setItem("role", user.role);
    window.location.href = "../Scroll-Page/Scroll.html";
  } else {
    error.innerHTML = "Demerde toi c'est pas bon";
  }
}

async function handleLogin() {
  let email = document.querySelector(".Maiil").value;
  let password = document.querySelector(".Passsword").value;
  let error = document.querySelector(".error");

  let LogUser = {
    email: email,
    password: password,
  };
  let request = {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(LogUser),
  };
  //LogIn
  let apiRequest = await fetch("http://127.0.0.1:4529/login", request);
  let reponse = await apiRequest;
  console.log(reponse);
  if (reponse.status === 200) {
    user = await reponse.json();
    localStorage.setItem("session", user.id);
    localStorage.setItem("role", user.role);
    localStorage.setItem("isActive", user.isActive);
    let utilisateur = localStorage.getItem("role");
    let active = localStorage.getItem("isActive");
    if (active != true) {
      window.location.reload();
    }
    if (utilisateur === "user") {
      window.location.href = "../Scroll-Page/Scroll.html";
    } else {
      window.location.href = "../admin/admin.html";
    }
  } else {
    error.innerHTML = "Demerde toi c'est pas bon";
  }
}
