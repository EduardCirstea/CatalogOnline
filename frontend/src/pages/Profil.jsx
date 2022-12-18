import { useSelector, useDispatch } from 'react-redux'

import './style/style.css'
function Profil() {
  const { user } = useSelector((state) => state.auth)
  const sex = user.cnp.toString().charAt(0) === '1' ? 'M' : 'F'

  return (
    <div className="profile">
      <h2>Date personale</h2>
      <div className="profile-content">
        <div className="profile-info">
          <div className="additional-info">
            <div>
              <p>
                Toate câmpurile sunt necesare. În acele câmpuri în care nu aveţi
                ce să completaţi (informaţie necunoscută sau nu este cazul),
                scrieţi "-" (liniuţa de unire).
              </p>
              <p>
                Vă rugăm să folosiţi diacriticele (ă Ă î Î â Â ş Ş ţ Ţ) ori de
                câte ori este nevoie.
              </p>
              <p>
                Contractul de studii nu va putea fi semnat, iar cererea de
                cazare în cămin nu va putea fi soluţionată dacă datele
                personale, inclusiv fotografia, nu sunt complete şi conform
                documentelor.
              </p>
            </div>
            <div className="checked">{user.checked ? 'salutt' : null}</div>
          </div>
          {user.verificat ? 'bifa' : null}
        </div>
        <div className="input-group">
          <label htmlFor="nume">Numele de familie la naştere:</label>
          <input type="text" name="nume" value={user.nume} disabled />
        </div>
        <div className="input-group">
          <label htmlFor="prenume">Prenume</label>
          <input type="text" name="prenume" value={user.prenume} disabled />
        </div>
        <div className="input-group">
          <label htmlFor="nume">Initialele prenumelui tatalui:</label>
          <input type="text" name="nume" value={user.initiala} disabled />
        </div>
        <select name="cetatenie" id="cetatenie" disabled>
          <option value={user.cetatenie}>{user.cetatenie}</option>
        </select>
        <select name="etnie" id="etnie" disabled>
          <option value={user.etnie}>{user.etnie}</option>
        </select>
        <p>Sex:{sex}</p>
        <section>
          <h3>Data si Locul Nasterii</h3>
          <div className="input-group">
            <label htmlFor="tara">Tara:</label>
            <input type="text" name="tara" value={user.taraNastere} disabled />
          </div>
          <div className="input-group">
            <label htmlFor="judet">Judet:</label>
            <input
              type="text"
              name="judet"
              value={user.judetNastere}
              disabled
            />
          </div>
          <div className="input-group">
            <label htmlFor="data">Data:</label>
            <input type="text" name="data" value={user.dataNastere} disabled />
          </div>
          <div className="input-group">
            <label htmlFor="localitate">Localitate</label>
            <input
              type="text"
              name="localitate"
              value={user.localitateNastere}
              disabled
            />
          </div>
        </section>
        <section>
          <h3>Buletin / Carte de identitate / pasaport</h3>
          <p>CNP (username): {user.cnp}</p>
          <div className="input-group">
            <label htmlFor="serie">CI serie:</label>
            <input type="text" name="serie" value={user.ciSerie} disabled />
          </div>
          <div className="input-group">
            <label htmlFor="numar">CI numar:</label>
            <input type="text" name="numar" value={user.ciNumar} disabled />
          </div>
          <div className="input-group">
            <label htmlFor="eliberatde">Eliberat de:</label>
            <input
              type="text"
              name="eliberatde"
              value={user.eliberatDe}
              disabled
            />
          </div>
          <div className="input-group">
            <label htmlFor="eliberatla">Eliberat la data:</label>
            <input
              type="text"
              name="eliberatla"
              value={user.eliberatLa}
              disabled
            />
          </div>
          <div className="input-group">
            <label htmlFor="expira">Expira la data:</label>
            <input type="text" name="expira" value={user.expiraLa} disabled />
          </div>
        </section>
        <section>
          <h3>Domiciliu stabil (din buletin/carte de identitate)</h3>
          <div className="input-group">
            <label htmlFor="taraDomiciliu">Tara:</label>
            <input
              type="text"
              name="taraDomiciliu"
              value={user.taraDomiciliu}
              disabled
            />
          </div>
          <div className="input-group">
            <label htmlFor="judetDomiciliu">Judet:</label>
            <input
              type="text"
              name="judetDomiciliu"
              value={user.judetDomiciliu}
              disabled
            />
          </div>
          <div className="input-group">
            <label htmlFor="localitateDomiciliu">Localitate:</label>
            <input
              type="text"
              name="localitateDomiciliu"
              value={user.localitateDomiciliu}
              disabled
            />
          </div>
          <div className="input-group">
            <label htmlFor="cod-postal">Cod Postal:</label>
            <input
              type="text"
              name="cod-postal"
              value={user.codPostal}
              disabled
            />
          </div>
          <div className="input-group">
            <label htmlFor="strada">Strada:</label>
            <input
              type="text"
              name="strada"
              value={user.stradaDomiciliu}
              disabled
            />
          </div>
          <div className="input-group">
            <label htmlFor="nr">Nr:</label>
            <input type="text" name="nr" value={user.nr} disabled />
          </div>
          <div className="input-group">
            <label htmlFor="bloc">Bl:</label>
            <input
              type="text"
              name="bloc"
              value={user.bl ? user.bl : ' -'}
              disabled
            />
          </div>
          <div className="input-group">
            <label htmlFor="scara">Sc:</label>
            <input
              type="text"
              name="scara"
              value={user.sc ? user.sc : ' -'}
              disabled
            />
          </div>
          <div className="input-group">
            <label htmlFor="telefonFix">Telefon fix:</label>
            <input
              type="text"
              name="telefonFix"
              value={user.telefonFix}
              disabled
            />
          </div>
          <div className="input-group">
            <label htmlFor="telefonMobil">Telefon mobil:</label>
            <input
              type="text"
              name="telefonMobil"
              value={user.telefonMobil}
              disabled
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">E-mail:</label>
            <input type="text" name="email" value={user.email} disabled />
          </div>
        </section>
        <section>
          <h3>Date legate de familie</h3>
          <div className="input-group">
            <label htmlFor="numeTata">Nume tata:</label>
            <input type="text" name="numeTata" value={user.numeTata} disabled />
          </div>
          <div className="input-group">
            <label htmlFor="prenumeTata">Prenume tata:</label>
            <input
              type="text"
              name="prenumeTata"
              value={user.prenumeTata}
              disabled
            />
          </div>
          <div className="input-group">
            <label htmlFor="numeMama">Nume mama:</label>
            <input type="text" name="numeMama" value={user.numeMama} disabled />
          </div>
          <div className="input-group">
            <label htmlFor="prenumeMama">Prenume mama:</label>
            <input
              type="text"
              name="prenumeMama"
              value={user.prenumeMama}
              disabled
            />
          </div>
          <div className="input-group">
            <label htmlFor="stareCivila">Stare civila:</label>
            <input
              type="text"
              name="stareCivila"
              value={user.stareCivila}
              disabled
            />
          </div>
          <div className="input-group">
            <label htmlFor="stareSpeciala">Stare sociala speciala:</label>
            <input
              type="text"
              name="stareSpeciala"
              value={user.stareSpeciala}
              disabled
            />
          </div>
          <div className="input-group">
            <label htmlFor="situatieMedicala">
              Situatie medicala speciala:
            </label>
            <input
              type="text"
              name="situatieMedicala"
              value={user.stareMedicala}
              disabled
            />
          </div>
        </section>
        <section>
          <h3>Alte date personale</h3>
          <div className="input-group">
            <label htmlFor="iban">Numar cont bancar(IBAN):</label>
            <input type="text" name="iban" value={user.iban} disabled />
          </div>
          <div className="input-group">
            <label htmlFor="banca">Banca:</label>
            <input type="text" name="banca" value={user.banca} disabled />
          </div>
        </section>
        <section className="absolvire">
          <h3>Absolviri (studii efectuate)</h3>
          <div className="abs-group">
            <p className="black">Tip Studii:</p>
            <p>{user.absolvire.tipStudii}</p>
          </div>
          <div className="abs-group">
            <p className="black">Tara:</p>
            <p>{user.absolvire.taraStudii}</p>
          </div>
          <div className="abs-group">
            <p className="black">Localitate:</p>
            <p>{user.absolvire.localitateStudii}</p>
          </div>
          <div className="abs-group">
            <p className="black">Institutia de inv. absolvita:</p>
            <p>{user.absolvire.institutiaStudii}</p>
          </div>
          <div className="abs-group">
            <p className="black">Profil / domeniu:</p>
            <p>{user.absolvire.profil}</p>
          </div>
          <div className="abs-group">
            <p className="black">Forma de invatamant:</p>
            <p>{user.absolvire.formaStudii}</p>
          </div>
          <div className="abs-group">
            <p className="black">Nr. ani de studiu:</p>
            <p>{user.absolvire.nrStudii}</p>
          </div>
          <div className="abs-group">
            <p className="black">An admitere:</p>
            <p>{user.absolvire.anAdmitere}</p>
          </div>
          <div className="abs-group">
            <p className="black">An absolvire:</p>
            <p>{user.absolvire.anAbsolvire}</p>
          </div>
          <div className="abs-group">
            <p className="black">Diploma-tip:</p>
            <p>{user.absolvire.diplomaTip}</p>
          </div>
          <div className="abs-group">
            <p className="black">Diploma-inst emitenta:</p>
            <p>{user.absolvire.diplomaInstitutie}</p>
          </div>
          <div className="abs-group">
            <p className="black">Diploma serie:</p>
            <p>{user.absolvire.diplomaSerie}</p>
          </div>
          <div className="abs-group">
            <p className="black">Diploma nr:</p>
            <p>{user.absolvire.diplomaNr}</p>
          </div>
          <div className="abs-group">
            <p className="black">Diploma-an emitere</p>
            <p>{user.absolvire.diplomaAnEmitere}</p>
          </div>
          <div className="abs-group">
            <p className="black">Medie an I</p>
            <p>{user.absolvire.medieAn1}</p>
          </div>
          <div className="abs-group">
            <p className="black">Medie an II</p>
            <p>{user.absolvire.medieAn2}</p>
          </div>
          <div className="abs-group">
            <p className="black">Medie an III</p>
            <p>{user.absolvire.medieAn3}</p>
          </div>
          <div className="abs-group">
            <p className="black">Medie an IV</p>
            <p>{user.absolvire.medieAn4}</p>
          </div>
          <div className="abs-group">
            <p className="black">Examen final-medie:</p>
            <p>{user.absolvire.examenFinalStudii}</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Profil
