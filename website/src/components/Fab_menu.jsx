import Hamburger from "../assets/Hamburger";
import Mag_glass from "../assets/Mag_glass";
import Sun from "../assets/Sun";
import { useState } from "react";
import '../index.css'

const Fabmenu = () => {

    const [ btn1, setBtn1 ] = useState('.btn1-hide');
    const [ btn2, setBtn2 ] = useState('.btn2-hide');

    const toggle = () =>{
            setBtn1(prevClass => 
            prevClass === 'btn1-hide' ? 'btn1-show' : 'btn1-hide' );

            setBtn2(prevClass => 
                prevClass === 'btn2-hide' ? 'btn2-show' : 'btn2-hide' );
    }


    return ( 
        <div className="fixed bottom-[20px] right-[20px] z-40 w-[300] h-[400]">
                <button id="btn2" className={`custom-fab  ${btn2}`}> <Sun /> </button>
                <button id="btn1" className={`custom-fab  ${btn1}`}> <Mag_glass /> </button>
                <button id="btn0" className="relative bg-[#001FE6] w-[70px] h-[70px] rounded-full  hover:bg-[#008eff] pl-2.5 pb-1" onClick={toggle}>
                <Hamburger /> </button>
        </div>
     );
}
 
export default Fabmenu;