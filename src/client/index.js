import { checkForName } from "./js/nameChecker";
import { handleSubmit } from "./js/formHandler";
import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";
const APIKey = `GDkGAjfuPAc2OUam6PwuGuphVZfLla3ckCdZhdgrlfI`;
const baseUrl = `https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max`;

console.log(checkForName);
var image;
var img = document.querySelector("#img");
alert("I EXIST");
console.log("CHANGE!!");
function buttonPress() {
  const det = fetch(
    `https://api.unsplash.com/photos/random/?client_id=GDkGAjfuPAc2OUam6PwuGuphVZfLla3ckCdZhdgrlfI`
  )
    .then((res) => {
      console.log(res);

      return res.json();
    })
    .then((data) => {
      console.log(data);
      img.innerHTML = `<img src = "${data.urls.small}">`;
    });
  console.log(det);
}
document.querySelector("#btn").addEventListener("click", buttonPress);
// .then(function (res) {
//   document.getElementById("results").innerHTML = res.message;
// });
export { checkForName, handleSubmit };
