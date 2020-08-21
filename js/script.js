$(document).ready(function(){

//Hide text blocks
  $('#yellowText').hide()
  $('#blueText').hide()

//When hovering over yellowSide, show yellowText swap other side with gray
  $('#yellowSideFullColor').mouseover(function(){
    $('#yellowText').show()
    $('#blueSideFullColor').attr('src','imgs/figure1_grayRight.png')
  });

//When not hovering, text hides
$('#yellowSideFullColor').mouseout(function(){
  $('#yellowText').hide()
  $('#blueSideFullColor').attr('src','imgs/figure1_blueSide.png')
});

//When hovering over blueSide, show blueText and swap other side with gray
  $('#blueSideFullColor').mouseover(function(){
    $('#blueText').show()
    $('#yellowSideFullColor').attr('src','imgs/figure1_grayLeft.png')
  });

//When not hovering, text hides
$('#blueSideFullColor').mouseout(function(){
  $('#blueText').hide()
  $('#yellowSideFullColor').attr('src','imgs/figure1_yellowSide.png')
});



});
