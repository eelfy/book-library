import '../theme/Detail.css';
import React from 'react';
import { useParams } from 'react-router';
import HeaderState from '../state/header'
import { observer } from "mobx-react-lite";
import { makeAutoObservable } from "mobx";
import Loader from '../components/Loader';

class DetailState {
    constructor() {
        makeAutoObservable(this)
    }
    hm = 'hm'
}

const Detail = observer((props) => {

    let { id } = useParams();
    const debugg = e => {
    }
    // console.log(HeaderState.book);
    if (HeaderState.book.volumeInfo) {
        let book = HeaderState.book
        return (
            <main className="Detail">
                <div className='detailBody'>
                    <h2>{book.volumeInfo.title}</h2>
                    <span>{book.volumeInfo.categories && book.volumeInfo.categories.join(', ')}</span>
                    <span>{book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</span>
                    <div className='detailDescriptionBody'>
                        <div className='detailImgBody'>{book.volumeInfo.imageLinks && <img alt='bookimg' className='detailImg' src={book.volumeInfo.imageLinks.large}></img>}</div>
                        <div className='detailDescription'>
                            <p>{book.volumeInfo.description}</p>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
    else {
        HeaderState.getBook(id)
        return (
            <main className="Detail">
                <Loader />
            </main>
        )
    }

})

export default Detail;
