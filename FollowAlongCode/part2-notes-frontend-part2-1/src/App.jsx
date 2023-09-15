import { useState, useEffect } from 'react'
import Note from './components/Note'
import noteService from './services/notes'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('a new note')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

 
  const hook =()=>{
    noteService.getAll().then(allNotes=>{
      setNotes(allNotes)
    })
  }

  const toggleImportanceOf = (id) => {
    const note = notes.find(n=> n.id === id)
    const changedNote = {...note, important: !note.important}

    noteService.update(id, changedNote).then(updatedNote =>{
      setErrorMessage("")
      setNotes(notes.map(n=>n.id!== id? n : updatedNote))
    }).catch(err => {
      setErrorMessage(`Note '${note.content}' was already removed from server`)
      setNotes(notes.filter(n => n.id !== id))
    })
  }

  const addNote = (event) => {
    event.preventDefault()
    if(newNote === ""){
      return
    }

    let noteObject = {
      content: newNote,
      important: Math.random() < 0.5
    }
    
    noteService.create(noteObject).then(createdNote => {
      setNotes(notes.concat(createdNote))
      console.log(createdNote)
    })

    
    setNewNote('')
  }

  useEffect(hook, [])

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
      <Notification message={errorMessage}/>
      <button onClick = {()=>setShowAll(!showAll)}>{showAll?"Show only important":"Show all"}</button>
      <ul>
        {notesToShow.map(note =>
          <Note key={note.id} note={note} toggleImportanceOf = {() => toggleImportanceOf(note.id)} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">Save</button>
      </form>
      <Footer />
    </div>
  )
}

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className='error'>
      {message}
    </div>
  )
}

const Footer = () => {
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  }

  return(
    <div style={footerStyle}><br/>
      <em>Note app, Department of Computer Science, University of Helsinki</em>
    </div>
  )
}
export default App