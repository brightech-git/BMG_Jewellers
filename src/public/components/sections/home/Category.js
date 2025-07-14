import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../../assets/img/category/grid.png';
import image2 from '../../../assets/img/category/grid_2.webp';
import image3 from '../../../assets/img/category/grid-3.webp';

const categoryposts = [
    { icon: image1, title: 'Golden Pendants', numberofproduct: '12', name: 'Traditional', action: 'Shop Now' },
    { icon: image2, title: 'Golden Rings', numberofproduct: '27', name: 'Trending', action: 'Shop Now' },
    { icon: image3, title: 'Golden Necklaces', numberofproduct: '18', name: 'Modern', action: 'Shop Now' },
];

class Category extends Component {
    render() {
        return (
            <div className="categories-box-layout">
                <div className="container">
                    <div className="categories-box-layout-inner">
                        <div className="row custom-category-row">
                            {categoryposts.map((item, i) => (
                                <div key={i} className="col-lg-4 col-md-6 col-sm-12 category-col">
                                    <Link to="/shop-left" className="categories-box">
                                        <div className="icon">
                                            <p className="title-name">{item.name}</p>
                                        </div>
                                        <h5 className="title">{item.title}</h5>
                                        <p className="action-text">{item.action}</p>
                                        <span className="overlay-icon">
                                            <img src={item.icon} alt={item.title} />
                                        </span>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Category;
