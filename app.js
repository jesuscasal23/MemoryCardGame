var backSides = [
"images/kingofhearts.png",
"images/aceofspades.jpg",
"images/queenofdiamonds.png",
"images/queenofdiamonds.png",
"images/kingofhearts.png",
"images/aceofspades.jpg",
]
var cardsClicked = 0;
var startingImage = "images/card.png";


$(".card").click( function (argument) {
	turnCard($(this), backSides[$(this).attr("alt") -1])
})


function turnCard (card, newImage) {
	// checks if the card is turned down
	if (card.attr("src") == startingImage) {
	// turns the card up
		card.attr("src", newImage);
	// counter logik
		
		turnCounter();
	// turns the card down if it is turned up
	}else{
		turnCardDown(card);
	}
};

function turnCounter() {
	// adds one to the counter
		cardsClicked++;
	// turns all cards down after chosing 2
		if (cardsClicked === 3) {
			turnCardDown($(".card"));
			cardsClicked = 0
		}
	// shows how many card have been turned
	$("#turned").html(cardsClicked);
}

function turnCardDown (cardToBeTurnedDown){
	cardToBeTurnedDown.attr("src", startingImage);
}




