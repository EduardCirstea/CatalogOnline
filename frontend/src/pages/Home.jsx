import './style/style.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home-wrapper">
      <div className="info">Informaţii generale</div>
      <div className="home-content">
        <h2>
          În atenţia studenţilor din anul I, ciclul de studii licenţă, al anului
          universitar 2022-2023:
        </h2>
        <p>
          <span className="bold">
            Începând cu data de <span className="red">30 Septembrie</span>
          </span>
          , fiecare student îşi va putea accesa contul, creat pe baza celui de
          la admitere (http://admitere.pub.ro). Autentificarea se face cu CNP /
          seria de paşaport ca username, iar parola aceeaşi cu cea de la
          admitere.
        </p>
        <p>În cazul în care parola nu este acceptată, încercaţi următoarele:</p>
        <li>
          parola formată din ultimele 6 cifre din CNP / seria de paşaport{' '}
        </li>
        <li>
          click <Link to="/resetare-parola">resetare parola</Link>
        </li>

        <p>
          Pentru clarificări şi observaţii în ceea ce priveşte modul de
          funcţionare a site-ului, vă rugăm să consultaţi secţiunile:
        </p>
        <li>
          <Link to="/intrebari-frecvente">Întrebări frecvente</Link>
        </li>
        <li>
          <Link to="/intrebari-si-observatii">Întrebări şi observaţii</Link>
        </li>
      </div>
    </div>
  )
}

export default Home
