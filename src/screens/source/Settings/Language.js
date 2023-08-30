import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Layouts, Space} from '~components';
import {Text} from '@ui-kitten/components';
import {changeLang} from '~i18n';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {responsive} from '~utils';

const Language = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();

  return (
    <Layouts
      topNavigation={{
        backControl: true,
        themeControl: true,
        topProps: {
          title: t('language.title'),
          alignment: 'center',
        },
      }}>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          padding: responsive.wp(3),
          borderRadius: responsive.wp(2),
        }}
        onPress={() => {
          changeLang('id');
          navigation.navigate('Settings');
        }}>
        <Text>{t('language.indonesian')}</Text>
      </TouchableOpacity>
      <Space />
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          padding: responsive.wp(3),
          borderRadius: responsive.wp(2),
        }}
        onPress={() => {
          changeLang('en');
          navigation.navigate('Settings');
        }}>
        <Text>{t('language.english')}</Text>
      </TouchableOpacity>
    </Layouts>
  );
};

export default Language;

const styles = StyleSheet.create({});
