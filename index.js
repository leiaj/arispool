$(document).ready(function() {
  console.log("Hi, I'm loaded!")
  infoClick()

})

function infoClick(){
  $('#info').click(function(){
    console.log("I'm being clicked")
  })
}
