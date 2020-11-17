// Fetching all Properties from API or JSON object and store them into Variable "data"
let data;
data = properties.slice(properties.length-20, properties.length); // select only last 20 properties

const adIds = data.map((adId) => adId.id);
const names = data.map((name) => name.name);
const namesExtracted = data.map((nameExtracted) => nameExtracted.name_extracted);
const prices = data.map((price) => price.prize_czk);
const images = data.map((image) => image.images);
const locations = data.map((location) => location.locality);
const landAreas = data.map((landArea) => landArea.land_area);
const buildingAreas = data.map((buildingArea) => buildingArea.building_area);
const isNew = data.map((isNew) => isNew.is_new);
const locationAmenities = data.map((amenity) => amenity.locality_labels);

const parentDiv = document.getElementById("data");
let i;
// Map through and display the 20 latest properties
for (i = 0; i < data.length; i++) {
  const content = document.createElement("div");
  content.classList.add("property");
  content.innerHTML = `
  <div class="btn"><button class="pick">Pick for comparison</button></div>

  <div class="item" id="${[i]}">

    <div class="item__heading">
      <p>${names[i]}</p>
      <h4 class="data-price">${prices[i].toLocaleString()},-</h4>

    <div> 

    <div class="item__body">
      <div class="item__overview">
        <small>ID: <span class="data-id">${adIds[i]}</span></small> 

        <div class="item__img">
    
          <img class="data-img" src=${images[i][0]} alt="${namesExtracted[i]}">

        </div>

        <p class="data-location">${locations[i]}</p>

      </div>

      <div class="description description-${adIds[i]} hide">
          <table class="table">
            <tbody class="table__body">
  
              <tr class="table__row">
                <th class="table__row__title">Land area</th>
                <td class="table__row__data data-landarea">${landAreas[i]} m2</td>
              </tr>
  
              <tr class="table__row">
                <th class="table__row__title">Property area</th>
                <td class="table__row__data data-buildingarea">${buildingAreas[i]} m2</td>
              </tr>
              
              <tr class="table__row">
                <th class="table__row__title">Property condition</th>
                <td class="table__row__data">${isNew[i][true] ? 'very good' : 'good'}</td>
              </tr>
  
              <tbody class="table__body">
                <tr class="table__row">
                  <th class="table__row__title surrounding">Surrounding</th>
                  <td class="table__row__data">
      
                    <ul class="list">
  
                      ${locationAmenities[i]["drugstore"] ? `<li class="list__item"> Drugstore </li>` : ''}
  
                      ${locationAmenities[i]["school"] ? `<li class="list__item"> School </li>` : ''}
  
                      ${locationAmenities[i]["kindergarten"] ? `<li class="list__item"> Kindergarten </li>` : ''}
  
                      ${locationAmenities[i]["post_office"] ? `<li class="list__item"> Post office </li>` : ''}
  
                      ${locationAmenities[i]["vet"] ? `<li class="list__item"> Vet </li>` : ''}
  
                      ${locationAmenities[i]["restaurant"] ? `<li class="list__item"> Restaurant </li>` : ''}
  
                      ${locationAmenities[i]["bus_public_transportation"] ? `<li class="list__item"> Public transportation</li>` : ''}
  
                      ${locationAmenities[i]["train"] ? `<li class="list__item"> Train </li>` : ''}
  
                      ${locationAmenities[i]["atm"] ? `<li class="list__item"> ATM </li>` : ''}
  
                      ${locationAmenities[i]["sports"] ? `<li class="list__item"> Sports </li>` : ''}
  
                    </ul>
      
                  </td>
                </tr>
              </tbody>
  
            </tbody>
          </table>
      <div>
    </div>
  </div> 

  `
  parentDiv.appendChild(content);
};

// comparison tool
const comparisonItem1 = document.querySelector('.comparison__item__1');
const comparisonItem2 = document.querySelector('.comparison__item__2');
const clearAllBtn = document.querySelector('.clear-all');
const compareBtn = document.querySelector('.compare');

let item1_index;
let item2_index;
let item1_price;
let item2_price;
let item1_area;
let item2_area;
let item1_rate;
let item2_rate;
let item1_amenities;
let item2_amenities;
let item1_priceElm;
let item2_priceElm;
let item1_amenitiesElm;
let item2_amenitiesElm;

// button to select a property from the cards
const addToCompareBtn = document.querySelectorAll('.pick');

let a;
for (a = 0; a < data.length; a++) {

  const item = document.querySelectorAll('.item')[a].cloneNode(true);

  // select item and add it to the comparison tool
  addToCompareBtn[a].addEventListener('click', () => {

    if (comparisonItem1.innerHTML == '') {
      comparisonItem1.append(item);
      const displayItem1 = document.querySelector('.comparison__item__1').querySelector('.description');
      displayItem1.classList.remove('hide');
      clearAllBtn.innerHTML = 'Clear All' ;
      item1_priceElm = comparisonItem1.querySelector('.data-price');
      item1_amenitiesElm = comparisonItem1.querySelector('.list');
      item1_index = Number(comparisonItem1.querySelector('.item').getAttribute('id'));
      item1_price = prices[item1_index];
      item1_area = Number(landAreas[item1_index]);
      item1_rate = Math.ceil(item1_price / item1_area);
      item1_amenities = comparisonItem1.querySelector('.list').getElementsByTagName('li').length;
    } else if (comparisonItem2.innerHTML == '') {
      comparisonItem2.append(item);
      const displayItem2 = document.querySelector('.comparison__item__2').querySelector('.description');
      displayItem2.classList.remove('hide');
      clearAllBtn.innerHTML = 'Clear All' ;
      item2_priceElm = comparisonItem2.querySelector('.data-price');
      item2_amenitiesElm = comparisonItem2.querySelector('.list');
      item2_index = Number(comparisonItem2.querySelector('.item').getAttribute('id'));
      item2_price = prices[item2_index];
      item2_area = Number(landAreas[item2_index]);
      item2_rate = Math.ceil(item2_price / item2_area);
      item2_amenities = comparisonItem2.querySelector('.list').getElementsByTagName('li').length;
    }

    compareBtn.classList.remove('nothing-to-compare');

  })

}

// button to compare some features of selected properties
compareBtn.addEventListener('click', () => {
  item1_priceElm.innerHTML += `<div style="color: red"> Price per m2: ${item1_rate.toLocaleString()} CZK </div>`;
  item2_priceElm.innerHTML += `<div style="color: red"> Price per m2: ${item2_rate.toLocaleString()} CZK </div>`;
  item1_amenitiesElm.innerHTML = `<li style="color:red; font-weight: bold;">${item1_amenities} amenities in the surrounding</li> ${item1_amenitiesElm.innerHTML}`;
  item2_amenitiesElm.innerHTML = `<li style="color:red; font-weight: bold;">${item2_amenities} amenities in the surrounding</li> ${item2_amenitiesElm.innerHTML}`;

  if (item1_rate < item2_rate) {
    item1_priceElm.classList.add('better');
    item1_priceElm.innerHTML += `<div>Better price value!</div>`;
  } else {
    item2_priceElm.classList.add('better');
    item2_priceElm.innerHTML += `<div>Better price value!</div>`;
  }

})

// button to offer options to either start selecting properties, or to clear the comparison tool if the users want to start over
clearAllBtn.addEventListener('click', () => {
  location.reload();
  comparisonItem1.innerHTML = '';
  comparisonItem2.innerHTML = '';
  
  clearAllBtn.innerHTML = 'Select from our listing to compare';
  compareBtn.classList.add('nothing-to-compare');
})

// fixed button at the bottom of the page enabling scrolling back to the top
const scrollBtn = document.querySelector('.scroll');
scrollBtn.addEventListener('click', () => {
  window.scrollTo(0, 100);
})