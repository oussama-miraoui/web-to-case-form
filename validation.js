let submit = document.getElementById("submit")
let nom = document.getElementById("00N8d00000Ti2Ae")
let prenom = document.getElementById("00N8d00000Ti2Ao")
let email = document.getElementById("email")
let phone = document.getElementById("00N8d00000Ti2D4")
let emailMessage = document.getElementById("emailMessage")
let phoneMessage = document.getElementById("phoneMessage")
let fieldRequired = document.querySelectorAll('.fieldRequired')

submit.addEventListener('click', (e)=>{
    if(nom.value==="" || prenom.value==="" || email.value==="" || phone.value===""){
        e.preventDefault();
        for (let i = 0; i < fieldRequired.length; i++) {
            fieldRequired[i].innerHTML="Champ obligatoire.";
        }

        setTimeout(() => {
            for (let i = 0; i < fieldRequired.length; i++) {
                fieldRequired[i].innerHTML = ""; 
            }
        }, 5000); 
    }
})



// validate email
function validateEmail(input) {
    // Regular expression pattern for validating email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    // Check if the email matches the pattern
    return emailPattern.test(input);
}


email.addEventListener('keyup', ()=>{
       
    if(!validateEmail(email.value)){
        emailMessage.style.display = "block"
    }else{
        emailMessage.style.display="none"
    }
})

  //validate phone number
function validateFrenchPhoneNumber(phoneNumber) {
    const phonePattern = /^(0|\+33|0033)[1-9](\d{2}){4}$/;
    
    return phonePattern.test(phoneNumber);
}

  
  phone.addEventListener('keyup', ()=>{
       
    if(!validateFrenchPhoneNumber(phone.value)){
       phoneMessage.style.display = "block"
    }else{
        phoneMessage.style.display="none"
    }
  })