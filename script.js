const header = document.querySelector(".header-container");
const newBookButton = document.querySelector(".new-book-button");
const dialog = document.querySelector(".dialog-container");
const saveButton = document.querySelector(".save-button");
const myLibrary = [{ name: 'Harry Potter', author: 'J.K. Rowling', pages: 300, read: true }, { name: 'Memorias postumas de Bras Cubas', author: 'Machado de Assis', pages: 250, read: false }, { name: "1984", author: "George Orwell", pages: 400, read: false }, { name: "Clean Code", author: "Robert Martin", pages: 300, read: false }];

function Book(name, author, pages, read) {
	this.name = name;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.index;
}

newBookButton.addEventListener("click", () => {
	dialog.showModal();
})

saveButton.addEventListener("click", (e) => {
	e.preventDefault();
	const nameInput = document.querySelector("#name");
	const authorInput = document.querySelector("#author");
	const pagesInput = document.querySelector("#pages");
	const readInput = document.querySelector('input[name="read"]:checked');
	const newLibrary = addBookToLibrary(myLibrary, nameInput.value, authorInput.value, pagesInput.value, readInput.value);
	nameInput.value = "";
	authorInput.value = "";
	pagesInput.value = 0;
	readInput.value = false;
	dialog.close();
	displayBooks(newLibrary, newLibrary.length - 1);
})

function addBookToLibrary(library, name, author, pages, read) {
	const newBook = new Book(name, author, pages, read);
	library.push(newBook);
	return library;
}

function displayBooks(library, lastElement = 0) {
	const booksContainer = document.querySelector(".main-container");

	for (i = lastElement; i < library.length; i++) {
		const currentBook = document.createElement("div");
		currentBook.classList.add('book-card');
		const booksName = document.createElement('h2');
		const booksAuthor = document.createElement('p');
		const booksPages = document.createElement('p');
		const booksRead = document.createElement('p');
		const deleteButton = document.createElement('button');
		deleteButton.classList.add("delete-button");
		deleteButton.innerText = "Delete book";

		booksName.innerText = library[i].name;
		currentBook.appendChild(booksName);
		booksAuthor.innerText = `Author: ${library[i].author}`;
		currentBook.appendChild(booksAuthor);
		booksPages.innerText = `Pages: ${library[i].pages}`;
		currentBook.appendChild(booksPages);
		booksRead.innerText = `Read: ${library[i].read}`;
		currentBook.appendChild(booksRead);
		const bookIndex = library[i].index = i;
		currentBook.appendChild(deleteButton);
		deleteButton.addEventListener("click", () => {
			deleteBook(bookIndex, library);
		})

		booksContainer.appendChild(currentBook);
	}
}

function deleteBook(index, library) {
	const newLibrary = library.filter((book) => book.index != index);
	const allElements = document.querySelector(".main-container");
	while (allElements.firstChild) {
		allElements.removeChild(allElements.firstChild);
	}
	displayBooks(newLibrary);
	document.querySelector(".main-container").appendChild(newBookButton);
}

window.addEventListener("load", () => {
	displayBooks(myLibrary);
})
