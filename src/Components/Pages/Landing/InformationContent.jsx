import { LandingPageHead } from "../../../ServiceDB/LandingPageContent";





const InformationContent = () => {

    const textAnimate = () => {
        document.getElementById("PageHeading1").style.left = 0 + "vh";
        document.getElementById("PageHeading2").style.top = 18 + "vh";
        // document.getElementById("contentBorderTop").style.width = 30 + "vw";

        const display = () => {
            document.getElementById("PageHeading1").style.opacity = 1;
            document.getElementById("PageHeading2").style.opacity = 1;
        }

        // const borderDelay = () => {
        //     document.getElementById("contentBorderBottom").style.width = 50 + "vw";
        // };

        display();
        // setTimeout(borderDelay, 2000);
    }

    const animateDelay = () => {
        setTimeout(textAnimate, 2000);
    }

    return (
        <>
            <section className="informational_content">

                {
                    LandingPageHead.map((content) => {
                        return (
                            <>
                                <div className="content_box" id="contentBox" onLoad={animateDelay()}>
                                    {/* <div className="content_border" id="contentBorderTop"></div> */}

                                    <div className="content_one">
                                        <h1 id="PageHeading1" className="comic-neue-bold">{content.contentOne}</h1>
                                    </div>

                                    <div className="content_two">
                                        <h1 id="PageHeading2" className="comic-neue-bold">{content.contentTwo}</h1>
                                    </div>
                                    {/* <div className="content_border" id="contentBorderBottom"></div> */}
                                </div>
                                {/* <div className="content1">
                                    <h1>{content.contentOne}</h1>
                                </div> */}
                                {/* <div className="background_img"></div>
                                <div className="y_axis_center content_box content2">
                                    <h1><span>"</span>{content.contentTwo}<span>"</span></h1>
                                </div>
                                <div className="y_axis_center content_box content3">
                                    <h1><span>"</span>{content.contentThree}<span>"</span></h1>
                                </div>
                                <div className="y_axis_center content_box content4">
                                    <h1><span>"</span>{content.contentFour}<span>"</span></h1>
                                </div> */}
                            </>
                        )
                    })
                }
            </section>
        </>
    )
}



export default InformationContent;