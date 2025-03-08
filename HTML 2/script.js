document.getElementById("addBookBtn").addEventListener("click", addBook);

function addBook() {
	let title = prompt("Enter book title:");
	let author = prompt("Enter author name:");
	let description = prompt("Enter a short description:");

	if (!title || !author || !description) return;

	let bookList = document.getElementById("book-list");
	let bookCard = document.createElement("div");
	bookCard.classList.add("book-card");

	bookCard.innerHTML = `
        <h3>${title}</h3>
        <h4>by ${author}</h4>
        <p>${description}</p>
    `;

	bookList.appendChild(bookCard);
}
