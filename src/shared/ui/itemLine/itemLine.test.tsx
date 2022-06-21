import renderer from 'react-test-renderer';
import {ItemLine} from '@ui';
import React from 'react';

test('itemLine should render correctly', () => {
  const tree = renderer
    .create(
      <ItemLine
        title={'ItemLine UI test'}
        likeCount={324}
        imageSource={
          'https://moreulybok.ru/wp-content/uploads/2021/05/aleksandr-pushkin7.jpg'
        }
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
