import { useState, useEffect } from 'react'
import DrumPad from './DrumPad';

function DrumMachine() {
    const [padPlayed, setPadPlayed] = useState("");

    
    function handleDisplay(name){
        setPadPlayed(name);
    }

    const handlePress = (e) => {
        var audio = document.getElementById(e.key.toUpperCase())
        if (audio){
            handleDisplay(audio.id)
            audio.play()
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handlePress, true)
    }, []);

    return (
        <div id="drum-machine">
            DrumMachine
            <div id="display">
                {"Pad Played : " + padPlayed}
            </div>
            <DrumPad name="Q" handleDisplay={handleDisplay} />
            <DrumPad name="W" handleDisplay={handleDisplay} />
            <DrumPad name="E" handleDisplay={handleDisplay} />
            <DrumPad name="A" handleDisplay={handleDisplay} />
            <DrumPad name="S" handleDisplay={handleDisplay} />
            <DrumPad name="D" handleDisplay={handleDisplay} />
            <DrumPad name="Z" handleDisplay={handleDisplay} />
            <DrumPad name="X" handleDisplay={handleDisplay} />
            <DrumPad name="C" handleDisplay={handleDisplay} />
        </div>
    );
}


export default DrumMachine