// To auto set screen to 90% zoom for easier viewing
var scale = 'scale(0.9)';
document.body.style.webkitTransform =  scale;    // Chrome, Opera, Safari
document.body.style.msTransform =   scale;       // IE 9
document.body.style.transform = scale;     // General



// Variable define
var userinput = [];
var display = localStorage.getItem("schedule")





//Functions
  
  function updateday(){
    // To display the current day and time 
    var current = moment().format('MMMM Do YYYY, h:mm:ss a');
    var currenttime = moment().format('HH');
    var inputarea = document.querySelector(".hour")
    console.log(currenttime)
    $("#currentDay").html(current);

    //To change the CSS as time goes on
      //Present
        if(currenttime == inputarea.id){
          $(".form-control").addClass("present")
        }
      // Future
        else if(currenttime > inputarea.id){
          $(".form-control").addClass("future")
        }
      //Past
        else{
          $(".form-control").addClass("past")
        };

  }
  setInterval(updateday,1000);



  // Function to save content into local storage 
    $(".saveBtn").on("click",function(e){
        e.preventDefault();
        var userinput = $("#userinput").text;
        localStorage.setitem("schedule", userinput);
    });

  
//Methods
