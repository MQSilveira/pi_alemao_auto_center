import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../screens/home/Home'
import About from '../screens/about/About'
import OurServices from '../screens/ourServices/OurServices'
import Assessment from '../screens/assessments/Assessments'
import Budget from '../screens/budget/Budget'


export default function RouterRoot() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/ourServices" element={<OurServices />} />
                <Route path="/assessment" element={<Assessment />} />
                <Route path="/budget" element={<Budget />} />
            </Routes>
        </BrowserRouter>
    )
}


