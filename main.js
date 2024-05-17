function validation() {
    if (document.Form1.Firstname.value == "") {
        document.getElementById("result").innerHTML = "Enter First Name";
        return false;
    }
    else if (document.Form1.Lastname.value == "") {
        document.getElementById("result").innerHTML = "Enter Last Name";
        return false;
    }
    else if (document.Form1.Email.value == "") {
        document.getElementById("result").innerHTML = "Enter Email Address";
        return false;
    }
    else if (document.Form1.Password.value == "") {
        document.getElementById("result").innerHTML = "Enter Password";
        return false;
    }
    else if (document.Form1.cPassword.value == "") {
        document.getElementById("result").innerHTML = "Enter Cornfirm Password";
        return false;
    }
    else if (document.Form1.cPassword.value !== document.Form1.Password.value) {
        document.getElementById("result").innerHTML = "Password Doesn't Match";
        return false;
    }
}