import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Blog from './Blog'
import '../index.css'

const Swiperslider = () => {
    return ( 

    <Swiper spaceBetween={1} slidesPerView={3} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>
        <SwiperSlide> <Blog /> </SwiperSlide>
        <SwiperSlide> <Blog /> </SwiperSlide>
        <SwiperSlide> <Blog /> </SwiperSlide>
        <SwiperSlide> <Blog /> </SwiperSlide>
        <SwiperSlide> <Blog /> </SwiperSlide>
    </Swiper>

     );
}
 
export default Swiperslider;