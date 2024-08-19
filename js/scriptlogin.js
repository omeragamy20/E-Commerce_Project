var btnlog = document.getElementById("btnlog");

//when user click direct him to index.html
btnlog.addEventListener("click", function (event) {
  var user = document.getElementById("email");
  var pass = document.getElementById("password");
  event.preventDefault();

  login(user.value, pass.value);
});

//add user function
function addUser(user, pass) {
  var user1 = {
    username: user,
    password: pass,
  };
  localStorage.setItem("user1", JSON.stringify(user1));
}

// validate username and password
function login(username, pass) {
  var counter = localStorage.getItem("counter");
  console.log(counter);

  for (var i = 0; i <= counter; i++) {
    var user = localStorage.getItem(`user${i}`);
    user = JSON.parse(user);
    if (user != null && username == user.username && pass == user.password) {
      sessionStorage.setItem("currentUser", username);
      window.open("../INDEX1.html");
      break;
    }
  }
}
// var label = document.getElementById("label1");
// var user = localStorage.getItem("user1");
// user = JSON.parse(user);
// if (name === user.username && pass === user.password) {
//   label.style.color = "white";
//   window.open("../index.html");
// } else {
//   label.style.color = "red";
// }

//---------------------------------------Sign up functions --------------------------------
//   localStorage.setItem("counter",0);

// console.log(localStorage.getItem("counter"));
