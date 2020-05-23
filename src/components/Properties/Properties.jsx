import React from 'react';
import Header from './../Header/Header';
import { Row, Col, Breadcrumb, Tag, Menu, Select } from 'antd';
import Filters from './Filters/Filters';
import Listing from './Listing/Listing';
import './Properties.scss';
const { Option } = Select;

const Properties = () => {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="http://www.alipay.com/">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="http://www.taobao.com/">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Header />
      <div className="properties-container">
        <Row>
          <Col span={5}>
            <Filters />
          </Col>
          <Col span={19} >
            <div className="property-listing-container">
              <div className="list-header">
                <div className="search-result mb-3">
                  <h2>5822 Properties | Property in Hyderabad</h2>
                </div>
                <div className="active-filters">
                  <Row>
                    <Col span={20}>
                      <Tag>Residential Apartment</Tag>
                      <Tag>Residential Land</Tag>
                      <Tag>Independent House/Villa</Tag>
                      <Tag>Studio Apartment</Tag>
                    </Col>
                    <Col span={4}>
                      <Select defaultValue="relevance" style={{width: '100%'}}>
                        <Option value="relevance">Relevance</Option>
                        <Option value="newest">Newest First</Option>
                        <Option value="p_low_high">Price Low to High</Option>
                        <Option value="p_high_low">Price High to Low</Option>
                      </Select>
                    </Col>
                  </Row>
                </div>
              </div>
              <Listing />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Properties;