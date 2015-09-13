
		//declare and initialize variables
		var clickedTime; var createdTime; var reactionTime;

		var xPos; var yPos;

		function getRandomColor() 
		{
         	var letters = '0123456789ABCDEF'.split('');
         	var color = "#";
         	for (var i = 0; i < 6; i++ ) {
            	color += letters[Math.round(Math.random() * 15)];
         	}
         	return color;
     	}

		function hideBox()
		{

			var randomTime = Math.random();

			//load random values
			//set to 0-5 second duration
			randomTime = randomTime * 3000;

			//setting the position
			xPos = Math.floor(Math.random() * 900);
			yPos = Math.floor(Math.random() * 400);
			document.getElementById("box").style.left=xPos+"px";
			document.getElementById("box").style.top=yPos+"px";

			//set a random background color
			document.getElementById("box").style.backgroundColor=getRandomColor();

			//setting square or circle
			if(Math.random() > 0.5)
			{
				document.getElementById("box").style.borderRadius="100px";
			}
			else
			{
				document.getElementById("box").style.borderRadius="0px";
			}


			setTimeout(function() 
			{
				document.getElementById("box").style.display="block";

				//time stamp the box's creation
				createdTime=Date.now();

			}, randomTime);
		}

		document.getElementById("box").onclick=function() {
			clickedTime=Date.now();

			reactionTime=(clickedTime-createdTime)/1000;

			document.getElementById("time").innerHTML=reactionTime+"s";

			this.style.display="none";
			hideBox();
		}

		hideBox();
