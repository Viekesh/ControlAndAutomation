import { LandingPageHead } from "../../../ServiceDB/LandingPageContent";






const LandingPageHeading = () => {

    return (
        <>
            <section className="landing_page_head">
                {
                    LandingPageHead.map((content) => {
                        return (
                            <>
                                <h3 id="headingOne">{content.contentOne}</h3>
                                <h3>{content.contentTwo}</h3>
                                <h1>{content.contentThree}</h1>
                            </>
                        )
                    })
                }
            </section>
        </>
    )
}



export default LandingPageHeading;