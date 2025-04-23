import { useState } from "react";
import './Num.css';

function getRandomNum () {
    return Math.floor(Math.random() * 100) + 1;
}

function NumGuessGame () {
    const [target, setTarget] = useState(getRandomNumber());
    const [guess, setGuess] = useState('');
    const [message, setMessage] = useState('');
}