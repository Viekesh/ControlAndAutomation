import { Route, Routes } from "react-router-dom";
import Landing from "../Components/Pages/Landing/Landing";



const ReactRoutes = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Landing />}></Route>
            </Routes>
        </>
    )
}



export default ReactRoutes;