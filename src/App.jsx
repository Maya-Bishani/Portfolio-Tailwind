import Navbar from './Components/Navbar/Navbar'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import HomePage from './Pages/HomePage/HomePage'
import './App.css'
import 'aos/dist/aos.css'; 
import AOS from 'aos';

AOS.init();

function App() {
  
  return (
    <>
     <Navbar/> 
     <HomePage/>
    <Contact/>
     <Footer/>
    
    </>
  )
}

export default App
