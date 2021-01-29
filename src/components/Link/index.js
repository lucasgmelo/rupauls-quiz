/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import NextLink from 'next/link';
import Widget from '../widget';
import db from '../../../db.json';

export default function Link({ children, href, ...props }) {
  return (
    <NextLink href={href} passHref>
      <Widget.Select bg={db.theme.colors.primary}>
        <a>
          {children}
        </a>
      </Widget.Select>
    </NextLink>
  );
}
