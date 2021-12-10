import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useHistory } from "react-router";
import { Link, useParams } from "react-router-dom";
import logo from '../../assets/logo.svg';
import api from "../../services/createBook";
import './styles.css';


export default function AddBook() {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [launch_date, setLaunch_date] = useState('');
    const [price, setPrice] = useState('');

    const {bookId} = useParams();
    
    const token = localStorage.getItem('acessToken');
    const history = useHistory();

    async function createBook(e) {
        e.preventDefault();

        const data = {
            title,
            author,
            launch_date: launch_date.split('-').reverse().join('/'),
            price,
        };

        const header = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        try {
            await api.post('book', data, header);
            alert('Book created!')
            history.push('/books');
        } catch (err) {
            alert('Error to create book!');
        }

    };

    return (
        <div className="add-book-container">
            <div className="content">
                <section className="form">
                    <img src={logo} alt="Celso" />
                    <h1>Add new Book</h1>
                    <p>Enter the book information and clin on 'Add' ! #{bookId}</p>
                    <Link className="back-link" to="/books">
                        <FiArrowLeft size={16} color="#251FC5" />
                        Home
                    </Link>
                </section>

                <form onSubmit={createBook}>
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

                    <button className="button" type="submit">Add</button>
                </form>
            </div>
        </div>
    );
}