var saveBtn = $(".btn");
var eventRow = $("tbody").children("tr");
// Displaying current date and time on top of screen
function dateTime() {
  var today = moment().format("MMM Do YYYY h:mm:ss");
  $("#currentDay").text(today);
}
// Updating current date/time every second
setInterval(dateTime, 1000);
//this function saves user input of event and the input id into local storage
function saveEvent(event) {
  event.preventDefault();
  var saveBtn = $(event.target);
  var eventInput = saveBtn.parent().siblings("input").val();
  // The split function turned the div's id name into an array then isolates the index=1, which is respective to the time block
  var inputEl = saveBtn.parent().parent().attr("id").split("-")[1];
  localStorage.setItem(inputEl, eventInput);
}
// this loops through each input div in each row and gets the value of each from local storage
for (let i = 9; i < 18; i++) {
  var inputBlock = localStorage.getItem(i);
  var timeDiv = $(eventRow)
    .children("td")
    .children("#time-" + i)
    .children("input");
  timeDiv.val(inputBlock);
}
saveBtn.on("click", saveEvent);
// check to see if the event is in past, present or future
function checkEvent() {
  // setting timeNow to be equal to the hour in 24hr format
  var timeNow = moment().format("HH");
  // gets the absolute value of the hour from moment(), turns the string into an int
  timeNow = Math.abs(timeNow);
  // this each function iterates through each eventRow
  eventRow.each(function () {
    // this targets the row of the table
    var bl = $(this);
    // this targets the number id (9-17), which is respective to the time (9-5) for each row
    var eventTime = bl.children("td").children().attr("id").split("-")[1];
    // console.log(bl.children("td").children().attr("id").split("-")[1]);
    // if the current time equals the event row time then add the class "present", which turns the row, header, save button and input red
    if (timeNow == eventTime) {
      bl.find("tr").addClass("present");
      bl.find("th").addClass("present");
      bl.find(".event-input").addClass("present");
      bl.find(".input-group-append").addClass("present");
    }
    // if the current time is greater than the event row time then add the class "past", which turns the row, header, save button and input gray
    if (timeNow > eventTime) {
      bl.find("tr").addClass("past");
      bl.find("th").addClass("past");
      bl.find(".event-input").addClass("past");
      bl.find(".input-group-append").addClass("past");
    }
    // if the current time is less than the event row time then add the class "future", which turns the row, header, save button and input green
    if (timeNow < eventTime) {
      // console.log(eventTime);
      bl.find("tr").addClass("future");
      bl.find("th").addClass("future");
      bl.find(".event-input").addClass("future");
      bl.find(".input-group-append").addClass("future");
    }
  });
}
checkEvent();
