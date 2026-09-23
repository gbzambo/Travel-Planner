import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="px-8 py-6">
      <nav className="flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-semibold"
        >
          Travel Planner
        </Link>

        <div className="flex items-center gap-8">
          <Link to="/">
            Início
          </Link>

          <Link to="/destinos">
            Destinos
          </Link>

          <Link to="/mapa">
            Mapa
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header