import { useState } from "react";
import './Num.css';

function getRandomNum () {
    return Math.floor(Math.random() * 100) + 1;
}

function NumGuessGame () {
    const [target, setTarget] = useState(getRandomNumber());
    const [guess, setGuess] = useState('');
    const [message, setMessage] = useState('');
    const [attempts, setAttempts] = useState(0);

    const handleGuess = () => {
        const num = parseInt(guess);
        if (isNaN(num)) {
          setMessage('⚠️ Please enter a valid number!');
          return;
        }

        setAttempts(prev => prev + 1);

        if (num === target) {
            setMessage(`🎉 Correct! It took you ${attempts + 1} tries.`);
        } else if (num < target) {
            setMessage('📉 Too low!');
        } else {
            setMessage('📈 Too high!');
    }
  };

}