import React from 'react';
import Note from './Note';
import notesone from "./Nothing";


// function createNotes(noteItem) {
//     return <Note 
//     key={noteItem.key}
//      title= {noteItem.title}
//      content={noteItem.content}
//     />
// }

function Keeper() {
    console.log(notesone)
    return (
        <div>
           <h2>Hello there</h2>
           {/* <Note
            title="This is the note title"
            content="this is the note content of he keeper"
           /> */}
           {notesone.map(noteItem => (
               <Note
                key={noteItem.key}
                title={noteItem.title}
                content={noteItem.content} />
           ))}
           
        </div>
    )
}

export default Keeper
