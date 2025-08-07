import './App.css'
import { Route, Routes } from 'react-router-dom'


import HomePages from './Components/Pages/Shop'
import Register from './Components/Pages/Register'
import Footer from './Components/Organims/Footer'
import { appRoutes } from './Components/routes/Routes'

function App() {
  return (
    <>
      <div>
      <Routes>

        <Route path="/" element={<HomePages />} />
        <Route path="/register" element={<Register />} />
         <Route path="/footer" element={<Footer />} />
         {/* <Route path="/Gallery" element={<Gallery />} /> */}
        {appRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        
      </Routes>

      </div>
    </>
  )
}
export default App
