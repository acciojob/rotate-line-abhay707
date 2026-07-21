//your JS code here. If required.
let deg = 0;

let line = document.getElementById("line");

setInterval(()=>{
	deg += 2;
	line.style.transform = `rotate(${deg}deg)`;
	line.style.transition = 'transform 0.5s ease';
},20)