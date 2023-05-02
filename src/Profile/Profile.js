import React from 'react';
// pour importer les type des prosps
import PropTypes from 'prop-types'; 
import '../App.css';

const Profile = (props) => { 
  // on commence par ecrire la fonction qui va etre declenchee une fois le bouton clique
  const handleName = () => alert(`My name is ${props.fullName}`); 
  return (
  <div style={{ textAlign: 'center', color:'blueviolet'}}>{/* style inline concernant toute ma div*/}
      <h1>{props.fullName}</h1>
      <h3>{props.age} ans </h3>
      <h2>{props.profession}</h2>
    <div className="phButton"> {/*je donne un nom a ma classe pour style dans App.css*/}
    {/* le style concerne limage (children) et le bio pour les mettre en flex */}
      {props.children}
      <p> {props.bio}</p>     
   </div>
   <button onClick={handleName}>Click me!</button>   {/* le onClick du bouton recoit la fonction defini en haut*/}
   </div>
  )
};
// les types de tout les proprietes (props) de notre component Profile
Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    children: PropTypes.element,
    handleName: PropTypes.func,
    age: PropTypes.number,
  };
// j'ai donne un defaultProps a profession (choix aleatoire) si oublie on aura une valeur a afficher
Profile.defaultProps = {    
  profession: 'developper',
};

export default Profile;
