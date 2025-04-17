import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Product_image = () => {
    return ( 

        
    <div className=''>
        <Swiper className='w-[500px] h-[400px] rounded-xl text-center' pagination={true} modules={[Pagination]} spaceBetween={2} slidesPerView={1} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)} >
            <SwiperSlide className='bg-blue-900'></SwiperSlide>
            <SwiperSlide className='bg-blue-800'></SwiperSlide>
            <SwiperSlide className='bg-blue-700'></SwiperSlide>
            <SwiperSlide className='bg-blue-600'></SwiperSlide>
        </Swiper>
    </div>
    
    );
}
 
export default Product_image;