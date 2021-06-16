import styled from '@emotion/styled'
import { GlobalStyles } from 'styles/globalStyles'
import { bigMobile } from 'styles/mixins'

export const Container = styled.div`
  grid-column: 1 / -1;
  text-align: center;
`

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 200;
  color: ${GlobalStyles.black};

  @media (max-width: ${bigMobile}) {
    font-size: 32px;
    margin-left: 1rem;
    margin-right: 1rem;
  }
`

export const ImportantText = styled.span`
  font-weight: 400;
  color: ${GlobalStyles.primary};
`
