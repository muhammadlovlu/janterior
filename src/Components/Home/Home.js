import React from 'react';
import image01 from '../../images/sofa.jpeg';
import image02 from '../../images/room2.jpeg';
import image03 from '../../images/image03.jpeg';
import image04 from '../../images/image04.jpeg';
import image05 from '../../images/image05.jpeg';
import image06 from '../../images/image06.jpeg';
import image07 from '../../images/image07.jpeg';


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
                <h1 className="col-6 mt-5" >Breathtaking design essentials for modern home living.</h1>
                <h1 className="col-6 mt-5" >Janterior | Interior Design</h1>
            </div>
            <div className="row mt-5 bg-danger justify-content-center align-items-center mx-auto container">

                <div className="col-3 mt-5 bg-primary">
                    <img src={image01} className="" width="360px" alt="" /></div>
                <p className="col-3">Nam blandit tellus at condimentum aliquam mauris pharetra sollici ultricies nullam vulputate eu arcu.
                    Ret dolore magna aliqua enut enim ad minim veniam, quis nostrud exer. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolor.</p>
                <div className="col-6"></div>
                <h1 className="col-6 mt-5 bg-primary" >Janterior | Interior Design</h1>
            </div>
        </div>
    );
};


export default Home;