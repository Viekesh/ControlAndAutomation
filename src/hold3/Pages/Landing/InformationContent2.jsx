import { InformationContent } from "../../../ServiceDB/LandingPageContent";
import QuickLinks from "../../Common/QuickLinks/QuickLinks";



const InformationContent2 = () => {
    return (
        <>
            <section className="information_content2">
                <div className="content_elements">
                    {
                        InformationContent.map((content) => {
                            return (
                                <>
                                    <h2>{content.contentOne}</h2>
                                    <h2>{content.contentTwo}</h2>
                                </>
                            )
                        })
                    }
                </div>

                <QuickLinks />
            </section>
        </>
    )
}



export default InformationContent2;