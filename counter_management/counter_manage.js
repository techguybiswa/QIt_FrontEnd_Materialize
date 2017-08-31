$(document).ready(function(){
  $('#title_qit').addClass('animated fadeInDown');
  $('#animate_row').addClass('animated fadeInUp');
  $('#title2').addClass('animated slideInLeft');
  $('#chatButton').addClass('animated rotateInDownRight');
  $('#counterDetails').addClass('animated bounceInRight');



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
