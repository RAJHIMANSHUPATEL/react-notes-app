import React from 'react'

function Header({ handleDarkMode }) {
    const toggleMode = () => {
        handleDarkMode(prevMode => !prevMode)
    }
    
    return (
        <div className='header'>
            <h1>Notes</h1>
            <button className='save' onClick={toggleMode}>Toggle Mode</button>
        </div>
    )
}

export default Header