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
    $(".btn").on("click",function(e){
        e.preventDefault();
        var userinput = $("<textarea>");
        console.log(userinput)
        localStorage.setItem("schedule", userinput);
    });

  // Change text content to saved value 
    // if(localStorage.getItem("schedule") !== ""){
    //   $(".form-control").attr("", localStorage.getItem("schedule"));
    // }
    
