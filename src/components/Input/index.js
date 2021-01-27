/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  height: 30px;

  border-radius: 4px;

  border: 1.5px solid #524081;
  outline: none;

  padding: .6rem;

  font-family: 'Source Sans Pro', sans-serif;

  transition: all .3s ease;

  &:active, &:focus {
    transform: translateY(-1px);
  }
`;

Input.defaultProps = {
  value: '',
};

Input.PropTypes = {
  onChange: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

const InputBase = ({ placeholder, onChange, ...props }) => (
  <>
    <Input
      placeholder={placeholder}
      onChange={onChange}
      {...props}
    />
  </>
);

export default InputBase;
