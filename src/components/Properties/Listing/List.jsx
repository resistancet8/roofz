import React from 'react';
import { Row, Col, Tag, Divider, Button } from 'antd';
import './List.scss';

const List = () => {
  return (
    <div className="property-list">
      <Row style={{ height: '80%' }}>
        <Col span={8} style={{ height: '100%' }}>
          <img src="https://source.unsplash.com/475x220/?property,rent,building" className="property-image" alt="" />
        </Col>
        <Col span={1}></Col>
        <Col span={15}>
          <div className="description">
            2 BHK Residential Apartment in Munnekollal
          </div>
          <div className="area">
            SNN Raj Greenbay
          </div>
          <div className="info">
            <Row>
              <Col span={4}>
                <div className="main">
                  ₹ 72 Lac
                </div>
                <div className="sub">
                  ₹ 7000/sq. ft.
                </div>
              </Col>
              <Col span={8}>
                <div className="main">
                  911 sq.ft
                </div>
                <div className="sub">
                  (85 sq.m.) Super built-up Area
                </div>
              </Col>
              <Col span={4}>
                <div className="main">
                  2 BHK
                </div>
                <div className="sub">
                  2 Baths
                </div>
              </Col>
            </Row>
          </div>
          <div className="post-info">
            Duplex villa available with 3200 sqft area of 5 bedrooms front side. Backside of villa has four 1bhk units. This is corner property and built on 4000 sqft plot.
          </div>
          <div className="tags">
            <Tag color="blue" className="original">Ready to move</Tag>
            <Tag color="blue" className="original">Under construction</Tag>
            <Tag color="blue" className="original">Resale</Tag>
            <Tag color="blue" className="original">RERA</Tag>
          </div>
        </Col>
      </Row>
      <Divider />
      <Row style={{ height: '20%' }}>
        <Col span={4}>
          <div className="footer">
            <div className="posted-by">
              Posted on Today by Owner
            </div>
            <div className="posted-user">
              Naveen
            </div>

          </div>
        </Col>
        <Col span={12}></Col>
        <Col span={8}>
          <Row>
            <Col span={10}><Button size="large" style={{ width: '100%' }}>View Property</Button></Col>
            <Col span={1}></Col>
            <Col span={10}>
              <Button style={{ width: '100%' }} size="large" type="primary">Contact Owner</Button></Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default List;