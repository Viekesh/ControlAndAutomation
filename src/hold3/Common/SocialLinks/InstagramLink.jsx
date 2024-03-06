import "./InstagramLink.scss";
import imgElectrician from "../../../Assets/Images/electrician3d-removebg-preview.png";
import { FaInstagram } from "react-icons/fa";


const InstagramLink = () => {
    return (
        <>
            <section className="instagram_link y_axis_center">
                <a href="https://www.instagram.com/tusha.rdeshmukh2023?igsh=NjBpNzBnYXIxaHBq" className="x_axis_center">
                    <FaInstagram />
                </a>

                <div className="img">
                    <img src={imgElectrician} alt="" />
                </div>
            </section>
        </>
    )
}



export default InstagramLink;