import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

// Instagram images
import img1 from "../../assets/img/instagram/01.jpg";
import img2 from "../../assets/img/instagram/02.jpg";
import img3 from "../../assets/img/instagram/03.jpg";
import img4 from "../../assets/img/instagram/04.jpg";
import img5 from "../../assets/img/instagram/05.jpg";
import img6 from "../../assets/img/instagram/06.jpg";

// Testimonial user images
import user1 from "../../assets/img/instagram/user1.jpeg";
import user2 from "../../assets/img/instagram/user3.jpg";
import user3 from "../../assets/img/instagram/user2.webp";

const testimonials = [
  {
    quote:
      "Risus nec feugiat in fermentum posuere urna nec. Mi bibendum neque egestas congue quisque.",
    name: "Lisha",
    title: "General Manager",
    image: user1,
  },
  {
    quote:
      "Leo in vitae turpis massa sed elementum tempus. Duis ut diam quam nulla porttitor.",
    name: "Rahul Singh",
    title: "Creative Director",
    image: user2,
  },
  {
    quote:
      "Nibh sed pulvinar proin gravida hendrerit. Blandit cursus risus at ultrices mi tempus imperdiet.",
    name: "Nikita Joshi",
    title: "Fashion Blogger",
    image: user3,
  },
];

const instapost = [
  { photo: img1 },
  { photo: img2 },
  { photo: img3 },
  { photo: img4 },
  { photo: img5 },
  { photo: img6 },
  { photo: img1 },
  { photo: img2 },
  { photo: img3 },
  { photo: img4 },
  { photo: img5 },
  { photo: img6 },
];

class Instafeeds extends Component {
  render() {
    const instaSettings = {
      slidesToShow: 6,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
      dots: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    };

    const testimonialSettings = {
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
    };

    return (
      <>
        {/* Testimonial Section */}
        {/* <section className="testimonial-section">
          <div className="container">
            <h2 className="testimonial-title">Our Happy Clients Thoughts</h2>
            <Slider {...testimonialSettings} className="testimonial-slider">
              {testimonials.map((item, index) => (
                <div className="testimonial-item" key={index}>
                  <div className="testimonial-quote">“</div>
                  <p className="testimonial-text">{item.quote}</p>
                  <div className="testimonial-profile">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="testimonial-img"
                    />
                    <h5>{item.name}</h5>
                    <span>{item.title}</span>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section> */}

        {/* Instagram Feeds */}
        {/* <div className="instagram-feed-section">
          <div className="container-fluid p-0">
            <Slider className="instagram-slider" {...instaSettings}>
              {instapost.map((item, i) => (
                <Link key={i} to={item.photo} className="insta-popup">
                  <img src={item.photo} alt="instagram-feed" />
                </Link>
              ))}
            </Slider>
          </div>
        </div> */}
      </>
    );
  }
}

export default Instafeeds;
