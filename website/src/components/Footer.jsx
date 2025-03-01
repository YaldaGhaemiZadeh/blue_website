import Whatsapp from "../assets/Whatsapp";
import Github from "../assets/Github";

const Footer = () => {
    return ( 
        <>
        <footer>
            <div className="w-[100%] h-[170px] bg-gradient-to-r from-blue-700 to-sky-400 aspect-[3/2] clip-path">
                <ul className="flex pt-[60px] px-1 gap-1 text-xl italic">
                    <li className="custom-li">
                    <a href="">Yalda <br /> Ghaemi Zadeh</a></li>
                    <div className="w-1 h-20 bg-white opacity-50"></div>
                    <li className="custom-li"><a href=""><div className="flex flex-row"><Whatsapp /><Github /></div></a></li>
                    <div className="w-1 h-20 bg-white opacity-50"></div>
                    <li className="custom-li mt-3"><a href="">copyright© 2024 - 2025</a></li>
                    <div className="w-1 h-20 bg-white opacity-50"></div>
                    <li className="custom-li"><a href=""></a></li>
                </ul>
            </div>
        </footer>
        </>
     );
}
 
export default Footer;