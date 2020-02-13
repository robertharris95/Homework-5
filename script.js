// To auto set screen to 90% zoom for easier viewing
var scale = 'scale(0.95)';
document.body.style.webkitTransform =  scale;    // Chrome, Opera, Safari
document.body.style.msTransform =   scale;       // IE 9
document.body.style.transform = scale;     // General



// Variable define
var userinput = [];
var display = localStorage.getItem("schedule")
var schedule = $(".time-block")
var time = moment().format("h")
var sub = moment().format("a")



for( let i=9; i<17; i++){
var newTimerow = $("<div>");
  newTimerow.addClass("input-group form")

var newTime = $("<div>");
  newTime.addClass("col-md-2 offset-md-1 hour " + (i))

  // To display time correctly 
    if(i<12){
      sub = "AM"
      newTime.text(parseInt(i)+ " " + sub)
    }
    else if(i >= 13){
      sub= "PM"
      newTime.text(parseInt(i-12)+ " " + sub)
    }
    else{
      sub= "PM"
          newTime.text(parseInt(i)+ " " + sub)
    }

var newinput = $("<textarea>");
  newinput.addClass("form-control col-md-6")
  newinput.attr("id", "userinput"+i);
  newinput.text(localStorage.getItem("schedule"+i));

var newBtn = $("<button>");
  newBtn.addClass("col-md-2 btn btn-primary btn-block saveBtn")
  newBtn.text("SAVE");


var currenttime = moment().format("HH");
var inputarea = document.querySelector(".hour"+i)
var current = moment().format('MMMM Do YYYY, h:mm:ss a'); 

$("#currentDay").html(current);

function updateday(){
  // To display the current day and time
  current = moment().format('MMMM Do YYYY, h:mm:ss a'); 
  $("#currentDay").html(current);
  
}
console.log(i)
console.log(parseInt(currenttime))
//To change the CSS as time goes on
    //Present
    if( i === parseInt(currenttime)){
      (newinput).addClass("present")
    }
  // Future
    else if( i > parseInt(currenttime)){
      (newinput).addClass("future")
    }
  //Past
    else if ( i < parseInt(currenttime)){
      (newinput).addClass("past")
    };


    newTimerow.append(newTime);
    newTimerow.append(newinput);
    newTimerow.append(newBtn);
    schedule.append(newTimerow);

setInterval(updateday,1000);



// Function to save content into local storage 
  newTimerow.on("click","button",function(e){
      e.preventDefault();
      var userinput = ($(this)).prev().val();
      localStorage.setItem("schedule" +i, userinput);
    
  });

  // Condition to display the saved values 
 
}





