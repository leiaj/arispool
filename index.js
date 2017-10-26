$(document).ready(function() {
  console.log("Hi, I'm loaded!")
  infoClick()

  $('#my_popup').popup({
    color: '#F7EA34',
    opacity: 10.0
  });

})

function infoClick(){
  $('#info').click(function(){
    console.log("I'm being clicked")
  })
}
