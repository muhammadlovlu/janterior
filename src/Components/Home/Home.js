import React from 'react';
import './Home.css';
import image01 from '../../images/sofa.jpg';
import image02 from '../../images/room2.jpg';
import image03 from '../../images/image03.jpg';
import image04 from '../../images/image04.jpg';
import image05 from '../../images/image05.jpg';
import image06 from '../../images/image06.jpg';
import image07 from '../../images/image07.jpg';
import image08 from '../../images/image08.jpg';
import image09 from '../../images/image09.jpg';
const Home = () => {
    return (
        <div>
            <div className="row m-0 p-0">
                <div className="col-12 mt-3">
                    <div id="carouselExampleInterval" class="carousel slide" data-bs-touch="true" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="2000">
                                <img src={image01} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img src={image02} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img src={image03} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img src={image04} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img src={image05} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img src={image06} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img src={image07} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row mt-5 justify-content-center align-items-center mx-auto container">
                <p className="col-md-6 col-sm-12 mt-5 pt-5" id="devo" >Breathtaking design essentials for modern home living.</p>
                <p className="col-md-6 col-sm-12 mt-5 pt-5" id="fevo" >Janterior | Interior Design</p>
            </div>
            <div className="row mt-5 mb-5  justify-content-center  mx-auto container">
                <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
                    <img src={image08} className="col-12 rounded-3" alt="" />
                    <p className="col-lg-12  col-md-12 col-sm-12 mt-5 center secTp">
                        With over twenty years’ experience, defining the ‘home from home’ design aesthetic of Soho House, Vicky now leads a team of twelve,
                        delivering bespoke interior schemes direct to clients.We work collaboratively with the architect, contractor and client to guide each project,
                        from inception to completion.
                    </p>
                </div>
                <div className="col-lg-6  col-md-6 col-sm-12 mt-5">
                    <img src={image09} className="col-10 rounded-3" alt="" />
                </div>
            </div>
        </div>
    );
};


export default Home;