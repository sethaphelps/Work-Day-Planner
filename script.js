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
  if (!eventsData) {
    eventsData = {
      hour8: "",
      hour9: "",
      hour10: "",
      hour11: "",
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

$(".saveBtn").on("click", handleSaveClick);

$(function () {
  loadStoredData();
  setHourColors();
});
