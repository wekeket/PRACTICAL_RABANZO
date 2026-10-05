export default function Button({ label, onClick, variant = "primary", children }) {
  const styles = variant === "danger"
    ? "bg-red-600 hover:bg-red-700"
    : "bg-blue-600 hover:bg-blue-700"
  return (
    <button onClick={onClick} className={`${styles} text-white px-3 py-1 rounded`}>
      {children} {label}
    </button>
  )
}