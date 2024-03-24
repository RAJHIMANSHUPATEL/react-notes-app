import React from 'react'

function Header({ handleDarkMode }) {
    const toggleMode = () => {
        handleDarkMode(prevMode => !prevMode)
    }
    
    return (
        <div className='header'>
            <h1>Notes</h1>
            <button className='save' onClick={toggleMode}>Toggle Node</button>
        </div>
    )
}

export default Header