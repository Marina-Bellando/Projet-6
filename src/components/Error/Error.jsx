import { Link } from 'react-router-dom'
import '../../style/Error.scss'

function Error() {
  return (
    <main className="main-content">
      <div className="error-container">
        <h1 className="error-title">404</h1>
        <p className="error-message">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link className="error-link" to="/">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </main>
  )
}

export default Error
