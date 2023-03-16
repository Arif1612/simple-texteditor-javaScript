// withdraw BTN
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // previous withdraw amount
    let withdrawShown = document.getElementById('withdraw-amount');
    let PreviousWithdrawAmount = parseFloat(withdrawShown.innerText);
  
    
    // new withdraw amount
    let withdrawField = document.getElementById('withdraw-field');
    let newWithdrawAmount = parseFloat(withdrawField.value);
    withdrawField.value = '';
    

    // Total withdraw Amount

    
    let totalWithdrawAmount = PreviousWithdrawAmount + newWithdrawAmount;
    withdrawShown.innerText = totalWithdrawAmount;
    

    // previous Balance
    let balanceField = document.getElementById('balance');
     
    let balanceFieldAmount = parseFloat(balanceField.innerText);
    
    if (balanceFieldAmount > totalWithdrawAmount-500) {
        let totalBalanceFieldAmount =  balanceFieldAmount-newWithdrawAmount;
        balanceField.innerText = totalBalanceFieldAmount;    
    }
    else {
        withdrawShown.innerText = PreviousWithdrawAmount;
        alert('age tk vor bata');
    }
   
})