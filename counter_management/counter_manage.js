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
function hide()
 {
   document.getElementById('topRight').style.display = 'none';
   console.log("FUCK");
 }
//add this JS
$('#closeIt').click(function(){
    $('#counterDetails').css("display", "none");
});

$('#saveCounterDetails').click(function(){
   $('#counterDetails').css("display", "none");
});


var myFlag=0;
$('#doneCounter').click(function(){
  $('#topRight').css("display", "none");
  myFlag =0;
});
$('#increaseCounter').click(function(){
  if(myFlag==0)
  {
    $('#topRight').css("display", "block");
    myFlag =1;
  }
  else {
    $('#topRight').css("display", "none");
    myFlag =0;
  }

    // $('#topRight').addClass('animated fadeInUp');


});

function hideMe(Cid) {
  $("#"+Cid).remove();
}
