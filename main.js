//  api_url = "https://opentdb.com/api.php?amount=10";
// alert(
//   "are you sure you want to proceed to this clicking website? if so click OK"
// );

function DaBaby() {
  document.getElementById("daBabyPic").style.display = "block";
}
function LilPump() {
  document.getElementById("lilPumpPic").style.display = "block";
}

function Drake() {
  document.getElementById("drakePic").style.display = "block";
}

function Future() {
  document.getElementById("futurePic").style.display = "block";
}
function Kendrick() {
  document.getElementById("kendrickPic").style.display = "block";
  document.getElementById("daBabyPic").style.display = "none";
  document.getElementById("lilPumpPic").style.display = "none";
  document.getElementById("drakePic").style.display = "none";
  document.getElementById("futurePic").style.display = "none";
  document.getElementById("mainContainer").style.display = "none";
  var audio = new Audio("audio/kendrickAudio.mp3");
  audio.oncanplaythrough = function () {
    audio.play();
  };
  document.getElementById("stars").style.display = "block";
}
