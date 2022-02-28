function validate() {
    var fname = document.myForm.fname.value;
    var lname = document.myForm.lname.value;
    var email = document.myForm.email.value;
    var answer = document.myForm.text.value;

    var validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var validNameRegex = /^[a-zA-Z]+$/;
    var dotpos = email.lastIndexOf(".");
    var atpos = email.indexOf("@");

    var score = 0;

    var selectedRadio = document.forms["myForm"]["favoriteLanguage"].value;
    if (selectedRadio == "Java") {
        score++;
    }

    var check1 = document.forms["myForm"]["check1"].checked;
    var check2 = document.forms["myForm"]["check2"].checked;
    var check3 = document.forms["myForm"]["check3"].checked;
    var check4 = document.forms["myForm"]["check4"].checked;
    if (check1 == true) {
        score++;
    }
    if (check4 == true) {
        score++;
    }

    var checkFormValid = true;
    if (!check1 && !check2 && !check3 && !check4) {
        checkFormValid = false;
    }

    if (fname == "" || !fname.match(validNameRegex) || lname == "" || !lname.match(validNameRegex)) {
        alert("Invalid name");
        return false;
    } else if (email == "" || !email.match(validEmailRegex) || atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        alert("Invalid email address");
        return false;
    } else if (selectedRadio == "" || !checkFormValid) {
        alert("You must choose at least one option");
        return false;
    } else if (answer == "") {
        alert("You must enter an answer")
        return false;
    }
    document.getElementById("r1").style.color = "red";
    document.getElementById("r2").style.color = "green";
    document.getElementById("r3").style.color = "red";
    document.getElementById("r4").style.color = "red";

    document.getElementById("c1").style.color = "green";
    document.getElementById("c2").style.color = "red";
    document.getElementById("c3").style.color = "red";
    document.getElementById("c4").style.color = "green";

    if (answer.toUpperCase() == "C++") {
        score++;
        document.getElementById("answer").style.color = "green";
        document.getElementById("text").value = "C++";
    } else if (answer.toUpperCase() != "C++") {
        document.getElementById("answer").style.color = "red";
        document.getElementById("text").value = "Correct answer is: C++";
    }

    alert("Score: " + score + "/4")

    return false;
}