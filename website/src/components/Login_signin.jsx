
const Log_sign = () => {
    return ( 

<div id='body' className="flex justify-center content-center">
    <div id='card' className="absolute w-[100] h-[900] bg-cyan-400">

            <div id='signin' className="w-[600px] h-[400px] bg-[#0763af] mt-[4rem] rounded-2xl italic">
                <div id='black' className="w-[350px] h-[400px] bg-[#313131] flex flex-col justify-center rounded-l-2xl">
                    <div className="mx-[50px]">
                    <input type="text" placeholder="email" className="w-[235px] h-11 mb-3 rounded-xl pl-4"></input>
                    <input type='password' placeholder="password" className="w-[235px] h-11 mb-3 rounded-xl pl-4" />
                    <button className="w-[235px] h-[60px] bg-[#0763af] rounded-xl mt-9">LOG IN</button>
                    <p className="text-sm ml-2">Forgot <a href="" className="text-[#59bed9]">password</a>?</p>
                    </div>
                </div>
            </div>

            <div id='login' className="absolute w-[600px] h-[400px] bg-[#0763af] mt-[4rem] rounded-2xl italic">
                <div id='black' className="w-[350px] h-[400px] bg-[#313131] flex flex-col justify-center rounded-l-2xl">
                    <div className="mx-[50px]">
                    <input type="text" placeholder="email" className="w-[235px] h-11 mb-3 rounded-xl pl-4"></input>
                    <input type='password' placeholder="password" className="w-[235px] h-11 mb-3 rounded-xl pl-4" />
                    <button className="w-[235px] h-[60px] bg-[#0763af] rounded-xl mt-9">LOG IN</button>
                    <p className="text-sm ml-2">Forgot <a href="" className="text-[#59bed9]">password</a>?</p>
                    </div>
                </div>
            </div>

    </div>
</div>
        
     );
}
 
export default Log_sign;