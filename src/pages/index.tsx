import * as React from 'react'

import Container from '../components/Container'
import IndexLayout from '../layouts'
import { Row, Col } from 'antd'
import styled from 'react-emotion'
import { heights, dimensions, colors } from '../styles/variables'
import { transparentize } from 'polished'

const HomeIntro = styled.section`
  height: ${heights.fullHeight}vh;
  padding: ${dimensions.containerPadding}rem;
  background-color: ${colors.black};
  color: ${transparentize(0.5, colors.white)};
`
const HomeIntroTwo = styled.section`
  height: ${heights.fullHeight}vh;
  padding: ${dimensions.containerPadding}rem;
  background-color: ${colors.lilac};
  color: ${transparentize(0.5, colors.white)};
`

const IndexPage = () => (
  <IndexLayout>
    {/* Above the fold */}
    <HomeIntro>
      <Container>
        <Row>
          <Col span={15} push={9}>
            main
          </Col>
          <Col span={9} pull={15}>
            <h1>header</h1>
          </Col>
        </Row>
      </Container>
    </HomeIntro>
    {/* below the fold */}
    <HomeIntroTwo>
      <Container>
        <Row gutter={16}>body</Row>
      </Container>
    </HomeIntroTwo>
  </IndexLayout>
)

export default IndexPage
