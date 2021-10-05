import { makeAutoObservable } from "mobx";

class CardState {
    constructor() {
        makeAutoObservable(this)
    }
    img = 'https://img-gorod.ru/27/810/2781043_detail.jpg'
}

export default new CardState