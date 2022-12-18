import { useSelector } from 'react-redux'
import './style/navbar.css'
import { Link } from 'react-router-dom'

function AditionalLinks() {
  const { user } = useSelector((state) => state.auth)
  return (
    <>
      {user ? (
        <div className="link-group user-link">
          <Link to="/">Home</Link>
          <Link to="/informatii">Informatii generale</Link>
          <Link to="/intrebari-frecvente">Intrebari frecvente</Link>
          <Link to="/intrebar-observatii">Intrebari si observatii.Ajutor</Link>
          <Link to="/resurse-utile">Resurse utile</Link>
          <Link to="/">Contact</Link>
          <Link to="/termeni-si-conditii-de-utilizare">
            Termeni si conditii de utilizare
          </Link>
        </div>
      ) : (
        <div className="link-group">
          <Link to="/">Home</Link>
          <Link to="/informatii">Informatii generale</Link>
          <Link to="/">Contact</Link>
          <Link to="/termeni-si-conditii-de-utilizare">
            Termeni si conditii de utilizare
          </Link>
        </div>
      )}
    </>
  )
}

export default AditionalLinks
