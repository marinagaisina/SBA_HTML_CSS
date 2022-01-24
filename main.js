'use strict';
const loginFormOpenClose = () => {
    const article = document.getElementById("article_display");
    if (article.classList.contains('d-none')) {
        article.classList.remove('d-none');
        article.classList.add("d-block");
    } else {
        article.classList.remove('d-block');
        article.classList.add('d-none');
    }
}
// Example starter JavaScript for disabling form submissions if there are invalid fields
// Fetch all the forms we want to apply custom Bootstrap validation styles to
let forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission
Array.prototype.slice.call(forms)
    .forEach((form) => {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated');
        }, false)
    })


//HTML: onclick="checkValidity(document.login_form.login.value, document.login_form.pass.value)"

//  const checkValidity = (email, pass) => {
//     let isEmailValid = validateEmail(email);
//     let isPassValid = (pass.length < 5);
//     if (!isEmailValid || !isPassValid) {
//         return false;
//     }
//     return true;
//  }
//
// const validateEmail = (email) => {
//     let atpos = email.indexOf("@");
//     let dotpos = email.lastIndexOf(".");
//     return !(atpos < 1 || (dotpos - atpos < 2));
// }