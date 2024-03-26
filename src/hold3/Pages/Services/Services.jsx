import "./Services.scss";
import NavTop from "../../FeaturedModules/Navigation/NavTop/NavTop";
import { ServiceCategoriesData, ServicesContent } from "../../../ServiceDB/ServicesData";
import QnA from "../../Common/Qna/QnA";
import SocialLinks from "../../Common/SocialLinks/SocialLinks";
import SubHeading from "../../Common/Heading/SubHeading";
import Heading from "../../Common/Heading/Heading";



const Services = () => {
    return (
        <>
            <NavTop />
            <SocialLinks />
            <section className="services">
                <Heading heading="Services" />

                <div className="services_content">
                    <div className="content_box">
                        {
                            ServicesContent.map((content) => {
                                return (
                                    <>
                                        <h1>{content.contentOne}</h1>
                                    </>
                                )
                            })
                        }
                    </div>

                    <Heading subHeading="Categories:" />

                    {
                        ServiceCategoriesData.map((data) => {
                            return (
                                <>
                                    <div className="service_categories x_y_axis_center" key={data.id}>
                                        <div className="category_box">
                                            <img src={data.img} alt="" />
                                            <p>{data.para}</p>

                                            {
                                                data.subCat.map((data) => {
                                                    return (
                                                        <>
                                                            <ul>
                                                                <li>{data.s1}</li>
                                                            </ul>
                                                        </>
                                                    )
                                                })
                                            }

                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>



                <SubHeading subHeading="Clear Your Doubts:" />

                <QnA question="Question" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum placeat laboriosam aliquid accusantium sequi voluptates provident praesentium." />

                <QnA question="Question" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum placeat laboriosam aliquid accusantium sequi voluptates provident praesentium." />

                <QnA question="Question" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum placeat laboriosam aliquid accusantium sequi voluptates provident praesentium." />

                <QnA question="Question" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum placeat laboriosam aliquid accusantium sequi voluptates provident praesentium." />

                <QnA question="Question" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum placeat laboriosam aliquid accusantium sequi voluptates provident praesentium." />

                <QnA question="Question" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum placeat laboriosam aliquid accusantium sequi voluptates provident praesentium." />

            </section>

            <footer>
                <div className="footer">
                    <p>Contact</p>
                    <p>About</p>
                    <p>Privacy And Policy</p>
                    <p>Terms And Conditions</p>
                </div>
            </footer>
        </>
    )
}



export default Services;