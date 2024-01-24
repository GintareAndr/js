/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", function() {
  fetch("./cars.json")
    .then(response => response.json())
    .then(cars => {
      const output = document.getElementById("output");
      output.innerHTML = "";

      cars.forEach((car) => {
        const brandCard = document.createElement("div");
        const brandName = document.createElement("h2"); // Sukurkite naują elementą brandName
        brandName.textContent = car.brand; // Pridėkite brandName turinį

        brandCard.appendChild(brandName);

        const modelList = document.createElement("ul");
        car.models.forEach((model) => {
          const listItem = document.createElement("li");
          listItem.textContent = model;
          modelList.appendChild(listItem);
        });

        brandCard.appendChild(modelList);
        output.appendChild(brandCard);
      });
    });
});