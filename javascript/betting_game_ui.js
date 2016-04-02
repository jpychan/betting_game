(function() {

$(document).ready(function() {

  var pot = 100;
  var potSize = 200;

  var betArea = $('#input');
  $('#bet-submit').on('click', function() {

  if (pot < 5 ) {
    alert('You lost all your money');
    return
  }

  var betAmount = +$('input#bet-amount').val();
  var yourGuess = +$('input#your-guess').val();
  var answer = Math.floor(Math.random()*11);
  var diff = Math.abs(answer - yourGuess);

  showResult(betAmount, yourGuess, answer);

  if (yourGuess === answer) {
    pot = pot + betAmount;
    $('#pot-amount').text(pot)
    $('#result').find('h3').text('You won ' + betAmount + '!');
    $('#display-bet').text('+' + betAmount).removeClass('red').addClass('green');
  }
  else if (diff === 1) {
    pot = pot;
    $('#pot-amount').text(pot);
    $('#result').find('h3').text("You didn't lose any money!");
    $('#display-bet').text('');
  }
  else {
    pot = pot - betAmount;  
    $('#pot-amount').text(pot);
    $('#result').find('h3').text('You lost ' + betAmount + '!');
    $('#display-bet').text('-' + betAmount).removeClass('green').addClass('red');  
  }

    animatePot(pot);
    displayBet();
    
  });

  $('#reset').on('click', function() {
    pot = 100;
    animatePot(pot);
    $('#pot-amount').text(pot);
    nextBet();
  });

  $('#play-again').on('click', function() {
    nextBet();
  });

  function nextBet() {
    $('#your-bet-input').val('');
    $('#your-guess-input').val('');
    $('#your-bet-input').show();
    $('#your-guess-input').show();
    $('#bet-submit').show();
    $('#bet-amount').text('');
    $('#your-guess').text('');
    $('#the-number').text('');
    $('#result').find('h3').text('');
    $('#replay').hide();
  };

  function showResult(betAmount, yourGuess, answer) {
    $('#your-bet-input').hide();
    $('#bet-amount').text(betAmount);
    $('#your-guess-input').hide();
    $('#your-guess').text(yourGuess);
    $('#bet-submit').hide();
    $('#answer > h3').show();
    
    $('#the-number').text(answer);
    $('#replay').show();
  };

  function animatePot(pot) {
    var potSize = (pot/100) * 200;
    $('.pot-image').animate({
        width: potSize + "px",
        height: potSize + "px"}, 1000);
  };
  function displayBet() {
    $('#display-bet').removeClass('no-display move-up');
      setTimeout(function() {
        $('#display-bet').addClass('move-up');}, 500);
      setTimeout(function() {
        $('#display-bet').addClass('no-display');}, 3000);
  };
});

})();