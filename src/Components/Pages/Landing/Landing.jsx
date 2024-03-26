import NavTop from "../../Featured/Navigation/NavTop/NavTop";
import LandingPageHeading from "./LandingPageContent";
import "./Landing.scss";
import "./ResponsiveLanding.scss";
import InformationContent from "./InformationalContent";
import SubHead from "../../Common/Heading/SubHead";
import QuickLinks from "../../Common/QuickLinks/QuickLinks";
import InformationContent2 from "./InformationContent2";
import SocialLinks from "../../Common/SocialLinks/SocialLinks";
import Footer from "../Footer/Footer";
import QnA from "../../Common/Qna/QnA";
import Testimonials from "../../Common/Testimonials/Testimonials";
import { LandingInformationalContent } from "../../../ServiceDB/LandingPageContent";
import ContentForDesktop from "./ContentForDesktop";
// import ServicesCarousel from "../Services/ServicesCarousel";



const Landing = () => {
    return (
        <>
            <header>
                {/* Contact Administrator To Get Access Of This Application */}
                <NavTop />
                <SocialLinks />
                <LandingPageHeading />

                <div className="desk_landing_page_head">
                    <div class="tmplt1">
                        <h1>our end to end solution build<br />
                            high quality electrical CONTRACTING<br />
                            services and providing an inclusive,<br />
                            safe and healthy workplace
                        </h1>
                    </div>
                </div>

                {
                    LandingInformationalContent.map((data) => {
                        return (
                            <div className="content_one">
                                <h1>{data.contentOne}</h1>
                            </div>
                        )
                    })
                }

            </header>

            <main>
                <ContentForDesktop />

                <InformationContent />

                <QuickLinks />

                <InformationContent2 />

                <SubHead subHead="Any Question:" />
                <QnA question="Question" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum placeat laboriosam aliquid accusantium sequi voluptates provident praesentium." />

                <QnA question="Question" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum placeat laboriosam aliquid accusantium sequi voluptates provident praesentium." />

                <QnA question="Question" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum placeat laboriosam aliquid accusantium sequi voluptates provident praesentium." />

                <QnA question="Question" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum placeat laboriosam aliquid accusantium sequi voluptates provident praesentium." />

                <QnA question="Question" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum placeat laboriosam aliquid accusantium sequi voluptates provident praesentium." />

                <QnA question="Question" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cum placeat laboriosam aliquid accusantium sequi voluptates provident praesentium." />


                <br />
                <br />
                <br />

                <SubHead subHead="Reviews:" />
                <Testimonials />
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default Landing;