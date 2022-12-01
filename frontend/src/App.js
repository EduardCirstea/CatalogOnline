import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Home, Termeni } from './pages'
import { Navbar } from './components'

function App() {
  return (
    <div className="row">
      <Router>
        <Navbar />
        <div className="col-2">
          <div className="main-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/informatii" element={<Home />} />
              <Route
                path="/termeni-si-conditii-de-utilizare"
                element={<Termeni />}
              />
            </Routes>
          </div>
        </div>
      </Router>
      <ToastContainer />
    </div>
  )
}

export default App
