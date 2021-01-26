import styled from 'styled-components'
import db from '../../../db.json'

export const Widget = styled.div`

  margin: 24px 0;
  border: 2px solid ${({theme}) => theme.colors.primary};
  border-radius: ${db.theme.borderRadius};
  background-color: #f1f1f1;
  z-index: 100;
`

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({theme}) => theme.colors.primary};

  * {
    margin: 0;
  }

`

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }
`