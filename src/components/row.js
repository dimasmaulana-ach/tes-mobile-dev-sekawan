import React from 'react';
import {StyleSheet, View} from 'react-native';

const Row = ({children, style}) => {
  return <View style={[s.Container, style]}>{children}</View>;
};

export default Row;

const s = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
