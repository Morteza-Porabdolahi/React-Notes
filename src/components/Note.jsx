import { Button } from "./Button"

export function Note({ handleCancelEditing, editingNote, note, onRemoveNote, onEditingNote }) {
  return (
    <div className="shadow-md gap-4 rounded-xl flex flex-col justify-between self-stretch bg-primary-light p-8 text-xl leading-relaxed font-normal text-left">
      <p className="break-words">
        {note.text}
      </p>
      <div className="justify-end flex gap-2">
        <Button onClick={() => {
          if(editingNote?.id === note.id) {
            handleCancelEditing();
          } else {
            onEditingNote(note);
          }
        }} className="bg-primary py-2 hover:bg-yellow-600 transition">
          Edit
        </Button>
        <Button onClick={() => onRemoveNote(note.id)} className="bg-primary py-2 hover:bg-red-900 transition">
          Remove
        </Button>
      </div>
    </div>
  )
}
