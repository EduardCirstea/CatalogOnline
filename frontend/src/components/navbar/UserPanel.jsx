import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../style/navbar.css'

function UserPanel() {
  const { user } = useSelector((state) => state.auth)
  const name = `${user.nume} ${user.initiala} ${user.prenume}`
  return (
    <div className="info1">
      <h2>{name}</h2>
      <p>[{user.cnp}]</p>
      <div className="info-student">
        <h3>An universitar curent: 2022-2023</h3>
        <div
          className="info-group
        "
        >
          <label>Ciclu studii: </label>
          <span>Licenta</span>
        </div>
        <div
          className="info-group
        "
        >
          <label>Facultate:</label>
          <select name="" id="">
            <option value="etti">Etti</option>
          </select>
        </div>
        <div
          className="info-group
        "
        >
          <label>Program studii:</label>
          <select name="" id="">
            <option value="etti">Etti</option>
          </select>
        </div>
        <div
          className="info-group
        "
        >
          <label>Domeniu:</label>
          <select name="" id="">
            <option value="etti">Etti</option>
          </select>
        </div>
      </div>
      <div className="links">
        <Link to="/student-profil">Date Personale</Link>
        <Link to="/contract-de-studii">Contracte de studii</Link>
        <Link to="/situatia-scolara">Situatia scolara</Link>
        <Link to="/contract-studii">Contracte de studii 2022-2023</Link>
        <Link to="/cerere-cazare">Cerere de cazare</Link>
        <Link to="/adeverinte">Adeverinte</Link>
        <Link to="/plati">Plati</Link>
      </div>
    </div>
  )
}

export default UserPanel
