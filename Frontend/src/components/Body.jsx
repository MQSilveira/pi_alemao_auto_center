import Navbar from './navbar/Navbar'
import Footer from './Footer'
import Home from '../screens/home/Home'
import About from '../screens/about/About'
import OurServices from '../screens/ourServices/OurServices'
import Budget from '../screens/budget/Budget'
import Assessments from '../screens/assessments/Assessments'
import MissionVisionValues from '../screens/missionVisionValues/MissionVisionValues'
import './styles/Body.css'


export default function Body() {
    return (
        <div className='body'>    
            <main className='container' id='main'>
                <Navbar />
                <Home />
                <About />
                <MissionVisionValues />
                <OurServices />
                <Budget />
                <Assessments />
                <Footer />
            </main>
        </div>
    )
}
