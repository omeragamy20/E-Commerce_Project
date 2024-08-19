var btnsignup = document.getElementById("signup");
btnsignup.addEventListener("click", function () {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;
  var confirmpass = document.getElementById("co-password").value;
  CreateAccount(name, email, pass, confirmpass);
});

function CreateAccount(_name, _username, pass, _confirm) {
  var counter = localStorage.getItem("counter"); //1

  var user = {
    name: _name,
    username: _username,
    password: pass,
    confirm: _confirm,
  };
  if (pass === _confirm && pass != "") {
    alert(counter);
    localStorage.setItem(`user${++counter}`, JSON.stringify(user));
    localStorage.setItem("counter", counter);
    setTimeout(() => {
      window.open("./index.html");
    }, 3);
  } else if (pass != _confirm) {
    alert("the 2 passwords are not identical");
  } else if (_name == "" || _username == "" || pass == "" || _confirm == "") {
    alert("Fields Can not be empty");
  }
} 


 
