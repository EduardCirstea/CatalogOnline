import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function AdminPanel() {
  const { user } = useSelector((state) => state.auth)
  return (
    <>
      <h2>{user.name}</h2>
      <div className="info-student">
        <h3>An universitar curent: 2022-2023</h3>
        <p>Ciclu studii: Licenta</p>
        <p>Facultate:</p>
        <select name="" id="">
          <option value="etti">Etti</option>
        </select>
        <p>Program studii:</p>
        <select name="" id="">
          <option value="etti">Etti</option>
        </select>
        <p>Domeniu:</p>
        <select name="" id="">
          <option value="etti">Etti</option>
        </select>
      </div>
      <div className="links">
        <Link to="/student-profil">Date Personale</Link>
        <Link to="/contract-de-studii">Contracte de studii</Link>
      </div>
    </>
  )
}

export default AdminPanel
