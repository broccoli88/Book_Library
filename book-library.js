const bookList = document.querySelector(`#book-list`);

// REMOVE

function removeBook() {

    bookList.addEventListener('click', (e) => {
        if (e.target.className == 'remove button--style') {
            const li = e.target.parentElement
            bookList.removeChild(li)
        }
    })

}

removeBook()


// ADD

function addBook() {
    const addBar = document.forms['add-books'];

    addBar.addEventListener('submit', (e) => {
        e.preventDefault()

        const title = addBar.querySelector('input').value
        if (!title) return

        // CREATING ELEMENTS    

        const li = document.createElement('li');
        const span = document.createElement('span');
        const button = document.createElement('button');

        li.appendChild(span)
        li.appendChild(button)
        bookList.appendChild(li)


        // ADDING CLASSES

        li.classList.add('book')
        li.classList.add('book--style')
        span.classList.add('title')
        button.classList.add('remove')
        button.classList.add('button--style')


        // CONTENT

        span.textContent = title
        button.textContent = 'remove'


    })

    // CLEARING INPUT

    const buttonAdd = addBar.querySelector('button')

    buttonAdd.addEventListener('click', (e) => {
        setTimeout(() => {

            const input = document.getElementById('titleInput')
            input.value = ''
        }, 100)
    })
}

addBook()

// SEARCHBAR

function searchBar() {
    const searchBar = document.forms['book-search'].querySelector('input');


    searchBar.addEventListener('input', (e) => {
        const books = bookList.querySelectorAll('li')
        books.forEach((book) => {
            const term = e.target.value.toLowerCase()
            const title = book.firstElementChild.textContent.toLowerCase()

            if (title.indexOf(term) != -1) {
                book.style.display = 'flex'
            } else {
                book.style.display = 'none'
            }
        })
    })
}

searchBar()


// HIDE BOOKS

function hideBooks() {
    const hideBooks = document.querySelector('#hide-books');

    hideBooks.addEventListener('change', () => {

        if (hideBooks.checked) {
            bookList.style.display = "none"

        } else {
            bookList.style.display = "inherit"
        }
    })
}

hideBooks()


// FAVORITE BOOKS

bookList.addEventListener('click', (e) => {
    if (e.target.className == "book book--style") {
        const isFav = e.target.getAttribute('isFav')
        if (isFav == 'true') {
            e.target.setAttribute('isFav', false)
        }
        else {
            e.target.setAttribute('isFav', true)
        }
    }
})


// FAVORITE FILTER 

function filterFavorite() {
    const showFav = document.querySelector('#show-favorite');

    showFav.addEventListener('change', () => {
        books = bookList.querySelectorAll('li')
        books.forEach((book) => {
            const isFav = book.getAttribute('isFav')
            if (showFav.checked && isFav != 'true') {
                book.style.display = 'none'
            }
            else {
                book.style.display = 'flex'
            }
        })
    })
}

filterFavorite()



