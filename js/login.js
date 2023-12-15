const switchers = [...document.querySelectorAll('.switcher')]
var login = document.getElementById("login-email").value;
var password = document.getElementById("login-password").value;
switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})
function myFunction(event){
    event.preventDefault();
    login = document.getElementById("login-email").value;
    password = document.getElementById("login-password").value;
    if(login === 'hardcorecoders@gmail.com' && password === 'hello123'){
        window.location = "/xzist.html"  
    }
    else{
        // Code for wrong email password
    }
}