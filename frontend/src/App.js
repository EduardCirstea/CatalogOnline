import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Logo from './components/Logo'
import { Home, Termeni, PageNotFound, Profil } from './pages'
import { Navbar, PrivateRoute } from './components'

function App() {
  return (
    <div className="row">
      <Router>
        <Navbar />
        <div className="col-2">
          <div className="main-container">
            <Routes>
              <Route path="*" element={<PageNotFound />} />
              <Route path="/" element={<Home />} />
              <Route path="/informatii" element={<Home />} />
              <Route path="/logo" element={<Logo />} />
              <Route
                path="/termeni-si-conditii-de-utilizare"
                element={<Termeni />}
              />
              <Route path="/student-profil" element={<PrivateRoute />}>
                <Route path="/student-profil" element={<Profil />} />
              </Route>
            </Routes>
          </div>
        </div>
      </Router>
      <ToastContainer />
    </div>
  )
}

export default App
