const Log_sign = () => {
    return ( 
        <div id='body' className="flex justify-center items-center perspective-[1000px]">
            <div id='card' className="relative w-[600px] h-[400px]">
                <div id='signin' className="absolute backface-visibility-hidden w-[600px] h-[400px] bg-[#0763af] mt-[4rem] rounded-2xl italic transform rotateY-0 transition-transform duration-500 ease-in-out">
                    <div id='black' className="w-[350px] h-[400px] bg-[#313131] flex flex-col justify-center rounded-l-2xl">
                        <div className="mx-[50px]">
                            <input type="text" placeholder="email" className="w-[235px] h-11 mb-3 rounded-xl pl-4"></input>
                            <input type='password' placeholder="password" className="w-[235px] h-11 mb-3 rounded-xl pl-4" />
                            <button className="w-[235px] h-[60px] bg-[#0763af] rounded-xl mt-9">SIGN IN</button>
                            <p className="text-sm ml-2">Forgot <a href="" className="text-[#59bed9]">password</a>?</p>
                        </div>
                    </div>
                </div>
                <div id='login' className="absolute backface-visibility-hidden fixLater w-[600px] h-[400px] bg-[#0763af] mt-[4rem] rounded-2xl italic transform rotateY-180 transition-transform duration-500 ease-in-out">
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
