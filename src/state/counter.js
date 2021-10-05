import { makeAutoObservable } from "mobx";

class CounterState {
    constructor() {
        makeAutoObservable(this)
    }
    count = 1
}

export default new CounterState