const elForm = document.querySelector('.login__form');
const elEmailInput = document.querySelector('.email__input');
const elPasswordInput = document.querySelector('.password__input');
const elBtn = document.querySelector('.login__btn');

elForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    
    const emailInput = elEmailInput.value.trim();
    const passwordInput = elPasswordInput.value.trim();
    
    fetch('https://reqres.in/api/login',{
    method:'POST', 
    headers: {'Content-Type': ' application/json'},
    body: JSON.stringify({
        email: emailInput ,
        password: passwordInput,
    })
})
.then(response => response.json())
.then(userslogin =>{
    if(userslogin?.token){
        window.localStorage.setItem('token', userslogin.token)
        window.location.replace('users.html')
    }})})