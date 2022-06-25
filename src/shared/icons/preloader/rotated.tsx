import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {verticalScale} from 'react-native-size-matters';

function RotatedPreloader() {
  return (
    <Svg
      width={verticalScale(32)}
      height={verticalScale(78)}
      viewBox="0 0 72 156"
      fill="none">
      <Path
        d="M27.49.016C19.882-.71-3.003 90.549 1.582 94.289c4.585 3.74 17.042-30.392 21.203-28.91 4.16 1.48 17.06 89.002 23.16 89.914 4.546.625 28.596-88.446 24.84-93.022-3.758-4.576-11.941 28.203-17.11 26.914C48.509 87.896 32.944.555 27.49.015z"
        fill="#212121"
      />
    </Svg>
  );
}

export {RotatedPreloader};
