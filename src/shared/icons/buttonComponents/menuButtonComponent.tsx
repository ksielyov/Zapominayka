import Svg, {Path} from 'react-native-svg';
import * as React from 'react';
import {iconSize} from './styles';

const MenuButtonComponent = () => {
  return (
    <Svg width={iconSize} height={iconSize} viewBox="0 0 24 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.553 3.533C-.227 3.14-.187.578.703.26c.89-.317 22.04-.363 22.71-.032.669.332.908 2.757-.05 3.187-.96.43-21.953.548-22.81.118zm0 16.198c-.78-.394-.74-2.956.15-3.273.89-.318 22.04-.364 22.71-.032.669.331.908 2.756-.05 3.186-.96.43-21.953.549-22.81.119zm.15-11.372c-.89.318-.93 2.879-.15 3.273.857.43 21.85.312 22.81-.119.958-.43.719-2.854.05-3.186-.67-.332-21.82-.285-22.71.032z"
        fill="#675CFE"
      />
    </Svg>
  );
};

export {MenuButtonComponent};
