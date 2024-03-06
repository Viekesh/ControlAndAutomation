import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./SwiperReact.scss";
import { SwiperData } from "../../../ServiceDB/SwiperReactData";



const SwiperReact = () => {

    return (
        <>
            <section className="services_swiper_slider">


                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    slidesPerGroup={1}
                    loop={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    loopFillGroupWithBlank={true}
                    navigation={true}
                >
                    {
                        SwiperData.map((data) => {
                            return (
                                <>
                                    <SwiperSlide className="swipe_slides x_y_axis_center" key={data.id}>
                                        <div className="inner_slides">
                                            <div className="slide_image">
                                                {/* <h3>{linkData.title}</h3> */}
                                                <img src={data.img} alt="" />
                                            </div>
                                            <div className="descrip">
                                                <h5>{data.headTitle}</h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </>
                            )
                        })
                    }
                </Swiper>
            </section>
        </>
    )
}



export default SwiperReact;