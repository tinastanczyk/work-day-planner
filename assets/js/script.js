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
for (let i = 9; i < 18; i++) {
  //I'm targeting the id, "time-", then splitting the id name into "time" and "number", then accessing the number by indexing it to 1
  var blockTime = $("#time-" + i)
    .attr("id")
    .split("-")[1];
  // console.log(blockTime);
  // console.log($("time-").attr("time-")+blockTime);
}
saveBtn.on("click", saveEvent);

// check to see if the event is in past, present or future

function checkEvent() {
  var timeNow = moment().format("H");
  // var timeNow =0;
  console.log(timeNow);
    eventRow.each(function(){
      var bl = $(this);
      var eventTime = bl.children("td").children().attr("id").split("-")[1];
      console.log(bl.children("td").children().attr("id").split("-")[1]);
      
    if (timeNow == eventTime) {
      bl.find("tr").addClass("present");
      bl.find("th").addClass("present");
      bl.find(".event-input").addClass("present");
    }
    if (timeNow > eventTime) {
      bl.find("tr").addClass("past");
      bl.find("th").addClass("past");
      bl.find(".event-input").addClass("past");
    }
    if (timeNow < eventTime) {
      bl.find("tr").addClass("future");
      bl.find("th").addClass("future");
      bl.find(".event-input").addClass("future");
    }
    })
}

checkEvent();
