$(document).ready(function(){
  $('#title_qit').addClass('animated fadeInDown');
  $('#animate_row').addClass('animated fadeInUp');
  $('#title2').addClass('animated slideInLeft');
  $('#chatButton').addClass('animated rotateInDownRight');
  $('#counterDetails').addClass('animated bounceInLeft');

  // $('#chart_div').addClass('animated fadeInUp');
  // $('#chart_div_2').addClass('animated fadeInUp stayHidden');
  // $('#chart_div_3').addClass('animated fadeInUp stayHidden');
  console.log("Hellooooooooooooooooooooooooooooooo");

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
// function showHourly()
// {
//   document.getElementById('chart_div').style.display = 'block';
//
//
//   document.getElementById('chart_div_2').style.display = 'none';
//   document.getElementById('chart_div_3').style.display = 'none';
//   document.getElementById('top_x_div').style.display = 'none';
//
// }
// function showDaily()
// {

  // document.getElementById('chart_div_2').style.display = 'block';
  //
  // document.getElementById('chart_div_2').style.height = '';
  // document.getElementById('chart_div_2').style.width = 'block';
  //
  // document.getElementById('chart_div').style.display = 'none';
  // document.getElementById('chart_div_3').style.display = 'none';
  // document.getElementById('top_x_div').style.display = 'none';
//   document.getElementById('chart_div_2').style.height = '500px';
//   document.getElementById('chart_div_2').style.width = '1100px';
//   document.getElementById('chart_div').style.height = '50px';
//   document.getElementById('chart_div').style.width = '110px';
//
//
//
//
//
//
// }
// function showWeekly()
// {
//   document.getElementById('chart_div_3').style.display = 'block';
//   document.getElementById('chart_div').style.display = 'none';
//   document.getElementById('chart_div_2').style.display = 'none';
//   document.getElementById('top_x_div').style.display = 'none';
// }
// function showPeak()
//
// {
//   document.getElementById('top_x_div').style.display = 'block';
//   document.getElementById('chart_div_3').style.display = 'none';
//   document.getElementById('chart_div').style.display = 'none';
//   document.getElementById('chart_div_2').style.display = 'none';
//
// }
