//api.github.com/users/victoriarainc

// TODO:
// Want to pull -
//   name
//   github URL
//   email
//   company
//   website
//   bio

function reqListener () {
  let data = JSON.parse(this.responseText);
  let name = `${data.name}`;
  let url = `${data.html_url}`;
  let email = `${data.email}`;
  let company = `${data.company}`;
  let website = `${data.blog}`;
  let bio = data.bio;
  let pic = data.avatar_url;

  let template = `

  `

  let wrapper = document.querySelector('.wrapper');
  wrapper.innerHTML = template;
}

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/victoriarainc");
req.addEventListener("load", reqListener);
req.send();
