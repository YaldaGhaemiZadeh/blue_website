import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import Blog from './Blog'

const Swiperslider = () => {
    return ( 

    <Swiper centeredSlides={false}
    pagination={{ clickable: true, }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    autoplay={{ delay: 2500, disableOnInteraction: false, }} spaceBetween={1} slidesPerView={3} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>
        <SwiperSlide> <Blog /> </SwiperSlide>
        <SwiperSlide> <Blog /> </SwiperSlide>
        <SwiperSlide> <Blog /> </SwiperSlide>
        <SwiperSlide> <Blog /> </SwiperSlide>
        <SwiperSlide> <Blog /> </SwiperSlide>
    </Swiper>

     );
}
 
export default Swiperslider;