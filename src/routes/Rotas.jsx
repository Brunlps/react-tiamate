import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";
import PageLayout from "../layouts/PageLayout";
import NossoCafe from "../pages/NossoCafe";
import Login from "../pages/auth/Login";
import ComponentAgradavel from "../pages/ComponenteAmbientAgradavel"

const Rotas = () => {
    return (  
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLayout />}>
                    <Route index element={<Home />} />
                    <Route path="nosso-cafe" element={<NossoCafe />} />
                    <Route path="ambiente-agradavel" element={<ComponentAgradavel/>} />
                </Route>
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;