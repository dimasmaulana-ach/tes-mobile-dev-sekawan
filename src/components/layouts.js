import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {Layout} from '@ui-kitten/components';
import {getItem, responsive, setItem} from '~utils';
import {useIsFocused} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import TopNav from './topnav';

const Layouts = ({
  children,
  style,
  noPadding = false,
  topNavigation,
}) => {
  const focus = useIsFocused();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    const checklang = getItem('lang');
    if (checklang == undefined) {
      setItem('lang', 'en');
    }
  }, [focus]);

  return (
    <Layout style={styles.container}>
      <View
        style={[
          styles.container,
          {
            top: insets.top,
            bottom: insets.bottom,
            left: insets.left,
            right: insets.right,
          },
        ]}>
        {topNavigation && <TopNav {...topNavigation} />}
        <View style={[styles.container, !noPadding && styles.Padding, style]}>
          {children}
        </View>
      </View>
    </Layout>
  );
};

export default Layouts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Padding: {
    padding: responsive.wp(3),
  },
});
