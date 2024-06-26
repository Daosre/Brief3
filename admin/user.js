let LogOut = document.querySelector(".LogOut");

LogOut.addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "../Accueil/Accueil.html";
});

async function getAllUser() {
  let response = await fetch("http://127.0.0.1:4529/getAllUsers");
  let main = await response.json();
  let machin = document.querySelector(".main");

  for (const user of main) {
    let posty = document.createElement("div");
    posty.classList.add("poste1");
    posty.innerHTML = `<p class="h1">${user._id}</p>
        <p class="${user.firstName}">
        <p class="descript">${user.lastName}</p>
        <p class="location">${user.email}</p>
        <p class="price">${user.isActive}</p>
        <button class="ban" onclick="ban('${user._id}')">Ban</button>`;
    machin.appendChild(posty);
  }
}

async function ban(userId) {
  let isActive = document.querySelector(".ban");
  let banUsers = {
    isActive: isActive,
  };
  let request = {
    method: "PATCH",
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(banUsers),
  };
  let pouletoman = await fetch(
    `http://127.0.0.1:4529/banUsers/${userId}`,
    request
  );
  let main = await pouletoman.json();
  console.log(main);

  isActive.addEventListener("click", () => {
    main.isActive = false;
  });
}
getAllUser();
