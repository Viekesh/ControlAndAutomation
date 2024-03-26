import { Route, Routes } from "react-router-dom";
import Services from "../Components/Pages/Services/Services";
import Landing from "../Components/Pages/Landing/Landing";



const ReactRoutes = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Landing />}></Route >
                <Route path="/Services" element={<Services />}></Route>
            </Routes>
        </>
    )
}



export default ReactRoutes;