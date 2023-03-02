import React from 'react';
import Maincontent from "../components/maincontent/maincontent";
import Subcontent from "../components/subcontent/subcontent";
import Catalog from "../components/our_products/our_Products";
import CollectionMain from "../components/collection/collection";
import PopularMain from "../components/popularProd/popularProd_main";
import Ourpres from "../components/ourpres/ourpres";
import Upfooter from "../components/upfooter/updooter";

const Home = () => {
    return (
        <>

            <Maincontent/>

            <Subcontent/>

            <Catalog/>

            <CollectionMain/>

            <PopularMain/>

            <Ourpres/>

            <Upfooter/>

        </>
    );
};

export default Home;
