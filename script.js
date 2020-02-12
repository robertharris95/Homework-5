// To auto set screen to 90% zoom for easier viewing
var scale = 'scale(0.9)';
document.body.style.webkitTransform =  scale;    // Chrome, Opera, Safari
document.body.style.msTransform =   scale;       // IE 9
document.body.style.transform = scale;     // General



// Variable define
var userinput = [];
var display = localStorage.getItem("schedule")
var current = moment().format('MMMM Do YYYY, h:mm:ss a');
var currenttime = moment().format('h:mm:ss a')



//Functions
  // To display the current day and time 
    $("#currentDay").text(current)

  // Function to save content into local storage 
    $(".saveBtn").on("click",function(e){
        e.preventDefault();
        var userinput = $("#userinput").text;
        localStorage.setitem("schedule", userinput);
    });

  
//Methods
