import React, { useState, useEffect } from "react";
import './styles.css';
import { Link } from "react-router-dom";
import { FiPower, FiEdit, FiTrash2 } from 'react-icons/fi';

import logo from "../../assets/logo.svg"
import api from '../../services/api'

export default function Books() {

    const [books, setBooks] = useState([]);
    const username = localStorage.getItem('username');

    useEffect(() => {
        api.get('book')
            .then(response => {
                setBooks(response.data.content)
            })
    }, [])

    return (
        <div className="book-container">
            <header>
                <img src={logo} alt="Celso" />
                <span>Welcome, <strong>{username.toUpperCase()}</strong>!</span>
                <Link className="button" to="/books/new">Add new Book</Link>
                <button type="button">
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

                        <button type="button">
                            <FiEdit size={20} color="#251FC5" />
                        </button>

                        <button type="button">
                            <FiTrash2 size={20} color="#251FC5" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}