import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { users } from "../data/users"
import ErrorMessage from "../components/ErrorMessage"

export default function UserDetails() {
  const { id } = useParams()
  const [user, setUser] = useState(null)

  useEffect(() => {
    setUser(users.find(u => u.id === Number(id)) || null)
  }, [id])

  useEffect(() => {
    document.title = user ? user.name : "User not found"
  }, [user])

  if (!user) return <div className="p-6"><ErrorMessage message="User not found." /><Link to="/users" className="underline text-blue-500">Back</Link></div>

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.company}</p>
      <p>{user.role}</p>
      <Link to="/users" className="underline text-blue-500">Back</Link>
    </div>
  )
}