import './App.css'
import { Header } from './pages/Header'
import { OurServices } from './pages/OurServices'
import { LeadingProvider } from './pages/LeadingProvider'
import { Downloads } from './pages/Downloads'
import { Feedbacks } from './pages/Feedbacks'
import { News } from './pages/News'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './pages/Footer'
import { ScrollContainer, ScrollPage } from 'react-scroll-motion'


function App() {
  

  return (
    <div className="App">
      <ScrollContainer>
        <ScrollPage>
          <Header/>
        </ScrollPage>
        <ScrollPage>
          <OurServices/>

        </ScrollPage>
        <ScrollPage>
          <LeadingProvider/>
        </ScrollPage>
          
        <ScrollPage>
          <Downloads/>
        </ScrollPage>

          
        <ScrollPage>
        <Feedbacks/>
        </ScrollPage>

          
        <ScrollPage>
        <News/>
        </ScrollPage>

          
        <Footer/>
     

          
        
      </ScrollContainer>
    </div>
  )
}

export default App
