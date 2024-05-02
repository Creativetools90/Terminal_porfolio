import Display from './Display';
import Cammand from './Cammand';
import './style.css';


function Terminal(){
    return(
        <>
        {/* we have two component */}
      <Display /> 
      {/* display is work for wallpaper  */}
      <Cammand/>
      {/* cammand is work for make a terminal */}
        </>
    )
}

export default Terminal;