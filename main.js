var alertBox = document.querySelector(".alert");

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBAX1VKFu30I9z_ME7-ev810UoVTpcQMyg",
  authDomain: "contact-form-4dfd0.firebaseapp.com",
  databaseURL: "https://contact-form-4dfd0.firebaseio.com",
  projectId: "contact-form-4dfd0",
  storageBucket: "contact-form-4dfd0.appspot.com",
  messagingSenderId: "1044491242077"
};
firebase.initializeApp(config);

//Reference messages collections
var messagesRef = firebase.database().ref("messages");

//Listen for form submit
document.getElementById("contactform").addEventListener("submit", submitform);

function submitform(e) {
  e.preventDefault();

  //Get values
  var name = getInputVal("name");
  var company = getInputVal("company");
  var email = getInputVal("email");
  var phone = getInputVal("phone");
  var message = getInputVal("message");

  //save message
  saveMessage(name, company, email, phone, message);

  //show alert and set animation effect for it
  if (alertBox.classList.contains("fadeOut") ) {
      alertBox.classList.remove("fadeOut");
    }
    alertBox.classList.add("fadeIn");
      //document.querySelector('.alert').style.display = 'block';
  alertBox.style.display = "block";

  //hide alert after 3 seconds
  setTimeout(function() {
    alertBox.classList.remove("fadeIn");
    alertBox.classList.add("fadeOut");
    alertBox.style.display = "none";

    // document.querySelector('.alert').style.display = 'none';
  }, 5000);

  document.getElementById("contactform").reset();
}

//function to get from values
function getInputVal(id) {
  return document.getElementById(id).value;
}

//save the massege to firebase
function saveMessage(name, company, email, phone, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message
  });
}
