import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from '@ui-kitten/components';
import {Layouts, Space} from '~components';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';

const FeatureList = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  return (
    <>
      <Layouts
        topNavigation={{
          themeControl: true,
          topProps: {
            title: t('setup.more.title'),
            alignment: 'center',
          },
        }}>
        <Button
          onPress={() => {
            navigation.navigate('Login');
          }}>
          {t('setup.more.login')}
        </Button>
        <Space />
        <Button
          onPress={() => {
            navigation.navigate('ListData');
          }}>
          {t('setup.more.throttle')}
        </Button>
      </Layouts>
    </>
  );
};

export default FeatureList;

const styles = StyleSheet.create({});
