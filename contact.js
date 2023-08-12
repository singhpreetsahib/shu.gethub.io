document.addEventListener("DOMContentLoaded", function () {
    const infoform = document.getElementById("infoform");
    const popup = document.getElementById("popup");
    const successMessage = document.getElementById("successMessage");

    resetErrorMessages();

    infoform.addEventListener("submit", function (e) {
        e.preventDefault();
        resetErrorMessages();

        let name = document.getElementById("name").value;
        if (name === "") {
            document.getElementById("nameError").style.display = "block";
            document.getElementById("name").focus();
            return;
        }

        let email = document.getElementById("email").value;
        if (email === "") {
            document.getElementById("emailError").style.display = "block";
            document.getElementById("email").focus();
            return;
        }

        let emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        if (!emailRegex.test(email)) {
            document.getElementById("emailformat_error").style.display = "block";
            document.getElementById("email").focus();
            document.getElementById("email").select();
            return;
        }

        let phoneNumber = document.getElementById("phoneNumber").value;
        if (phoneNumber === "") {
            document.getElementById("phoneNumberError").style.display = "block";
            document.getElementById("phoneNumber").focus();
            return;
        }

        let comments = document.getElementById("comments").value;
        if (comments === "") {
            document.getElementById("commentsError").style.display = "block";
            document.getElementById("comments").focus();
            return;
        }

        let membership = document.getElementById("membership").value;
        if (membership === "") {
            return;
        }

        // Show the success popup
        popup.style.display = "block";
        successMessage.textContent = "Form submitted successfully!";
    });

    infoform.addEventListener("reset", function (e) {
        resetErrorMessages();
        popup.style.display = "none";
    });
});

function resetErrorMessages() {
    let errorElements = document.getElementsByClassName("error");
    for (let i = 0; i < errorElements.length; i++) {
        errorElements[i].style.display = "none";
    }
}
