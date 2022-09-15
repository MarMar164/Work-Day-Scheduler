
let today = moment().format('MMMM Do YYYY');
console.log(today);

let Time = moment().format('h:mm:ss a')
console.log(Time);

let currentEl = document.querySelector("#currentDay")
currentEl.textContent = today



// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

//     if () {
//         document.querySelector("tbody tr")[0].dataset.hour > moment().hour() 

//         past
//     }
//     else if () {
//         document.querySelector("tbody tr")[0].dataset.hour > moment().hour()
        
//         present
//     }
//     else (){
//         document.querySelector("tbody tr")[0].dataset.hour == moment().hour()

//         future

//     }

// }