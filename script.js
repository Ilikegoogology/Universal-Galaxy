// Everything at the initial input 
let galaxies = 0;
let galaxyGain = 0.1; // Updated galaxy gain
let upgrade1Level = 0;
let upgrade2Level = 0;
const upgrade1Cost = 10;
const upgrade2Cost = 25;

// Function to generate a random number between 1/64 and 1.4
function getRandomMultiplier() {
    return Math.random() * (1.4 - (1/64)) + (1/64);
}

// How much galaxy increments 
function incrementGalaxies() {
    let multiplier = 1;
    if (upgrade1Level <= 10) {
        multiplier *= getRandomMultiplier() ** upgrade1Level;
    } else {
        multiplier *= (getRandomMultiplier() ** 10) / (2_147_483_648 + galaxies);
    }
    multiplier *= 1.1 ** upgrade2Level;

    galaxies += galaxyGain * multiplier;
    document.getElementById("galaxyCount").innerText = galaxies.toFixed(2);
}

// Upgrades
function buyUpgrade1() {
    if (galaxies >= upgrade1Cost) {
        galaxies -= upgrade1Cost;
        upgrade1Level += 1;
        document.getElementById("upgrade1Level").innerText = `Level: ${upgrade1Level} (Currently ${Math.round(getRandomMultiplier() ** Math.min(upgrade1Level, 10) * 100) / 100})`;
    }
}

function buyUpgrade2() {
    if (galaxies >= upgrade2Cost) {
        galaxies -= upgrade2Cost;
        upgrade2Level += 1;
        document.getElementById("upgrade2Level").innerText = `Level: ${upgrade2Level} (Currently x${Math.round(1.1 ** upgrade2Level * 100) / 100})`;
    }
}

// How much time it takes to increment 
setInterval(incrementGalaxies, 15);
