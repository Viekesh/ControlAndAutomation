import "./InstagramLink.css";
import imgElectrician from "../../../../Assets/Images/electrician3d-removebg-preview.png";
import { FaInstagram } from "react-icons/fa";


const Instagram = () => {
    return (
        <>
            <section className="instagram_link y_axis_center">
                <a href="https://www.instagram.com/electrical_design_engineering/" className="x_axis_center">
                    <FaInstagram />
                </a>

                <div className="img">
                    <img src={imgElectrician} alt="" />
                </div>

                {/* <a href="https://www.instagram.com/tusha.rdeshmukh2023?igsh=NjBpNzBnYXIxaHBq" className="x_axis_center">
                    <FaInstagram />
                </a> */}
            </section>
        </>
    )
}



export default Instagram;