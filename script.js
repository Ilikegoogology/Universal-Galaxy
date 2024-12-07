let galaxies = 0;
let galaxyGain = 0.01;
let upgrade1Level = 0;
let upgrade2Level = 0;
const upgrade1Cost = 10;
const upgrade2Cost = 25;

function incrementGalaxies() {
    galaxies += galaxyGain * (2 ** upgrade1Level) * (4 ** upgrade2Level);
    document.getElementById("galaxyCount").innerText = galaxies.toFixed(2);
}

function buyUpgrade1() {
    if (galaxies >= upgrade1Cost) {
        galaxies -= upgrade1Cost;
        upgrade1Level += 1;
        document.getElementById("upgrade1Level").innerText = upgrade1Level;
    }
}

function buyUpgrade2() {
    if (galaxies >= upgrade2Cost) {
        galaxies -= upgrade2Cost;
        upgrade2Level += 1;
        document.getElementById("upgrade2Level").innerText = upgrade2Level;
    }
}

setInterval(incrementGalaxies, 150);