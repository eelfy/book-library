import React from 'react';
import '../theme/Library.css'
import Card from './Card';
import HeaderState from '../state/header'
import { observer } from "mobx-react-lite";
import Button from './Button';
import Loader from './Loader';

const Library = observer((props) => {
    console.log(HeaderState.books)
    HeaderState.book = {}
    return (
        <main className='Library'>
            <div className='cards'>
                {HeaderState.books.map(book => {
                    let bookInfo = book.volumeInfo
                    return <Card
                        id={book.id}
                        book={HeaderState.books}
                        img={bookInfo.imageLinks ? bookInfo.imageLinks.thumbnail : null}
                        title={bookInfo.title ? bookInfo.title : null}
                        authors={bookInfo.authors ? bookInfo.authors : null}
                        categories={bookInfo.categories ? bookInfo.categories[0] : null}
                        imgAlt={bookInfo.title} />
                })}
            </div>
            {HeaderState.loader === true ? <Loader /> : null}
            <div>Показано {HeaderState.page * 30} из {HeaderState.totalBooks}</div>
            <div>{HeaderState.notFound}</div>

            <Button onClick={(event) => HeaderState.loadMoreBooks(event)} visible={HeaderState.loadMoreVisible} text='Показать еще' />
        </main>
    )
})

export default Library