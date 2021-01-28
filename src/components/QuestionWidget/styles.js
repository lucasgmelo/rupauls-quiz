import styled from 'styled-components';

const AlternativesForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  label {
    &[data-selected="true"] {
      background-color: #B791F9;
      
      &[data-status="SUCCESS"] {
        background: linear-gradient(90.97deg, #8BDE7D 0%, #7DD48B 143.73%);
      }
      &[data-status="ERROR"] {
        background: linear-gradient(90.97deg, #F77171 0%, #E04A4A 143.73%);
      }
    }
    &:focus {
      opacity: 1;
    } 
  }
  button {
    margin-top: 24px;
  }
`;

export default AlternativesForm;
