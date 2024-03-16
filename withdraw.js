// console.log('file connected')
// 
// 1.add event handler with the withdraw button
// 2. get the withdraw amount
// 3.clear the withdeaw field
// 4.get the previous withdraw
// 5.calculate total withdraw amount and set it to the total amount withdraw
// 6.get previous Balance
// 

document.getElementById('btn-withdraw').addEventListener('click',function(){
const withdrawField=document.getElementById('withdraw-field');
const newWithdrawAmountString =withdrawField.value;
const newWithdrawAmount=parseFloat(newWithdrawAmountString)
// console.log(newWithdrawAmount);
//step3
withdrawField.value='';
// step-4
const withdrawTotalElement=document.getElementById('withdraw-total');
const previousWithdrawTotalString =withdrawTotalElement.innerText;
const previousWithdrawTotal=parseFloat(previousWithdrawTotalString);
// step -5

const newWithdrawTotal=previousWithdrawTotal + newWithdrawAmount;
withdrawTotalElement.innerText=newWithdrawTotal;
// step -6
const balanceElement=document.getElementById('balance-total');
const previousBalanceTotalString =balanceElement.innerText;
const previousBalanceTotal=parseFloat(previousBalanceTotalString);
// step - 7
const newBalanceTotal=previousBalanceTotal-newWithdrawAmount;
balanceElement.innerText=newBalanceTotal;



})
