import React from "react";
import { useEffect,useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
    const [torchPosition, setTorchPosition] = useState({top: window.innerHeight / 3,
    left: window.innerWidth / 2.1});
    
    useEffect(() => {
        const handleMouseMove = (event) => {
          setTorchPosition({
            top: event.pageY,
            left: event.pageX,
          });
        };
        document.addEventListener('mousemove', handleMouseMove);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  const navigate = useNavigate();
  const navigateTo=()=>{
    console.log('Button clicked');
    navigate('/home');
  }
    return (
      <div>
      <div className="background">
        <div className="container-page-not-found">
            
        <div className="text">
          <h1>404</h1>
          <h2>Uh, Ohh</h2>
          <h3>Sorry we cant find what you are looking for 'cuz its so dark in here</h3>
          
      </div>
      <div className="torch" style={{ position: 'absolute', top: torchPosition.top, left: torchPosition.left }}></div>
    </div>
    </div>
    <button className="linkTo" onClick={()=>navigateTo()}>Go Back</button>
    </div>
    );
    }
export default NotFound;