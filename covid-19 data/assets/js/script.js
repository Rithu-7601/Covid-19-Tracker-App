// https://api.covid19api.com/summary

const select = document.getElementById("select");
const submit = document.getElementById("submit");

submit.addEventListener("click", fetchData);
let container = [];
function fetchData() {
  fetch("https://api.covid19api.com/summary")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.Global);
      if (select.value === "Global") {
        container = data.Global;
        return;
      } else {
        data.Countries.map((country) => {
          if (select.value.toLowerCase() === country.Country.toLowerCase()) {
            console.log(country);
            container = country;
            return;
          }
        });
      }
    })
    .then(() => {
      document.getElementById("stat").innerHTML = select.value;
      document.getElementById("N-rec").innerHTML = container.NewRecovered;
      document.getElementById("T-rec").innerHTML = container.TotalRecovered;
      document.getElementById("N-conf").innerHTML = container.NewConfirmed;
      document.getElementById("T-conf").innerHTML = container.TotalConfirmed;
      document.getElementById("N-death").innerHTML = container.NewDeaths;
      document.getElementById("T-death").innerHTML = container.TotalRecovered;
    })
    .catch((err) => console.log(err));
}
// const initFetch = () => fetchData();
