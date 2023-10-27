import React from 'react'
import * as sounds from './padSounds'

function DrumPad({name, handleDisplay, soundBank}) {

    function handleClick(){
        handleDisplay(name)
        const audio = document.getElementById(name);
        const source = audio.src
        audio.src = source
        audio.play();
    }

    return (
        <button className='drum-pad' id={sounds[soundBank][name]} onClick={handleClick}>
            {name}
            <audio src={sounds[soundBank][name]} className="clip" id={name}></audio>
        </button>
    )
}

export default DrumPad