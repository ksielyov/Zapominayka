import React, {FunctionComponent} from 'react';
import renderer from 'react-test-renderer';
import {AppSafeArea} from './index';
import {View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {render} from '@testing-library/react-native';

const VirtualProvider: FunctionComponent = ({children}) => (
  <SafeAreaProvider>{children}</SafeAreaProvider>
);

test('appSafeArea should render correctly', () => {
  const tree = renderer
    .create(
      <VirtualProvider>
        <AppSafeArea>
          <View />
        </AppSafeArea>
      </VirtualProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('appSafeArea should have view nested', () => {
  const testID = 'nestedView';

  const {queryByTestId} = render(
    <VirtualProvider>
      <AppSafeArea>
        <View testID={testID} />
      </AppSafeArea>
    </VirtualProvider>,
  );
  const element = queryByTestId(testID);
  expect(element).toBeTruthy();
});
