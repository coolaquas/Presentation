$( document ).ready(function() {
  // Get the modal
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

modal.style.display = "block";
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
});


$(".help").click(function(){
   alert("↑(Upward), ↓(Downward), ←(Left), →(Right) only using this keys you have to reach 2048"); 
});



$(".music").click(function(){
  var myAudio = document.getElementById("myAudio");
    if(myAudio.paused){
            myAudio.play();
            var imgUrl = "./css/img/silent2.png";
            $(".music").css("background-image", "url(" + imgUrl + ")");
  } 
    else{
            myAudio.pause(); 
            var imgUrl = "./css/img/music.png";
            $(".music").css("background-image", "url(" + imgUrl + ")");  
        }
    
});




