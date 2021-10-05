import React, { useState } from "react";
import '../theme/Header.css'
import Button from "./Button";
import Input from "./Input";
import Select from "./Select";
import HeaderState from '../state/header'

const Header = (props) => {
    const [InputValue, setInputValue] = useState('');
    const sendRequest = (event) => {
        event.preventDefault();
        console.log(213);
    }
    const changeValue = (event) => {
        setInputValue(event.target.value)
        HeaderState.input = InputValue
    }
    const formSubmit = (event) => {
        debugger
        event.preventDefault()
        let formElements = event.target.elements
        let req = {

        }
        for (let element of formElements) {
            if (element.name) req[element.name] = element.value
        }
        HeaderState.formBody = req
        HeaderState.fetchBooks(event)

    }
    return (
        <header className='Header'>
            <form onSubmit={(event) => formSubmit(event)} className='headerForm'>
                {HeaderState.input}
                <Input
                    value={InputValue}
                    onChange={(event) => changeValue(event)}
                    type='search'
                    name='search'
                    placeholder='Введи книгу'
                />
                <Select
                    name='category'
                    options={[
                        'all',
                        'art',
                        'biography',
                        'computers',
                        'history',
                        'poetry']}
                />
                <Select
                    name='sorting'
                    options={['relevance', 'newest',]}
                />
                <Button
                    visible={true}
                    text='Найти'
                    type='submit'
                    name='form-submit'
                />
                <Button visible={true}
                    onClick={(event) => console.log(HeaderState.books)} text='books' />
            </form>
        </header>
    )
}

export default Header