import { makeAutoObservable } from "mobx";

class HeaderState {
    constructor() {
        makeAutoObservable(this)
    }
    books = []
    page = 0
    apiStartLink = 'https://www.googleapis.com/books/v1/volumes'
    apiKey = '*'
    q = null
    totalBooks = null
    formBody = null
    loadMoreVisible = false
    notFound = null
    book = {}
    loader = false
    bookNotFound = null
    getBook(bookId) {
        debugger
        fetch(`${this.apiStartLink}/${bookId}`)
            .then(response => {
                debugger
                return response.json()
            })
            .then(json => {
                debugger
                this.book = json
                this.bookNotFound = null
            })
    }
    fetchBooks(event) {
        debugger
        if (this.q === null) this.q = this.formBody['search'].replace(/\s+/g, ' ').trim().split(' ').join('+')
        if (this.q !== '') this.fetchFunck('get')
        if (this.loadMoreVisible === false) this.loadMoreVisible = true
    }
    loadMoreBooks(event) {
        debugger
        if (this.q !== '') event.preventDefault()
        this.fetchFunck('load')
    }
    fetchFunck(type) {
        debugger
        this.loader = true
        fetch(`${this.apiStartLink}?q=${this.q}&maxResults=30&startIndex=${this.page * 30}&subject=${this.formBody.category}&orderBy=${this.formBody.sorting}&key=${this.apiKey}`)
            .then(response => {
                debugger
                return response.json()
            })
            .then(json => {
                debugger
                if (json.items) {
                    this.totalBooks = json.totalItems
                    if (type === 'load') {
                        this.books = [...this.books, ...json.items]
                    } else {
                        this.books = json.items
                    }
                    this.notFound = null
                    this.page++
                } else {
                    this.notFound = "Ничего не найдено"
                }
                this.loader = false
            })
    }
}

export default new HeaderState
