// import React from 'react';
// import { ReactSVG } from '../../assets/react.svg';
// // import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// // import Swiper core and required modules 
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// // import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/Scrollbar';

export const CarouselComponent = () => {
    return(
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            // install Swiper modules
            modules={[ Navigation, Pagination, Scrollbar, A11y ]}
            Navigation
            Pagination={{ clickable: true }}
            Scrollbar={{ draggable: true }}

        >

            <SwiperSlide>
                <h1>1</h1>
                <img width={200} height={200} src={ReactSVG} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <h1>1</h1>
                <img width={200} height={200} src={ReactSVG} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <h1>1</h1>
                <img width={200} height={200} src={ReactSVG} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <h1>1</h1>
                <img width={200} height={200} src={ReactSVG} alt="" />
            </SwiperSlide>
                <h1>1</h1>
                <img width={200} height={200} src={ReactSVG} alt="" />
            </Swiper>
    )
} 