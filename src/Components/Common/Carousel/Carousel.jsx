import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




const Carousel = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                slidesPerGroup={1}
                loop={true}
                modules={[Pagination, Autoplay, Navigation]}
                className="mySwiper"
                loopFillGroupWithBlank={true}
                navigation={true}
                autoplay={{
                    delay: 9000,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide className="inner_slide" key={id}>
                    <NavLink to="" key="">
                        <div className="sld">
                            <h3 className="comic-neue-bold">{headTitle}</h3>
                        </div>
                    </NavLink>
                </SwiperSlide>
            </Swiper>
        </>
    )
}



export default Carousel;