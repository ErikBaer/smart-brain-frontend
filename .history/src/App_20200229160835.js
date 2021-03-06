import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Register from './components/Register/Register';
import SignIn from './components/SignIn/SignIn';
import Particles from 'react-particles-js';
import particlesOptions from './particlesjs-config';

const initialState = {
    input:'',
    imageUrl:'',
    box:{},
    route: 'signin',
    isSignedIn: false,
    user: {
      id:'',
      name:'',
      email: '',
      password: '',
      entries: 0,
      joined: new Date()
    }
  }


class App extends Component {
  constructor() {
    super();
    this.state = initialState
  }

  loadUser = (data) => { //would user :data also work ?
    this.setState({user: {
      id:data.id,
        name:data.name,
        email: data.email,
        password: data.password,
        entries: data.entries,
        joined: data.joined
    } 
    } )
  }

  calculateFaceLocation = (data) => {
     const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
     const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height) 
    }
  }

displayBox = (box) => {
  this.setState({box:box});
}


onInputChange = (event) => {
  this.setState({input: event.target.value})
  }

onRouteChange = (route) => {
  if (route==='signout') {
    this.setState(initialState)
  } else if (route === 'home') {
    this.setState({isSignedIn: true})
  }
  this.setState({route:route})
}


onButtonSubmit = () => {
  
  this.setState({imageUrl:this.state.input});
  //get API-answer back from server
  fetch('http://localhost:3001/imageurl', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          input:this.state.input
        })
  })
  .then (response => response.json())
  //handle response from Server/API
  .then(response => {

    if(response) {
      fetch('http://localhost:3001/image', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          id:this.state.user.id
        })
      })
      .then(response => response.json())
      .then(count => {
        this.setState(Object.assign(this.state.user,{entries: count}) )
        })
      .catch(err => console.log(err))
      }

   return this.displayBox(this.calculateFaceLocation(response))
  })
  .catch(err => console.log(err, 'OOps'))
} ;

  render(){
    const {box,imageUrl, route, isSignedIn} = this.state;
    return (
      <div className="App">
        <Particles className="particles"
        params={particlesOptions}
        />
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn}/>
        {route === 'home'
        ? <div>
            <Logo/>
            <Rank name={this.state.user.name} entries={this.state.user.entries} />
            <ImageLinkForm onInputChange={this.onInputChange} 
                        onButtonSubmit={this.onButtonSubmit} 
                        />
            <FaceRecognition box={box} imageUrl={imageUrl}/>
          </div>
          : (
            route === 'signin'
            ? <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser} />        
            : <Register onRouteChange= {this.onRouteChange} loadUser= {this.loadUser}/>
          )
        }
      </div>
    );
  }
  
}

export default App;
