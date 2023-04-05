let coin = 0;
let amountPerClick = 1;

function addCounter(){
    coin += amountPerClick;
    document.getElementById("counter").textContent = coin;

    const x = event.pageX;
    const y = event.pageY;
    const span = document.createElement('span');
    span.classList.add('floating-number');
    span.textContent = `+${amountPerClick}`;
    span.style.left = `${x - span.offsetWidth / 2}px`;
    span.style.top = `${y - span.offsetHeight / 2}px`;
    document.body.appendChild(span);
    coin += amountPerClick;
    document.getElementById("counter").textContent = coin;

    setTimeout(() => {
        span.remove();
    }, 1000);
}

let alatCounter = 0;
let addAlatCoin = 1;
let alatCoinstoAdd = 1;
let alatInterval;

// upgrade alat
document.getElementById("upgradeAlat").addEventListener("click", function(){
    if (coin >= alatPrice) {
        alatCounter++;
        document.getElementById("upgradeAlatCounter").textContent = "Upgrade alat [ " + alatCounter + " ]";

        clearInterval(alatInterval);
        alatInterval = setInterval(function() {
            for (let i = 0; i < alatCoinstoAdd; i++) {
                setTimeout(function() {
                    coin++;
                    document.getElementById("counter").textContent = coin;
                }, 200 * i);
            }
        }, 5000);
        alatCoinstoAdd = addAlatCoin;
        addAlatCoin++;
        coin -= alatPrice;
        coin = Math.round(coin); 
        counter.textContent = coin; 
        upgradeCost(); 
        hargaUpgradeAlat.textContent = `${alatPrice.toFixed(0)} coins`;
    } else {
        alert('Not Enough Coins!');
    }
});

const counter = document.getElementById('counter');
const upgradeAlatButton = document.getElementById('upgradeAlat');
const upgradeAlatCounter = document.getElementById('upgradeAlatCounter');
const hargaUpgradeAlat = document.getElementById('hargaUpgradeAlat');

let alatPrice = 5;
function upgradeCost(){
    const upgradeCount = parseInt(upgradeAlatCounter.textContent.match(/\d+/)[0]);
    const newUpgradeCount = upgradeCount + 1;
    alatPrice *= 1.3;
    alatPrice = Math.round(alatPrice);
    hargaUpgradeAlat.textContent = `-${alatPrice.toFixed(2)} coins`; 
}


let pegawaiCounter = 0;
let addPegawaiCoin = 5; //nambah berapa
let pegawaiCoinstoAdd = 1; //increment satu2
let pegawaiInterval;

// upgrade pegawai
document.getElementById("rekrutPegawaiButton").addEventListener("click", function(){
    if (coin >= rekrutPegawaiPrice) {
        pegawaiCounter++;
        document.getElementById("rekrutPegawai").textContent = "Rekrut Pegawai [ " + pegawaiCounter + " ]";

        clearInterval(pegawaiInterval);
        pegawaiInterval = setInterval(function() {
            for (let i = 0; i < pegawaiCoinstoAdd; i++) {
                setTimeout(function() {
                    coin++;
                    document.getElementById("counter").textContent = coin;
                }, 200 * i);
            }
        }, 5000);
        pegawaiCoinstoAdd = addPegawaiCoin;
        addPegawaiCoin++;
        coin -= rekrutPegawaiPrice;
        coin = Math.round(coin); 
        counter.textContent = coin; 
        rekrutPegawaiUpgradeCost(); 
        hargaRekrutPegawai.textContent = `${rekrutPegawaiPrice.toFixed(0)} coins`;
        
    }else{
        alert('Not Enough Coins!');
    }
});

const upgradeButton = document.getElementById('upgradeAlat');
const rekrutPegawaiCounter = document.getElementById('rekrutPegawai');
const hargaRekrutPegawai = document.getElementById('hargaRekrutPegawai');

let rekrutPegawaiPrice = 20;//harga
function rekrutPegawaiUpgradeCost(){
    const upgradeCount = parseInt(rekrutPegawaiCounter.textContent.match(/\d+/)[0]);
    const newUpgradeCount = upgradeCount + 1;
    rekrutPegawaiPrice *= 1.3;
    rekrutPegawaiPrice = Math.round(rekrutPegawaiPrice);
    hargaRekrutPegawai.textContent = `${rekrutPegawaiPrice.toFixed(2)} coins`; // Update the display of the new alatPrice
}


let tambahRestoranCounter = 0;
let priceTambahRestoran = 50;

document.getElementById("tambahRestoranButton").addEventListener("click", function(){
    if (coin >= priceTambahRestoran) {
        tambahRestoranCounter++;
        document.getElementById("tambahRestoran").textContent = "Tambah Restoran (" + tambahRestoranCounter + ")";

        coin -= priceTambahRestoran;
        counter.textContent = coin;
        amountPerClick += 1;

        priceTambahRestoran = Math.round(priceTambahRestoran * 1.8); 
        hargaTambahRestoran.textContent = `${priceTambahRestoran} Coins`; 
    } else {
        alert('Not Enough Coins!');
    }
});

const clonePizzaButton = document.getElementById('clonePizzaButton');
const hargaClonePizza = document.getElementById('hargaClonePizza');
const clonePizzaCounter = document.getElementById('clonePizza');

let clonePizzaPrice = 100;
let cloneCounter = 0;
// clone button
document.getElementById("clonePizzaButton").addEventListener("click", function(){
    if (coin >= clonePizzaPrice) {

        pegawaiCoinstoAdd *= 2;
        alatCoinstoAdd *= 2;

        coin -= clonePizzaPrice;
        coin = Math.round(coin);
        counter.textContent = coin;

        cloneCounter++;
        document.getElementById("clonePizza").textContent = "Clone Pizza [ " + cloneCounter + " ]";

        clonePizzaPrice = Math.round(clonePizzaPrice * 1.9); 
        hargaClonePizza.textContent = `${clonePizzaPrice} Coins`; 

    } else {
        alert('Not Enough Coins!');
    }

    function click(event) {
        const template = document.getElementByID('#floating-text-template').content.cloneNode(true);
        const element = template.querySelector('.floating-text') //replace class with yours
        element.style.left = `${event.clientX}px`
        element.style.top = `${event.clientY}px`
        document.appendChild(element);
      }
});
