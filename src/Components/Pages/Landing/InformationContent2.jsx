import { FaInstagram } from "react-icons/fa";
import { LandingInformationContent2 } from "../../../ServiceDB/LandingPageContent";
import imgElectrician from "../../../Assets/Images/electrician3d-removebg-preview.png"



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
                                </>
                            )
                        })
                    }

                    <section className="instagram_link y_axis_center">

                        {
                            LandingInformationContent2.map((content) => {
                                return (
                                    <>
                                        <h2>{content.contentTwo}</h2>
                                    </>
                                )
                            })
                        }

                        <div className="insta_box y_axis_center">
                            <a href="https://www.instagram.com/electrical_design_engineering/" className="x_axis_center">
                                <FaInstagram />
                            </a>

                            <div className="img">
                                <img src={imgElectrician} alt="" />
                            </div>
                        </div>

                        {/* <a href="https://www.instagram.com/tusha.rdeshmukh2023?igsh=NjBpNzBnYXIxaHBq" className="x_axis_center">
                    <FaInstagram />
                </a> */}
                    </section>
                </div>
            </section>
        </>
    )
}



export default InformationContent2;