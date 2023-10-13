export function Input({ inputRef, text, onTextChange }) {
  return (
    <>
      <input value={text} ref={inputRef} onChange={onTextChange} type="text" className={`border border-tertiary-gray focus:border-tertiary-dark transition placeholder:tertiary-dark bg-primary-light flex-1 focus:outline-none text-tertiary p-4 rounded text-2xl ${text.length > 200 ? '!border-red-500' : ''}`} placeholder="Write something..." />
      <span className={`text-tertiary-dark text-xl ${text.length > 200 ? '!text-red-500' : ''}`}>{text.length}/200</span>
    </>
  )
}
