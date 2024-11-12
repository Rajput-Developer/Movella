
import Navbar from './components/navbar/Navbar'
import { Outlet } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer/Footer';

function App() {


  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
