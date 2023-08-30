import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from '@ui-kitten/components';
import {Layouts, Space} from '~components';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import { responsive } from '~utils';

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
        <Space />
        <Button
          onPress={() => {
            navigation.navigate('ListDataUsers');
          }}>
          {t('setup.more.listuser')}
        </Button>
        <Space />
        <View style={{
          borderWidth: 1,
          borderColor: '#CCD000',
          padding: responsive.wp(3),
          borderRadius: responsive.wp(2),
          backgroundColor: '#CCD00010',
        }}>
          <Text style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: responsive.hp(3),
          }}>{t('warning.title')}</Text>
          <Space />
          <Text>{t('warning.message')}</Text>
        </View>
      </Layouts>
    </>
  );
};

export default FeatureList;

const styles = StyleSheet.create({});
