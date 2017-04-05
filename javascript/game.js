//creating a game for user to go to 
//instructions
	//in html
//click start the game
	//in html makes button, jquery adds functionality 
//game pieces
	//in html , images to represent jewels, and css to style and function in jquery
//score box
	//in html
	//create a box to set up score
	//calculate score
	//computer score
//outcome

	//github.com/GoodPBC/jQuery-Jewel-Game
/*game needs a page for user to go to
 - instructions on game play
 	-html
 - click button to start
 	- html & css makes the button
 	-jQuery and/or JS emits and event
 - game pieces
 	- html to create
 	- css to style
 	- images to represent jewels
 	- jQuery and/or JS emits and event
 	- game pieces need a way to hold value.
 - scores
  - create a box to post the score
  - calculate users score
  - computer has to have a score
  - a way to keep track of games won
  - a way to keep track of games lost

*/


//creates random number needed to win 
var winningNumber = Math.floor(Math.random()*(120-19+1)+19);

var userScore = 0
 	blue: function()
	{

// 		var gameBlue = Math.floor(Math.random()*(12)+1);
		$(".Score").append(""+ gameBlue);
		console.log(gameBlue);
	},
// 	green: function(){
// 		var gameGreen = Math.floor(Math.random()*(12)+1);
// 		$(".Score").append(gameGreen);
// 		//console.log(gameGreen);
// 	},
// 	red: function(){
// 		var gameRed = Math.floor(Math.random()*(12)+1);
// 		$(".Score").append(gameRed);
// 		//console.log(gameRed);
// 	},
// 	purple: function(){
// 		var gamePurple = Math.floor(Math.random()*(12)+1);
// 		$(".Score").append(gamePurple);
// 	}

// };

console.log(userScore.blue);
var gameBlue = Math.floor(Math.random()*(12)+1);
var gameGreen = Math.floor(Math.random()*(12)+1);
var gameRed = Math.floor(Math.random()*(12)+1);
var gamePurple = Math.floor(Math.random()*(12)+1);

console.log(winningNumber);
console.log(gameBlue); 


//this will display a random number in the random score box 
  $(".Random").append(winningNumber);
  //click event for blue marble
  $(".Blue").click(userScore.blue);
  	//function working...inside funtion same as before
  	//try to create a keep score function (userScore));
  //click event for green marble
  $(".Green").click(userScore.green);
  //click event for red event
  $(".Red").click(userScore.red);
  //click event for purple marble
  $(".Purple").click(userScore.purple);


  for( i=0; i<userScore;i++){
  	for(p=0; p<winningNumber; p++);{
  		if (i===p){
  			alert("You win!!");
  		}
  		else if (i>p){
  			alert("You lose!!");
  		}
  		else{
  			alert("Keep playing!")
  		}
  }
  };

 // blue: function(){
  	//$(".Score").append(gameBlue);

  //};
 /*for 

 if ( userScore > winningNumber) {
 	alert("You lose! Try again.");
 }

 else ( userScore=== winningNumber) {
 	alert("You win!");
 };
  	}


*/

