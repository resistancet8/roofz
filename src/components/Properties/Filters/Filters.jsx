import React from 'react';
import { Row, Col, Collapse, Divider, Select, Slider, Tag, Switch } from 'antd';
const { Option } = Select;
const { Panel } = Collapse;

const Filters = () => {
  let marks = {
    0: {
      label: <strong>Min</strong>,
    },
    100: {
      label: <strong>Max</strong>,
    },
  }

  return (
    <div className="filters-container p-2">
      <Collapse
        defaultActiveKey={['1', '2', '3', '4']}
        expandIconPosition={'right'}
      >
        <Panel header="Budget" className="py-2" key="1">
          <div>
            <Row className="mb-2">
              <Slider marks={marks} range defaultValue={[20, 50]} />
            </Row>
            <Row>
              <Col span={12}>
                <Select defaultValue="disabled" style={{ width: 120 }}>
                  <Option value="disabled" disabled>Min. Budget</Option>
                  <Option value="5k">5k</Option>
                  <Option value="6k">6k</Option>
                  <Option value="7k">7k</Option>
                  <Option value="8k">8k</Option>
                </Select>
              </Col>
              <Col span={12}>
                <Select defaultValue="disabled" style={{ width: 120 }}>
                  <Option value="disabled" disabled>Max. Budget</Option>
                  <Option value="5k">5k</Option>
                  <Option value="6k">6k</Option>
                  <Option value="7k">7k</Option>
                  <Option value="8k">8k</Option>
                </Select>
              </Col>
            </Row>
          </div>
        </Panel>
        <Panel header="No. of Bedrooms" key="2">
          <div>
            <Tag>1 BHK</Tag>
            <Tag>2 BHK</Tag>
            <Tag>3 BHK</Tag>
            <Tag>4 BHK</Tag>
            <Tag>5 BHK</Tag>
            <Tag>5+ BHK</Tag>
          </div>
        </Panel>
        <div className="custom-filter verified-only">
          <Row>
            <Col span={20}>
              <span className="filter-header">
                Verified Properties Only
              </span>
            </Col>
            <Col><Switch /></Col>
          </Row>
        </div>
        <div className="custom-filter property-photo">
          <Row>
            <Col span={20}>
              <span className="filter-header">
                Properties with photos
              </span>
            </Col>
            <Col><Switch /></Col>
          </Row>
        </div>
        <div className="custom-filter property-video">
          <Row>
            <Col span={20}>
              <span className="filter-header">
                Properties with videos
              </span>
            </Col>
            <Col><Switch /></Col>
          </Row>
        </div>
        <Panel header="Type of property" key="3">
          <div>
            <Tag>Residential Apartment</Tag>
            <Tag>Residential Land</Tag>
            <Tag>Independent House/Villa</Tag>
            <Tag>Independent/Builder Floor</Tag>
            <Tag>Serviced Apartments</Tag>
            <Tag>Studio Apartment</Tag>
          </div>
        </Panel>
        <Panel header="Area" key="4">
          <div>
            <Row className="mb-2">
              <Slider marks={marks} range defaultValue={[20, 50]} />
            </Row>
            <Row>
              <Col span={12}>
                <Select defaultValue="disabled" style={{ width: 120 }}>
                  <Option value="disabled" disabled>Min. Budget</Option>
                  <Option value="5k">5k</Option>
                  <Option value="6k">6k</Option>
                  <Option value="7k">7k</Option>
                  <Option value="8k">8k</Option>
                </Select>
              </Col>
              <Col span={12}>
                <Select defaultValue="disabled" style={{ width: 120 }}>
                  <Option value="disabled" disabled>Max. Budget</Option>
                  <Option value="5k">5k</Option>
                  <Option value="6k">6k</Option>
                  <Option value="7k">7k</Option>
                  <Option value="8k">8k</Option>
                </Select>
              </Col>
            </Row>
          </div>
        </Panel>
        <Panel header="Posted By" key="5">
          <div>
            <Tag>Owner</Tag>
            <Tag>Builder</Tag>
            <Tag>Dealer</Tag>
          </div>
        </Panel>
      </Collapse>
    </div>
  );
};

export default Filters;