//console.log("Up and running!");
//console.log("User flipped " + cardOne);
var cards = ["queen", "queen", "king", 'king'];
var cardsInPlay = [];
var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
alert("Sorry, try again.");
}
}
var flipCard = function (cardID) {
	console.log("User flipped " + cards[cardID]);
	cardsInPlay.push(cards[cardID])
    if (cardsInPlay.length === 2) {
	checkForMatch();
	}
  };
flipCard(0);
flipCard(2);