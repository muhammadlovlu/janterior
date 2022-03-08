import React from 'react';
import image11 from '../../images/image11.jpg';
import image12 from '../../images/image12.jpg';
import image13 from '../../images/image13.jpg';
import image14 from '../../images/image14.jpg';
import image15 from '../../images/image15.jpg';
import image16 from '../../images/image16.jpg';
import image17 from '../../images/image17.jpg';
import image18 from '../../images/image18.jpg';
import image19 from '../../images/image19.jpg';

const Shop = () => {
    return (
        <div>
            <div className="row container justify-content-center align-items-center mx-auto">
                    <div className="col-md-4 col-sm-12 mt-5">
                        <img src={image11} className="rounded-3" width="320px" alt="" />
                        <h4 className="mt-4">Zino Pack</h4>
                        <h4>$1845</h4>
                    </div>
                    <div className="col-md-4 col-sm-12 mt-5">
                        <img src={image12} className="rounded-3" width="320px" alt="" />
                        <h4 className="mt-4">MiniQa Pack</h4>
                        <h4>$3445</h4>
                    </div>
                    <div className="col-md-4 col-sm-12 mt-5">
                        <img src={image13} className="rounded-3" width="320px" alt="" />
                        <h4 className="mt-4">Wuilo Pack</h4>
                        <h4>$2345</h4>
                    </div>
                </div>

                <div className="row container justify-content-center align-items-center mx-auto">
                    <div className="col-md-4 col-sm-12 mt-5">
                        <img src={image14} className="rounded-3" width="320px" alt="" />
                        <h4 className="mt-4">Honix Pack</h4>
                        <h4>$4279</h4>
                    </div>
                    <div className="col-md-4 col-sm-12 mt-5">
                        <img src={image15} className="rounded-3" width="320px" alt="" />
                        <h4 className="mt-4">Ribona Pack</h4>
                        <h4>$7346</h4>
                    </div>
                    <div className="col-md-4 col-sm-12 mt-5">
                        <img src={image16} className="rounded-3" width="320px" alt="" />
                        <h4 className="mt-4">Zuissa Pack</h4>
                        <h4>$9873</h4>
                    </div>
                </div>


                <div className="row container justify-content-center align-items-center mx-auto">
                    <div className="col-md-4 col-sm-12 mt-5">
                        <img src={image17} className="rounded-3" width="320px" alt="" />
                        <h4 className="mt-4">Perula Pack</h4>
                        <h4>$15789</h4>
                    </div>
                    <div className="col-md-4 col-sm-12 mt-5">
                        <img src={image18} className="rounded-3" width="320px" alt="" />
                        <h4 className="mt-4">Tabil Pack</h4>
                        <h4>$4522</h4>
                    </div>
                    <div className="col-md-4 col-sm-12 mt-5">
                        <img src={image19} className="rounded-3" width="320px" alt="" />
                        <h4 className="mt-4">kara Pack</h4>
                        <h4>$12344</h4>
                    </div>
                </div>


        </div>
    );
};

export default Shop;