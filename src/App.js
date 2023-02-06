import React from 'react';
import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const App = () => {
  return (
    <Box width="400px" sx={{widht: {xl: '1488px'}}} m="auto">
        Navbar 
        <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
        </Routes>
    </Box>
  )
}

export default App