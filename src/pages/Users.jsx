import { useState, useEffect } from "react"
import { users as usersData } from "../data/users"
import UserCard from "../components/UserCards"
import Loader from "../components/Loader"
import ErrorMessage from "../components/ErrorMessage"

export default function Users({ favorites, toggleFavorite }) {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => {
      setUsers(usersData)
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase())
  )

  useEffect(() => {
    document.title = `Users (${filtered.length})`
  }, [filtered.length])

  if (loading) return <Loader />

  return (
    <div className="p-6">
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search by name..."
        className="border p-2 rounded w-full mb-4 dark:border-gray-600"
      />
      {filtered.length === 0 ? (
        <ErrorMessage message="No users found." />
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map(u => (
            <UserCard
              key={u.id}
              id={u.id}
              name={u.name}
              email={u.email}
              company={u.company}
              isFavorite={favorites.includes(u.id)}
              onToggleFavorite={() => toggleFavorite(u.id)}
            />
          ))}
        </div>
      )}
    </div>
  )
}