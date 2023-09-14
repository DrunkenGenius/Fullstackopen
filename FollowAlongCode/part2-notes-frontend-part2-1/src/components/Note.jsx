const Note = ({ note, toggleImportanceOf }) => {
  const label = note.important
    ? 'make not important' : 'make important'

  return (
    <li key={note.id}>{note.content} 
    <button onClick={toggleImportanceOf}>{label}</button></li>
  )
}

export default Note