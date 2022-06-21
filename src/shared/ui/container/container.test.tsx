import renderer from 'react-test-renderer';
import {Container} from '@ui';
import {View} from 'react-native';
import {render} from '@testing-library/react-native';
import React from 'react';

test('container should render correctly', () => {
  const tree = renderer
    .create(
      <Container>
        <View />
      </Container>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('container should have view nested', () => {
  const testID = 'nestedView';

  const {queryByTestId} = render(
    <Container>
      <View testID={testID} />
    </Container>,
  );
  const element = queryByTestId(testID);
  expect(element).toBeTruthy();
});
