import "./Heading.scss";



const Heading = ({ heading }) => {
    return (
        <>
            <section className="main_head y_axis_center">
                <h1>{heading}</h1>
            </section>
        </>
    )
}



export default Heading;