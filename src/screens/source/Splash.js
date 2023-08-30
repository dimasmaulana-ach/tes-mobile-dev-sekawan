import React, {useEffect} from 'react';
import {Layouts, Space} from '~components';
import {ReactConfig} from '~assets';
import {delay, responsive} from '~utils';
import {Text} from '@ui-kitten/components';
import { useTranslation } from 'react-i18next';

const Splash = ({navigation}) => {
  const {t} = useTranslation();

  useEffect(() => {
    toHome();
  }, []);

  async function toHome() {
    await delay(3000)
    navigation.navigate('Home');
  }

  return (
    <Layouts
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ReactConfig width={responsive.wp(40)} height={responsive.wp(40)} />
      <Space />
      <Text
        style={{
          fontSize: responsive.rf(20),
          fontWeight: 'bold',
        }}>
        {t('setup.base')}
      </Text>
    </Layouts>
  );
};

export default Splash;