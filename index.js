const QUOTES = [
	"what's it gonna be for today?",
	"what's the move?",
	"what are we focusing on?",
	"what's the haps?"
];

const quoteText = document.querySelector("h1");
const copyrightTag = document.querySelector("p");
let currentQuote = getRandomQuote();
let currentLetter = 0;

function setupCopyright() {
	const YEAR = new Date().getFullYear();
	let text = new String();

	text = `&copy; ${YEAR} Designed by Tyrone Gabriel Serdan.`;

	// innerHTML cause &copy; wont work if innerText.
	copyrightTag.innerHTML = text;
}

function getRandomQuote() {
	return QUOTES[Math.floor(Math.random() * QUOTES.length)];
}

function typingEffect() {
	quoteText.textContent += currentQuote[currentLetter];
	currentLetter++;
	// console.log(`currentLetter = ${currentLetter}`);

	if (quoteText.textContent == currentQuote) {
		// console.log("done typing");
		setTimeout(deleteEffect, 4000);

		return;
	}

	setTimeout(typingEffect, 100)
}

function deleteEffect() {
	let newText = quoteText.textContent.substring(0, currentLetter);
	quoteText.textContent = newText;
	currentLetter--;

	if (quoteText.textContent.length == 0) {
		// console.log("done deleting");
		currentQuote = getRandomQuote();
		currentLetter = 0;
		setTimeout(typingEffect, 2000);

		return;
	}

	setTimeout(deleteEffect, 20);
}

window.onload = () => {
	typingEffect();
	setupCopyright();
}