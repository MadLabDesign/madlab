import * as React from 'react';
import { Link } from 'gatsby';

import Page from '../components/Page';
import Container from '../components/Container';
import IndexLayout from '../layouts';

const Product = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Product Page</h1>
        <ul>
          <li>
            <Link to="/">Take me back home.</Link>
          </li>
        </ul>
      </Container>
    </Page>
  </IndexLayout>
);

export default Product;
