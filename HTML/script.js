function addTodo() {
	let todoText = document.getElementById("todoText").value;
	if (todoText.trim() === "") return;

	let li = document.createElement("li");
	li.innerHTML = `${todoText} <button onclick="removeTodo(this)">Delete</button>`;

	document.getElementById("todoList").appendChild(li);
	document.getElementById("todoText").value = "";
}

function removeTodo(button) {
	button.parentElement.remove();
}
