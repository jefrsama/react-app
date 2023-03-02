import {Component} from 'react'
import React from 'react';

import './popularProd.css'
import ProdMain from "../singleproduct/singleprodmain";

const PopularMain = () => {
    return (
        <section className="off_products">
            <div className="container">
                <h1>Акционные товары</h1>
                <ProdMain/>
            </div>
        </section>

    )
}

export default PopularMain;