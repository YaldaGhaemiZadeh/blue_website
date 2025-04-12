// import Blog from './Blog'
import Swiperslider from "./Swiper_slider";
import Next_svg from '../../assets/Next'
import Prev_svg from '../../assets/Prev'
import { Swiper } from 'swiper/react';
import { useState } from 'react';
import { Controller } from 'swiper/modules';

const Slider = () => {

    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);

    return ( 

        <div id="container" className="ml-12 pt-5 pl-3 bg-[#313131] w-[1015px] h-[550px] mx-6 rounded-[2rem] shadow-xl">
                <Swiperslider />
                <div className='flex mx-72 pt-[14px] gap-12'>
                    <button className='custom-btn'><Prev_svg />
                        <Swiper modules={[Controller]} onSwiper={setFirstSwiper} controller={{control:secondSwiper }}></Swiper>
                    </button>
            
                    <button className='custom-btn'><Next_svg />
                        <Swiper modules={[Controller]} onSwiper={setSecondSwiper} controller={{ control: firstSwiper }}></Swiper>
                    </button>
                </div>
        </div>

     );
}
 
export default Slider;