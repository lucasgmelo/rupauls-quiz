import styled from 'styled-components';
import db from '../../../db.json';

const Widget = styled.div`

  margin: 24px 0;

  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-color: ${(props) => props.border || db.theme.colors.primary};

  border-radius: ${db.theme.borderRadius};

  background-color: #f1f1f1;

  box-shadow: ${db.theme.shadow};
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${(props) => props.bg || db.theme.colors.primary};

  * {
    margin: 0;
  }

`;

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
`;

Widget.Form = styled.form`
  display: flex;
  flex-direction: column;
`;

Widget.Button = styled.button`

  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  box-shadow: ${(props) => (props.disabled ? `${db.theme.shadowDisabled}` : `${db.theme.shadow}`)};
 
  width: 100%;
  height: 30px;

  margin: 15px 0 0 0;

  border-radius: 4px;
  border: none;

  text-transform: ${(props) => props.upper || 'none'};
  letter-spacing: ${(props) => props.letter || 'none'};

  color: ${(props) => props.color || 'white'};

  background: ${(props) => (props.disabled ? `${db.theme.colors.btnDisabled}` : `${db.theme.colors.btn}`)};

  transition: all .3s ease;
  outline: none;

  &:hover {
    transform: ${(props) => (props.disabled ? '' : 'translateY(-1px)')};
    background: ${(props) => (props.disabled ? '' : 'linear-gradient(90.8deg, #7DD4B2 -33.3%, #7DD4DE 104.64%);')}; 
  }

  &:active {
    transform: translateY(0px);
    opacity: 0.9;
  }

`;

Widget.Select = styled.a`

  box-shadow: ${db.theme.shadow};

  text-decoration: none;
  display: block;
 
  width: 100%;

  margin: 0 0 7px 0;
  padding: 10px 15px;

  border-radius: 4px;
  border: none;

  text-transform: ${(props) => props.upper || 'none'};
  letter-spacing: ${(props) => props.letter || 'none'};

  color: ${(props) => props.color || 'white'};

  background: ${({ theme }) => `${theme.colors.primary}`};

  transition: all .3s ease;
  outline: none;
  cursor: 'pointer';

  input {
    cursor: 'pointer';
  }

  &:hover {
    transform: ${(props) => (props.disabled ? '' : 'translateY(-1px)')};
    background: #B791F9;
  }
`;

export default Widget;
