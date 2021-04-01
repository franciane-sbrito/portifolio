import React from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Network from './Components/Network/Network';
import AboutPage from './Pages/AboutPage/AboutPage';
import HomePage from './Pages/HomePage/HomePage';
import PortifolioPage from './Pages/PortifolioPage/Portifolio';

const App = () => {
    return (
      <div>
        <Header /> 
       <Network/>
       <HomePage/>
       <AboutPage/>
       <PortifolioPage/>
       <Footer/>
     </div>
    );
} 

export default App;
