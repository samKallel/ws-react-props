import React from 'react';
import './App.css';
import Profile from './Profile/Profile';
import myImage from './my-image.png';

function App() {
  
  
  return (
    <div className="App">
      <Profile
        fullName="Samiha Kallel"
        bio="I am a software engineer"
        profession="Developer"
        age ={46}
      >
       <img src={myImage} alt="profile" style={{ width: '200px', height: '200px', 
        marginRight:'50px', marginLeft:'8%' }}  />
      </Profile>
    
    </div>
  );
}

export default App;
