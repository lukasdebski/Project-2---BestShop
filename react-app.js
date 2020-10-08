import React from 'react';
import ReactDOM from 'react-dom';

import './scss/main.scss';

const ComponentHeader = () => {
    return (
        <header className="header__menu">
            <div className="container">
                <div className="menu">
                    <a href="#" className="menu__logo">BestShop</a>
                    <nav className="menu__items">
                        <li className="menu--item"><a href="#">why us</a></li>
                        <li className="menu--item"><a href="#">benefits</a></li>
                        <li className="menu--item"><a href="#">prices</a></li>
                        <li className="menu--item"><a href="#">contact</a></li>
                    </nav>
                    <div className="burger">
                        <i className="fas fa-bars show"></i>
                        <i className="fas fa-times "></i>
                    </div>
                </div>
            </div>
        </header>
    )
}

const BigComponentMain = () => {
    return (
        <main>

            <section className="opening__container">
                <div className="opening__content">
                    <h1 className="content__title title--h1">Sell More!</h1>
                    <p className="content__text text--p">Open shop on out platform and increase your sales</p>
                    <a href="#" className="content__btn--big content__btn--edit text--p">Open your shop</a>
                </div>
                <img src="./assets/Background.png" alt="" className="content__img"/>
            </section>

            <section className="statistics container">
                <div className="statistics__title opening__content">
                    <h2 className="statistisc__title--edit title--medium">The most popular sales platform in
                        country</h2>
                </div>
                <div className="statistics__box container">
                    <div className="statistics__box--elements">
                        <div className="element--circle">
                            <img src="./assets/Person.svg" className="element__person" alt=""/>
                        </div>
                        <p className="element__entries">100000+</p>
                        <p className="element__text">daily entries</p>
                    </div>

                    <div className="statistics__box--elements">
                        <div className="element--circle circle--color">
                            <img src="/assets/Eye.svg" className="element__person" alt=""/>
                        </div>
                        <p className="element__entries">2000000+</p>
                        <p className="element__text">seen products every day</p>
                    </div>

                    <div className="statistics__box--elements">
                        <div className="element--circle circle--color2">
                            <img src="/assets/Catalog.svg" className="element__person" alt=""/>
                        </div>
                        <p className="element__entries">10000+</p>
                        <p className="element__text">added posts daily</p>
                    </div>

                </div>
            </section>

            <section className="benefits">
                <div className="benefits__container container">
                    <div className="benefits__content">
                        <h2 className="benefits__title title--h2">Be always first</h2>
                        <p className="benefits__text text--p">Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nobis
                            vitae, voluptatem eaque nesciunt doloremque praesentium aperiam, libero modi dolor
                            repellendus a
                            culpa earum nam?</p>
                    </div>
                    <div className="benefits__macbook macbook--square">
                        <img src="/assets/Macbook.png" alt="Macbook" className="content__macbook--img"/>
                    </div>
                </div>

                <div className="benefits__container container">
                    <div className="iphone__container">
                        <div className="benefits__iphone">
                            <img src="/assets/iPhone.png" alt="Macbook" className="content__iphone--img"/>
                        </div>
                    </div>
                    <div className="benefits__content benefits__content--edit">
                        <h2 className="benefits__title title--h2">Your shop is <br/> where you are!</h2>
                        <p className="benefits__text text--p">Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nobis
                            vitae, voluptatem eaque nesciunt doloremque praesentium aperiam, libero modi dolor
                            repellendus a
                            culpa earum nam?</p>
                    </div>
                </div>

                <div className="benefits__double container">
                    <div className="benefits__double--content">
                        <div className="benefits__double--elements">
                            <h2 className="benefits__title title--h2">Increase recognition <br/> your brand!</h2>
                            <p className="benefits__text text--p">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Nobis
                                vitae, voluptatem eaque nesciunt doloremque praesentium aperiam, libero modi dolor
                                repellendus a culpa earum nam?</p>
                        </div>
                    </div>
                    <div className="benefits__double--image">
                        <img src="/assets/Trumpet.png" alt=""/>
                    </div>
                </div>

            </section>

            <section className="pricing container">
                <h2 className="pricing__title title--h2">Pricing</h2>

                {/*<!-- container for pricing__container -->}*/}

                <div className="pricing__containers">

                    {/*{<!-- column Basic -->}*/}

                    <div className="pricing__container pricing__container--basic">
                        <div className="pricing__details">
                            <div className="pricing__type">Basic</div>
                            <div className="pricing__price">$0</div>
                        </div>
                        <ul className="pricing__items">
                            <li className="pricing__item">100 MB HDD</li>
                            <li className="pricing__item">1 Subdomain</li>
                            <li className="pricing__item">2 E-mails</li>
                            <li className="pricing__item pricing__item--cross">Two years license</li>
                            <li className="pricing__item pricing__item--cross">Full support</li>
                        </ul>
                        <a href="#" className="pricing__btn basic__btn--color">Begin</a>
                    </div>

                    {/*{<!-- column Professional -->}*/}

                    <div className="pricing__container pricing__container--professional">
                        <div className="pricing__details">
                            <div className="pricing__type">Professional</div>
                            <div className="pricing__price professional__price--color">$25</div>
                            <div className="pricing__limited">Limited offer</div>
                        </div>
                        <ul className="pricing__items">
                            <li className="pricing__item">500 MB HDD</li>
                            <li className="pricing__item">2 Subdomain</li>
                            <li className="pricing__item">5 E-mails</li>
                            <li className="pricing__item">One years license</li>
                            <li className="pricing__item pricing__item--cross">Full support</li>
                        </ul>
                        <a href="#" className="pricing__btn professional__btn--color">Begin</a>
                    </div>

                    {/*{<!-- column Premium -->}*/}

                    <div className="pricing__container pricing__container--premium">
                        <div className="pricing__details">
                            <div className="pricing__type">Premium</div>
                            <div className="pricing__price premium__price--color">$60</div>
                            <div className="pricing__limited">Limited offer</div>
                        </div>
                        <ul className="pricing__items">
                            <li className="pricing__item">2 GB HDD</li>
                            <li className="pricing__item">5 Subdomain</li>
                            <li className="pricing__item">20 E-mails</li>
                            <li className="pricing__item">Two years license</li>
                            <li className="pricing__item">Full support</li>
                        </ul>
                        <a href="#" className="pricing__btn premium__btn--color">Begin</a>
                    </div>

                </div>

            </section>

        </main>
    )
}

const ComponentContact = () => {
    return (
        <section className="contact container">


            {/*{<!-- first container -->}*/}
            <div className="contact__title contact--col">

                <h1 className="title--big">Any questions?</h1>
                <p className="text--small">Leave your email addres or call us!</p>

                <div className="contact__details">
                    <a href="#" className="details--item"><img src="./assets/Mail Icon.svg" alt="mail"/>info@bestshop.com</a>
                    <a href="#" className="details--item"><img src="./assets/Phone Icon.svg" alt="phone number"/>123
                        456 789</a>
                </div>
            </div>

            {/*{<!-- Second container -->}*/}
            <div className="contact__form contact--col">
                <form action="wy.pl" className="form">
                    <div className="form__row">
                        <label htmlFor="imie" className="form__label" id="imie">Imię</label>
                        <input type="text" className="form__input"/>
                    </div>
                    <div className="form__row">
                        <label htmlFor="email" className="form__label">Email</label>
                        <input type="text" className="form__input" id="email"/>
                    </div>
                    <div className="form__row">
                        <label className="form__checkbox">
                            {/*<input className="checkbox" type="checkbox">*/}
                            {/*<span className="checkbox"></span>*/}
                            {/*<p className="form__checkbox-text">*/}
                            {/*    I hereby give consent for my personal data included in my*/}
                            {/*    application*/}
                            {/*    to be*/}
                            {/*    processed for the*/}
                            {/*    purposes of the recruitment process under the European Parliament's and Council*/}
                            {/*    of the*/}
                            {/*    European*/}
                            {/*    Union Regulation on the Protection of Natural Persons as of 27 April 2016, with*/}
                            {/*    regard to*/}
                            {/*    the*/}
                            {/*    processing of personal data and on the free movement of such data, and repealing*/}
                            {/*    Directive*/}
                            {/*    95/46/EC (Data Protection Directive)*/}
                            {/*</p>*/}
                        </label>

                        <button type="submit" className="form__button">Send</button>
                    </div>
                </form>
            </div>

        </section>
    )
}


const ComponentFooter = () => {
    return(
        <footer className="footer ">

            <div className="footer__container container">

                <div className="footer__details">
                    <a href="#" className="footer__logo">BestShop</a>
                    <p className="footer__rights">&copy 2019 BestShop LTD, All rights Reserved</p>
                </div>


                <div className="footer__icons">
                    <a href="#" className="icon__twitter"></a>
                    <a href="#" className="icon__facebook"></a>
                </div>

            </div>

        </footer>
    )
}



const App = () => {
    return (
        <>
            <ComponentHeader/>

            <BigComponentMain/>

            <ComponentContact/>

            <ComponentFooter/>


        </>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);