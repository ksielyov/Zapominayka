import React from 'react';
import renderer from 'react-test-renderer';
import {MaskedButton} from '@ui';
import {
  LikeButtonComponent,
  MenuButtonComponent,
  ShareButtonComponent,
} from '@icons';

test('maskedButton should render correctly with likeButtonComponent nested', () => {
  const tree = renderer
    .create(
      <MaskedButton>
        <LikeButtonComponent />
      </MaskedButton>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

test('maskedButton should render correctly with menuButtonComponent nested', () => {
  const tree = renderer
    .create(
      <MaskedButton>
        <MenuButtonComponent />
      </MaskedButton>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

test('maskedButton should render correctly with shareButtonComponent nested', () => {
  const tree = renderer
    .create(
      <MaskedButton>
        <ShareButtonComponent />
      </MaskedButton>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
