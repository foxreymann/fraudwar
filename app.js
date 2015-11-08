$('#timer').click(function() {
console.log('timer');
window.setTimeout(function() {
console.log('change');
  $('#change-me').attr('data-target','#modal-stage-fraud');
}, 5000);

});
