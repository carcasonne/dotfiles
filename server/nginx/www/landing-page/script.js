function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    console.log(username);
    console.log(password);

    http.open("get", this.action, false, username, password);
    http.send("");
    if (http.status == 200) {
        document.location = this.action;
    } else {
        alert("Incorrect username and/or password.");
    }
    return false;
}