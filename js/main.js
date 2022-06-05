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
		  console.log(progressBar)
		  progressBar.forEach((el, x) => {
			  el.style.width = progress[x];
		  })
		  
		
	  }
	});
  });
  
  observer.observe(document.querySelector('#skillset'));
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