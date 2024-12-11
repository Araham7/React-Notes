import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from '../pages/About';
import Contact from '../pages/Contact';
import PageNotFound from "../pages/PageNotFound";

function CustomRoutes() {
    return (
        <Routes>

            {/* (1). Define All Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* (2). Handalling 404 error ===> Page Not Found! */}
            <Route path="*" element={<PageNotFound />} />

        </Routes>
    );
}

export default CustomRoutes;