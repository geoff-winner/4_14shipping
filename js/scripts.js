debugger;
var shipping = function(rate, height, width, depth, weight, szip, rzip) {
    var volume = (height * width * depth);
    var distance = Math.abs(szip - rzip);
    var w_cost = (weight * 0.5);
    var d_cost = (((distance/99999) * 15) + 5);
    var over = 10;
    var total = 0;


    if (rate === "standard"){
        if ((height >= 72) || (width >= 72) || (depth >= 72)) {
            var total = "Error";
        } else if ((height >= 22) || (width >= 22) || (depth >= 22)) {
            var total = (w_cost + d_cost + over);
        } else {
            var total = (w_cost + d_cost);
        }
        return total;
    } else {
        if ((height >= 72) || (width >= 72) || (depth >= 72)) {
            var total = "Error";
        } else if ((height >= 22) || (width >= 22) || (depth >= 22)) {
            var total = ((w_cost + d_cost + over) * 6);
        } else {
            var total = ((w_cost + d_cost) * 6);
        }
        return total;
    };
};


$(document).ready(function() {
  $('form#input').submit(function(event) {
      var rate = $('select#rate').val();
      var height = parseInt($('input#height').val());
      var width = parseInt($('input#width').val());
      var depth = parseInt($('input#depth').val());
      var weight = parseInt($('input#weight').val());
      var szip = parseInt($('input#szip').val());
      var rzip = parseInt($('input#rzip').val());
      console.log(rate);
      var ptotal = shipping(rate, height, width, depth, weight, szip, rzip);
      var total = ((ptotal *100)/100).toFixed(2);

      if ((height >= 72) || (width >= 72) || (depth >= 72)) || (weight>= 120){
      $('.total').text("not within shipping size and weight guidelines");
      } else {
        $('.total').text("$" + total);
    };


    $('#result').show();
    event.preventDefault();
  });
});
