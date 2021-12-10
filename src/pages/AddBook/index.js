import React, { useState, useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useHistory } from "react-router";
import { Link, useParams } from "react-router-dom";
import logo from '../../assets/logo.svg';
import api from "../../services/createBook";
import './styles.css';


export default function AddBook() {

    const [, setId] = useState(null);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [launch_date, setLaunch_date] = useState('');
    const [price, setPrice] = useState('');

    const { bookId } = useParams();
    const history = useHistory();

    async function loadBook() {
        try {
            const response = await api.get(`book/${bookId}`);

            setId(response.data.id);
            setTitle(response.data.title);
            setAuthor(response.data.author);
            setLaunch_date(response.data.launch_date.split('/').reverse().join('-'));
            setPrice(response.data.price);
        } catch (err) {
            alert('Error recovering book!');
            history.push('/books');
        }
    }

    useEffect(() => {
        if (bookId === '0') return;
        else loadBook();

        // eslint-disable-next-line
    }, [bookId])

    async function saveOrUpdateBook(e) {
        e.preventDefault();

        const data = {
            title,
            author,
            launch_date: launch_date.split('-').reverse().join('/'),
            price,
        };

        try {
            if (bookId === '0') {
                await api.post('book', data);
                alert('Book created!')
                history.push('/books');
            } else {
                data.id = bookId;
                await api.put(`book/${bookId}`, data);
                alert('Book updated!')
                history.push('/books');
            }
        } catch (err) {
            alert('Error to create book!');
        }
    };

    return (
        <div className="add-book-container">
            <div className="content">
                <section className="form">
                    <img src={logo} alt="Celso" />
                    <h1>{bookId === '0' ? 'Create book' : 'Update book'}</h1>
                    <p>Enter the book information and click on {bookId === '0' ? 'Add' : 'Update'}!</p>
                    <Link className="back-link" to="/books">
                        <FiArrowLeft size={16} color="#251FC5" />
                        Back to books
                    </Link>
                </section>

                <form onSubmit={saveOrUpdateBook}>
                    <input placeholder="Title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <input placeholder="Author"
                        value={author}
                        onChange={e => setAuthor(e.target.value)}
                    />
                    <input type="date"
                        value={launch_date}
                        onChange={e => setLaunch_date(e.target.value)}
                    />
                    <input placeholder="Price"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    />
                    <button className="button" type="submit">{bookId === '0' ? 'Add' : 'Update'}</button>
                </form>
            </div>
        </div>
    );
}