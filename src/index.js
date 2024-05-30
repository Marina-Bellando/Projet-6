import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './style/index.scss'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Home from './pages/Home/Home'
import Logement from './pages/Logement/Logement'
import APropos from './pages/APropos/APropos'
import Error from './components/Error/Error'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content"></main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Logement/:id" element={<Logement />} />
          <Route path="/APropos" element={<APropos />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  </React.StrictMode>
)
