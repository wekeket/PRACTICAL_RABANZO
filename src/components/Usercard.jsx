import { Link } from "react-router-dom"
import Button from "./Button"

export default function UserCard({ name, email, company, isFavorite, onToggleFavorite, id }) {
  return (
    <div className="border rounded p-4 shadow dark:border-gray-600">
      <h2 className="font-bold text-lg">{name}</h2>
      <p>{email}</p>
      <p className="text-sm opacity-70">{company}</p>
      <div className="flex gap-2 mt-3 items-center">
        <Button
          label={isFavorite ? "Remove Favorite" : "Add Favorite"}
          variant={isFavorite ? "danger" : "primary"}
          onClick={onToggleFavorite}
        />
        <Link to={`/users/${id}`} className="text-blue-500 underline">View Details</Link>
      </div>
    </div>
  )
}