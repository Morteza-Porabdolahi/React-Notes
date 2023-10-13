export function AddNote({ children, handleSubmit }) {
  return (
    <form className="mt-20 justify-center flex-wrap items-center flex gap-5" onSubmit={handleSubmit}>
      {children} 
    </form>
  )
}
