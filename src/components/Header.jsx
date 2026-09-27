import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="site-header">
      <nav className="site-nav">

        <Link
          to="/"
          className="site-logo"
        >
          <span className="site-logo-mark">
            TP
          </span>

          <span className="site-logo-name">
            Travel Planner
          </span>
        </Link>

        <div className="site-nav-links">

          <Link to="/">
            Início
          </Link>

          <Link to="/destinos">
            Destinos
          </Link>

          <Link to="/adicionar-destino">
            Adicionar
          </Link>

        </div>

      </nav>
    </header>
  )
}

export default Header