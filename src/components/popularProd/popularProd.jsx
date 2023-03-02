import {Component} from 'react'
import React from 'react';

import './popularProd.css'
import Prod from "../singleproduct/singleprod";

const Popular = () => {
    return (
        <section className="off_products">
            <div className="container">
                <h1>Популярные товары</h1>
                <Prod/>
            </div>
        </section>

)
}

export default Popular;