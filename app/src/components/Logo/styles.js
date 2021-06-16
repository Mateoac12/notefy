import styled from '@emotion/styled'
import { GlobalStyles } from 'styles/globalStyles'
import { bigMobile } from 'styles/mixins'

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 24px;
  color: ${GlobalStyles.secondary};
  cursor: pointer;
  display: flex;
  font-weight: 400;
`

export const LastWords = styled.span`
  color: ${GlobalStyles.white};
`

export const Image = styled.img`
  @media (max-width: ${bigMobile}) {
    display: none
  }
`