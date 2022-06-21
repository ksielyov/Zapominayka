import renderer from 'react-test-renderer';
import {GrayText} from '@ui';
import {render} from '@testing-library/react-native';
import React from 'react';

test('text should render correctly', () => {
  const tree = renderer.create(<GrayText>test</GrayText>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('rendered text should be equal to `testText`', () => {
  const testText = 'nestedView';

  const {getByText} = render(<GrayText>{testText}</GrayText>);
  const element = getByText(testText);
  expect(element).toBeTruthy();
});
