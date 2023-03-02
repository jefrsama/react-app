import React from 'react';
import './collection.css'
const CollectionMain = () => {
    return (

            <section className="collection">
                <div className="collection_left">
                    <div className="collection_sub">
                        <div className="collection_sub_content">
                            <h1>Коллекция</h1>
                            <p>Чувственность и элегантность, пуризм и эксклюзивность, а может уют и романтичность? Наши
                                коллекции,
                                разработанные лучшими дизайнерами отрасли, помогут создать вам именно ту атмосферу
                                игровой комнаты,
                                которую вы всегда искали.</p>
                            <hr/>
                                <div>
                                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L6 6L1 11" stroke="#FE5B00" stroke-width="2"
                                              stroke-linejoin="round"/>
                                    </svg>
                                    <h2>Все коллекции</h2>
                                </div>
                        </div>
                    </div>

                </div>

                <div className="collection_right">
                    <div className="collection_sub_right">
                        <div className="collection_sub_content_right">
                            <h1>ARISTO</h1>
                            <button className="btn">от 4 990 ₽</button>
                        </div>
                    </div>
                </div>
            </section>

    );
};

export default CollectionMain;