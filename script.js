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
	addBookToLibrary(myLibrary, nameInput.value, authorInput.value, pagesInput.value, readInput.value);
	nameInput.value = "";
	authorInput.value = "";
	pagesInput.value = 0;
	readInput.value = false;
	dialog.close();
	const currentBook = document.createElement("div");
	currentBook.classList.add('book-card');
	const booksname = document.createElement("h2");
	const booksAuthor = document.createElement("p");
	const booksPages = document.createElement("p");
	const booksRead = document.createElement("p");
	booksname.innerText = myLibrary[myLibrary.length - 1].name;
	currentBook.appendChild(booksname);
	booksAuthor.innerText = myLibrary[myLibrary.length - 1].author;
	currentBook.appendChild(booksAuthor);
	booksPages.innerText = myLibrary[myLibrary.length - 1].pages;
	currentBook.appendChild(booksPages);
	booksRead.innerText = myLibrary[myLibrary.length - 1].read;
	currentBook.appendChild(booksRead);
	myLibrary[myLibrary.length - 1].index = myLibrary.length - 1;

	const booksContainer = document.querySelector(".main-container");
	booksContainer.appendChild(currentBook);
})

function addBookToLibrary(library, name, author, pages, read) {
	const newBook = new Book(name, author, pages, read);
	library.push(newBook);
}

function displayBooks() {
	for (i = 0; i < myLibrary.length; i++) {
		const currentBook = document.createElement("div");
		currentBook.classList.add('book-card');
		const booksName = document.createElement('h2');
		const booksAuthor = document.createElement('p');
		const booksPages = document.createElement('p');
		const booksRead = document.createElement('p');

		booksName.innerText = myLibrary[i].name;
		currentBook.appendChild(booksName);
		booksAuthor.innerText = `Author: ${myLibrary[i].author}`;
		currentBook.appendChild(booksAuthor);
		booksPages.innerText = `Pages: ${myLibrary[i].pages}`;
		currentBook.appendChild(booksPages);
		booksRead.innerText = `Read: ${myLibrary[i].read}`;
		currentBook.appendChild(booksRead);
		myLibrary[i].index = i;

		const booksContainer = document.querySelector(".main-container");
		booksContainer.appendChild(currentBook);
	}
}

window.addEventListener("load", () => {
	displayBooks();
})
