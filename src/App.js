import React from "react";
import './App.scss';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Catalog from "./components/our_products/our_Products";
import Popular from "./components/popularProd/popularProd";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CollectionMain from "./components/collection/collection";
import Maincontent from "./components/maincontent/maincontent";
import Subcontent from "./components/subcontent/subcontent";
import PopularMain from "./components/popularProd/popularProd_main";
import Ourpres from "./components/ourpres/ourpres";
import Upfooter from "./components/upfooter/updooter";
import Layout from "./pages/layout";
import Home from "./pages/Home";
import CatalogPage from "./pages/CatalogPage";

function App() {
    return (
        <>
            <BrowserRouter>


                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="catalog" element={<CatalogPage/>}/>
                    </Route>
                </Routes>


            </BrowserRouter>
        </>
    )
}

export default App;
