import Logo from './Logo';

const Navbar = () => {

    return ( 

        <nav className="fixed flex flex-row bg-gradient-to-r from-blue-700 to-sky-400 italic
         max-w-[1120px] px-3 py-3 text-2xl shadow-xl z-40">
            
            <a href="/register"><button className="w-[200px] h-[50px] px-3 my-4 mr-3 rounded-lg inline basis-2xs bg-[#38BDF8] hover:bg-[#001FE6]">SIGN UP</button></a>

                <div className="w-[40rem]"></div>

                <div className="p-1 space-x-3 flex justify-center py-5 mx-3 text-[#101a59] font-semibold">
                <a href="./blog" className="basis-2xs ">SHOP</a>
                <a href=".about" className="basis-2xs ">BLOGS</a>
                <a href=".login" className="basis-2xs ">LANGUAGES</a>
                </div>

                <button id="logo" className="bg-[#008eff] w-[80px] h-[80px] flex rounded-full pb-5 shadow-xl/20"><a href="/dashboard"><Logo /></a></button>
        </nav>

     );
}
 
export default Navbar;

<div></div>
