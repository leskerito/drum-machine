import React from 'react'
import padSounds from './padSounds'

function DrumPad({name}) {

    return (
        <div>
            <audio controls className="clip" id={name}>
                <source src={padSounds[name]} type='audio/mp3'/>
            </audio>
        </div>
    )
}

export default DrumPad