
let data;
data = properties;

const parentDiv = document.getElementById("data");
let i;
for (i = 0; i < 4; i++) {
    const content = document.createElement("div");
    content.classList.add("property");
    content.innerHTML = `
    
    <div class="heading">
      <button class="compare">Pick for comparison</button>
      <h3>${data[i].name}</h3>
      <h2>${data[i].prize_czk.toLocaleString()},-</h2>

      <div class="photo">
        <img src=${data[i].images[0]} alt="${data[i].name_extracted}">
      </div>

      <div class="location">
        <h4>${data[i].locality}</h4>
      </div>

      <div class="description">
        <table class="table">
          <tbody class="table__body">

            <tr class="table__row">
              <th class="table__row__title">Land area</th>
              <td class="table__row__data">${data[i].land_area} m2</td>
            </tr>

            <tr class="table__row">
              <th class="table__row__title">Property area</th>
              <td class="table__row__data">${data[i].building_area} m2</td>
            </tr>
            
            <tr class="table__row">
              <th class="table__row__title">Property condition</th>
              <td class="table__row__data">${data[i].is_new[true] ? 'very good' : 'good'}</td>
            </tr>

            <tbody class="table__body">
              <tr class="table__row">
                <th class="table__row__title">Surrounding</th>
                <td class="table__row__data">
    
                  <ul class="list">

                    ${data[i].locality_labels["drugstore"] ? `<li class="list__item"> Drugstore </li>` : ''}

                    ${data[i].locality_labels["school"] ? `<li class="list__item"> School </li>` : ''}

                    ${data[i].locality_labels["kindergarten"] ? `<li class="list__item"> Kindergarten </li>` : ''}

                    ${data[i].locality_labels["post_office"] ? `<li class="list__item"> Post office </li>` : ''}

                    ${data[i].locality_labels["vet"] ? `<li class="list__item"> Vet </li>` : ''}

                    ${data[i].locality_labels["restaurant"] ? `<li class="list__item"> Restaurant </li>` : ''}

                    ${data[i].locality_labels["bus_public_transportation"] ? `<li class="list__item"> Public transportation</li>` : ''}

                    ${data[i].locality_labels["train"] ? `<li class="list__item"> Train </li>` : ''}

                    ${data[i].locality_labels["atm"] ? `<li class="list__item"> ATM </li>` : ''}

                    ${data[i].locality_labels["sports"] ? `<li class="list__item"> Sports </li>` : ''}

                  </ul>
    
                </td>
              </tr>
            </tbody>
          

          </tbody>
        </table>
      <div>
    </div>

    `
    parentDiv.appendChild(content);
};

const comparisonTool = document.querySelector('.comparison-tool');
const comparisonItem = document.querySelector('.description');
const comparisonBtn = document.querySelector('.compare');

comparisonBtn.addEventListener('click', () => {
  comparisonTool.appendChild(comparisonItem);
})