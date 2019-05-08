import * as React from 'react';
import Helmet from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';
import '../static/css/App.css';
import 'modern-normalize';
import '../styles/normalize';
// @ts-ignore
import icon32 from '../static/favicon/favicon-32x32.png';
import { Layout } from 'antd';

import styled from 'react-emotion';
import { colors } from '../styles/variables';

import SubNav from '../components/SubNav';
import Header from '../components/Header';

const { Footer } = Layout;

const StyledLayoutMain = styled.main`
  background-color: ${colors.gray};
  min-height: 90vh;
  height: 100%;
`;
const StyledLayoutFooter = styled(Footer)`
  background-color: ${colors.black};
  min-height: 70px;
  height: 100%;
  color: ${colors.white};
`;

type StaticQueryProps = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
    };
  };
};

const IndexLayout: React.SFC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <Layout>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description
            },
            {
              name: 'keywords',
              content: 'gatsbyjs, gatsby, javascript, sample, something'
            }
          ]}
          link={[
            {
              rel: 'shortcut icon',
              type: 'image/png',
              href: `${icon32}`
            }
          ]}
        />

        <Layout>
          <Header title="MadLab" />
          <SubNav />
          <StyledLayoutMain>{children}</StyledLayoutMain>

          <StyledLayoutFooter style={{ width: '100%' }}>MadLab Design ©2018 Created by MADLAB</StyledLayoutFooter>
        </Layout>
      </Layout>
    )}
  />
);

export default IndexLayout;
