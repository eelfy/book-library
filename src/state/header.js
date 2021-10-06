import { makeAutoObservable } from "mobx";

class HeaderState {
    constructor() {
        makeAutoObservable(this)
    }
    books = []
    loadedBooks = 0
    page = 0
    apiStartLink = 'https://www.googleapis.com/books/v1/volumes'
    APIKEY = 'AIzaSyC71LCfxix0kvDmZaZGsc6i5KR1FWR9pi8'
    q = null
    totalBooks = null
    formBody = null
    loadMoreVisible = false
    notFound = null
    book = {}
    loader = false
    bookNotFound = null
    getBook(bookId) {

        fetch(`${this.apiStartLink}/${bookId}`)
            .then(response => {

                return response.json()
            })
            .then(json => {

                this.book = json
                this.bookNotFound = null
            })
    }
    fetchBooks(event) {
        this.q = null
        if (this.q === null) this.q = this.formBody['search'].replace(/\s+/g, ' ').trim().split(' ').join('+')
        if (this.q !== '') {
            this.books = []
            this.page = 0
            this.fetchFunck('get')
        }
        if (this.loadMoreVisible === false) this.loadMoreVisible = true
    }
    loadMoreBooks(event) {
        if (this.q !== '') event.preventDefault()
        this.fetchFunck('load')
    }
    fetchFunck(type) {

        this.loader = true
        fetch(`${this.apiStartLink}?q=${this.q}&maxResults=30&startIndex=${this.loadedBooks}&subject=${this.formBody.category}&orderBy=${this.formBody.sorting}&key=${this.APIKEY}`)
            .then(response => {

                return response.json()
            })
            .then(json => {

                if (json.items) {
                    if (type === 'load') {
                        this.books = [...this.books, ...json.items]
                    } else {
                        this.totalBooks = json.totalItems
                        this.books = json.items
                        this.loadedBooks = 0
                    }
                    this.loadedBooks += json.items.length
                    this.notFound = null
                } else {
                    this.notFound = "Ничего не найдено"
                }
                this.loader = false
            })
    }
}

export default new HeaderState
