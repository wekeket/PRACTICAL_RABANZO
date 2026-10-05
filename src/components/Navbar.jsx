import { NavLink } from "react-router-dom"
import Button from "./Button"

export default function Navbar({ favoritesCount, darkMode, onToggleDark }) {
  const linkClass = ({ isActive }) =>
    isActive ? "font-bold underline" : "opacity-80 hover:opacity-100"

  return (
    <nav className="flex gap-6 items-center p-4 bg-gray-200 dark:bg-gray-800">
      <NavLink to="/" end className={linkClass}>Home</NavLink>
      <NavLink to="/users" className={linkClass}>Users</NavLink>
      <NavLink to="/about" className={linkClass}>About</NavLink>
      <span className="ml-auto">Favorites: {favoritesCount}</span>
      <Button label={darkMode ? "Light Mode" : "Dark Mode"} onClick={onToggleDark} />
    </nav>
  )
}