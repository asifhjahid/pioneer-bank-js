//login button event handler

let button = document.querySelector('#submitBtn');
button.addEventListener('click',()=>{
     let loginPage = document.querySelector('#login-page');
     loginPage.style.display='none';
     let transaction = document.querySelector('#transaction');
     transaction.style.display='block'
})

//deposit button event handler

let depositBtn =  document.querySelector('#deposit-btn');
depositBtn.addEventListener('click',()=>{
    let depositMoney = inputValue('#deposit-amount');
    
    if(depositMoney < 0){
        alert('Deposit Number cannot be negative.');
    }
    else{
        updatedAmount('#current-deposit',depositMoney)
        // let currentDeposit = document.querySelector('#current-deposit').innerText;
        // let currentDepositAmount = parseFloat(currentDeposit);
        // let totalDeposit = currentDepositAmount + depositMoney;
        // document.querySelector('#current-deposit').innerText = totalDeposit;
        document.querySelector('#deposit-amount').value = "";
        
        updatedAmount("#current-balance",depositMoney)
    
        // let currentBalance = document.querySelector('#current-balance').innerText;
        // let currentBalanceAmount = parseFloat(currentBalance);
        // let totalBalance = currentBalanceAmount + depositMoney;
        
        // document.querySelector('#current-balance').innerText = totalBalance;
    }
   
})
 

//withdraw button event handler

let withdrawBtn = document.querySelector('#withdraw-btn');
withdrawBtn.addEventListener('click',()=>{
    let withdrawAmount = inputValue('#withdraw-amount');
    updatedAmount('#current-withdraw',withdrawAmount);
    updatedAmount("#current-balance",-1 * withdrawAmount)

    document.querySelector('#withdraw-amount').value = "";
})
 

function inputValue(id){
    let amount = document.querySelector(id).value;
    let inputAmount = parseFloat(amount);
    return inputAmount;
}

function updatedAmount(id,depositMoney){
    let currentMoney = document.querySelector(id).innerText;
    let currentNumberMoney = parseFloat(currentMoney);
    let total = currentNumberMoney + depositMoney;
    document.querySelector(id).innerText = total;
}