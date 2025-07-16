import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import ReactWOW from 'react-wow';
import Cursor from '../../layouts/Cursor';

import img1 from '../../../assets/img/banner/Slider_3.webp';
import img2 from '../../../assets/img/banner/Slider_2.webp';
import img3 from '../../../assets/img/banner/Slider_1.webp';

const bannerposts = [
    { img: img1 },
    { img: img2 },
    { img: img3 }
];

class Banner extends Component {
    constructor(props) {
        super(props);
        this.sliderRef = React.createRef();
        this.state = {
            isMobile: false
        };
    }

    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        this.setState({ isMobile: window.innerWidth < 992 });
    };

    render() {
        const { isMobile } = this.state;
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 4000,
            arrows: false,
            dots: false,
            draggable: true,
            swipe: true,
            swipeToSlide: true,
            touchThreshold: 15, // Increased for better touch sensitivity
            pauseOnHover: false,
            pauseOnFocus: false,
            speed: 1000,
            ref: this.sliderRef,
            cssEase: 'ease-in-out'
        };

        return (
            <section className="banner-area banner-style-one">
                <Cursor />
                <div className={`fullscreen-carousel ${isMobile ? 'mobile-view' : ''}`}>
                    <Slider {...settings}>
                        {bannerposts.map((item, i) => (
                            <div key={i} className="single-slide">
                                <div
                                    className="slide-bg"
                                    style={{ backgroundImage: `url(${item.img})` }}
                                    aria-label={`Slide ${i + 1}`}
                                />
                                <div className="image-overlay"></div>
                            </div>
                        ))}
                    </Slider>
                </div>

                {!isMobile && (
                    <ReactWOW animation='fadeIn' delay="0.3s">
                        <div className="vertical-text">
                            <ul>
                                <li>
                                    <Link to="#" aria-label="Facebook">
                                        <i className="fab fa-facebook" /> Facebook
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" aria-label="Instagram">
                                        <i className="fab fa-instagram" /> Instagram
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" aria-label="Twitter">
                                        <i className="fab fa-twitter" /> Twitter
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </ReactWOW>
                )}

                {!isMobile && (
                    <ReactWOW animation='fadeIn' delay="0.3s">
                        <div className="vertical-text right">
                            <span>Call us on: </span>
                            <span>+123 456 789</span>
                        </div>
                    </ReactWOW>
                )}

                <div className="content-overlay">
                    <div className="container container-custom-two">
                        <div className={`row align-items-center ${isMobile ? 'justify-content-center' : ''}`}>
                            <div className={`${isMobile ? 'col-12 text-center' : 'col-lg-6 col-md-8'}`}>
                                <div className="banner-content">
                                    <ReactWOW animation='fadeInDown' delay="0.3s">
                                        <span className="promo-tag">Jewelry Design With Love</span>
                                    </ReactWOW>
                                    <ReactWOW animation='fadeInLeft' delay="0.5s">
                                        <h1 className="title">High-End <br />Jewelry Items</h1>
                                    </ReactWOW>
                                    <div className="button-group">
                                        <ReactWOW animation='fadeInUp' delay="0.7s">
                                            <Link className="main-btn btn-filled" to="/about" aria-label="Buy Now">
                                                Buy Now
                                            </Link>
                                        </ReactWOW>
                                        <ReactWOW animation='fadeInUp' delay="0.9s">
                                            <Link className="main-btn btn-border" to="/about" aria-label="Explore Now">
                                                Explore Now
                                            </Link>
                                        </ReactWOW>
                                    </div>
                                </div>
                            </div>
                            {!isMobile && (
                                <div className="col-lg-6 col-md-4"></div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Banner;