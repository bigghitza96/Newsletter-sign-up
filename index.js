const form = document.querySelector('form')
const container = document.querySelector('.container')
const success_container = document.querySelector('.success-container')
const email = document.querySelector('#email')
const emailAlert = document.querySelector('.invalid')
const thanksMsg = document.querySelector('#thanks')


form.addEventListener("submit", (e) => {
    e.preventDefault();
   /* console.log(email.value);
   console.log(thanksMsg); */

    function validateEmail(email){
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    if (validateEmail(email.value)) {
        /* console.log("Email is valid"); */
        container.classList.add("hide");
        success_container.classList.remove('hide');
        thanksMsg.innerHTML = `A confirmation email has been sent to ${email.value}. Please open it and click the button inside to confirm your subscription.`;
    } else {
        console.log("Email is invalid");
        email.style.background = "pink";
       /*  console.log(emailAlert); */
        emailAlert.classList.remove('hide');

    }
});