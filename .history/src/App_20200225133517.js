import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';


const particlesOptions = {
    particles: {
      
        }

    }
  }
}


function App() {
  return (
    <div className="App">
      <Particles className="particles"
        params= {{particlesOptions}}
      />
      <Navigation/>  
      <Logo/>
      <Rank/>
      <ImageLinkForm/>
      {/*<FaceRecognition/>} */}
    </div>
  );
}

export default App;
