let city = "Paris";
let key = "f73bb113e6566e1e9934a196bc90d7b6";
const url = `https://api.openweathermap.org/data/2.5/weather?q=[city]&appid=${key}&units=metric`;

getTemperature(city);

let btn = document.querySelector("#changer");

btn.addEventListener("click", () => {
  city = prompt("Quelle ville souhaitez-vous consulter ?");
  getTemperature(city);
});

async function getTemperature(city) {
  const replacedUrl = url.replace("[city]", city);

  const request = await fetch(replacedUrl, {
    method: "GET",
  });

  if (request.ok) {
    let data = await request.json();
    document.querySelector("#ville").textContent = data.name;
    document.querySelector("#temperature_label").textContent = data.main.temp;
  } else {
    alert("Un problème est survenu, merci de revenir plus tard.");
  }
}
