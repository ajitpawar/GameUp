$(function() {

  Parse.$ = jQuery;

  // Initialize Parse with your Parse application javascript keys
  Parse.initialize("gtqTs8Mqc9MdXtS8UiFWBIhcxCjAS1SVwuMwnl26", "9VawOubEqtZK271El0DzWO8wDCSy8txlXsSUwcLZ");

  $('.signup-form button').click(createUser);
  $('.login-form button').click(loginUser);

  function createUser(){
    var user = new Parse.User();
    var username = $('#signup-username').val();
    var password = $('#signup-password').val();
    user.set("username", username);
    user.set("password", password);

    user.signUp(null, {
      success: function(user) {
        window.location.href="home.html"; 
      },
      error: function(user, error) {
        // Show the error message somewhere and let the user try again.
        alert("Error: " + error.code + " " + error.message);
      }
    });

    return false;
  }

  function loginUser(){
    var username = $('#login-username').val();
    var password = $('#login-password').val();

    Parse.User.logIn(username, password, {
      success: function(user) {
        window.location.href="home.html";  
      },
      error: function(user, error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });

    return false;
  }
});
