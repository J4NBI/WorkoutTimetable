import "./styles.css";
const data = require("./data.json");

const top = document.getElementById("top");
const dailyBtn = document.getElementById("daily-btn");
const weeklyBtn = document.getElementById("weekly-btn");
const monthlyBtn = document.getElementById("monthly-btn");

day();

dailyBtn.addEventListener("click", day);
weeklyBtn.addEventListener("click", week);
monthlyBtn.addEventListener("click", month);

function day() {
  top.innerHTML = "";
  data.forEach((i) => {
    top.innerHTML += `
        <div class="card">
                  <div class="work-head" id="${i.title.toLocaleLowerCase()}"></div>
                  <div class="card-head">
                    <h2>${i.title}</h2>
                    <button>...</button>
                  </div>
                  <div class="body-content">
                  <h3 id="${i.title.toLocaleLowerCase()}-cur">${
      i.timeframes.daily.current
    }</h3>
                  <p id="${i.title.toLocaleLowerCase()}-pre">Last day ${
      i.timeframes.daily.previous
    }</p> </div>
                </div>
        `;
  });
}

function week() {
  top.innerHTML = "";
  data.forEach((i) => {
    top.innerHTML += `
          <div class="card">
                    <div class="work-head" id="${i.title.toLocaleLowerCase()}"></div>
                    <div class="card-head">
                      <h2>${i.title}</h2>
                      <button>...</button>
                    </div>
                    <div class="body-content">
                    <h3 id="${i.title.toLocaleLowerCase()}-cur">${
      i.timeframes.weekly.current
    }</h3>
                    <p id="${i.title.toLocaleLowerCase()}-pre">Last week ${
      i.timeframes.weekly.previous
    }</p></div>
                  </div>
          `;
  });
}

function month() {
  top.innerHTML = "";
  data.forEach((i) => {
    top.innerHTML += `
            <div class="card">
                      <div class="work-head" id="${i.title.toLocaleLowerCase()}"></div>
                      <div class="card-head">
                        <h2>${i.title}</h2>
                        <button>...</button>
                      </div>
                      <div class="body-content">
                      <h3 id="${i.title.toLocaleLowerCase()}-cur">${
      i.timeframes.monthly.current
    }</h3>
                      <p id="${i.title.toLocaleLowerCase()}-pre">Last month ${
      i.timeframes.monthly.previous
    }</p></div>
                    </div>
            `;
  });
}
