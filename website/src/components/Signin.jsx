import Signin_svg from "../assets/Signin_svg";

const Signin = () => {
    return ( 

<div id='signin' className="flex flex-row w-[600px] h-[400px] bg-[#0763af] mt-[4rem] rounded-2xl italic">

    <div id='black' className="w-[350px] h-[400px] bg-[#313131] flex flex-col justify-center rounded-l-2xl">

        <div className="mx-[50px] mt-4">
        <input type="email" placeholder="Email" className="w-[235px] h-11 mb-3 rounded-xl pl-4" />
        <input type="text" placeholder="Name" className="w-[235px] h-11 mb-3 rounded-xl pl-4" />
        <input type='password' placeholder="Password" className="w-[235px] h-11 mb-3 rounded-xl pl-4" />
        <input type='password' placeholder="Re-enter Password" className="w-[235px] h-11 mb-3 rounded-xl pl-4" />
        <button className="w-[235px] h-[60px] bg-[#0763af] rounded-xl mt-9">LOG IN</button>
        <p className="text-sm ml-2">Forgot <a href="" className="text-[#59bed9]">password</a>?</p>
        </div>

    </div>

        <div className="w-32 h-32 mx-[60px] my-[100px]">
            <button><Signin_svg /></button>
            <p className="ml-8 text-xl justify-center">LOG IN</p>
        </div>

</div>

     );
}
 
export default Signin;