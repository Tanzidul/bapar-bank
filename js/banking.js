// handal deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {

    // -----------
    // get the amout deposited
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmount = depositInput.value;
    // const depositTotal = document.getElementById('deposit-total');

    // depositTotal.innerText = depositAmount;
    // // clear the deposit input field
    // depositInput.value = '';
    // -------------

    // get the amout deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmoutText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmoutText);

    const depositTotal = document.getElementById('deposit-total')
    const previousDepositText = depositTotal.innerText;
    const previousDeposit = parseFloat(previousDepositText)

    const newDepositTotal = newDepositAmount + previousDeposit;

    depositTotal.innerText = newDepositTotal;
    // total balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText
    const previousBalance = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalance + newDepositAmount;

    balanceTotal.innerText = newBalanceTotal;



    // clear the deposit input field
    depositInput.value = '';
})

//handal withdraw balance
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);

    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal
    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;

    // clear input
    withdrawInput.value = '';



})
