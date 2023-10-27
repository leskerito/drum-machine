import { useState, useEffect } from 'react'
import DrumPad from './DrumPad';
import Switch from './Switch';

function DrumMachine() {
    const [padPlayed, setPadPlayed] = useState("");
    const [whichBank, setWhichBank] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    const soundBanks = ['padSounds', 'altSounds']

    
    function handleDisplay(name){
        setPadPlayed(name);
    }

    function handleBank(){
        setWhichBank((whichBank+1)%2)
        console.log(whichBank)
    }

    function handleVolume(){
        setIsPlaying(!isPlaying);
        const audios = document.getElementsByClassName('clip')
        for (let index in audios){
            audios.item(index).muted = !isPlaying
        }
    }

    const handlePress = (eve) => {
        const key = eve.key.toUpperCase();
        const audio = document.getElementById(key);
        
        if(audio == null) return;
        
        const source = audio.src
        audio.src = source
        audio.play().catch(err => null);
        handleDisplay(audio.id);

    }

    useEffect(() => {
        document.addEventListener('keydown', handlePress);

        return () => document.removeEventListener('keydown', handlePress)
    });

    return (
        <div id="drum-machine" className='container-sm'>
            <div id="top-half">
                <div id="display">
                    {"Pad Played : " + padPlayed}
                </div>
                <div id="controls">
                    <Switch name="bank" handleSwitch={handleBank}/>
                    <Switch name="volume" handleSwitch={handleVolume}/>
                </div>
            </div>
            <div id="lower-half">
                    <DrumPad className="col-4" name="Q" handleDisplay={handleDisplay} soundBank={soundBanks[whichBank]}/>
                    <DrumPad className="col-4" name="W" handleDisplay={handleDisplay} soundBank={soundBanks[whichBank]}/>
                    <DrumPad className="col-4" name="E" handleDisplay={handleDisplay} soundBank={soundBanks[whichBank]}/>
                    <DrumPad className="col-4" name="A" handleDisplay={handleDisplay} soundBank={soundBanks[whichBank]}/>
                    <DrumPad className="col-4" name="S" handleDisplay={handleDisplay} soundBank={soundBanks[whichBank]}/>
                    <DrumPad className="col-4" name="D" handleDisplay={handleDisplay} soundBank={soundBanks[whichBank]}/>
                    <DrumPad className="col-4" name="Z" handleDisplay={handleDisplay} soundBank={soundBanks[whichBank]}/>
                    <DrumPad className="col-4" name="X" handleDisplay={handleDisplay} soundBank={soundBanks[whichBank]}/>
                    <DrumPad className="col-4" name="C" handleDisplay={handleDisplay} soundBank={soundBanks[whichBank]}/>
            </div>
        </div>
    );
}


export default DrumMachine