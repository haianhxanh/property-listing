// Fetching all Properties from API or JSON object and store them into Variable "data"
let data;
data = properties.slice(properties.length-20, properties.length); // select only last 20 properties

const parentDiv = document.getElementById("data");
let i;

// Map through and display the 20 latest properties
for (i = 0; i < data.length; i++) {
    const content = document.createElement("div");
    content.classList.add("property");
    content.innerHTML = `
    <button class="btn-${data[i].id}">Pick for comparison</button>

    <div class="item-body id-${data[i].id}">

      <div class="heading">
        <p>${data[i].name}</p>
        <h4>${data[i].prize_czk.toLocaleString()},-</h4>

      <div> 


      <div class="item-main">
        <div class="item-overview">
  
          <small>ID: ${data[i].id}</small> 
  
          <div class="photo">
      
            <img src=${data[i].images[0]} alt="${data[i].name_extracted}">
  
          </div>
  
          <p>${data[i].locality}</p>
  
        </div>
  
  
        <div class="description description-${data[i].id} hide">
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
    </div> 

    `
    parentDiv.appendChild(content);
};

const comparisonItem1 = document.querySelector('.comparison__item__1');
const comparisonItem2 = document.querySelector('.comparison__item__2');
// const comparisonText = document.querySelector('.comparison-text');
const clearAllBtn = document.querySelector('.clear-all-btn');

// if ((comparisonItem1.innerHTML == '') || (comparisonItem2.innerHTML == '')) {
//   clearAllBtn.innerHTML = 'Select from our listing to compare';
// } else {
//   clearAllBtn.innerHTML = 'Clear All' ;
// }

for (i = 0; i < data.length; i++) {
  let comparisonItem = document.querySelector(`.id-${data[i].id}`).cloneNode(true);
  const comparisonBtn = document.querySelector(`.btn-${data[i].id}`);
  // const description = document.querySelector(`.description-${data[i].id}`);

  // comparisonBtn.forEach( function(Btn) {
    comparisonBtn.addEventListener('click', () => {

      if (comparisonItem1.innerHTML == '') {
        comparisonItem1.appendChild(comparisonItem);
        const displayItem1 = document.querySelector('.comparison__item__1').querySelector('.description');
        displayItem1.classList.remove('hide');
        clearAllBtn.innerHTML = 'Clear All' ;
      } else if (comparisonItem2.innerHTML == '') {
        comparisonItem2.appendChild(comparisonItem)
        const displayItem2 = document.querySelector('.comparison__item__2').querySelector('.description');
        displayItem2.classList.remove('hide');
        clearAllBtn.innerHTML = 'Clear All' ;
      }
    })
  // })
}

clearAllBtn.addEventListener('click', () => {
  comparisonItem1.innerHTML = '';
  comparisonItem2.innerHTML = '';
  clearAllBtn.innerHTML = 'Select from our listing to compare';
})


