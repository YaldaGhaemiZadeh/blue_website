import Login from "./Login";
import Signin from "./Signin";

const Register = () => {
    return ( 

<div id='body' className="flex flex-col mx-64 justify-center content-center">
    <div className="relative">
    <div id='card' className="hover:transformY transform-3d transition-all delay-150 duration-300 ease-in-out w[1000px] h-[100px] bg-cyan-500">
        <div className="front"><Login /></div>
        <div className="back"><Signin /></div>
    </div>
    </div>
</div>
     );
}
 
export default Register;