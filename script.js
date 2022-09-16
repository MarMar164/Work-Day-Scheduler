let today = moment().format('MMMM Do YYYY');
console.log(today);

let time = moment().format('h:mm:ss a')
console.log(time);

let currentEl = document.querySelector("#currentDay")
currentEl.textContent = today

let trsColor = document.querySelectorAll("tbody tr")


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

