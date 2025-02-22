const header = document.querySelector(".header-container");

const myLibrary = [{ name: 'Harry Potter', author: 'J.K. Rowling', pages: 300, read: true }, { name: 'Memorias postumas de Bras Cubas', author: 'Machado de Assis', pages: 250, read: false }, { name: "1984", author: "George Orwell", pages: 400, read: false }, { name: "Clean Code", author: "Robert Martin", pages: 300, read: false }];

function Book(name, author, pages, read) {
	this.name = name;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.index;
}

function addBookToLibrary(library, name, author, pages, read) {

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


displayBooks();
