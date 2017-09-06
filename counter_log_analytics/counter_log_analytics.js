$(document).ready(function(){
  $('#title_qit').addClass('animated fadeInDown');
  $('#animate_row').addClass('animated fadeInUp');
  $('#title2').addClass('animated slideInLeft');
  $('#chatButton').addClass('animated rotateInDownRight');
    $('select').material_select();



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
var flag = 0;


function serveToggle()
{

  console.log("serveToggle");
  console.log("val of flag: " + flag);
  if(flag==0)
  {
    console.log("entered 1");
    document.getElementById('serve2').style.display= 'block';
    document.getElementById('serve').style.display= 'none';
    $("#dashboardMain *").attr("disabled", true);
    $('#dashboardMain').addClass("blackout");
    flag =1;
  }
  else if(flag ==1)
  {
    document.getElementById('serve2').style.display= 'none';
    document.getElementById('serve').style.display= 'block';
    $('#dashboardMain').removeClass("blackout");
    $("#dashboardMain *").attr("disabled", false);

    flag = 0;
  }
}
