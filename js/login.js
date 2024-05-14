const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');

loginBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode.parentNode;
	Array.from(e.target.parentNode.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			signupBtn.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});

signupBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode;
	Array.from(e.target.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			loginBtn.parentNode.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});
var lock;
function signup(){
	var email = document.getElementById('email').value;
    var password = document.getElementById('sPassword').value;
	var name = document.getElementById('name').value;
    if(name === '' || password === '' || email === ''){
        alert("Fields can't be empty");
        return;
    }
	else{
		var chars = "0123456789";
		var passwordLength = 5;
    	var pword = "";
 		for (var i = 0; i <= passwordLength; i++) {
   			var randomNumber = Math.floor(Math.random() * chars.length);
   			pword += chars.substring(randomNumber, randomNumber +1);
  		}
		lock = pword;
		alert("Congrats you are registered your credentials for login are username - user,password -" + pword)
	}   
}

function login(){
	var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if(username == 'user' && password == lock){
		console.log()
        window.location.replace(window.location.origin + "/mainpage.html");
    }else{
        alert('Wrong credentials try again !!!')
    }
}
