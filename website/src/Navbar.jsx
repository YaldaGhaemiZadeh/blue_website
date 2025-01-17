const Navbar = () => {
    return ( 

        <nav className="bg-gradient-to-r from-blue-700 to-sky-400">
           
            <div className="max-w-screen-xl flex  justify-items-strech mx-auto p-6 italic">
            {/* <Logo></Logo> */}
             
                <div className=" bg-[#38BDF8] px-5 py-1 rounded-lg flex-none"><button className="italic">SIGN IN</button></div>


                <div className="w-[40rem]"></div>

                <div className="p-1 space-x-3 ">
                <a href="./blog" className=" pb-6">CONTACT</a>
                <a href=".about" className=" pb-6">COMMUNITY</a>
                <a href=".login" className=" pb-6">LANGUAGES</a>
                </div>
            </div>
        </nav>

     );
}
 
export default Navbar;

<div></div>
