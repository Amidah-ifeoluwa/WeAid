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

  auth.onAuthStateChanged(function (user){
    if (user){
        var email = user.email;
        var user = document.getElementById("user");
        var text = document.createTextNode(email);
        user.appendChild(text);
        console.log(user);
        //is signed in
    }else{
        alert("user not authenticated, kindly login or signup");
        window.location = "index.html";
    }
  });

  //logout function

  let signOutButton = document.getElementById("signout");
  signOutButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("logout clicked");
    auth.signOut();
    alert("signed out");
    window.location = "index.html"
  });