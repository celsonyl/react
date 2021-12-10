import React, { useEffect, useState } from "react";
import { FiEdit, FiPower, FiTrash2 } from 'react-icons/fi';
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import api from '../../services/api';
import './styles.css';
import { useHistory } from "react-router";

export default function Books() {

    const [books, setBooks] = useState([]);
    const username = localStorage.getItem('username');
    const history = useHistory();

    async function logout() {
        localStorage.clear();
        history.push('/');
    }

    async function deleteBook(id) {
        try {
            await api.delete(`book/${id}`)
            setBooks(books.filter(book => book.id !== id))
        } catch (err) {
            alert('Delete failed!')
        }
    }

    async function editBook(id) {
        try {
            history.push(`books/new/${id}`)
        } catch (err) {
            alert('Edit book failed!')
        }
    }

    useEffect(() => {
        api.get('book', {
            params: {
                page: 1,
                limit: 4,
                direction: 'asc'
            }
        }).then(response => {
            setBooks(response.data.content)
        })
    }, [])

    return (
        <div className="book-container">
            <header>
                <img src={logo} alt="Celso" />
                <span>Welcome, <strong>{username.toUpperCase()}</strong>!</span>
                <Link className="button" to="/books/new/0">Add new Book</Link>
                <button onClick={logout} type="button">
                    <FiPower size={18} color="#251FC5" />
                </button>
            </header>

            <h1>Registered books</h1>
            <ul>
                {books.map(book => (
                    <li key={`book-item-${book.id}`}>
                        <strong>Title:</strong>
                        <p>{book.title}</p>
                        <strong>Author:</strong>
                        <p>{book.author}</p>
                        <strong>Price:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(book.price)}</p>
                        <strong>Realease Date:</strong>
                        <p>{book.launch_date}</p>

                        <button onClick={() => editBook(book.id)} type="button">
                            <FiEdit size={20} color="#251FC5" />
                        </button>

                        <button onClick={() => deleteBook(book.id)} type="button">
                            <FiTrash2 size={20} color="#251FC5" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}