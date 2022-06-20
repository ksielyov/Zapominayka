import React from 'react';
import renderer from 'react-test-renderer';
import {Button} from './index';
import {fireEvent, render} from '@testing-library/react-native';

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

it('should call onPress function', () => {
  const buttonTitle = 'Button test';
  const onPressEvent = jest.fn();

  const {getByText} = render(
    <Button title={buttonTitle} onPress={onPressEvent} />,
  );

  fireEvent.press(getByText(buttonTitle));
  expect(onPressEvent).toHaveBeenCalled();
});
