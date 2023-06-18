const getSignInButton = document.getElementById("signinBtn").addEventListener("click", (e)=> {
    e.preventDefault()
   console.log("Clcik");

   var email = document.getElementById('inputEmail4').value;
   var password = document.getElementById('inputPassword4').value;


    if (password === '') {
        alert('Please enter a password.');
        return false;
    }

     if (email === '') {
        alert('Please enter your email.');
        return false;
    }

    if (email !== 'ifeoluwaamida@gmail.com') {
        alert('This account does not exist.');
        return false;
    }

     if (password !== '12346') {
        alert('Please enter a valid password.');
        return false;
    }

    window.location.href = 'home.html';


});
