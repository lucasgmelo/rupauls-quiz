import React from 'react';
import Widget from '../widget';
import {
  Image, Title, Question, Description, Button, ButtonOne,
} from './styles';

export default function LoadingPage() {
  return (
    <>
      <Widget border="#656871">
        <Widget.Header bg="#656871">
          <Title />
        </Widget.Header>
        <div />
        <Image />
        <Widget.Content>
          <Question />
          <Description />
          <ButtonOne />
          <Button />
          <Button />
          <Button />
          <ButtonOne />
        </Widget.Content>
      </Widget>
    </>
  );
}
