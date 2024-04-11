# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview
### The challenge
Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page


### Links

- Solution URL: [Add solution URL here]([https://your-solution-url.com](https://bigghitza96.github.io/Newsletter-sign-up/))
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned
A well-structured regex pattern is crucial for validating email addresses effectively. Once validated, appropriate actions such as displaying success messages or highlighting errors can enhance user experience and ensure accurate data submission.

```js
 
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
```


### Useful resources

- [w3schools](hhttps://www.w3schools.com/) - 

## Author

- Website - [Gheorghe Eftimie](https://eftimieportofolio.com/)
- Frontend Mentor - [@bigghitza96](https://www.frontendmentor.io/profile/bigghitza96)



