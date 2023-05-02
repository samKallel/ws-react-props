import React from 'react';
import './App.css';
// import du component Profile pour l'utiliser dans le component App (son parent)
import Profile from './Profile/Profile';
// import de l'image qui est stocke dans src/ image donc on donne son path
import myImage from './img/my-image.png';

function App() {
   
  return (
    <div className="App">
 {/* appel du component Profile on injectant des valeurs a ces props etant donne que App est le parent */}
      <Profile 
        fullName="Samiha Kallel"
        bio="I am a software engineer"
        profession="Developer"
        age ={46}
      >
      {/* l'image est le children c'est pour cela on la met entre le tag d'ouverture et de fermeture */}
      {/* Du style inline!!! */}
       <img src={myImage} alt="profile" style={{ width: '200px', height: '200px', 
        marginRight:'50px', marginLeft:'8%' }}  />
      </Profile>
    
    </div>
  );
}

export default App;
