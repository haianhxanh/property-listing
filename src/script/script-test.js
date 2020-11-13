'use strict';

const parentDiv = document.getElementById("data");

// fetch('https://estate-comparison.codeboot.cz/list.php')
// .then(response => {
//    return response.json();
// })
// .then(data => {

//   properties = data;
//   return properties;
// })

// let i;
// for (i = 0; i < properties.length; i++) {
//   const content = document.createElement("div");
//   content.classList.add("property");
//   content.innerHTML = ` 
  
//   <h1> ${properties[i].building_area}</h1>

//   `
//   parentDiv.appendChild(content);
// } 

// properties.slice(0,4).forEach( p => {
//   const content = document.createElement("div");
//     content.classList.add("property");
//     content.innerHTML = ` 
    
//     <h1 class="area"> ${p.building_area}</h1>

//     `
//     parentDiv.appendChild(content);
// })

// const propertyArea = document.querySelectorAll('.area');
// const area = document.querySelectorAll('.area').value;
// const btn = document.querySelector('.compare');

// btn.addEventListener('click', () => {

//   let i;
//   for (i=0; i < 5; i++) {
//     if (area[i] > 90) {
//       propertyArea.style.color = "red";
//     } else {
//       propertyArea.style.color = "blue";
//     }
//   }

// })


let latestProp1;
let latestProp2;

// latestProp1 = properties.slice(properties.length-2, properties.length-1)[0];

// latestProp2 = properties.slice(properties.length-1, properties.length)[0];


latestProp1 = properties[Math.floor(Math.random() * 100)+26];

latestProp2 = properties[Math.floor(Math.random() * 100)+26];

const content = document.createElement("div");
content.classList.add("property");
content.innerHTML = ` 

<h1 class="area"> ${latestProp1.building_area}</h1>
<button class="latestProp1">Choose for comparison</button>

<h1 class="area"> ${latestProp2.building_area}</h1>

<button class="latestProp2">Choose for comparison</button>

  `
parentDiv.appendChild(content);

const btnCompare1 = document.querySelector('.latestProp1')

const btn = document.querySelector('.compare');

const propertyArea = document.querySelectorAll('.area');

btn.addEventListener('click', () => {
  
    if ( parseInt(latestProp1.building_area, 10) > parseInt(latestProp2.building_area, 10)) {
      propertyArea[0].style.color = "blue";
      propertyArea[1].style.color = "red";
    } else {
      propertyArea[0].style.color = "red";
      propertyArea[1].style.color = "blue";
    }
})