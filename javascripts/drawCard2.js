define(function(require) {
  return function(id2) {
    var $ = require("jquery");
    var Q =require("q");
    var deffered = Q.defer();
    $.getJSON("http://deckofcardsapi.com/api/deck/" + id2 + "/draw/?count=1", function(data) {
    deffered.resolve(data);
    console.log(data);
    });
    return deffered.promise;

  };

});