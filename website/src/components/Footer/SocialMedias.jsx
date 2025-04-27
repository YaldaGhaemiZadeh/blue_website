import Whatsapp from "./Whatsapp";
import Github from "./Github";
import Linkedin from "./Linkedin";
import './Style.css'

const Social_medias = () => {
    return ( 
        <div className="w-80 h-20 border-r-4 border-slate-300/70 ">
            <div className="flex flex-row w-60 p-1 gap-2 ml-8">
                <Whatsapp />
                <Github />
                <Linkedin />
            </div>
        </div>
     );
}
 
export default Social_medias;