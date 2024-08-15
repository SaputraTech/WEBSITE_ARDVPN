//////////////////////////////////////////////////////////////
function onCreate() {
  ShowToast();
}
//▬▬▬▬▬▬▬▬▬▬
     // TOAST
//▬▬▬▬▬▬▬▬▬▬
function ShowToast() {
  var x = document.getElementById("Toast");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3900);
}
//▬▬▬▬▬▬▬▬▬▬
     // FPS WEBS
//▬▬▬▬▬▬▬▬▬▬
 var fps = document.getElementById("fps");

var startTime = Date.now();

var frame = 0;

function tick() {

  var time = Date.now();

  frame++;

  if (time - startTime > 1000) {

      fps.innerHTML = (frame / ((time - startTime) / 1000)).toFixed(1);

      startTime = time;

      frame = 0;

	}  window.requestAnimationFrame(tick);

}

tick();

//▬▬▬▬▬▬▬▬▬▬
     // LINK
//▬▬▬▬▬▬▬▬▬▬


function Speedtest() {
	setTimeout(function() {
	  window.open('https://speedcheck.biznetnetworks.com', 'ultimate')},
	100);
  }

function Website() {
  setTimeout(function() {
    window.open('https://skartissh.my.id', 'ultimate')},
  100);
}
function Telegram() {
	setTimeout(function() {
	  window.open('https://t.me/Ardie96', 'ultimate')},
	100);
  }
  function Whatsapp() {
	setTimeout(function() {
	  window.open('https://wa.me/6283845974466', 'ultimate')},
	100);
  }
function Tele1() {
	setTimeout(function() {
	  window.open('https://t.me/SkartiStore', 'ultimate')},
	100);
  }
  function Tele2() {  
	setTimeout(function() {
	  window.open('https://t.me/PhreakersVPN', 'ultimate')},
	100);
  }

  function Tele3() {  
	setTimeout(function() {
	  window.open('https://t.me/SkartiVPN', 'ultimate')},
	100);
  }
function Youtube() {
  setTimeout(function() {
    window.open('https://www.youtube.com/@SkartiOfficial', 'ultimate')},
  100);
}

function DarkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
