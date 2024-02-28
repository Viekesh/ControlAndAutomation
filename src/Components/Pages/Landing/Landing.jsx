import Heading from "../../Common/Heading/Heading";
import QnA from "../../Common/Qna/QnA";
import SocialLinks from "../../Common/SocialLinks/SocialLinks";
import SwiperReact from "../../Common/SwiperReact/SwiperReact";
import Testimonials from "../../Common/Testimonials/Testimonials";
import NavTop from "../../FeaturedModules/Navigation/NavTop/NavTop";
import InformationContent from "./InformationContent";
import InformationContent2 from "./InformationContent2";
import "./Landing.scss";




const Landing = () => {
    return (
        <>
            <header className="landing">
                <NavTop />
                <InformationContent />
                <SocialLinks />
            </header>

            <main>
                <Heading subHeading="Services :" />
                <SwiperReact />
                <InformationContent2 />

                <Heading subHeading="Testimonials:" />
                <Testimonials />

                <Heading subHeading="Clear Your Doubts:" />
                <QnA question="Question" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum placeat laboriosam aliquid accusantium sequi voluptates provident praesentium." />

                <QnA question="Question" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum placeat laboriosam aliquid accusantium sequi voluptates provident praesentium." />

                <QnA question="Question" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum placeat laboriosam aliquid accusantium sequi voluptates provident praesentium." />

                <QnA question="Question" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum placeat laboriosam aliquid accusantium sequi voluptates provident praesentium." />

                <QnA question="Question" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum placeat laboriosam aliquid accusantium sequi voluptates provident praesentium." />

                <QnA question="Question" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum placeat laboriosam aliquid accusantium sequi voluptates provident praesentium." />
            </main>

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



export default Landing;