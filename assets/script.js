var now = moment().format("MM-DD-YYYY");
var currentDate = document.getElementById("currentDay");
var eventsData = {};
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
  eventsData = JSON.parse(localStorage.getItem("calendarEvents"));
  if (eventsData !== null) {
    generate();
  } else {
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
}

function generate() {
  for (var i = 8; i <= finalTime; i++) {
    let textblockId = "hour" + i;
    var textblock = document.querySelector(`#${textblockId}`);
    textblock.textContent = eventsData["hour" + i];
  }
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
