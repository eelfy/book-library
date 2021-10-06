import React, { useState } from "react";
import '../theme/Header.css'
import Button from "./Button";
import Input from "./Input";
import Select from "./Select";
import HeaderState from '../state/header'

const Header = (props) => {
    const [InputValue, setInputValue] = useState('');
    const changeValue = (event) => {
        setInputValue(event.target.value)
        HeaderState.input = InputValue
    }
    const formSubmit = (event) => {
        event.preventDefault()
        let formElements = event.target.elements
        let req = {}
        for (let element of formElements) {
            if (element.name) req[element.name] = element.value
        }
        HeaderState.formBody = req
        HeaderState.fetchBooks(event)
    }
    return (
        <header className='Header'>
            <form onSubmit={(event) => formSubmit(event)} className='headerForm'>
                <div>

                    <Input
                        value={InputValue}
                        onChange={(event) => changeValue(event)}
                        type='search'
                        name='search'
                        placeholder='Введи книгу'
                    />
                    <Button
                        visible={true}
                        text='Найти'
                        type='submit'
                        name='form-submit'
                    />
                </div>

                <div>
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
                </div>
            </form>
        </header>
    )
}

export default Header