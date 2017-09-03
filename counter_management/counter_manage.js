$(document).ready(function(){
  $("select ul").attr("class", "");

  $('#title_qit').addClass('animated fadeInDown');
  $('#animate_row').addClass('animated fadeInUp');
  $('#title2').addClass('animated slideInLeft');
  $('#chatButton').addClass('animated rotateInDownRight');
  $('#counterDetails').addClass('animated bounceInRight');
  console.log("HELLO BABES");
  $('select').material_select();
});
// $(document).ready(function() {
//   $('select').material_select();
// });
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
