function validate() {
    let company = $('#company');
    company.on('change', extend);   

    function extend(ev) {
        if ($('#company').is(':checked')) {
            $('#companyInfo').css('display', 'inline');
        }
        else {
            $('#companyInfo').css('display', 'none');
        }
        ev.preventDefault();
    }

    let submit = $('#submit').on('click', function (ev) {
        let username = $('#username');
        let email = $('#email');
        let password = $('#password');
        let confirmPassword = $('#confirm-password');
        let companyNumber = $('#companyNumber');
        
        let validUsername =setStyle(checkUsername(username), username);
        let validPassword = setStyle(checkPassword(password, confirmPassword), password);
        setStyle(checkPassword(password, confirmPassword), confirmPassword);
        let validEmail = setStyle(checkEmail(email), email);
        let validCompany = setStyle(checkCompanyNumber(companyNumber), companyNumber);

        if (validUsername && validPassword && validEmail) {
            if ($('#company').is(':checked')) {
                if (validCompany) {
                    $('#valid').css('display', 'inline');
                }
                else {
                    $('#valid').css('display', 'none');
                }
}
        } else {
            $('#valid').css('display', 'none')
        }

        ev.preventDefault();
    })

    function checkPassword(password, confirmPassword) {
        let pattern = /^[\w]{5,15}$/g;
        let regex = new RegExp(pattern);
        if (password.val() !== confirmPassword.val()) {
            return false;
        }

        if (regex.test(password.val())) {
            return true
        }

        return false;
    }

    function checkEmail(email) {
        let pattern = /.*@.*\..*/g;
        let regex = new RegExp(pattern);

        if (regex.test(email.val())) {
            return true
        } else{
            return false;
        }

    }

    function checkUsername(username) {
        let pattern = /^[A-Za-z0-9]{3,20}$/g
        let regex = new RegExp(pattern);

        if (regex.test(username.val())) {
            return true;
        } 

        return false;
    }

    function checkCompanyNumber(companyNumber) {
        let currentNumber = Number(companyNumber.val());
        if (currentNumber >= 1000 && currentNumber <= 9999) {
            return true;
        } else {
            return false;
        }
    }

    function setStyle(isCorrect, field){
        if (!isCorrect) {
            field.css('border-color', 'red')
            return false;
        }
        return true;
    }
}
