import Login from "./Login";
import Signin from "./Signin";
import './Flip.css'

// hover:transformY transform-3d transition-all delay-100 duration-500 ease-in-out6


const Register = () => {
    return ( 

<div id='body'>
    <div id='card'>
        <div id="front"><Login /></div>
        <div id="back"><Signin /></div>
    </div>
</div>
     );
}
 
export default Register;