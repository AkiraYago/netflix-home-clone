import './App.css'
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import AppRoutes from "./routes";

function App() {

  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  )
}

export default App
