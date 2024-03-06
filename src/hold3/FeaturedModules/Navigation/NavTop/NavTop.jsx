import { NavLink } from "react-router-dom";
import "./NavTop.scss";
import "./NavResponsive.scss";
import { useState } from "react";
import { NavigationLinks } from "../../../../ServiceDB/NavigationLinks";
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
                        {/* <div className="github_n_nav_icon">
                            <div className="g_icon">
                                <div className="github_icon x_y_axis_center">
                                    <a
                                        href="https://www.github.com/Viekesh"
                                        className="x_y_axis_center"
                                        target="_blanc"
                                    >
                                        <svg
                                            height="32"
                                            aria-hidden="true"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="32"
                                            data-view-component="true"
                                            className="octicon octicon-mark-github v-align-middle"
                                        >
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div> */}


                        {/* <button
                            className={`x_y_axis_center ${showMenu ? "is-active" : ""
                                }`}
                            type="button"
                            onClick={toggleMobileMenu}
                        >
                            menu
                        </button> */}

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