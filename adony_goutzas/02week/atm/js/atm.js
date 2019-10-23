



// $('#checking-deposit').on('click') function(){
//
//
//   $('body').css ('background-color','red');
// });
//
// balance function


// change colour by clicking and runnig function
//jQuery Event Listener Quiz
//$(____).___(_____, _____);


// get checking amount from checking-balance Input

//make sure its an integer and convert to integer

// check if deposit button or withdrawl button is clicked

// if deposit add to checking balance
// if withdraw deduct from checking showBalance

//add to checking balance  $('#checking")

// both cases if balance is 0 change css to red.

//$('#checking-balance').toggle(function()


const checkForZero = function () {
  const checkingBalance = +('#checking-balance').text().slice(1);
  if (checkingBalance<=0) {
    $('#checking-balance').addClass('zero');

  }
}


$(document).ready(function(){

$('#checking-deposit').on('click', function() {
  // get deposit amounts
  const deposit = + $('#checking-amount').val();
  const currentBalance =+ $('checking-balance').text().slice(1);
  const newBalance = currentBalance + deposit;
    // update page
  $('#checking-balance').text('$' + newBalance);
  checkForZero(0);
});

$('#checking-withdraw').on('click', function(){
  // get the amount
  const amount = + $('#checking-amount').val();

  //get the current balacne
  const currentBalance = + $('#checking-balance').text().slice(1);

  const otherBalance + + $ ('#saving-balance').text().slice(1);
  const currentBalance = currentBalance + otherBalance;

  const newBalance= currentBalance - amount;

  if (newBalance>=0) {
    $('#checking-balance').text('$' + newBalance);
  }else if (amount <= totalBalance){
    $('#checking-balance').text('$0');
    //here, new balance is the negative money
  }





  // cal the new balance
  //if there is enought money
  //update the page


})



$('#savings-deposit').on('click', function() {
  const deposit = + $('#savings-amount').val();
  const currentBalance =+ $('savings-balance').text().slice(1);
  const newBalance = currentBalance + deposit;
  $('#savings-balance').text('$' + newBalance);


});
