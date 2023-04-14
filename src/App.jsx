import './App.css'
import { Header } from './pages/Header'
import { OurServices } from './pages/OurServices'
import { LeadingProvider } from './pages/LeadingProvider'
import { Downloads } from './pages/Downloads'
import { Feedbacks } from './pages/Feedbacks'
import { News } from './pages/News'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './pages/Footer'


function App() {
  

  return (
    <div className="App">
      <Header/>
      <OurServices/>
      <LeadingProvider/>
      <Downloads/>
      <Feedbacks/>
      <News/>
      <Footer/>
    </div>
  )
}

export default App
