import Logo from './Logo';
import Search_bar from './SearchBox/SearchBar';

const Navbar = () => {

    return ( 

        <nav className="fixed flex flex-row justify-evenly bg-gradient-to-r from-blue-700 to-sky-400 italic
         w-full min-w-[1120px] px-3 py-3 text-2xl shadow-xl z-40">
            
            <a href="/register"><button className="w-[200px] h-[60px] px-3 my-2 mr-3 rounded-lg inline basis-2xs bg-[#008eff] hover:bg-[#008cffc7]">SIGN UP</button></a>

                <Search_bar />

                <div className="p-1 space-x-3 flex justify-center py-5 mx-3 text-[#101a59] font-semibold">
                <a href="/shop" className="basis-2xs ">SHOP</a>
                <a href="/blogslist" className="basis-2xs ">BLOGS</a>
                <a href=".login" className="basis-2xs ">LANGUAGES</a>
                </div>

                <button id="logo" className="bg-[#008eff] w-[80px] h-[80px] flex rounded-full pb-5 shadow-xl/20"><a href="/dashboard"><Logo /></a></button>
        </nav>

     );
}
 
export default Navbar;

<div></div>
