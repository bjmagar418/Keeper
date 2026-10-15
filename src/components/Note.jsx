import React from 'react'
import notes from './Note';
import Card from './Card';

function createNote (note){
return <Card
key = {note.key}
title = {note.title}
content= {note.content}
/>

};
const Note = () => {
  return (
     <div className='flex flex-wrap gap-4 p-4'>
      {notes.map(createNote)}
      {/* {notes.map((note) => (
         <Card
key = {note.key}
title = {note.title}
content= {note.content}
/>
      ))} */}
      </div>
  )
}

export default Note;
