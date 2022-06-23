import Svg, {Path} from 'react-native-svg';
import * as React from 'react';
import {containerPosition, iconSize} from './styles';

const ShareButtonComponent = () => {
  return (
    <Svg
      style={containerPosition}
      width={iconSize}
      height={iconSize}
      viewBox="0 0 28 28"
      fill="none">
      <Path
        d="M23.206 18.248a4.738 4.738 0 00-3.471 1.519L9.53 14.685c.035-.238.059-.48.059-.729 0-.242-.023-.478-.057-.71l10.19-5.026a4.74 4.74 0 003.484 1.532C25.853 9.752 28 7.57 28 4.876 28 2.183 25.853 0 23.206 0c-2.648 0-4.795 2.183-4.795 4.876 0 .242.023.478.057.711l-10.19 5.026A4.739 4.739 0 004.794 9.08C2.146 9.08 0 11.264 0 13.956c0 2.694 2.146 4.877 4.794 4.877a4.738 4.738 0 003.471-1.52l10.206 5.082c-.036.238-.06.48-.06.729 0 2.693 2.147 4.876 4.795 4.876C25.853 28 28 25.817 28 23.124c0-2.694-2.147-4.876-4.794-4.876z"
        fill="#675CFE"
      />
    </Svg>
  );
};

export {ShareButtonComponent};
