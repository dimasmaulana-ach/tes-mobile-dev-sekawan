import React from 'react';
import {useMMKVBoolean} from 'react-native-mmkv';
import {useNavigation} from '@react-navigation/native';
import {Icon, TopNavigation, TopNavigationAction} from '@ui-kitten/components';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {setItem} from '~utils';

const TopNav = ({
  style,
  themeControl,
  backControl,
  rightAccesories,
  leftAccesories,
  topProps,
}) => {
  const [colorBg] = useMMKVBoolean('colorTheme');
  const navigation = useNavigation();

  const MoonIcon = props => <Icon {...props} name="moon" />;
  const SunIcon = props => <Icon {...props} name="sun" />;
  const BackIcon = props => (
    <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
      <Icon {...props} name="arrow-back" />
    </TouchableWithoutFeedback>
  );
  const BackAction = () => <TopNavigationAction icon={BackIcon} />;
  const BgIconAction = () => (
    <TopNavigationAction
      icon={colorBg ? SunIcon : MoonIcon}
      onPress={() => setItem('colorTheme', !colorBg)}
    />
  );
  return (
    <TopNavigation
      {...topProps}
      style={style}
      accessoryLeft={backControl ? BackAction : leftAccesories ?? undefined}
      accessoryRight={
        themeControl ? BgIconAction : rightAccesories ?? undefined
      }
    />
  );
};

export default TopNav;
