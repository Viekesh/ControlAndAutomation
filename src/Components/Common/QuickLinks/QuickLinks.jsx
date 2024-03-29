import SubHead from "../Heading/SubHead";
import "./QuickLinks.scss";



const QuickLinks = () => {
    return (
        <>
            <section className="quick_links">
                <SubHead subHead="Quick Links:" />
                {/* <section className="skills_container">
                    <div className="pro x_y_axis_center typescript">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/800px-Typescript.svg.png" alt="" />
                    </div>
                    <div className="pro x_y_axis_center javascript">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/220px-Unofficial_JavaScript_logo_2.svg.png" alt="" />
                    </div>
                    <div className="pro x_y_axis_center nodejs">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1024px-Node.js_logo.svg.png" alt="" />
                    </div>
                    <div className="pro x_y_axis_center reactjs">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/800px-React_Logo_SVG.svg.png" alt="" />
                    </div>
                    <div className="pro x_y_axis_center axios">
                        <img src="https://axios-http.com/assets/logo.svg" alt="" />
                    </div>
                    <div className="pro x_y_axis_center python">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png" alt="" />
                    </div>
                    <div className="pro x_y_axis_center django">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Django_logo.svg/1920px-Django_logo.svg.png" alt="" />
                    </div>
                    <div className="pro x_y_axis_center firebase">
                        <img src="https://miro.medium.com/v2/resize:fit:300/1*R4c8lHBHuH5qyqOtZb3h-w.png" alt="" />
                    </div>
                    <div className="pro x_y_axis_center mongodb">
                        <img src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png" alt="" />
                    </div>                
                </section> */}

                <section class="qck-lnk">
                    <div class="cntnr2">
                        <div class="grd-bx" id="bx11"><a href="../HTML/tr-dstbn.html#trDstbn">transformer</a></div>
                        <div class="grd-bx" id="bx12"><a href="../HTML/tr-dstbn.html#htLt">ht-lt panel<br />and breaker</a></div>
                        <div class="grd-bx" id="bx13"><a href="../HTML/rs-cm-in.html#amc">annual<br />maintenance<br />contract</a></div>
                        <div class="grd-bx" id="bx14"><a href="../HTML/rs-cm-in.html#rnvtnRmdlng">electrical<br />wiring</a></div>
                        {/* <div class="grd-bx" id="bx15"><a href="#">substation</a></div>
                        <div class="grd-bx" id="bx16"><a href="#">substation</a></div> */}
                        <div class="grd-bx" id="bx17"><a href="../HTML/solar.html#distributedGeneration">distributed<br />solar</a></div>
                        <div class="grd-bx" id="bx18"><a href="../HTML/solar.html#pcu">power<br />conditioning unit</a></div>
                    </div>
                </section>
            </section>
        </>
    )
}



export default QuickLinks;