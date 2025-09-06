import { Link } from "react-router"

export default function NotFound() {
  return (
    <div class="p-4 text-center">
      <h1>404 - Nie ma takiej strony</h1>
      
      <Link to="/" class="btn btn-primary mt-3">
          Przejdź do strony głównej
      </Link>
    </div>
  )
}