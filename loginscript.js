function validate() {

    if (document.Form.username.value == "") {
        alert("ALERT! Please enter Username!");
        return false;
    }
    if (document.Form.password.value == "") {
        alert("ALERT! Please enter Password!");
        return false;
    }
    return (true);
}