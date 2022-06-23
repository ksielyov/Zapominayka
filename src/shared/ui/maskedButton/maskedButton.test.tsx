import React from 'react';
import renderer from 'react-test-renderer';
import {MaskedButton} from '@ui';
import {LikeButtonComponent} from '@icons';

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
