async function CreatePost() {
  let title = document.querySelector(".title").value;
  let image = document.querySelector(".Img").value;
  let location = document.querySelector(".location").value;
  let price = document.querySelector(".price").value;
  let description = document.querySelector(".message").value;
  let error = document.querySelector(".error");

  let addArticles = {
    title: title,
    image: image,
    description: description,
    location: location,
    price: price,
    userid: localStorage.getItem("session"),
  };
  let request = {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(addArticles),
  };

  if (title === "") {
    error.innerHTML = "Missing Field";
  }
  if (image === "") {
    error.innerHTML = "Missing Field";
  }
  if (description === "") {
    error.innerHTML = "Missing Field";
  }
  if (location === "") {
    error.innerHTML = "Missing Field";
  }
  if (price === "") {
    error.innerHTML = "Missing Field";
  }
  let apiRequest = await fetch("http://127.0.0.1:4529/addArticles", request);
  let reponse = await apiRequest;
  let roleUser = localStorage.getItem("role");
  if (reponse.status === 200) {
    if (roleUser === "admin") {
      window.location.href = "../admin/admin.html";
    } else {
      window.location.href = "../Scroll-Page/Scroll.html";
    }
  } else {
    error.innerHTML = "Demerde toi c'est pas bon";
  }
}
