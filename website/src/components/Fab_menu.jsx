import Hamburger from "../assets/Hamburger";
import Mag_glass from "../assets/Mag_glass";
import Sun from "../assets/Sun";
import { useState } from "react";

const Fabmenu = () => {

    const [ btn1, setBtn1 ] = useState('translate-y-[-6rem]');
    const [ btn2, setBtn2 ] = useState('');

    const toggle = () =>{
        setBtn1(prevClass => 
            prevClass === 'translate-y-[-6rem]' ? 'translate-y-0' : 'translate-y-[-6rem]'
        );
        setBtn2(prevClass => 
            prevClass === 'translate-y-[-12.1rem]' ? 'translate-y-0' : 'translate-y-[-12.1rem]'
        );
    }


    return ( 
        <div className="fixed bottom-[20px] right-[20px] z-40">
            <div className="flex flex-col ">
                <button id="btn2" className={`custom-fab z-10 ${btn2}`}> <Sun /> </button>
                <button id="btn1" className={`custom-fab z-20 ${btn1}`}> <Mag_glass /> </button>
                <button id="btn0" className="bg-[#001FE6] w-[70px] h-[70px] rounded-full  hover:bg-[#008eff] pl-2.5 pb-1 z-30" onClick={toggle}>
                <Hamburger /> </button>
            </div>
        </div>
     );
}
 
export default Fabmenu;