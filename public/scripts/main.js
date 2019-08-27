// Connection url
var socket = io.connect("http://141.126.155.58:7777");

/*
  // Example of Socket Emit
  socket.emit('Joined',null);

  // Example of Socket On
  socket.on('Caught', function(data){
    alert("You/your runner got CAUGHT!");
  });
*/


function startGame() {
  if($("#user").val() != "" && $("#user").val() != null) {
    socket.emit("Login", $("#user").val());
  }
  else {
    $("#noname").css("display", "block");
  }
}

socket.on("StartGame", function(myPlayer){
  localStorage.setItem("myCID", myPlayer.cid);
  localStorage.setItem("myExploring", myPlayer.exploring);
  localStorage.setItem("myFood", myPlayer.food);
  localStorage.setItem("myID", myPlayer.id);
  localStorage.setItem("myStrength", myPlayer.strength);
  localStorage.setItem("myUsername", myPlayer.username);
  window.location = "game.html";
});

function starting() {
  console.log(localStorage.getItem("myUsername"));
}