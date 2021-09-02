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
    let depositAmount = document.querySelector('#deposit-amount').value;
    let depositMoney = parseFloat(depositAmount);
    

    let currentDeposit = document.querySelector('#current-deposit').innerText;
    let currentDepositAmount = parseFloat(currentDeposit);
    let totalDeposit = currentDepositAmount + depositMoney;
    document.querySelector('#current-deposit').innerText = totalDeposit;
    document.querySelector('#deposit-amount').value = "";
})