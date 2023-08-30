import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Button, Text} from '@ui-kitten/components';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {responsive} from '~utils';
import {Layouts, Row, Space} from '~components';
import {ReactConfig} from '~assets';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();

  return (
    <>
      <Layouts
        topNavigation={{
          themeControl: true,
          topProps: {
            title: 'Home',
            alignment: 'center',
          },
        }}>
        <View style={styles.containerIcons}>
          <ReactConfig width={responsive.wp(50)} height={responsive.wp(50)} />
          <Space />
          <Text style={styles.welcomeText}>{t('setup.welcome')}</Text>
          <Text
            style={{
              fontSize: responsive.rf(20),
            }}>
            {t('setup.base')}
          </Text>
          <Space />
          <Button
            onPress={() => {
              navigation.navigate('Feature');
            }}>
            {t('setup.try')}
          </Button>
        </View>
      </Layouts>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  containerIcons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: responsive.rf(40),
    fontWeight: 'bold',
  },
});
