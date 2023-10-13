import { Header, AddNote, Input, Button, Footer, Note, Notes } from './components/index';
import { useEffect, useRef, useState } from 'react';

export function App() {
  const [text, setText] = useState("");
  const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem('notes')) ?? []);
  const [editingNote, setEditingNote] = useState(null);

  const inputRef = useRef(null);
  
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  },[notes]);

  function handleTextChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if(text.length > 200 || text.trim().length <= 0) return;

    const newNote = {
      id: crypto.randomUUID(),
      text,
    }

    setNotes(notes => [...notes,newNote]);
    setText('');
  }

  function handleRemoveNote(id = "") {
    if(id === editingNote?.id) {
      handleCancelEditing();
    }
    
    setNotes(notes => notes.filter(note => note.id !== id));
  }

  function handleEditingNote(note = {}) {
    inputRef.current.focus();
    
    setEditingNote(note);
    setText(note.text);
  }

  function handleCancelEditing() {
    setText('');
    setEditingNote(null);
  }
  
  function handleSubmitEditing() {
    if(text.trim().length <= 0 || text.length > 200) return;
    
    setEditingNote(null);
    setText('');

    if(editingNote.text === text) return;
    
    setNotes(notes => notes.map(note => {
      if(note.id === editingNote.id) {
        return {
          id: editingNote.id,
          text,
        }
      }
      
      return note;
    }));
  }
  
  return (
    <section className="py-16 flex flex-col px-8 md:px-24 app text-center bg-primary text-tertiary font-default">
      <Header />
      <main className='flex-1'>
        <AddNote handleSubmit={handleSubmit}> 
          <Input inputRef={inputRef} text={text} onTextChange={handleTextChange}/>
          {
            editingNote ? (
              <>
                <Button onClick={handleSubmitEditing} className="py-2 basis-16 transition bg-green-700 text-3xl hover:bg-transparent hover:!border-green-700" >
                  ✓
                </Button>
                <Button onClick={handleCancelEditing} className="py-2 basis-16 transition bg-red-900 text-3xl hover:bg-transparent hover:!border-red-900">
                  &times;
                </Button>
              </>
            )
              : 
              <Button className="py-4 bg-secondary hover:bg-transparent hover:!border-secondary transition">
                Add Note
              </Button>
          }
        </AddNote>
        <Notes>
          {notes.length > 0 && notes.map(note => (
            <Note editingNote={editingNote} handleCancelEditing={handleCancelEditing} onRemoveNote={handleRemoveNote} onEditingNote={handleEditingNote} note={note} key={note.id}/>
          ))}
        </Notes>
      </main>
      <Footer />
    </section>
  )
}
