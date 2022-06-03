// light vs night mode start
let docBody = document.body;
let toggleMode = document.querySelector('.toggle-mode');

toggleMode.addEventListener('click', () => {
	docBody.classList.toggle('dark-mode');
	toggleMode.classList.add('animate__animated', 'animate__jackInTheBox');
	
	docBody.querySelector('.day').classList.toggle('light');
	docBody.querySelector('.night').classList.toggle('dark');

	setTimeout(() => toggleMode.classList.remove('animate__animated', 'animate__jackInTheBox'), 1000);
})
// light vs night mode end


let i = 0;
let text = "Software Engineer";
let speed = 50;

function typeWriter() {
	if (i < text.length) {
	document.querySelector('.special').innerHTML +=
		text.charAt(i);
	i++;
	setTimeout(typeWriter, speed);
	}
	
}
typeWriter();		


// variable progress bar
let progress = ['90%', '80%', '60%', '70%'];


const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
	  if (entry.isIntersecting && entry.target.id == 'skillset') {
		  document.querySelector('.skillset-main').classList.add('animate__animated', 'animate__fadeInLeft', 'animate__slower');
		  document.querySelector('.elaboration').classList.add('animate__animated', 'animate__fadeInRight', 'animate_slower');
		  let progressBar = document.querySelectorAll('.progress-bar');
		  console.log(progressBar)
		  progressBar.forEach((el, x) => {
			  el.style.width = progress[x];
		  })
		  
		
	  }
	});
  });
  
  observer.observe(document.querySelector('#skillset'));
// let theme = localStorage.getItem('theme')

// if(theme == null){
// 	setTheme('light')
// }else{
// 	setTheme(theme)
// }

// let themeDots = document.getElementsByClassName('theme-dot')


// for (var i=0; themeDots.length > i; i++){
// 	themeDots[i].addEventListener('click', function(){
// 		let mode = this.dataset.mode
// 		console.log('Option clicked:', mode)
// 		setTheme(mode)
// 	})
// }

// function setTheme(mode){
// 	if(mode == 'light'){
// 		document.getElementById('theme-style').href = 'default.css'
// 	}

// 	if(mode == 'blue'){
// 		document.getElementById('theme-style').href = 'blue.css'
// 	}

// 	localStorage.setItem('theme', mode)
// }

// function reveal() {
	
// 	var reveals = document.querySelectorAll("[class^=animate__]");
// 	console.log(reveals)
// 	for (var i = 0; i < reveals.length; i++) {
// 	  var windowHeight = window.innerHeight;
// 	  var elementTop = reveals[i].getBoundingClientRect().top;
// 	  var elementVisible = 150;
  
// 	  if (elementTop < windowHeight - elementVisible) {
// 		reveals[i].classList.add("animate__animated");
// 	  } else {
// 		reveals[i].classList.remove("animate__animated");
// 	  }
// 	}
//   }
  
//   window.addEventListener("scroll", reveal);