/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
let clickCount = 0;

function incrementCounter() {
  clickCount++;
  updateCounter();
}

function updateCounter() {
  const counterElement = document.getElementById('btn__state');
  counterElement.textContent = clickCount;
}

document.getElementById('btn__element').addEventListener('click', incrementCounter);