import React, { Component } from 'react';
import Navigation from './Navbar';
import contactpage from './contactHomePage.png';
import ecommercepage from './ecommerce homePage.png'
import ColorGame from './colourgame.png'
import './Products.css'
import Roll from 'react-reveal/Roll';

class Products extends Component {
    render() {
        return (
            <div className="bgpicture">
                <Navigation />
                <h2 className = "text-center text-white mt-3 mb-3">My Dedicated Works</h2>
                <Roll left>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md mb-5">
                            <div className="card forcard text-white">
                                <img className="card-img-top" src={ColorGame} alt="Card" width="100" height="190"></img>
                                <div className="card-body">
                                    <h5 className="card-title">Colour Game</h5>
                                    <p className="card-text">This is a simple funny game to guess the colour from the given color code</p>
                                    <a href = "https://navindarshan.github.io/ColorGame/" target = "blank" className = "btn btn-primary">View Site</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md mb-5">
                            <div className="card forcard text-white">
                                <img className="card-img-top" src={contactpage} alt="Card" width="100" height="190"></img>
                                <div className="card-body">
                                    <h5 className="card-title">Contact</h5>
                                    <p className="card-text">A simple app just to store your contacts from anyplace and anywhere</p>
                                    <a href = "http://navin-contacts.herokuapp.com/" target = "blank" className = "btn btn-primary">View Site</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md mb-5">
                            <div className="card forcard text-white">
                                <img className="card-img-top" src={ecommercepage} alt="Card" width="100" height="190"></img>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">A Simple ecommerce app which we can buy your lovely items</p>
                                    <a href = "http://navin-ecommerce.herokuapp.com/" target = "blank" className = "btn btn-primary">View Site</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Roll>
            </div>
        )
    }
}
export default Products;