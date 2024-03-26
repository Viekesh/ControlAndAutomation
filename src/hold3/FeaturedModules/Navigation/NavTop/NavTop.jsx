import { NavLink } from "react-router-dom";
import "./NavTop.scss";
import "./NavResponsive.scss";
import { useState } from "react";
import { NavigationLinks } from "../../../../ServiceDB/NavigationData";
import { PiBaseballCapBold } from "react-icons/pi";
import { IoIosBasket } from "react-icons/io";



const NavTop = () => {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMobileMenu = () => {
        setShowMenu(!showMenu);
        // document.querySelector("body").classList.toggle("body-overflow-visible");
    };

    const handleOverlayClick = () => {
        if (setShowMenu) {
            setShowMenu(false);
        }
    }

    return (
        <>
            <nav className="nav_top x_y_axis_center">

                <section className="nav_elements y_axis_center">

                    <NavLink to="/" className="x_y_axis_center">
                        {/* <img src={logo} className="logo" alt="Vite logo" /> */}
                        <div className="logo y_axis_center">
                            <PiBaseballCapBold />
                            <div className="logo2 x_y_axis_center">
                                <IoIosBasket />
                            </div>
                        </div>
                        <h1><span className="logo_text1">Technical</span> <br /> <span className="logo_text2">Basket</span></h1>
                    </NavLink>

                    <div className="x_y_axis_center">

                        <button
                            className={`hamburger hamburger--3dx x_y_axis_center ${showMenu ? "is-active" : ""
                                }`}
                            type="button"
                            onClick={toggleMobileMenu}
                        >
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>

                        <div className="desktop_nav_links">
                            <div className="links_container y_axis_center">
                                <NavLink to="/Services">Services</NavLink>

                                <NavLink to="/CaseStudies">CaseStudines</NavLink>

                                <NavLink to="/ContactUs">Contact</NavLink>

                                <NavLink to="/AboutUs">About</NavLink>
                            </div>
                        </div>
                    </div>

                </section>

            </nav>

            <section className={`nav_links navigation_style y_axis_center ${showMenu ? "overlay" : ""
                }`}
                id="Navigation">

                <div className="links_conatainer">
                    <div className="link_options y_axis_center">
                        {
                            NavigationLinks.map((data) => {
                                return (
                                    <>
                                        <NavLink to={data.navlink} key={data.id} className="link y_axis_center">
                                            {data.name}
                                            {/* <data.reactIcon /> */}
                                        </NavLink>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="box_overlay" onClick={handleOverlayClick}></div>
            </section>
        </>
    )
}



export default NavTop;