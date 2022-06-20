import React from 'react';
import renderer from 'react-test-renderer';
import {Button} from './index';

it('button should render correctly', () => {
  const tree = renderer
    .create(
      <Button
        title={'Button test'}
        onPress={() => console.log('Button was pressed')}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
