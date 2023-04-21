var now = moment().format("MM-DD-YYYY");
//console.log("now", now)
var currentDate = document.getElementById("currentDay");
//console.log(currentDate)
currentDate.textContent = now;
var finalTime = 18;

function setHourColors() {
  console.log("setHourColors ran");
  var currentTime = moment();
  for (var i = 8; i <= finalTime; i++) {
    console.log($("#hour-" + i + " textarea"));
    if (i < currentTime.hour()) {
      $("#hour-" + i + " textarea").removeClass("future");
      $("#hour-" + i + " textarea").addClass("past");
    } else if (i == currentTime.hour()) {
      $("#hour-" + i + " textarea").removeClass("future");
      $("#hour-" + i + " textarea").addClass("present");
    }
  }
}

function loadStoredData() {
  var eventsData = JSON.parse(localStorage.getItem("calendarEvents"));
  if (eventsData !== null) {
    eventsData = {
      hour8: "",
      hour9: "",
      hour10: "",
      hour11: "",
      hour12: "",
      hour13: "",
      hour14: "",
      hour15: "",
      hour16: "",
      hour17: "",
      hour18: "",
    };
  }
  // todo load existing data from local storage
}

function handleSaveClick(event) {
  var hourBlock = $(event.target).parent();
  var value = hourBlock.children("textarea").val();
  var hour = hourBlock.attr("id").split("-")[1];
  eventsData["hour" + hour] = value;

  localStorage.setItem("calendarEvents", JSON.stringify(eventsData));
}

$(function () {
  loadStoredData();
  setHourColors();
});

$(".saveBtn").on("click", handleSaveClick);

function generate(){
  for (var i = 8; i <= 18; i++){
    let textblockId = "hour-" +1
    var textblock = $("hour" + i);
    textblock.textContent = eventsData["hour" + i];
  }
}

