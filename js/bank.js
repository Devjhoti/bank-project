const submitBtn = document.getElementById('submit-btn');
const emailField = document.getElementById('email-field');
const passwordField = document.getElementById('password-field');
const alertText=document.getElementById('alert-text');

submitBtn.addEventListener('click', function () {
    // get field value
    let userEmail = emailField.value;
    let userPassword = passwordField.value;

    console.log(userEmail);
    console.log(userPassword);

    // check value authenticity
    if(userEmail=='swaccha01@gmail.com'&&userPassword=='swaccha2155'){
        
        window.location.href='./banking.html'
    }
    else{
        alertText.style.display='block';
    }
})