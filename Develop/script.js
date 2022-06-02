// current day: Day, Month Day(th)
// Thu Apr 07 2022 20:55:35 GMT-0700 (Pacific Daylight Time)
// Moment Format: ddd MMM DD YYYY kk:mm:ss zz
var currentDay = document.getElementById("currentDay");
var date = new Date();
var reformDate = moment(date, "ddd MMM DD YYYY kk:mm:ss zz").format(
  "dddd, MMMM Do"
);
console.log(reformDate);

currentDay.textContent = reformDate;

console.log(moment(date, "ddd MMM DD YYYY kk:mm:ss zz").format("h A"));
console.log(moment().hour(9).format("h A"));

reformDate = moment(date, "ddd MMM DD YYYY kk:mm:ss zz").format("H");

console.log(reformDate);

// time blocks for standard business hours (9am-pm)
// IF past, grey
// IF present, red
// IF future, green

// 9 AM
var hour9 = document.getElementById("hour-9");
var text9 = hour9.getElementsByTagName("textarea");

console.log(hour9);

hour9.firstElementChild.textContent = moment().hour(9).format("h A");
// convert time string to number
hour9 = moment().hour(9).format("H");

console.log(hour9);
console.log(typeof hour9);

if (hour9 === reformDate) {
  $(text9).addClass("present");
} else if (hour9 > reformDate) {
  $(text9).addClass("past");
} else {
  $(text9).addClass("future");
}

// 10 AM
var hour10 = document.getElementById("hour-10");
var text10 = hour10.getElementsByTagName("textarea");

hour10.firstElementChild.textContent = moment().hour(10).format("h A");

if (
  moment().hour(10).format("h A") ===
  moment(date, "ddd MMM DD YYYY kk:mm:ss zz").format("h A")
) {
  $(text10).addClass("present");
} else if (hour10 > reformDate) {
  $(text10).addClass("past");
} else {
  $(text10).addClass("future");
}

// 11 AM
var hour11 = document.getElementById("hour-11");
var text11 = hour11.getElementsByTagName("textarea");

hour11.firstElementChild.textContent = moment().hour(11).format("h A");

if (
  moment().hour(11).format("h A") ===
  moment(date, "ddd MMM DD YYYY kk:mm:ss zz").format("h A")
) {
  $(text11).addClass("present");
} else if (hour11 > reformDate) {
  $(text11).addClass("past");
} else if (hour11 < reformDate) {
  $(text11).addClass("future");
}

// 12 PM
var hour12 = document.getElementById("hour-12");
var text12 = hour12.getElementsByTagName("textarea");

hour12.firstElementChild.textContent = moment().hour(12).format("h A");

if (
  moment().hour(12).format("h A") ===
  moment(date, "ddd MMM DD YYYY kk:mm:ss zz").format("h A")
) {
  $(text12).addClass("present");
} else if (hour12 > reformDate) {
  $(text12).addClass("past");
} else {
  $(text12).addClass("future");
}

// 1 PM
var hour1 = document.getElementById("hour-1");
var text1 = hour1.getElementsByTagName("textarea");

hour1.firstElementChild.textContent = moment().hour(13).format("h A");

if (
  moment().hour(13).format("h A") ===
  moment(date, "ddd MMM DD YYYY kk:mm:ss zz").format("h A")
) {
  $(text1).addClass("present");
} else if (hour1 > reformDate) {
  $(text1).addClass("past");
} else {
  $(text1).addClass("future");
}

// 2 PM
var hour2 = document.getElementById("hour-2");
var text2 = hour2.getElementsByTagName("textarea");

hour2.firstElementChild.textContent = moment().hour(14).format("h A");

if (
  moment().hour(14).format("h A") ===
  moment(date, "ddd MMM DD YYYY kk:mm:ss zz").format("h A")
) {
  $(text2).addClass("present");
} else if (hour2 > reformDate) {
  $(text2).addClass("past");
} else {
  $(text2).addClass("future");
}

// 3 PM
var hour3 = document.getElementById("hour-3");
var text3 = hour3.getElementsByTagName("textarea");

hour3.firstElementChild.textContent = moment().hour(15).format("h A");

if (
  moment().hour(15).format("h A") ===
  moment(date, "ddd MMM DD YYYY kk:mm:ss zz").format("h A")
) {
  $(text3).addClass("present");
} else if (hour3 > reformDate) {
  $(text3).addClass("past");
} else {
  $(text3).addClass("future");
}

// 4 PM
var hour4 = document.getElementById("hour-4");
var text4 = hour4.getElementsByTagName("textarea");

hour4.firstElementChild.textContent = moment().hour(16).format("h A");

if (
  moment().hour(16).format("h A") ===
  moment(date, "ddd MMM DD YYYY kk:mm:ss zz").format("h A")
) {
  $(text4).addClass("present");
} else if (hour4 > reformDate) {
  $(text4).addClass("past");
} else {
  $(text4).addClass("future");
}

// 5 PM
var hour5 = document.getElementById("hour-5");
var text5 = hour5.getElementsByTagName("textarea");

hour5.firstElementChild.textContent = moment().hour(17).format("h A");

if (
  moment().hour(17).format("h A") ===
  moment(date, "ddd MMM DD YYYY kk:mm:ss zz").format("h A")
) {
  $(text5).addClass("present");
} else if (hour5 > reformDate) {
  $(text5).addClass("past");
} else {
  $(text5).addClass("future");
}

// save button on right, saves text in local storage
// saved events persist when page is refreshed
var saveBtn = document.querySelectorAll(".saveBtn");
var input_textArea = document.querySelector(".description");

savedText();

function savedText() {
  var text = localStorage.getItem("text");

  input_textArea.textContent = text;
}

for (var i = 0; i < saveBtn.length; i++) {
  saveBtn[i].addEventListener("click", function () {
    // get the button user clicked
    // traverse to parent to get hour id
    // traverse to previous siblig to get value of textarea
    // update local storage using hour id as the key
    // key will be a variable unique to each hour id
  });
}
