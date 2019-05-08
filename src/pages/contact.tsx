import * as React from 'react';

import Page from '../components/Page';
import Container from '../components/Container';
import IndexLayout from '../layouts';
import { Row, Col } from 'antd';

const Contact = () => (
  <IndexLayout>
    <Page>
      <Container>
        <Row>
          <Col>
            <h1>Contact Page</h1>
          </Col>
        </Row>
        <Row>
          <Col span={12}>col-12</Col>
          <Col span={12}>col-12</Col>
        </Row>
      </Container>
    </Page>
  </IndexLayout>
);

export default Contact;
