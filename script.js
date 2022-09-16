
//moment storage 
let today = moment().format('MMMM Do YYYY');
console.log(today);

let time = moment().format('h:mm:ss a')
console.log(time);

let currentEl = document.querySelector("#currentDay")
currentEl.textContent = today

//where the color will be applyed
let trsColor = document.querySelectorAll("tbody tr")

//comparison and where color gets applyed 
for (let i = 0; i < trsColor.length; i++) {
console.log(moment().hour())
    console.log(trsColor[i].dataset.hour);
    if (trsColor[i].dataset.hour < moment().hour()) {
        trsColor[i].classList.add("past")
    }

    else if (trsColor[i].dataset.hour > moment().hour()) {
        trsColor[i].classList.add("future")
    }
    else {
    trsColor[i].classList.add("present")
    }
}

