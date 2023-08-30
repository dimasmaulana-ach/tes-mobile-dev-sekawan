import {Dimensions, View} from 'react-native';
import React from 'react';
import {StyleService, useStyleSheet} from '@ui-kitten/components';
import {responsive} from '~utils';

const Space = ({
  style,
  height = responsive.wp(0.5),
  width = responsive.hp(0.2),
}) => {
  const styles = useStyleSheet(themedStyles);
  const dimenWidth = Dimensions.get('window').width;
  const dimenHeight = Dimensions.get('window').height;

  return (
    <View
      style={[
        styles.space,
        style,
        {
          height: dimenHeight * (height * 0.01),
          width: dimenWidth * (width * 0.01),
        },
      ]}
    />
  );
};

export default Space;

const themedStyles = StyleService.create({
  space: {
    backgroundColor: 'transparent',
  },
});
