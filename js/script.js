
const getSignUpForm = document.getElementById("signup").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Sign Up button clicked");


    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var zip = document.getElementById('zip').value;

    if (name === '') {
        alert('Please enter your name.');
        return false;
    }

    if (email === '') {
        alert('Please enter your email.');
        return false;
    }

    if (phone === '') {
        alert('Please enter a message.');
        return false;
    }

    if (password === '') {
        alert('Please enter a password.');
        return false;
    }

    if(password.length < 5){
       alert("Please make sure password characters is more than 6");
       return false;

    }

    if (address === '') {
        alert('Please enter a address.');
        return false;
    }
    if (city === '') {
        alert('Please enter a city.');
        return false;
    }
    if (state === '') {
        alert('Please enter a state.');
        return false;
    }

    if (zip === '') {
        alert('Please enter a zip.');
        return false;
      }

    
    window.location.href = 'signin.html';

});




