import "./Heading.scss";



const Heading = ({ heading, subHeading }) => {
    return (
        <>
            <section className="heading">
                <h1>{heading}</h1>
                <h1>{subHeading}</h1>
            </section>
        </>
    )
}



export default Heading;