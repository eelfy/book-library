import '../theme/Main.css';
import React from 'react';
import Header from '../components/Header';
import Counter from '../components/Counter';
import Library from '../components/Library';
import { withRouter } from 'react-router';

function Main() {
    return (
        <div className="Main">
            <Header />
            <Counter />
            <Library />
        </div>
    );
}

export default Main;
