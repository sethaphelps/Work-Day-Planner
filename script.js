function setHourColors() {
  var now = dayjs();

  for (var i = 9; i < 18; i++) {
    // $("#hour" + i + "textarea").removeClass("future");
    if (i < now.hour()) {
      $("#hour" + i + "textarea").addClass("past");
    } else if (i == now.hour()) {
      $("#hour" + i + "textarea").addClass("present");
    }
  }
}

function loadStoredData() {
  var eventsData = JSON.parse(localStorage.getItem(calendarEvents));
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

