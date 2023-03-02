import {Component} from 'react'
import React from 'react';
import './catalog.css'
import Single from "../catalog/single_catalog";

const CatalogProd = () => {
    return (
        <section className="our_products">
            <div className="container">
                <h1>Каталог товаров</h1>
                <Single/>
            </div>
        </section>
    )
}

export default CatalogProd;