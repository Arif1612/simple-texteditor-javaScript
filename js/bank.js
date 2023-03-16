// DEPOSIT BTN
document.getElementById('deposit-btn').addEventListener('click', function () {
    // previous deposit amount
    let depositShown = document.getElementById('deposit-amount');
    let PreviousDepositAmount = parseFloat(depositShown.innerText);
   
    // new deposit amount
    let depositField = document.getElementById('deposit-field');
    let newDepositAmount = parseFloat(depositField.value);
    depositField.value = '';

    // Total Deposit Amount
    let totalDepositAmount = PreviousDepositAmount + newDepositAmount;
    depositShown.innerText = totalDepositAmount;
    console.log(totalDepositAmount);

    // previous Balance
    let balanceField = document.getElementById('balance');
     
    let balanceFieldAmount = parseFloat(balanceField.innerText);

    let totalBalanceFieldAmount = newDepositAmount + balanceFieldAmount;
    balanceField.innerText = totalBalanceFieldAmount;


    
})