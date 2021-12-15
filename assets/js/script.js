// Displaying current date and time on top of screen
function dateTime(){
var today = moment().format("MMM Do YYYY h:mm:ss");
$('#currentDay').text(today);
}
// Updating current date/time every second
setInterval(dateTime,1000);

