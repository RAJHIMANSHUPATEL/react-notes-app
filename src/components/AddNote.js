import React, { useState } from 'react';

function AddNote({ handleAddNote }) {
    const [noteText, setNoteText] = useState("");
    const [exceedLimit, setExceedLimit] = useState(false);
    const characterLimit = 200;

    const handleChange = (e) => {
        const newText = e.target.value;
        if (newText.length <= characterLimit) {
            setNoteText(newText);
            setExceedLimit(false); // Reset the exceedLimit state if within the limit
        } else {
            setExceedLimit(true); // Set exceedLimit state to true if the limit is exceeded
        }
    }

    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
        }
        setNoteText("");
    }

    return (
        <div className='note new'>
            <textarea
                onChange={handleChange}
                cols="10"
                rows="8"
                placeholder='Type to add a note...'
                value={noteText}
            ></textarea>
            <div className="note-footer">
                {exceedLimit? <small style={{ color: 'red' }}>Character limit exceeded!</small>:
                <small>{characterLimit - noteText.length} Remaining</small>
                }
                <button className='save' onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    );
}

export default AddNote;
