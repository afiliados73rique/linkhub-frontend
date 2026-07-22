import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Admin from './pages/Admin/Admin'
import RotaProtegida from './components/RotaProtegida/RotaProtegida'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <RotaProtegida>
              <Admin />
            </RotaProtegida>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App