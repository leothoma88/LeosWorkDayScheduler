$(document).ready(function() {

//Header with current date
$("#currentDay").text(moment().format("MMMM Do YYYY"));
    
    
var description = $(".description");
var saveButton = $(".saveBtn");
var timeNow = moment().hour();

 console.log(timeNow)
    
    
    // Color codes every boc by the hour,using a each loop and if statements
    description.each(function () {
        var blockedtime  = parseInt($(this).attr("id"));
        
        console.log(blockedtime)
    
        if (blockedtime < timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockedtime === timeNow) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    });
    
    // Using .each function in order to populate tasks that have been saved in local storage to the appropriate row upon loading the browser. 
    
    description.each(function() {
    
        for (var i = 0; i < localStorage.length; i++) {
            var objectKey = localStorage.key(i);
            var taskValue = localStorage.getItem(objectKey);
            var rowhour = $(this).siblings(".hour").text();
        
           
            if (objectKey === rowhour) {
                $(this).val(taskValue);
            }
           
        }
    });
    
    // Keeps the named task on the row after save is clicked. 
function saveTasks () {
    // var currentTime = $(this).data("hour");
    var rowhour = $(this).siblings(".hour").text();
    var task = $(this).siblings(".description").val();
  
    // console.log(currentTime)
    
    if (task === "") {
        localStorage.setItem(rowhour, "");
    }
    else {
        localStorage.setItem(rowhour, task);
    }
}
    
saveButton.on("click", saveTasks);
    
});