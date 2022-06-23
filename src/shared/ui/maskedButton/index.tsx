import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {verticalScale} from 'react-native-size-matters';
import {FunctionComponent} from 'react';
import {MaskedButtonInterface} from './lib';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles';

/**
 * @param children
 * @param bottom
 * @constructor
 */
const MaskedButton: FunctionComponent<MaskedButtonInterface> = ({
  children,
  bottom,
}) => {
  const containerStyles = [styles.container, {marginBottom: bottom}];
  return (
    <TouchableOpacity style={containerStyles}>
      <View style={styles.iconBackground} />
      <Svg
        width={verticalScale(46)}
        height={verticalScale(46)}
        viewBox="0 0 52 52"
        fill="#fff">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.882 49a98.619 98.619 0 01-3.936-.083c-6.004-.25-13.568-1.09-15.515-3.661C4.7 42.97 3.544 35.929 3.149 29.248c-.057-.978-.099-1.949-.123-2.895v-.027l-.001-.005A86.108 86.108 0 013 24.133c.01-6.11.702-14.782 4.366-17.918C10.123 3.853 18.3 3 25.846 3h.4c2.571.01 5.056.12 7.213.3 6.847.578 11.083 1.794 12.595 3.614 1.041 1.25 1.804 3.77 2.316 7.675a88.516 88.516 0 01.625 11.474v.021c-.002.427-.007.852-.015 1.276-.066 3.753-.329 7.35-.756 10.24-.58 3.936-1.418 6.466-2.56 7.739-2.589 2.891-12.192 3.66-19.576 3.661m0 3c8.348 0 19.213-.869 22.142-4.139 1.29-1.438 2.236-4.298 2.893-8.748.487-3.3.786-7.413.857-11.702.007-.43.012-.862.014-1.295V26.1v-.005a100.049 100.049 0 00-.706-12.995c-.58-4.414-1.44-7.262-2.618-8.675C46.96 2.368 42.172.993 34.432.338A104.916 104.916 0 0025.845 0c-8.536-.001-17.79.962-20.91 3.634C.745 7.22-.007 17.214 0 24.131a97.765 97.765 0 00.03 2.294v.005c.026.98.067 1.981.124 2.991.432 7.626 1.746 15.734 3.724 18.346 2.201 2.908 10.752 3.856 17.54 4.139a111.515 111.515 0 004.66.094m-.196-3h.196-.196z"
          fill="#675CFE"
        />
      </Svg>
      <View style={styles.childrenIconContainer}>{children}</View>
    </TouchableOpacity>
  );
};

export {MaskedButton};
