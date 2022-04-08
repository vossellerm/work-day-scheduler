// current day: Day, Month Day(th)
// Thu Apr 07 2022 20:55:35 GMT-0700 (Pacific Daylight Time)
// Moment Format: ddd MMM DD YYYY kk:mm:ss zz
var currentDay = document.getElementById("currentDay");
var date = new Date();
var reformDate = moment(date, "ddd MMM DD YYYY kk:mm:ss zz").format(
  "dddd, MMMM Do"
);
currentDay.textContent = reformDate;

// time blocks for standard business hours (9am-pm)
// IF past, grey
// IF present, red
// IF future, green



// save button on right, saves text in local storage
// saved events persist when page is refreshed

