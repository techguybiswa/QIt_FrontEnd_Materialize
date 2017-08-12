$(document).ready(function(){
  $('#title_qit').addClass('animated fadeInDown');
  $('#animate_row').addClass('animated fadeInUp');
  $('#title2').addClass('animated slideInLeft');
  $('#chatButton').addClass('animated rotateInDownLeft');



});

function toggle() {
    var x = document.getElementById('hide');
    var y = document.getElementById('chatButton');
    var z = document.getElementById('hideMe');
    if (x.style.display == 'none') {
        x.style.display = 'block';
        y.style.backgroundColor =  '#87b5ff';
        // z.style.color:
    } else {
        x.style.display = 'none';
    }
}
