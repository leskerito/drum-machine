import { useState, React } from 'react'
import DrumPad from './DrumPad';

function DrumMachine() {
    const [padPlayed, setPadPlayed] = useState("");

    function handlePad(){

    }

    return (
        <div>
            DrumMachine
            <Display />
            <DrumPad name="Q" />
        </div>
    );
}

function Display() {
  return (
    <div>Display</div>
  )
}


export default DrumMachine