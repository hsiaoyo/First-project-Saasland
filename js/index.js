$(document).ready(function(){
$('#menu-trigger').click(function(e){
  e.preventDefault();
  $('.trigger-nav').fadeToggle();
});

$('.buttons a').click(function(e){
  e.preventDefault();
  var index = $(e.currentTarget).index();
  $('.buttons a').removeClass('switch-button').eq(index).addClass('switch-button');
})

});
