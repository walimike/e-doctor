let submitForm = () =>{
    alert("Submit")
}

let validatePassword = () =>{
    password = document.getElementById("password")
    confirm_password = document.getElementById("re_enter_password")
    if (password.value != confirm_password.value) {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'not matching';
    }else{
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = 'matching';
    }
}

let emailIsValid = (email) =>{
    return /\S+@\S+\.\S+/.test(email)
  }
