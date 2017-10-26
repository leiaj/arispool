$(document).ready(function() {
  console.log("Hi, I'm loaded!")
  infoClick()

  $('#my_popup').popup({
    color: '#F65915',
    opacity: 10.0
  });

})

function infoClick(){
  $('#info').click(function(){
    console.log("I'm being clicked")
  })
}
