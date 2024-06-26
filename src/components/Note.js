import React from 'react'
import {MdDeleteForever} from 'react-icons/md'

function Note({id, text, date, handleDeleteNote}) {
    return (
        <div className='note'>
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever className='delete' size='1.3em' onClick={(()=>handleDeleteNote(id))}/>
            </div>
        </div>
    )
}

export default Note