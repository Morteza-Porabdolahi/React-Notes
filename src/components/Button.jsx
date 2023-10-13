export function Button({ className, children, onClick }) {
  return (
    <button onClick={onClick} className={`${className} shadow-md self-stretch px-5 rounded-md text-2xl focus:outline-none border border-transparent focus:border-tertiary-dark`}>
      {children}
    </button>
  )
}
