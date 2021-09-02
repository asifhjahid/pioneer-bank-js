let button = document.querySelector('#submitBtn');
button.addEventListener('click',()=>{
     let loginPage = document.querySelector('#login-page');
     loginPage.style.display='none';
     let transaction = document.querySelector('#transaction');
     transaction.style.display='block'
})