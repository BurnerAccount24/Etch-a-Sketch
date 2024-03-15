let board = document.querySelector('.board');
let userBtn = document.querySelector('button');

function gridFunc(val) {
	board.innerHTML = '';
	let size = 100 / val;
	for (let i = 0; i < val * val; i++) {
		let square = document.createElement('div');
		square.style.cssText = `width: ${size}%; height:${size}%`;
		board.appendChild(square);
		hoverEffect(square);
	}
}
gridFunc(16);

userBtn.addEventListener('click', () => {
	let userInput = Number(prompt('Enter a number between whatever and 100'));
	if (userInput <= 100) {
		gridFunc(userInput);
	} else {
		alert('Too big of a number, try again!');
	}
});

function hoverEffect(square) {
	let hoverCount = 0;
	square.addEventListener('mouseover', (e) => {
		hoverCount++;
		if (hoverCount === 10) {
			e.target.classList.add('dark');
		} else if (hoverCount > 12 && hoverCount < 20) {
			e.target.style.backgroundColor = '#000000';
			e.target.style.borderColor = '#808080';
		} else {
			generateColors(e.target);
			e.target.style.borderColor = '#000000';
			e.target.classList.remove('dark');
		}
	});
}
function generateColors(square) {
	let randomColor = Math.floor(Math.random() * 16777215).toString(16);
	square.style.backgroundColor = `#${randomColor}`;
}
