import { LandingInformationContent2 } from "../../../ServiceDB/LandingPageContent";
import Instagram from "../../Common/SocialLinks/Instagram/Instagram";



const InformationContent2 = () => {
    return (
        <>
            <section className="information_content2">
                <div className="content_elements">
                    {
                        LandingInformationContent2.map((content) => {
                            return (
                                <>
                                    <h2>{content.contentOne}</h2>
                                    <h2>{content.contentTwo}</h2>
                                </>
                            )
                        })
                    }

                    <Instagram />
                </div>
            </section>
        </>
    )
}



export default InformationContent2;