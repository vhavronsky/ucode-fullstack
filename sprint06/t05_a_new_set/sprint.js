const url = "http://127.0.0.1:3000/";
const divd = document.querySelector(".info-form");
const form = document.querySelector("#form");
function parses(evt) {
  const formdata = new FormData(form);
  let data = {};
  formdata.forEach((value, key) => {
    data[key] = value;
    console.log(data);
  });
  evt.preventDefault();
  fetch(url, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: data,
  })
    .then((response) => {
      return response.text();
    })
    .then((text) => console.log(text))
    .catch((e) => console.log(e));
}
form.addEventListener("onsubmit", parses, false);