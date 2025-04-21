import { useState } from "react";
import Heart from "../../assets/heart";
import Heart_empty from "../../assets/heart_empty";

const Heart_btn = () => {

    const [isFilled, setIsFilled] = useState(false);
    return ( 

        <>
        <button className="w-[50px] h-[50px]" onClick={() => setIsFilled(!isFilled)}>
            {isFilled ? <Heart /> : <Heart_empty />}
        </button>
        </>

     );
}
 
export default Heart_btn;