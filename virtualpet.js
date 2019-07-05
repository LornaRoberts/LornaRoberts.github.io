var resetBtn = document.querySelector(".reset");
var start = document.querySelectorAll(".start");
var ageing = document.getElementById("days");
var heart= document.getElementById("heart");
var star = document.getElementById("star");
var tummy = document.getElementById("hungry");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var content = document.getElementsByClassName("modal-content")
var dead = document.getElementById("dead");
                               
var c;
 

function myClock() {
  c=0;
    myTimer = setInterval(startUp, 60000);
}

 

$(resetBtn).click(function(){
    $(".start").toggle();
     if ($(this).text() == "Birth Benny") { 
        $(this).text("Restart");
        } else { 
        $(this).text("Birth Benny"); 
        }
      });

myClock()
var myTimer;
var cd = $('#days');



  function startUp(){
        c++;        
        cd.html(c);
      randomNum();
      happyStatus();
      hungerStatus();
      healthStatus();
      }
     
var health =4;
var happy =4;
var hungry =4;

function randomNum(){

//pick a 'health' 
  var h=Math.random();
  //pick a happy 
  var s=Math.random();
  //pick a hungry
  var f=Math.random();

  if (h <0.5) {
    health--;
  }
  if (s <0.5) {
    happy--;
  }
  
  if (f <0.5) {
    hungry--;
  }
 
};
function healthStatus(){
if (health===4){
$(heart).attr("src", "https://res.cloudinary.com/dytmcam8b/image/upload/v1561725918/virtual%20pet/l1.png");
}if(health===3){
$(heart).attr("src", "https://res.cloudinary.com/dytmcam8b/image/upload/v1561725919/virtual%20pet/l2.png");
}if (health===2){
$(heart).attr("src", "https://res.cloudinary.com/dytmcam8b/image/upload/v1561725919/virtual%20pet/l3.png");
}if(health===1){
$(heart).attr("src", "https://res.cloudinary.com/dytmcam8b/image/upload/v1561725919/virtual%20pet/l4.png");
}if (health===0){
  deathScreen();
}
};
  
function happyStatus(){
if (happy===4){
$(star).attr("src", "https://res.cloudinary.com/dytmcam8b/image/upload/v1561725934/virtual%20pet/s1.png");
}if(happy===3){
$(star).attr("src", "https://res.cloudinary.com/dytmcam8b/image/upload/v1561725934/virtual%20pet/s2.png");
}if (happy===2){
$(star).attr("src", "https://res.cloudinary.com/dytmcam8b/image/upload/v1561725934/virtual%20pet/s3.png");
}if(happy===1){
$(star).attr("src", "https://res.cloudinary.com/dytmcam8b/image/upload/v1561725934/virtual%20pet/s4.png");
}if (happy===0){
  deathScreen();
}
};

function hungerStatus(){
if (hungry===4){
$(tummy).attr("src", "https://res.cloudinary.com/dytmcam8b/image/upload/v1561725898/virtual%20pet/h1.png");
}if(hungry===3){
$(tummy).attr("src", "https://res.cloudinary.com/dytmcam8b/image/upload/v1561725898/virtual%20pet/h2.png");
}if (hungry===2){
$(tummy).attr("src", "https://res.cloudinary.com/dytmcam8b/image/upload/v1561725898/virtual%20pet/h3.png");
}if(hungry===1){
$(tummy).attr("src", "https://res.cloudinary.com/dytmcam8b/image/upload/v1561725898/virtual%20pet/h4.png");
}if (hungry===0){
  deathScreen();
}
};



function deathScreen(){
  
$(start).hide();
modal.style.display = "block";
$(dead).text(c);
clearInterval(myTimer);
$(ageing).text(0);

}
  // When the user clicks on <span> (x), close the modal

span.onclick = function() {
modal.style.display = "none";
document.location.reload();
}

  // When the user clicks anywhere outside of the modal, close it

   window.onclick = function(event) {
if (event.target == modal) {
   modal.style.display = "none";
   document.location.reload();
}
}
  





