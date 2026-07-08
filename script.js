import {auth} from "./firebase.js";


import {

signInWithEmailAndPassword

}

from

"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";



window.login=function(){


let email =
document.getElementById("username").value;


let password =
document.getElementById("password").value;



signInWithEmailAndPassword(
auth,
email,
password
)


.then(()=>{


alert("Login successful");


window.location="home.html";


})


.catch(()=>{


alert("Incorrect email or password");


});


}