function decipher(encryptedText, knownWord) {
	const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

	// Function to determine shift amount by comparing known word to encrypted text
	function findShift(encText, known) {
		let encWords = encText.split(/\W+/); // Split encrypted text into words
		for (let word of encWords) {
			if (word.length === known.length) {
				let shift = (word.charCodeAt(0) - known.charCodeAt(0) + 26) % 26;
				return shift;
			}
		}
		return -1; // Return -1 if no valid shift is found
	}

	let shift = findShift(encryptedText.toUpperCase(), knownWord.toUpperCase());
	if (shift === -1) return "Could not determine shift value.";

	// Function to decrypt text
	function decrypt(text, shift) {
		return text
			.split("")
			.map((char) => {
				let isUpperCase = char >= "A" && char <= "Z";
				let isLowerCase = char >= "a" && char <= "z";

				if (isUpperCase || isLowerCase) {
					let base = isUpperCase ? "A".charCodeAt(0) : "a".charCodeAt(0);
					let newChar = String.fromCharCode(
						((char.charCodeAt(0) - base - shift + 26) % 26) + base
					);
					return newChar;
				}
				return char; // Keep non-alphabet characters unchanged
			})
			.join("");
	}

	return decrypt(encryptedText, shift);
}

// Example Usage:
let encryptedText = "Ymnx nx f yjxy"; // Original text was "This is a test"
let knownWord = "test";

console.log(decipher(encryptedText, knownWord));
