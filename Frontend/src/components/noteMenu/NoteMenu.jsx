import React from 'react'

const NoteMenu = ({ onDelete }) => {
  return (
    <div>
      <ul>
        <li>Edit</li> 
        <li onClick={onDelete}>Delete</li>
      </ul>
    </div>
  );
};

export default NoteMenu