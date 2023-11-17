$(document).ready(function () {
  $("#login").click(function (e) {
    e.preventDefault();
    var uid = $('#uid').val();
    var password = $('#pwd').val();
    var role = $("#role").val();
    console.log(role);
    if (uid == "" || password == "" || role == "select") {
      alert("Please fill all fields");
    }
    else {
      var data = JSON.parse(localStorage.getItem("data"));
      if (role == "Teacher") {
        if (!data["login"]["teacher"][uid]) {
          alert("No such user found");
          window.location.reload();
        }
        else if (data["login"]["teacher"][uid] == password) {
          data["current_login"]["role"] = "teacher";
          data["current_login"]["uid"] = uid;
          localStorage.setItem("data", JSON.stringify(data));
          alert("Logged in successfully");
          location.href="./index.html";
        }
        else {
          alert("Invalid credentials");
          window.location.reload();
        }
      }
      else {
        if (!data["login"]["student"][uid]) {
          alert("No such user found");
          window.location.reload();
        }
        else if (data["login"]["student"][uid] == password) {
          data["current_login"]["role"] = "student";
          data["current_login"]["uid"] = uid;
          localStorage.setItem("data", JSON.stringify(data));
          alert("Logged in successfully");
          location.href="./index.html";
        }
        else {
          alert("Invalid credentials");
          window.location.href="";
        }
      }
    }
  })
  $("#forgot_password").click(function(){
    var a = prompt("enter uid");
    var b = prompt("enter role");
    var data = JSON.parse(localStorage.getItem("data"));
    alert(data["login"][b][a]?"your password is: "+data["login"][b][a]:"No such user");
  })
})