const form = document.querySelector("form");

form.addEventListener("submit", (e) => renderUser(e));

//----------------Fetch Functions

function renderUser(userName) {
  userName.preventDefault();

  const URL_USER = `https://api.github.com/search/users?q=${userName.target.search.value}`;

  fetch(URL_USER)
    .then((resp) => resp.json())
    .then((dataJson) => displayProfile(dataJson))
    .catch((error) => console.log(`Something went here : ${error}`));
}

function displayProfile(userData) {
  const ul = document.getElementById("user-list");
  console.log(userData);

  const itemsData = userData.items;

  makeEl = (e) => document.createElement(e);
  itemsData.forEach((e) => {
    const li = makeEl("li");
    const div = makeEl("div");
    const img = makeEl("img");
    const h3 = makeEl("h3");
    const p = makeEl("p");
    const a = makeEl("a");

    p.appendChild(a);
    // Using filter here can really help me a bit checking inside of my object
    a.href = e.avatar_url;
    p.innerHTML = e.html_url;

    h3.textContent = e.login;

    img.src = e.avatar_url;
    div.append(li);
    li.append(img, h3, p);
    ul.append(div);
  });
}

// Create My profiles ready to display
