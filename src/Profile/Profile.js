import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Profile = (props) => {
  const handleName = () => alert(`My name is ${props.fullName}`);
  return (
  <div style={{ textAlign: 'center', color:'blueviolet'}}>
      <h1>{props.fullName}</h1>
      <h2>{props.profession}</h2>
    <div className="phButton">
      {props.children}
      <p> {props.bio}</p>     
   </div>
   <button onClick={handleName}>Click me!</button>   
   </div>
  )
};
Profile.propTypes = {
    fullName: PropTypes.string.isRequired,
    bio: PropTypes.string,
    profession: PropTypes.string,
    children: PropTypes.element,
    handleName: PropTypes.func,
  };

Profile.defaultProps = {    
  profession: 'developper',
};

export default Profile;
