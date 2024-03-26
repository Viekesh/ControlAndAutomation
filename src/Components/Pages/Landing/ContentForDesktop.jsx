import { LandingInformationalContent } from "../../../ServiceDB/LandingPageContent";



const ContentForDesktop = () => {
    return (
        <>
            <section className="content_for_desktop">
                {
                    LandingInformationalContent.map((data) => {
                        return (
                            <>
                                <div className="img_bg">
                                    <div className="desk_content_box">
                                        <h1 className="content_two">{data.contentTwo}</h1>
                                    </div>
                                    <div className="line_br_parent y_axis_center"><div className="line_br_child"></div></div>
                                    <div className="desk_content_box">
                                        <h1 className="content_three">{data.contentThree}</h1>
                                        <h1 className="content_four">{data.contentFour}</h1>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </section>
        </>
    )
}



export default ContentForDesktop;