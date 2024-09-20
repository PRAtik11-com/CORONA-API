const Dustbin = document.getElementById("tbody");
// console.log(Dustbin);
let productdata = [];
function calls() {
  fetch("http://localhost:3000/data").
  then((res) => {
    // console.log(res.json());  
    return res.json();
  }).then((datas) => {
    console.log("Received data:", datas);
    productdata = datas.regional;
    custom(productdata);
  }).catch((Error) => {
    console.log("Error",Error);
  })
}

function custom(datas) {
  let striks = datas.map((el) => {
    return Tabledata(el.loc,el.confirmedCasesIndian,el.confirmedCasesForeign,el.discharged,el.deaths,el.totalConfirmed)
  })
  Dustbin.innerHTML = striks.join('')
}

function Tabledata(loc,confirmedCasesIndian,confirmedCasesForeign,discharged,deaths,totalConfirmed) {
  return `
      <tr>
          <td>${loc}</td>
          <td>${confirmedCasesIndian}</td>
          <td>${confirmedCasesForeign}</td>
          <td>${discharged}</td>
          <td>${deaths}</td>
          <td>${totalConfirmed}</td>
      </tr>          
  `
}
calls()
const fineds = document.getElementById("tbodys");
// console.log(fineds);
let chamber = [];
function matches() {
  fetch("http://localhost:3000/data").
  then((res) => {
    // console.log(res.json());  
    return res.json();
  }).then((data) => {
    console.log("Received data:", data);
    chamber = data.unofficialsummary;
    fight(chamber);
  }).catch((Error) => {
    console.log("Error",Error);
  })
}

function fight(data) {
  let wars = data.map((el) => {
    return force(el.source,el.total,el.recovered,el.deaths,el.active)
  })
  fineds.innerHTML = wars
}

function force(source,total,recovered,deaths,active) {
  return `
      <tr>
          <td>${source}</td>
          <td>${total}</td>
          <td>${recovered}</td>
          <td>${deaths}</td>
          <td>${active}</td>
      </tr>          
  `
}
matches()


// const Dustbin = document.getElementById('container');
// const send = document.getElementById('sub');
// let currD = 0;
// let infos = [];

// fetch("http://localhost:3000/data")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     infos = data.regional;
//     check(infos[currD]); 
//   })
//   .catch((err) => {
//     console.log("Error:", err);
//   });


// send.addEventListener('click', () => {
//   currD = (currD + 1) % infos.length; 
//   check(infos[currD]); 
// });

// function check(data) {
//   const pros = `
//   <table class="table table-striped table-hover">
//             <thead>
//                 <tr>    
//                   <th scope="col">Loc</th>
//                   <th scope="col">confirmedCasesIndian</th>
//                   <th scope="col">confirmedCasesForeign</th>
//                   <th scope="col">discharged</th>
//                   <th scope="col">deaths</th>
//                   <th scope="col">totalConfirmed</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                     <td>${data.loc}</td>
//                     <td>${data.confirmedCasesIndian}</td>
//                     <td>${data.confirmedCasesForeign}</td>
//                     <td>${data.discharged}</td>
//                     <td>${data.deaths}</td>
//                     <td>${data.totalConfirmed}</td>
//                 </tr>   
//               </tbody>         
//         </table>
//   `;
//   Dustbin.innerHTML += pros; 
// }
