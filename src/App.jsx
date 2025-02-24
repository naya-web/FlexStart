import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@splidejs/react-splide/css';
import RootLayout from './RootLayout';
import Aos from 'aos';
import 'aos/dist/aos.css';



function App() {
  Aos.init();
    return (
        <>
        <RootLayout/>
        </>
  )
}

export default App
