import React from 'react';
import './maincontent.css'

const Maincontent = () => {
    return (<>
        <section className="main_content">
            <div className="container">
                <div className="row">
                    <div className="left-side">
                        <h1>Компьютер вашей мечты!</h1>
                        <ul>
                            <li>
                    <div>
                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L6 6L1 11" stroke="#F5702C" stroke-width="2" stroke-linejoin="round"/>
                        </svg>

                                О компании
                    </div>
                            </li>
                            <hr/>
                            <li>
                    <div>
                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L6 6L1 11" stroke="#F5702C" stroke-width="2" stroke-linejoin="round"/>
                        </svg>

                                О продукции
                    </div>
                            </li>
                            <hr/>
                            <li>
                    <div>
                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L6 6L1 11" stroke="#F5702C" stroke-width="2" stroke-linejoin="round"/>
                        </svg>

                                Каталог товаров
                    </div>
                            </li>
                        </ul>
                    </div>
                    <div className="container2">

                        <input type="radio" name="images" id="i1" checked/>
                        <input type="radio" name="images" id="i2"/>
                        <input type="radio" name="images" id="i3"/>

                        <div className="slide_img" id="one">
                            <img src="../img/img_5.png" alt=""/>

                        </div>

                        <div className="slide_img" id="two">
                            <img src="../img/img_6.png" alt=""/>

                        </div>

                        <div className="slide_img" id="three">
                            <img src="../img/img_7.png" alt=""/>

                        </div>

                        <div className="van">
                            <label className="dots" id="dot1" htmlFor="i1"></label>
                            <label className="dots" id="dot2" htmlFor="i2"></label>
                            <label className="dots" id="dot3" htmlFor="i3"></label>
                        </div>


                        <button className="btn">от 150 000 тг</button>
                    </div>
                </div>

            </div>
        </section>

    </>);
};

export default Maincontent;