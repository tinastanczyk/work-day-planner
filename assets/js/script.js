var saveBtn = $(".btn");
var eventRow = $("tbody").children("tr");
var inputEl = $("div").children(".event-input");

console.log(eventRow);

// Displaying current date and time on top of screen
function dateTime() {
  var today = moment().format("MMM Do YYYY h:mm:ss");
  $("#currentDay").text(today);
}
// Updating current date/time every second
setInterval(dateTime, 1000);
//
// console.log($("#time-" + 9));
// get each blockTime from each event
function saveEvent(event) {
  event.preventDefault();
  var saveBtn = $(event.target);
  console.log(saveBtn.parent().parent());
}
// this loops through each input div in each row
for (let i = 9; i < 18; i++) {
  //I'm targeting the id, "time-", then splitting the id name into an array of "time" and "number", then accessing the number by indexing the array to 1
  var blockTime = $("#time-" + i)
    .attr("id")
    .split("-")[1];
  // console.log(blockTime);
  // console.log($("time-").attr("time-")+blockTime);
}
saveBtn.on("click", saveEvent);

// check to see if the event is in past, present or future

function checkEvent() {
  // setting timeNow to be equal to the hour in 24hr format
  var timeNow = moment().format("H");
  // var timeNow =0;
  console.log(timeNow);
  eventRow.each(function () {
    // this targets the row of the table
    var bl = $(this);
    // this targets the number id (9-17), which is respective to the time (9-5) for each row
    var eventTime = bl.children("td").children().attr("id").split("-")[1];
    console.log(bl.children("td").children().attr("id").split("-")[1]);
    // if the current time equals the event row time then add the class "present", which turns the row, header and input red
    if (timeNow == eventTime) {
      bl.find("tr").addClass("present");
      bl.find("th").addClass("present");
      bl.find(".event-input").addClass("present");
    }
    // if the current time is greater than the event row time then add the class "past", which turns the row, header and input gray
    if (timeNow > eventTime) {
      bl.find("tr").addClass("past");
      bl.find("th").addClass("past");
      bl.find(".event-input").addClass("past");
    }
    // if the current time is less than the event row time then add the class "future", which turns the row, header and input green
    if (timeNow < eventTime) {
      bl.find("tr").addClass("future");
      bl.find("th").addClass("future");
      bl.find(".event-input").addClass("future");
    }
  });
}

checkEvent();
