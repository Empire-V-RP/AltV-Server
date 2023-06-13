import * as alt from "alt-client";

let webview = null;

const data = {
  show: true,
  car: false,
  id: 0,
  job: "Arbeitslos",
  jobgrade: "ALG2",
  cash: 0,
  hunger: 0,
  thirst: 0,
  speed: 0,
  fuel: 0,
  kilometers: 0,
};

let money = null;
let job = null;
let rank = null;
let lastPosition = null;

alt.onServer('moneyResponse', (receivedMoney) => {
  money = receivedMoney;
});

alt.onServer('jobResponse', (receivedJob) => {
  job = receivedJob;
});

alt.onServer('rankResponse', (receivedRank) => {
  rank = receivedRank;
});

alt.emitServer('getMoney'); // Request money value from the server
alt.emitServer('getJob'); // Request job value from the server
alt.emitServer('getRank'); // Request rank value from the server

function updateValues() {
  alt.emitServer('getMoney'); // Request money value from the server
  alt.emitServer('getJob'); // Request job value from the server
  alt.emitServer('getRank'); // Request rank value from the server
}

setInterval(updateValues, 1000); // Update values every second

function startHUD() {
  webview = new alt.WebView("http://resource/client/hud/ui.html");
  webview.focus();
}

function updateHUD(data) {
  if (webview !== null) {
    webview.emit("updateHUD", data);
  } else {
    startHUD();
  }
}


function getFuelLevel() {
  // Berechnung des Kraftstoffniveaus als Prozentsatz
  const fuelConsumed = Math.floor(data.kilometers / 0.500) * 1;
  const remainingFuel = 100 - fuelConsumed;
  return Math.max(0, Math.min(100, remainingFuel));
}

alt.everyTick(() => {
  let moneyText = money !== null ? money.toString() : 'null';
  let jobText = job !== null ? job : 'null';
  let rankText = rank !== null ? rank : 'null';

  const player = alt.Player.local;
  if (player.vehicle !== null) {
    data.car = true;
    data.show = true;
    data.id = player.scriptID;
    data.job = jobText;
    data.jobgrade = rankText;
    data.cash = moneyText;
    data.hunger = 0;
    data.thirst = 0;
    data.fuel = getFuelLevel();
    data.speed = Math.round(player.vehicle.speed * 3.6);
    data.kilometers += data.speed / 100000;
    data.kilometers = Number(data.kilometers.toFixed(3)); // Begrenzt auf 3 Nachkommastellen
    
    // Motor ausschalten, wenn der Kraftstoff auf 0% fällt
    if (data.fuel <= 0) {
      player.vehicle.engine = false;
    }
  } else {
    data.car = false;
    data.show = true;
    data.id = player.scriptID;
    data.job = jobText;
    data.jobgrade = rankText;
    data.cash = moneyText;
    data.hunger = 0;
    data.thirst = 0;
  }
  updateHUD(data);
});

alt.onServer("startHUD", startHUD);