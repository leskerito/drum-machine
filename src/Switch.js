import React from 'react'

function Switch({name, handleSwitch}) {

  return (
    <div className='switch'>
        <button id={name + "-switch"} onClick={handleSwitch}>
            {name.toUpperCase()}
        </button>
    </div>
  )
}

export default Switch