import './App.css';
import React, {useState} from 'react'
import Die from "./Die";
import useSound from "use-sound";
import click from './click.mp3';

function App() {
    const [roll, setRoll] = useState([1, 1])

    const generateRoll = () => {
        const one = Math.floor((Math.random() * 6)) + 1
        const two = Math.floor((Math.random() * 6))+ 1
        setRoll([one, two])
    }

    const RollBtn = () => {
        const [play] = useSound(click)
        return <div className="roll" onClick={() => {
            play()
            generateRoll()
        }} />
    }

    return (
        <div className="App">
            <RollBtn />
            <div className="dice">
                <Die count={roll[0]}/>
                <Die count={roll[1]}/>
            </div>
            <RollBtn />
        </div>
    );
}

export default App;
