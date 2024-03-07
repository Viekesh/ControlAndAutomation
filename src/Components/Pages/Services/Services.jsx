import servicesdata, { ServicesContent } from "../../../ServiceDB/ServicesData";
import CPaths from "../../Common/ComponentPaths/CPaths";
import MainHead from "../../Common/Heading/MainHead";
import SubHead from "../../Common/Heading/SubHead";
import QnA from "../../Common/Qna/QnA";
import SocialLinks from "../../Common/SocialLinks/SocialLinks";
import NavTop from "../../Featured/Navigation/NavTop/NavTop";
import Footer from "../Footer/Footer";
import "./Services.scss";



const Services = () => {
    return (
        <>
            <NavTop />
            <SocialLinks />
            <section className="services">
                <MainHead mainHead="Services:" />
                <CPaths p1="home" dest="services" />

                <div className="services_content">
                    <div className="content_head">
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

                    <MainHead mainHead="Services:" />

                    {
                        servicesdata.map((data) => {
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

                <SubHead subHead="Any Question:" />
                <QnA question="Question" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum placeat laboriosam aliquid accusantium sequi voluptates provident praesentium." />

                <QnA question="Question" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum placeat laboriosam aliquid accusantium sequi voluptates provident praesentium." />

                <QnA question="Question" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum placeat laboriosam aliquid accusantium sequi voluptates provident praesentium." />

                <QnA question="Question" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum placeat laboriosam aliquid accusantium sequi voluptates provident praesentium." />

                <QnA question="Question" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum placeat laboriosam aliquid accusantium sequi voluptates provident praesentium." />

                <QnA question="Question" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum placeat laboriosam aliquid accusantium sequi voluptates provident praesentium." />

            </section>

            <Footer />
        </>
    )
}



export default Services;
