import Login from "./Login";
import Signin from "./Signin";

const Register = () => {
    return ( 

<div id='body' className="flex flex-col mx-64 justify-center content-center">
    <div id='card' className="w-[600px] h-[400px] hover:transformY transform-3d transition-all delay-100 duration-500 ease-in-out">
        <div className="front"><Login /></div>
        <div className="back"><Signin /></div>
    </div>
</div>
     );
}
 
export default Register;