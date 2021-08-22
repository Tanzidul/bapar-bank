document.getElementById('submit-button').addEventListener('click', function () {
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;
    const passwordField = document.getElementById("user-password");
    const userPassword = passwordField.value;

    if (userEmail == 'tanzidul050@gmail.com' && userPassword == 'tanzidul050') {
        window.location.href = 'bank-page.html';
    }

})