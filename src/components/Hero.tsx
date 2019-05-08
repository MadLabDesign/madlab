import * as React from 'react'
import styled from 'react-emotion'
import { colors } from '../styles/variables'

const HeroContainer = styled.section`
  height: 50vh;
  width: 100%;
  background-color: ${colors.dark};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
`
export interface HeroProps {}

export default class Hero extends React.Component<HeroProps, any> {
  public render() {
    return (
      <>
        <HeroContainer>Hero</HeroContainer>
      </>
    )
  }
}
