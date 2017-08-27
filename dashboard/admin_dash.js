$(document).ready(function(){
  $('#title_qit').addClass('animated fadeInDown');
  $('#animate_row').addClass('animated fadeInUp');
  $('#title2').addClass('animated slideInLeft');
  $('#chatButton').addClass('animated rotateInDownRight');



});

function toggle() {
    //console.log("CLicked");

    var x = document.getElementById('hide');
    var y = document.getElementById('chatButton');
    //var z = document.getElementById('hideMe');
    //console.log(x.style.display);
    if (x.style.display == 'none') {
        x.style.display = 'block';
        y.style.backgroundColor =  '#575c82';
        // z.style.color:
    } else {
        x.style.display = 'none';
    }
}
$(".orderWaiting").click(function(){
  $('#counterSend').css('display', 'block');
  $('#counterSend').addClass('animated bounce');


});
$('#counterDone').click(function(){
  $('#counterSend').css('display', 'none');


});
