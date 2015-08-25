define(function(require) {
  return function() {
    var $ = require("jquery");
    var Q =require("q");
    var deffered = Q.defer();
    $.getJSON("http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1", function(data) {
    deffered.resolve(data.deck_id);
    console.log(data);
    console.log(data.deck_id);
    });
    return deffered.promise;
  };
});
   