import styled from '@emotion/styled'
import { popupScale } from 'styles/animations'
import { GlobalStyles } from 'styles/globalStyles'
import { bigMobile } from 'styles/mixins'

export const ModalButton = styled.button`
  position: fixed;
  right: 1rem;
  bottom: 100px;
  z-index: 5;
  border: none;
  outline: none;
  background-color: ${GlobalStyles.secondary};
  color: ${GlobalStyles.white};
  padding: 1rem 1.5rem;
  font-size: 16px;
  border-radius: 50px 10px 10px 50px;
  cursor: pointer;
  z-index: 150;
  ${popupScale}

  &:hover {
    color: ${GlobalStyles.secondary};
    background-color: ${GlobalStyles.white};
    border: 1px solid ${GlobalStyles.secondary};
    animation: popupScale .3s ease-in-out;
  }

  @media (max-width: ${bigMobile}) {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    bottom: 1rem;
    padding: 0;
  }
`

export const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: ${GlobalStyles.whiteTransparent};
  backdrop-filter: blur(4px);
  z-index: 100;
`