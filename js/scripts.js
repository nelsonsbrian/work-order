$(document).ready(function() {


  $("button#deck").click(function() {

    var cardNumber = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
    var cardSuit = ["Hearts", "Diamonds", "Clubs", "Spades"];

    cardSuit.forEach(function(suit) {
      cardNumber.forEach(function(number) {
        var output = (number + " of " + suit + "<br>");
        $(".output").append(output);
      });
    });

  });
});
