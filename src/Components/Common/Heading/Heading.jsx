import "./Heading.scss";



const Heading = ({ heading, subHeading }) => {
    return (
        <>
            <section className="heading">
                <div className="main_head y_axis_center">
                    <h1>{heading}</h1>
                </div>
                <h1>{subHeading}</h1>
            </section>
        </>
    )
}



export default Heading;