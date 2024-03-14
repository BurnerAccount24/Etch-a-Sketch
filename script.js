let board = document.querySelector('.board');
let userBtn = document.querySelector('button');

function gridFunc(val) {
	for (let i = 0; i < val * val; i++) {
		let square = document.createElement('div');
		square.classList.add('squareElement');
		board.appendChild(square);
		hoverEffect(square);
	}
	console.log(`value of the square:`, val * val);
}
gridFunc(16);
userBtn.addEventListener('click', () => {
	userInput = Number(prompt('enter a number between 16 and 100'));
	userGrid();
	console.log(`value of the user input square:`, userInput);
});
function userGrid() {
	let removeSquare = document.querySelectorAll('.squareElement');
	board.remove(removeSquare);
	gridFunc(userInput);
}
// let userInput = 64;
// for (let i = 0; i < 16 * 16; i++) {
// 	let square = document.createElement('div');
// let size = 100 / userInput;
// square.style.cssText = `width: ${size}%; height:${size}%`;
// 	board.appendChild(square);
// 	hoverEffect(square);
// }

function hoverEffect(square) {
	square.addEventListener('mouseover', (e) => {
		e.target.classList.add('active');
	});
}
