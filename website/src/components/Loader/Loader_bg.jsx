import{ useState, useEffect } from 'react';
import Loader_l from "./Loader_logo";

const Loader_b = () => {
    const [visible, setVisible] = useState(true)

    useEffect(() => { 
        const timer = setTimeout(() => { setVisible(false)}, 3000 )
        return () => clearTimeout(timer)
    }, [])

    return (
    <>
        {visible && <div className="fixed w-[1120px] h-[1000px] bg-[#121212] z-50">
            <div className="fixed top-[250px] right-[515px] z-50">
                <div>
                    <Loader_l />
                </div>
            </div>
        </div>}
    </>
     )
}
 
export default Loader_b;