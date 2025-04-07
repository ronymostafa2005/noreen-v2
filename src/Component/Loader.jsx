import { useEffect } from "react";
import "./CSS&Assets/Loader.css"; 
import loader from './CSS&Assets/loader.mp4'
//----------------------------------------
const Loader = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 4000);
  
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="loader">
      <video autoPlay muted onEnded={onFinish}>
        <source src={loader} type="video/mp4" />
      </video>
    </div>
  );
};

export default Loader;
