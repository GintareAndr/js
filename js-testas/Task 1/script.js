/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

  document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const outputDiv = document.getElementById('output');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const kg = document.getElementById('search').value;
 
        if (isNaN(kg)) {
        console.error('Please enter a valid weight in kilograms.');
        return;
        }
 
        const lb = kg * 2.2046;
        const g = kg / 0.001;
        const oz = kg * 35.274;


        outputDiv.innerHTML = `
            <p>${lb.toFixed(2)}</p>
            <p>${g.toFixed(2)}</p>
            <p>${oz.toFixed(2)}</p>
        `;
    });
});