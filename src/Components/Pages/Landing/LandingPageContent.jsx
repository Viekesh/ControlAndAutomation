import { LandingPageHead } from "../../../ServiceDB/LandingPageContent";






const LandingPageHeading = () => {



    let matchMedia = window.matchMedia("(min-width: 768px)");

    const textAnimate = () => {
        document.getElementById("Text1").style.marginLeft = 0 + "px";

        if (matchMedia.matches) {
            document.getElementById("textOneBorder").style.width = 15 + "vw";
            const colorChange = () => {
                document.getElementById("textOneBorder").style.borderTop = 6 + "px solid snow";
            }

            colorChange();
        } else {
            document.getElementById("textOneBorder").style.width = 30 + "vw";
        }

        function display() {
            document.getElementById("Text2").style.paddingTop = 0 + "vh";
            document.getElementById("Text2").style.opacity = 1;
        }

        const borderDelay = () => {
            document.getElementById("Text1").style.opacity = 1;

            if (matchMedia.matches) {
                document.getElementById("textTwoBorder").style.width = 24 + "vw";

                const colorChange = () => {
                    document.getElementById("textTwoBorder").style.borderTop = 6 + "px solid snow";
                }

                colorChange();
            } else {
                document.getElementById("textTwoBorder").style.width = 50 + "vw";
            }
        };

        display();
        setTimeout(borderDelay, 2000);
    }

    const animateDelay = () => {
        setTimeout(textAnimate, 2000);
    }



    return (
        <>
            <section className="landing_page_head" onLoad={animateDelay()}>
                {
                    LandingPageHead.map((content) => {
                        return (
                            <>
                                <div id="deskTextOneBorder"></div>
                                <div id="textOneBorder"></div>

                                <h3 className="text1" id="Text1">{content.contentOne}</h3>
                                <h3 className="text2" id="Text2">{content.contentTwo}</h3>
                                <h1 id="text3">{content.contentThree}</h1>

                                <div id="textTwoBorder"></div>
                                <div id="deskTextTwoBorder"></div>
                            </>
                        )
                    })
                }
            </section>
        </>
    )
}



export default LandingPageHeading;