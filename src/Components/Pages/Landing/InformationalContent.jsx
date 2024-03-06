import { LandingInformationalContent } from "../../../ServiceDB/LandingPageContent";
import SubHead from "../../Common/Heading/SubHead";
import ServicesSwiper from "../Services/ServicesSwiper";




const InformationContent = () => {
    return (
        <>

            <section className="informational_content">

                {
                    LandingInformationalContent.map((content) => {
                        return (
                            <>
                                <div className="content1">
                                    <h1>{content.contentOne}</h1>
                                </div>

                                <div className="img_box">
                                    <div className="background_img">
                                        <SubHead subHead="Our Services:" />
                                        <ServicesSwiper />
                                    </div>
                                </div>

                                <div className="y_axis_center content_box content2">
                                    <h1><span>"</span>{content.contentTwo}<span>"</span></h1>
                                </div>

                                <div className="y_axis_center content_box content3">
                                    <h1><span>"</span>{content.contentThree}<span>"</span></h1>
                                </div>

                                <div className="y_axis_center content_box content4">
                                    <h1><span>"</span>{content.contentFour}<span>"</span></h1>
                                </div>
                            </>
                        )
                    })
                }
            </section>
        </>
    )
}



export default InformationContent;