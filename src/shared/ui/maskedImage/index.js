import * as React from 'react';
import Svg, {Defs, Path, Pattern, Image} from 'react-native-svg';
import {verticalScale} from 'react-native-size-matters';

function MaskedImage({imageSource, ...props}) {
  return (
    <Svg
      width={verticalScale(45)}
      height={verticalScale(45)}
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Defs>
        <Pattern
          id="imageSource"
          patternUnits="userSpaceOnUse"
          width="52"
          height="52">
          <Image xlinkHref={imageSource} x="0" y="0" width="52" height="52" />
        </Pattern>
      </Defs>
      <Path
        d="M26.088 52a112 112 0 01-4.67-.094c-6.788-.283-15.339-1.231-17.54-4.139C1.635 44.806.246 34.777.03 26.4-.136 19.616.26 7.636 4.935 3.634 9.173.004 24.732-.472 34.432.338c7.74.655 12.529 2.03 14.238 4.087 1.177 1.413 2.039 4.261 2.618 8.675.517 4.312.753 8.653.706 12.995-.026 4.758-.334 9.381-.87 13.018-.658 4.45-1.604 7.31-2.894 8.748C45.3 51.131 34.436 52 26.088 52z"
        fill="url(#imageSource)"
      />
    </Svg>
  );
}

export {MaskedImage};
