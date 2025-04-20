import { useState } from "react";
import Heart from "../../assets/heart";
import Heart_empty from "../../assets/heart_empty";


const Blog = () => {

    const [isFilled, setIsFilled] = useState(false);

    return ( 
        <a href="/blog">
        {/* Container */}
        <div className="text-black w-[20rem] h-[26.5rem] bg-[#38bdf8] ml-[1px] pl-[1rem] 
        pt-[2rem] rounded-[2rem] hover:bg-[#39aadb]">

        {/* Title + Category */}
        <div className="font-bold text-3xl tracking-wide">
            <span className="text-[#1D4ED8] pl-[2rem]">CATEGORY</span>
            <p className="text-black pl-[3rem]">Title of blog</p>
        </div>

            {/* Content */}
            <p className="text-[#082000] mt-4 p-[1rem] font-semibold font-mono">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit porro omnis dolores, neque perspiciatis iste autem ipsum, odio, minus ipsa maxime. Reprehenderit et dolore ipsum a minus eum amet id!
            </p>

            <button className="w-[50px] h-[50px] ml-[215px]" onClick={() => setIsFilled(!isFilled)}>
                {isFilled ? <Heart /> : <Heart_empty />}
            </button>

        </div>
        </a>
     );
}
 

export default Blog;
