import React, { Component } from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer.jsx';
import './Homepage.scss'
import Banner from './../../assets/banner.jpg'
import { Tab, Container } from 'semantic-ui-react'
import Search from './Search/Search.jsx';
import Slider from "react-slick";

class Homepage extends Component {
  render() {
    const panes = [
      {
        menuItem: 'Rent',
        render: () => <Tab.Pane className="p-0 tab-pane" attached={false}><Search /></Tab.Pane>,
      },
      {
        menuItem: 'Buy',
        render: () => <Tab.Pane className="p-0" attached={false}><Search /></Tab.Pane>,
      },
      {
        menuItem: 'Lease',
        render: () => <Tab.Pane className="p-0" attached={false}><Search /></Tab.Pane>,
      },
    ]

    const settings = {
      dots: true,
      infinite: true,
      centerMode: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
    }
    return (
      <div id="homepage">
        <Header />
        <div className="banner">
          <img src={Banner} alt="" />
          <div className="finder">
            <h1 className="">Discover a place you'll love to live</h1>
            <p>Search properties on RoofzNfloors.com. Buy, rent or sale of residential & commercial property in Hyderabad. Check real estate prices, property trends. Post ads for Free !</p>
            <Tab menu={{ secondary: true }} panes={panes} />
          </div>
        </div>
        <Container>
          <section id="latest-properties" className="my-5">
            <div className="section-header">
              Latest Properties
            </div>
            <div className="section-sub-header">
              Check out the latest properties in Hyderabad
            </div>
            <Slider {...settings}>
              <div class="slide-element">
                <div class="image">
                  <img src="https://source.unsplash.com/235x184/?home,house,interior" class="img" alt="1 RK Independent House" />
                </div>
                <div class="info">
                  <div class="price">
                    <span class="rupee-icon">₹</span>
                    9,000
                  </div>
                  <div class="title">1 RK Independent House</div>
                  <div class="subTitle">HSR Layout , BDA Layout, HSR Layout, Bangalore</div>
                  <div class="details">
                    <div class="detail">
                      <div class="label">Furnishing</div>
                      <div class="ans">Semi Furnished</div>
                    </div>
                    <div class="detail">
                      <div class="label">Build Up</div>
                      <div class="ans">700 sq.ft</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slide-element">
                <div clas s="image">
                  <img src="https://source.unsplash.com/235x184/?home,house,interior" class="img" alt="1 RK Independent House" />
                </div>
                <div class="info">
                  <div class="price">
                    <span class="rupee-icon">₹</span>
                    9,000
                  </div>
                  <div class="title">1 RK Independent House</div>
                  <div class="subTitle">HSR Layout , BDA Layout, HSR Layout, Bangalore</div>
                  <div class="details">
                    <div class="detail">
                      <div class="label">Furnishing</div>
                      <div class="ans">Semi Furnished</div>
                    </div>
                    <div class="detail">
                      <div class="label">Build Up</div>
                      <div class="ans">700 sq.ft</div>
                    </div>
                  </div>
                </div>
              </div><div class="slide-element">
                <div class="image">
                  <img src="https://source.unsplash.com/235x184/?home,house,interior" class="img" alt="1 RK Independent House" />
                </div>
                <div class="info">
                  <div class="price">
                    <span class="rupee-icon">₹</span>
                    9,000
                  </div>
                  <div class="title">1 RK Independent House</div>
                  <div class="subTitle">HSR Layout , BDA Layout, HSR Layout, Bangalore</div>
                  <div class="details">
                    <div class="detail">
                      <div class="label">Furnishing</div>
                      <div class="ans">Semi Furnished</div>
                    </div>
                    <div class="detail">
                      <div class="label">Build Up</div>
                      <div class="ans">700 sq.ft</div>
                    </div>
                  </div>
                </div>
              </div><div class="slide-element">
                <div class="image">
                  <img src="https://source.unsplash.com/235x184/?home,house,interior" class="img" alt="1 RK Independent House" />
                </div>
                <div class="info">
                  <div class="price">
                    <span class="rupee-icon">₹</span>
                    9,000
                  </div>
                  <div class="title">1 RK Independent House</div>
                  <div class="subTitle">HSR Layout , BDA Layout, HSR Layout, Bangalore</div>
                  <div class="details">
                    <div class="detail">
                      <div class="label">Furnishing</div>
                      <div class="ans">Semi Furnished</div>
                    </div>
                    <div class="detail">
                      <div class="label">Build Up</div>
                      <div class="ans">700 sq.ft</div>
                    </div>
                  </div>
                </div>
              </div><div class="slide-element">
                <div class="image">
                  <img src="https://source.unsplash.com/235x184/?home,house,interior" class="img" alt="1 RK Independent House" />
                </div>
                <div class="info">
                  <div class="price">
                    <span class="rupee-icon">₹</span>
                    9,000
                  </div>
                  <div class="title">1 RK Independent House</div>
                  <div class="subTitle">HSR Layout , BDA Layout, HSR Layout, Bangalore</div>
                  <div class="details">
                    <div class="detail">
                      <div class="label">Furnishing</div>
                      <div class="ans">Semi Furnished</div>
                    </div>
                    <div class="detail">
                      <div class="label">Build Up</div>
                      <div class="ans">700 sq.ft</div>
                    </div>
                  </div>
                </div>
              </div><div class="slide-element">
                <div class="image">
                  <img src="https://source.unsplash.com/235x184/?home,house,interior" class="img" alt="1 RK Independent House" />
                </div>
                <div class="info">
                  <div class="price">
                    <span class="rupee-icon">₹</span>
                    9,000
                  </div>
                  <div class="title">1 RK Independent House</div>
                  <div class="subTitle">HSR Layout , BDA Layout, HSR Layout, Bangalore</div>
                  <div class="details">
                    <div class="detail">
                      <div class="label">Furnishing</div>
                      <div class="ans">Semi Furnished</div>
                    </div>
                    <div class="detail">
                      <div class="label">Build Up</div>
                      <div class="ans">700 sq.ft</div>
                    </div>
                  </div>
                </div>
              </div><div class="slide-element">
                <div class="image">
                  <img src="https://source.unsplash.com/235x184/?home,house,interior" class="img" alt="1 RK Independent House" />
                </div>
                <div class="info">
                  <div class="price">
                    <span class="rupee-icon">₹</span>
                    9,000
                  </div>
                  <div class="title">1 RK Independent House</div>
                  <div class="subTitle">HSR Layout , BDA Layout, HSR Layout, Bangalore</div>
                  <div class="details">
                    <div class="detail">
                      <div class="label">Furnishing</div>
                      <div class="ans">Semi Furnished</div>
                    </div>
                    <div class="detail">
                      <div class="label">Build Up</div>
                      <div class="ans">700 sq.ft</div>
                    </div>
                  </div>
                </div>
              </div><div class="slide-element">
                <div class="image">
                  <img src="https://source.unsplash.com/235x184/?home,house,interior" class="img" alt="1 RK Independent House" />
                </div>
                <div class="info">
                  <div class="price">
                    <span class="rupee-icon">₹</span>
                    9,000
                  </div>
                  <div class="title">1 RK Independent House</div>
                  <div class="subTitle">HSR Layout , BDA Layout, HSR Layout, Bangalore</div>
                  <div class="details">
                    <div class="detail">
                      <div class="label">Furnishing</div>
                      <div class="ans">Semi Furnished</div>
                    </div>
                    <div class="detail">
                      <div class="label">Build Up</div>
                      <div class="ans">700 sq.ft</div>
                    </div>
                  </div>
                </div>
              </div>

            </Slider>
          </section>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Homepage;