$(document).ready(function(){
  $('#title_qit').addClass('animated fadeInDown');
  $('#animate_row').addClass('animated fadeInUp');
  // Initialize collapse button
 $(".button-collapse").sideNav();
 // Initialize collapsible (uncomment the line below if you use the dropdown variation)
 //$('.collapsible').collapsible();
    // $("#chatButton").click(function(){
    //     $("#hide").toggle();
    // });
    //
    // $("button").click(function(){
    //       $("p").toggle();
    //   });\
});

$(document).ready(function() {
$("#chatButton").click(function() {
$("#hide").hide();
});
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
