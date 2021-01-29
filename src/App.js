import './App.css';
import React, {useState} from 'react'
import Die from "./Die";


function App() {
    const [roll, setRoll] = useState([1, 1])

    const generateRoll = () => {
        const one = Math.floor((Math.random() * 6)) + 1
        const two = Math.floor((Math.random() * 6))+ 1
        setRoll([one, two])
    }

    return (
        <div className="App">
            <div className="roll" onClick={generateRoll}>ROLL</div>
            <div className="dice">
                <Die count={roll[0]}/>
                <Die count={roll[1]}/>
            </div>
            <div className="roll" role="button" onClick={generateRoll}>ROLL</div>
        </div>
    );
}

export default App;
