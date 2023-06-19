  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBZPjy8lKzrBFc26QVSlXhQhBZHDa_SFOI",
    authDomain: "new-auth-3a48c.firebaseapp.com",
    projectId: "new-auth-3a48c",
    storageBucket: "new-auth-3a48c.appspot.com",
    messagingSenderId: "448713324462",
    appId: "1:448713324462:web:44b6c21ebd4d95797efa3f"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

//   signup function
let signUpButton = document.getElementById("signup");
signUpButton.addEventListener("click", (e) =>{
    //prevent default from submission behaviour
    e.preventDefault();
    console.log("clicked");

    
    var email = document.getElementById("inputEmail");
    var password = document.getElementById("inputPassword");

    auth
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) =>{
    location.reload();
    alert("user signed up sucessful");

    //signed in

    var user = userCredential.user;
})


    .catch((error) =>{
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("error code", errorCode);
        console.log("error Message", errorMessage);
        alert(errorMessage);
    });
});

//signin function

    let signInButton = document.getElementById("signin");
    signInButton.addEventListener("click", (e) =>{
    e.preventDefault();
    console.log("sign in clicked");

    var email = document.getElementById("inputEmail");
    var password = document.getElementById("inputPassword");

    auth
    .signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
        var user = userCredential.user;
        console.log("user", user.email);
        window.location = "home.html";
    })

    .catch((error) =>{
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);

    })



});

