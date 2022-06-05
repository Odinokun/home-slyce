module.exports = function() {

  // begin mobile menu
  $('#burger input').on('click', function (){
    $('#menu').toggleClass('active');
    $('body').toggleClass('no-scroll');
  })
  // end mobile menu

};