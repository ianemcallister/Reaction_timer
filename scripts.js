
//declare and initialize variables
let clickedTime, createdTime,bestTime=Number.MAX_VALUE;

function hideBox() {
	let xPos, yPos;
	let randomTime = Math.random();

	//setting square or circle
	function getShape(rt) {
		return ((rt / 1000) > 0.5 ? "100px" : "0px");
	}

	//load random values
	//set to 0-5 second duration
	randomTime = randomTime * 3000;

	//setting the position
	xPos = Math.floor(Math.random() * 900);
	yPos = Math.floor(Math.random() * 400);
	document.getElementById("box").style.left = `${xPos}px`;
	document.getElementById("box").style.top = `${yPos}px`;

	//set a random background color
	//Color Generator by https://stackoverflow.com/users/667707/zpider
	document.getElementById("box").style.backgroundColor = `#${((1 << 24) * Math.random() | 0).toString(16)}`;

	

	document.getElementById("box").style.borderRadius = getShape(randomTime);



	setTimeout(function () {
		document.getElementById("box").style.display = "block";
		//time stamp the box's creation
		createdTime = Date.now();
	}, randomTime);
}

document.getElementById("box").onclick = function () {
	let reactionTime;
	reactionTime = (Date.now() - createdTime) / 1000;
	if(reactionTime<bestTime){
		bestTime = reactionTime;
	}
	document.getElementById("best-time").innerHTML = bestTime + "s";
	document.getElementById("time").innerHTML = reactionTime + "s";

	this.style.display = "none";
	hideBox();
}

hideBox();
