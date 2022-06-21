import React from 'react';
import renderer from 'react-test-renderer';
import {Input} from '@ui';
import {fireEvent, render} from '@testing-library/react-native';

test('Input should render correctly', () => {
  const tree = renderer
    .create(<Input placeholder={'Input test'} onChangeText={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Input should change value to `Input test`', () => {
  const onChangeTextMock = jest.fn();
  const testValue = 'test value';
  const placeholderText = 'Input test';

  const {getByPlaceholderText} = render(
    <Input onChangeText={onChangeTextMock} placeholder={placeholderText} />,
  );

  fireEvent.changeText(getByPlaceholderText(placeholderText), testValue);
  expect(onChangeTextMock).toHaveBeenCalledWith(testValue);
});
