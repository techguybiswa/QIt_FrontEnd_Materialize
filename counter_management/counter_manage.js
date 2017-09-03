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
//add this JS
$('#closeIt').click(function(){
    $('#counterDetails').css("display", "none");
});

$('#saveCounterDetails').click(function(){
   $('#counterDetails').css("display", "none");
});

function hideMe(Cid) {
  $("#"+Cid).remove();
}
