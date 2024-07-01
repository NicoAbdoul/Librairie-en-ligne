import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #f0f0f0;
`;

const RegisterForm = styled.form`
    width: 100%;
    max-width: 400px;
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const RegisterTitle = styled.h1`
    font-size: 2.5rem;
    color: #333333;
    margin-bottom: 2rem;
    text-align: center;
`;

const FormGroup = styled.div`
    margin-bottom: 1.5rem;

    label {
        font-size: 1rem;
        color: #666666;
        display: block;
        margin-bottom: 0.5rem;
    }

    input {
        width: 100%;
        padding: 0.75rem;
        font-size: 1rem;
        border: 1px solid #cccccc;
        border-radius: 4px;
        transition: border-color 0.3s ease;

        &:focus {
            outline: none;
            border-color: #ff6347;
        }
    }
`;

const SubmitButton = styled.button`
    width: 100%;
    padding: 0.75rem;
    font-size: 1.2rem;
    color: #ffffff;
    background-color: #ff6347;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #ff4500;
    }
`;

const ErrorMessage = styled.p`
    color: #ff6347;
    font-size: 0.875rem;
    margin-top: 0.5rem;
`;

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Remplacez l'URL vide par l'URL de votre backend où vous souhaitez envoyer les données d'inscription
            await axios.post('https://example.com/api/register', { name, email, password });

            // Redirigez l'utilisateur vers la page de connexion après une inscription réussie
            history.push('/login');
        } catch (err) {
            setError('Registration failed. Please try again.'); // Gestion de l'erreur d'inscription
            console.error('Registration failed', err);
        }
    };

    return (
        <>
            <Navbar />
            <RegisterContainer>
                <RegisterForm onSubmit={handleSubmit}>
                    <RegisterTitle>Register</RegisterTitle>
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    <FormGroup>
                        <label>Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </FormGroup>

                    <SubmitButton type="submit">Register</SubmitButton>
                </RegisterForm>
            </RegisterContainer>
            <Footer />
        </>
    );
};

export default Register;
