import React, {useState} from 'react';
import {Layouts, Row, Space} from '~components';
import {Button, Text, Toggle} from '@ui-kitten/components';
import {getItem, responsive, setItem} from '~utils';
import {useMMKVBoolean} from 'react-native-mmkv';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {changeLang} from '~i18n';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';

const Settings = () => {
  const {t} = useTranslation();
  const lang = getItem('lang');
  const [colorBg] = useMMKVBoolean('colorTheme');
  const [langPosition, setLangPosition] = useState(lang === 'en');
  const navigator = useNavigation();

  return (
    <Layouts
      topNavigation={{
        topProps: {
          title: t('setting.title'),
          alignment: 'center',
        },
      }}>
      <Row
        style={{
          justifyContent: 'space-between',
          borderBottomWidth: 1,
          borderBottomColor: 'gray',
          paddingVertical: responsive.hp(2),
          alignItems: 'center',
        }}>
        <Text>{t('setting.version')}</Text>
        <Text>1.0.0</Text>
      </Row>
      <Row
        style={{
          justifyContent: 'space-between',
          borderBottomWidth: 1,
          borderBottomColor: 'gray',
          paddingVertical: responsive.hp(2),
          alignItems: 'center',
        }}>
        <Text>{t('setting.darkmode')}</Text>
        <Toggle
          checked={!colorBg}
          onChange={() => setItem('colorTheme', !colorBg)}
          style={{
            height: responsive.hp(3),
          }}
        />
      </Row>
      <TouchableOpacity
        onPress={() => {
          navigator.navigate('Language');
        }}>
        <Row
          style={{
            justifyContent: 'space-between',
            borderBottomWidth: 1,
            borderBottomColor: 'gray',
            paddingVertical: responsive.hp(2),
            alignItems: 'center',
          }}>
          <Text>{t('setting.language')}</Text>
          <Text>{lang}</Text>
        </Row>
      </TouchableOpacity>
      <Space />
      <Button
        onPress={() => {
          navigator.navigate('Home');
        }}>
        Keluar
      </Button>
    </Layouts>
  );
};

export default Settings;
