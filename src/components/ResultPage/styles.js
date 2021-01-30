/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Title } from '../MainStyles';

export const Line = styled(Title)`
    color: ${({ theme }) => theme.colors.purpleText};
    font-size: 17px;
    cursor: pointer;
    text-align: right;
    width: 100%;
`;
