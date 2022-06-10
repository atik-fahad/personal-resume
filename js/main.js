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

// main section text start

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
// main section text end

// start on scroll animation
// variable progress bar
let progress = ['90%', '80%', '60%', '70%'];

const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
	  if (entry.isIntersecting && entry.target.id == 'skillset') {
		  document.querySelector('.skillset-main').classList.add('animate__animated', 'animate__fadeInLeft', 'animate__slower');
		  document.querySelector('.elaboration').classList.add('animate__animated', 'animate__fadeInRight', 'animate_slower');
		  let progressBar = document.querySelectorAll('.progress-bar');
		  progressBar.forEach((el, x) => {
			  el.style.width = progress[x];
		  })
	  }
	  else if (entry.isIntersecting && entry.target.id == 'process-animate') {
		document.querySelector('#pn_1').classList.add('animate__animated', 'animate__lightSpeedInLeft');
		document.querySelector('#pn_2').classList.add('animate__animated', 'animate__lightSpeedInLeft', 'animate__slow');
		document.querySelector('#pn_3').classList.add('animate__animated', 'animate__lightSpeedInLeft', 'animate__slower');
		document.querySelector('#pn_4').classList.add('animate__animated', 'animate__lightSpeedInLeft', 'animate__delay-2s');
		document.querySelector('#pn_5').classList.add('animate__animated', 'animate__lightSpeedInLeft', 'animate__slow', 'animate__delay-2s');
		document.querySelector('#pn_6').classList.add('animate__animated', 'animate__lightSpeedInLeft', 'animate__slower', 'animate__delay-2s');

		document.querySelector('#iv_1').classList.add('animate__animated', 'animate__fadeInUp');
		document.querySelector('#iv_2').classList.add('animate__animated', 'animate__fadeInUp', 'animate__slow');
		document.querySelector('#iv_3').classList.add('animate__animated', 'animate__fadeInUp', 'animate__slower');
		document.querySelector('#iv_4').classList.add('animate__animated', 'animate__fadeInUp', 'animate__delay-2s');
		document.querySelector('#iv_5').classList.add('animate__animated', 'animate__fadeInUp', 'animate__slow', 'animate__delay-2s');
		document.querySelector('#iv_6').classList.add('animate__animated', 'animate__fadeInUp', 'animate__slower', 'animate__delay-2s');
	}
	else if (entry.isIntersecting && entry.target.id == 'career') {

		document.querySelector('#c_1').classList.add('animate__animated', 'animate__slideInRight');
		document.querySelector('#c_2').classList.add('animate__animated', 'animate__slideInLeft', 'animate__slow');
		document.querySelector('#c_3').classList.add('animate__animated', 'animate__slideInRight', 'animate__slower');
		document.querySelector('#c_4').classList.add('animate__animated', 'animate__slideInLeft', 'animate__delay-2s');
		document.querySelector('#c_5').classList.add('animate__animated', 'animate__slideInRight', 'animate__slow', 'animate__delay-2s');
		document.querySelector('#c_6').classList.add('animate__animated', 'animate__slideInLeft', 'animate__slower', 'animate__delay-2s');
	}
	else if (entry.isIntersecting && entry.target.id == 'contact') {

		document.querySelector('#contact-t1').classList.add('animate__animated', 'animate__zoomIn', 'animate__slow');
		document.querySelector('#contact-t2').classList.add('animate__animated', 'animate__slideInLeft', 'animate__slow');
		document.querySelector('#contact-t3').classList.add('animate__animated', 'animate__slideInRight', 'animate__slow');
	}
	});
  });
  
  observer.observe(document.querySelector('#skillset'));
  observer.observe(document.querySelector('#process-animate'));
  observer.observe(document.querySelector('#career'));
  observer.observe(document.querySelector('#contact'));
// end on scroll animation

// custom cursor

function addEventForCursor(anchor) {
	anchor.addEventListener('mouseenter', (e) => {
		cursor.classList.add('cursorLink');
	})
	anchor.addEventListener('mouseleave', (e) => {
		cursor.classList.remove('cursorLink');
	})
}

const customCursor = document.querySelector('.cursor-wrapper');
const anchorLink = document.querySelectorAll('a');
const cursor = customCursor.querySelector('.cursor');

// a tag 
for (anchor of anchorLink) {
	addEventForCursor(anchor);
}
// toggle button
addEventForCursor(toggleMode);
addEventForCursor(document.querySelector('.cardList__btn.btn--left'))
addEventForCursor(document.querySelector('.cardList__btn.btn--right'))
addEventForCursor(document.querySelector('.submit.btn-primary'))

const moveCursor = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
	
  customCursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  customCursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
 
}

window.addEventListener('mousemove', moveCursor)

// end custom cursor 

// detect safari browser
let isSafariBrowser = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor); 
let mobileVersion = false;
if (window.matchMedia('(max-width: 767px)').matches) {
	mobileVersion = true;
}
if(isSafariBrowser || mobileVersion) {
	document.querySelector('#fallback').classList.remove('hide');
	document.querySelector('.app').style.display = 'none';
	document.querySelector('.career').style.margin = '0px';

}