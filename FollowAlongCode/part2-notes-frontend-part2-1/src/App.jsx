import { useState, useEffect } from 'react'
import Note from './components/Note'
import axios from 'axios'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('a new note')
  const [showAll, setShowAll] = useState(true)

  const hook =()=>{
    axios.get('http://localhost:3001/notes').then(res => {
      setNotes(notes.concat(res.data))
    })
  }

  useEffect(hook, [])

  const addNote = (event) => {
    event.preventDefault()
    if(newNote === "")
      return
    const noteObject = {
      id: notes.length + 1,
      content: newNote,
      important: Math.random() < 0.5
    }

    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const handleNoteChange = (event) =>{
    const value = event.target.value;
    console.log(value)
    setNewNote(value);
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)


  return (
    <div>
      <h1>Notes</h1>
      <button onClick = {()=>setShowAll(!showAll)}>{showAll?"Show only important":"Show all"}</button>
      <ul>
        {notesToShow.map(note =>
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default App