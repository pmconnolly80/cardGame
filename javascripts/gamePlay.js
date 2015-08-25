define(function(require) {
  
  var $ = require("jquery");
  var Q = require("q");
  var player1draw = require("player1draw");
  var player2draw = require("player2draw");
  var drawCard1 = require("drawCard1");
  var drawCard2 = require("drawCard2");
  var comparedHands = require("comparedHands");
  var winningHand = require("winningHand");
  var faceToNumber = require("faceToNumber");
  var displayCards = require("hbs!../templates/displayCards");



  $("#playNewGame").on("click", function(){
    var deck1 = player1draw();
    var deck2 = player2draw();
    console.log(deck1);
    console.log(deck2);
  

  $(document).on("click", "#cardDraw", function(){
    var deck1Draw = drawCard1(deck1);
    var deck2Draw = drawCard2(deck2);
    console.log(deck1Draw);
    console.log(deck2Draw);
    winningHand.checker(deck1Draw, deck2Draw);
  });

  // var cardImage1 = data.card[0].image;

  // $("#playerOneZone").html("<img src='" + cardImage1 + "'height=200>");

  // var cardImage2 = data.card[0].image;

  // $("#playerTwoZone").html("<img src='" + cardImage2 + "'height=200>");


  });
});

