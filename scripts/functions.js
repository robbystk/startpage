function defaultfunc() {

  document.getElementById("search").action = "https://google.ca/search";

}

function dropdownSelect(){

  var x = document.getElementById('searchSource').value;
  document.getElementById("search").action = x;


}

function getSomeTime() {

  var date = new Date();
  var hour = date.getHours().toString();
  var minutes = date.getMinutes().toString()
  var seconds = date.getSeconds().toString();
  var utc2;

  if (date.getMinutes() < 10) {

    minutes = "0" + minutes;

  }

  if (date.getSeconds() < 10) {

    seconds = "0" + seconds;

  }

  document.getElementById('clock').innerHTML = hour + ":" + minutes + ":" + seconds;

}

function getSomeDate() {

    var date2 = new Date();
    var weekday = new Array(7);
      weekday[0]=  "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";
    var day = weekday[date2.getDay()];
      day = day.toString();
    var month = new Array(12);
      month[0] = "January";
      month[1] = "February";
      month[2] = "March";
      month[3] = "April";
      month[4] = "May";
      month[5] = "June";
      month[6] = "July";
      month[7] = "August";
      month[8] = "September";
      month[9] = "October";
      month[10] = "November";
      month[11] = "December";
    var monthText = month[date2.getMonth()];
      monthText = monthText.toString();
    var monthNum = date2.getDate().toString();
    var year = date2.getFullYear().toString();

  document.getElementById('date1').innerHTML = day + ", " + monthText + " " + monthNum + ", " + year;

}
