import React from "react";
import './styles.css';
import { Link } from "react-router-dom";
import { FiPower, FiEdit, FiTrash2 } from 'react-icons/fi';

import logo from "../../assets/logo.svg"

export default function Book() {
    return (
        <div className="book-container">
            <header>
                <img src={logo} alt="Celso" />
                <span>Welcome, <strong>Celso</strong>!</span>
                <Link className="button" to="book/new">Add new Book</Link>
                <button type="button">
                    <FiPower size={18} color="#251FC5" />
                </button>
            </header>

            <h1>Registered books</h1>
            <ul>
                <li>
                    <strong>Title:</strong>
                    <p>Docker Deep Dive</p>
                    <strong>Author:</strong>
                    <p>Nigel</p>
                    <strong>Price:</strong>
                    <p>R$ 47.90</p>
                    <strong>Realease Date:</strong>
                    <p>12/07/2020</p>

                    <button type="button">
                        <FiEdit size={20} color="#251FC5" />
                    </button>

                    <button type="button">
                        <FiTrash2 size={20} color="#251FC5" />
                    </button>
                </li>

                <li>
                    <strong>Title:</strong>
                    <p>Docker Deep Dive</p>
                    <strong>Author:</strong>
                    <p>Nigel</p>
                    <strong>Price:</strong>
                    <p>R$ 47.90</p>
                    <strong>Realease Date:</strong>
                    <p>12/07/2020</p>

                    <button type="button">
                        <FiEdit size={20} color="#251FC5" />
                    </button>

                    <button type="button">
                        <FiTrash2 size={20} color="#251FC5" />
                    </button>
                </li>

                <li>
                    <strong>Title:</strong>
                    <p>Docker Deep Dive</p>
                    <strong>Author:</strong>
                    <p>Nigel</p>
                    <strong>Price:</strong>
                    <p>R$ 47.90</p>
                    <strong>Realease Date:</strong>
                    <p>12/07/2020</p>

                    <button type="button">
                        <FiEdit size={20} color="#251FC5" />
                    </button>

                    <button type="button">
                        <FiTrash2 size={20} color="#251FC5" />
                    </button>
                </li>

                <li>
                    <strong>Title:</strong>
                    <p>Docker Deep Dive</p>
                    <strong>Author:</strong>
                    <p>Nigel</p>
                    <strong>Price:</strong>
                    <p>R$ 47.90</p>
                    <strong>Realease Date:</strong>
                    <p>12/07/2020</p>

                    <button type="button">
                        <FiEdit size={20} color="#251FC5" />
                    </button>

                    <button type="button">
                        <FiTrash2 size={20} color="#251FC5" />
                    </button>
                </li>
            </ul>
        </div>
    )
}