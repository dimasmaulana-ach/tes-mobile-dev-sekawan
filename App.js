import React, { useEffect } from 'react';
import Navigators from './src/navigators/index';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {useMMKVBoolean} from 'react-native-mmkv';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StatusBar, StyleSheet} from 'react-native';
import {getItem} from './src/utils';
import {changeLang} from './src/i18n';

const App = () => {
  const [colorBg] = useMMKVBoolean('colorTheme');
  const lang = getItem('lang')

  useEffect(()=> {
    if(lang === null) {
      changeLang('en')
    }
  })

  return (
    <>
      <StatusBar barStyle={colorBg ? 'dark-content' : 'light-content'} />
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={colorBg ? eva.light : eva.dark}>
        <GestureHandlerRootView style={style.Flex}>
          <Navigators />
        </GestureHandlerRootView>
      </ApplicationProvider>
    </>
  );
};

export default App;

const style = StyleSheet.create({
  Flex: {
    flex: 1,
  },
});
