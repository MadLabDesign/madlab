import * as React from 'react';

import Page from '../components/Page';
import Container from '../components/Container';
import IndexLayout from '../layouts';
import { Row } from 'antd';
import CardContainer from '../components/lib/CardContainer';

const Blog = () => (
  <IndexLayout>
    <Page>
      <Container>
        <Row gutter={16}>
          <h1>Blog Page</h1>
          <CardContainer />
        </Row>
      </Container>
    </Page>
  </IndexLayout>
);

export default Blog;
