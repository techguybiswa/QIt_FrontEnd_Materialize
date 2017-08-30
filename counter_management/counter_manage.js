$(document).ready(function(){
  $('#title_qit').addClass('animated fadeInDown');
  $('#animate_row').addClass('animated fadeInUp');
  $('#title2').addClass('animated slideInLeft');
  $('#chatButton').addClass('animated rotateInDownRight');
  $('#counterDetails').addClass('animated bounceInLeft');

  // $('#chart_div').addClass('animated fadeInUp');
  // $('#chart_div_2').addClass('animated fadeInUp stayHidden');
  // $('#chart_div_3').addClass('animated fadeInUp stayHidden');

});

$('#addCounter').click(function(){
    $('#counterDetails').css("display", "block");
});
$('#saveCounterDetails').click(function(){
   $('#counterDetails').css("display", "none");
   jQuery('#allCounters').append( $("<div>").load("ajax.txt"));

});
// $(".deleteCounter").click(function(){
//
//
// });
function hideMe(Cid) {
  $("#"+Cid).remove();
}
