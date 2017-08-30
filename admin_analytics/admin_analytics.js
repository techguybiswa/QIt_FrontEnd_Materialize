$(document).ready(function(){
  $('#title_qit').addClass('animated fadeInDown');
  $('#animate_row').addClass('animated fadeInUp');
  $('#title2').addClass('animated slideInLeft');
  $('#chatButton').addClass('animated rotateInDownRight');

  // $('#chart_div').addClass('animated fadeInUp');
  // $('#chart_div_2').addClass('animated fadeInUp stayHidden');
  // $('#chart_div_3').addClass('animated fadeInUp stayHidden');
  console.log("Hellooooooooooooooooooooooooooooooo");

});

function toggle() {
    //console.log("CLicked");

    var x = document.getElementById('hide');
    var y = document.getElementById('chatButton');
    if (x.style.display == 'none') {
        x.style.display = 'block';
        y.style.backgroundColor =  '#575c82';
        // z.style.color:
    } else {
        x.style.display = 'none';
    }
}
