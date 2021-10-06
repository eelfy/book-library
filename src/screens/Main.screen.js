import '../theme/Main.css';
import React from 'react';
import Header from '../components/Header';
import Counter from '../components/Counter';
import Library from '../components/Library';
import HeaderState from '../state/header'
import { observer } from "mobx-react-lite";
import Loader from '../components/Loader';

const Main = observer(() => {

    return (
        <div className="Main">
            <Header />
            {HeaderState.books.length > 0 ? <Counter /> : null}
            {HeaderState.books.length > 0 ? <Library /> : null}
            {HeaderState.loader === true ? <Loader /> : null}
        </div>
    );
})

export default Main;
