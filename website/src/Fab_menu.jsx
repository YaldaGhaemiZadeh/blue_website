import Hamburger from "./assets/Hamburger";
import Mag_glass from "./assets/Mag_glass";
import Sun from "./assets/Sun";

const Fabmenu = () => {
    return ( 
        <div className="fixed bottom-[20px] right-[20px]">
            <div className="flex flex-col ">
            {/*  */}
        
        <button id="fabMenu1" className="bg-[#008eff] w-[50px] h-[50px] rounded-full hover:bg-[#001fe6] ml-2 mb-2 pl-[5px] pb-0.5">
            <Sun />
            <a title="light mode" className="underline" href="#"></a>
        </button>

        <button id="fabMenu2" className="bg-[#008eff] w-[50px] h-[50px] rounded-full hover:bg-[#001fe6] ml-2 mb-2 pl-2.5 pb-1"><Mag_glass /></button>

        <button id="fabMenu0" className="bg-[#008eff] w-[70px] h-[70px] rounded-full  hover:bg-[#001fe6] pl-2.5 pb-1 -rotate-10"><Hamburger /></button>
       

        </div>
        </div>
     );
}
 
export default Fabmenu;