// get diplay elements
const depositDisplay = document.getElementById('deposit-display');
const withdrawDisplay = document.getElementById('withdraw-display');
const balanceDisplay = document.getElementById('balance-display');


// get input element
const depositInput = document.getElementById('deposit-input');
const withdrawInput = document.getElementById('withdraw-input');

// get button element
const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withdraw-btn');
const darkMode=document.getElementById('dark-mode');
const lightMode=document.getElementById('light-mode');

var totalDeposit = 0;
var totalWithdraw = 0;
var totalBalance = 1240;


// EVENT HANDLERS FUNCTIONS

depositBtn.addEventListener('click', function () {

    if (isNaN(parseInt(depositInput.value)) == true) {
        alert('ALERT!!! Empty Field');
        depositInput.value = '';
    }
    else {
        totalDeposit = totalDeposit + parseInt(depositInput.value);
        depositDisplay.innerText = '$' + (totalDeposit);

        totalBalance = totalBalance + parseInt(depositInput.value);
        balanceDisplay.innerText = '$' + totalBalance;
        depositInput.value = '';
    }

    // if (totalBalance >= 1) {
    //     withdrawBtn.removeAttribute('disabled');
    //     document.getElementById('withdraw-alert').style.display = 'none';
    // }
    // else {

    //     withdrawBtn.setAttribute('disabled', true);
    //     document.getElementById('withdraw-alert').style.display = 'block';
    // }
})

// depositBtn.addEventListener('click', function () {

//     totalDeposit = totalDeposit + parseInt(depositInput.value);
//     depositDisplay.innerText = '$' + (totalDeposit);

//     totalBalance = totalBalance + parseInt(depositInput.value);
//     balanceDisplay.innerText = '$' + totalBalance;
//     depositInput.value = '';

//     if (totalBalance >= 1) {
//         withdrawBtn.removeAttribute('disabled');
//         document.getElementById('withdraw-alert').style.display = 'none';
//     }
//     else {

//         withdrawBtn.setAttribute('disabled', true);
//         document.getElementById('withdraw-alert').style.display = 'block';
//     }
// })

withdrawBtn.addEventListener('click', function () {

    if (isNaN(parseInt(withdrawInput.value)) == true) {
        alert('ALERT!! EMPTY FIELD');
        withdrawInput.value = '';
    }
    else {
        totalWithdraw = totalWithdraw + parseInt(withdrawInput.value);
        withdrawDisplay.innerText = '$' + totalWithdraw;

        totalBalance = totalBalance - parseInt(withdrawInput.value);
        balanceDisplay.innerText = '$' + totalBalance;
        withdrawInput.value = '';
    }

    // if (totalBalance <= 0) {
    //     withdrawBtn.setAttribute('disabled', true);
    //     document.getElementById('withdraw-alert').style.display = 'block';


    //     totalBalance = 0;
    //     balanceDisplay.innerText = '$' + totalBalance;
    // }
    // else {
    //     withdrawBtn.removeAttribute('disabled');

    // }
})

withdrawInput.addEventListener('keyup', function (e) {
    // if(((e.target.value)-totalBalance)<=0){
    //     withdrawBtn.setAttribute('disabled',true)
    //     document.getElementById('withdraw-alert').style.display='block'
    // }
    if (parseInt(withdrawInput.value) > totalBalance) {
        withdrawBtn.setAttribute('disabled', true)
        document.getElementById('withdraw-alert').style.display = 'block'
    }
    else {
        withdrawBtn.removeAttribute('disabled');
        document.getElementById('withdraw-alert').style.display = 'none';
    }
})

depositInput.addEventListener('keyup', function (e) {
    if (isNaN(parseInt(depositInput.value)) == true) {
        depositBtn.setAttribute('disabled', true);
        alert('ALERT!! Please enter the amount in number value!');
        depositInput.value = '';
    }
    else {
        depositBtn.removeAttribute('disabled');
    }
})

withdrawInput.addEventListener('keyup', function (e) {
    if (isNaN(parseInt(withdrawInput.value)) == true) {
        withdrawBtn.setAttribute('disabled', true);
        alert('ALERT!! Please enter the amount in number value!');
        withdrawInput.value = '';
    }
    else {
        // withdrawBtn.removeAttribute('disabled');
    }
})

darkMode.addEventListener('click',function(){
    document.body.style.backgroundColor='#333333';
    lightMode.style.display='block';
    darkMode.style.display='none';
    const heading=document.getElementById('heading');
    heading.style.color='white';
})
lightMode.addEventListener('click',function(){
    document.body.style.backgroundColor='white';
    lightMode.style.display='none';
    darkMode.style.display='block';
    heading.style.color='black';
})