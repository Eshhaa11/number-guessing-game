import { useState } from "react";
import './Num.css';


function getRandomNum() {
    return Math.floor(Math.random() * 100) + 1;  
}

function NumGuessGame() {
    const [target, setTarget] = useState(getRandomNum()); 
    const [guess, setGuess] = useState('');
    const [message, setMessage] = useState('');
    const [attempts, setAttempts] = useState(0);

    const handleGuess = () => {
       
        const num = parseInt(guess);

        if (isNaN(num)) {
            setMessage('⚠️ Please enter a valid number!');
            return;
        }

       
        setAttempts((prev) => prev + 1);

        
        console.log("Target number:", target);
        console.log("Your guess:", num);

        if (num === target) {
            setMessage(`🎉 Correct! It took you ${attempts + 1} tries.`);
        } else if (num < target) {
            setMessage('📉 Too low!');
        } else {
            setMessage('📈 Too high!');
        }
    };

    const resetGame = () => {
        setTarget(getRandomNum());  
        setGuess('');
        setMessage('');
        setAttempts(0); 
    };

    return (
        <div className="game-cont">
            <h2>🔢 Guess the Number</h2>
            <input
                type="number"
                value={guess}
                placeholder="Enter your guess"
                onChange={(e) => setGuess(e.target.value)}
            />
            <div className="button">
                <button onClick={handleGuess}>Guess</button>
                <button onClick={resetGame}>Reset</button>
            </div>
            <p className="message">{message}</p>
        </div>
    );
}

export default NumGuessGame;
