import Svg, {Path} from 'react-native-svg';
import * as React from 'react';
import {iconSize} from './styles';

const LikeButtonComponent = () => {
  return (
    <Svg width={iconSize} height={iconSize} viewBox="0 0 23 19" fill="none">
      <Path
        d="M11.234 18.81c-.235 0-.392 0-5.578-2.849C.47 13.111.381 12.973.253 12.77c-.114-.183-.232-2.13-.251-5.751-.02-3.69.123-3.88.286-4.102.114-.151.242-.323 2.91-1.618C5.866.003 6.115 0 6.296 0 6.613 0 6.9.122 9.46 1.523c.638.35 1.47.805 1.865 1.001.414-.197 1.3-.666 1.979-1.022C15.843.164 16.1.055 16.4.055c.22 0 .396 0 3.142 1.428.432.224 2.6 1.35 2.825 1.538.313.26.333.571.355 1.63.014.71.011 1.603.006 2.228-.01 1.198-.04 5.004-.116 5.268-.095.317-.296.447-.79.757-.287.178-.69.423-1.205.73-.943.56-2.224 1.305-3.609 2.094-1.357.782-2.654 1.509-3.642 2.06-1.845 1.023-1.904 1.023-2.133 1.023z"
        fill="#675CFE"
      />
    </Svg>
  );
};

export {LikeButtonComponent};
