import React from 'react'
import padSounds from './padSounds'

function DrumPad({name, handleDisplay}) {

    function handleClick(){
        handleDisplay(name)
        const audio = document.getElementById(name);
        audio.play();
    }

    return (
        <button className='drum-pad' id={padSounds[name]} onClick={handleClick}>
            {name}
            <audio src={padSounds[name]} className="clip" id={name}></audio>
        </button>
    )
}

export default DrumPad