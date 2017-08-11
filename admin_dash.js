$(document).ready(function(){
  $('#title_qit').addClass('animated fadeInDown');
  $('#animate_row').addClass('animated fadeInUp');
 $(".button-collapse").sideNav();
});

function toggle() {
    var x = document.getElementById('hide');
    var y = document.getElementById('chatButton');
    if (x.style.display == 'none') {
        x.style.display = 'block';
        y.style.backgroundColor =  '#847ae2';
    } else {
        x.style.display = 'none';
    }
}
