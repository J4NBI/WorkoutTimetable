const top = document.getElementById("top");
const dailyBtn = document.getElementById("daily-btn");
const weeklyBtn = document.getElementById("weekly-btn");
const monthlyBtn = document.getElementById("monthly-btn");

let data = [];

// Fetch JSON
fetch("./data.json")
  .then((response) => response.json())
  .then((json) => {
    data = json;

    // ✅ Erst hier ist data verfügbar
    day();

    // ✅ Event Listener auch hier setzen, damit sie auf gültige Daten zugreifen
    dailyBtn.addEventListener("click", () => day());
    weeklyBtn.addEventListener("click", () => week());
    monthlyBtn.addEventListener("click", () => month());
  })
  .catch((error) => console.error("Fehler beim Laden der Daten:", error));

// ⛔ NICHT schon hier day() oder addEventListener aufrufen!

function day() {
  top.innerHTML = "";
  data.forEach((i) => {
    top.innerHTML += `
      <div class="card">
        <div class="work-head" id="${i.title.toLowerCase()}"></div>
        <div class="card-head">
          <h2>${i.title}</h2>
          <button>...</button>
        </div>
        <div class="body-content">
          <h3>${i.timeframes.daily.current}</h3>
          <p>Last day ${i.timeframes.daily.previous}</p>
        </div>
      </div>
    `;
  });
}

function week() {
  top.innerHTML = "";
  data.forEach((i) => {
    top.innerHTML += `
      <div class="card">
        <div class="work-head" id="${i.title.toLowerCase()}"></div>
        <div class="card-head">
          <h2>${i.title}</h2>
          <button>...</button>
        </div>
        <div class="body-content">
          <h3>${i.timeframes.weekly.current}</h3>
          <p>Last week ${i.timeframes.weekly.previous}</p>
        </div>
      </div>
    `;
  });
}

function month() {
  top.innerHTML = "";
  data.forEach((i) => {
    top.innerHTML += `
      <div class="card">
        <div class="work-head" id="${i.title.toLowerCase()}"></div>
        <div class="card-head">
          <h2>${i.title}</h2>
          <button>...</button>
        </div>
        <div class="body-content">
          <h3>${i.timeframes.monthly.current}</h3>
          <p>Last month ${i.timeframes.monthly.previous}</p>
        </div>
      </div>
    `;
  });
}
