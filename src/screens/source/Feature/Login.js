import {Modal, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {Button, Card, Text} from '@ui-kitten/components';
import {Input, Layouts, Row, Space, TopNav} from '~components';
import {responsive} from '~utils';
import {useTranslation} from 'react-i18next';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorEmailMessage, setErrorEmailMessage] = useState('');
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorPasswordMessage, setErrorPasswordMessage] = useState('');
  const [message, setMessage] = useState('');
  const [messageError, setMessageError] = useState(false);
  const [lang, setLang] = useState('id');
  const [hint, setHint] = useState(false);
  const navigation = useNavigation();
  const {t} = useTranslation();
  const handleSetState = setState => text => {
    setState(text);
  };

  useFocusEffect(
    useCallback(() => {
      if (
        (email?.includes('.com') || email?.includes('.id')) &&
        email?.includes('@')
      ) {
        setErrorEmail(false);
        setErrorEmailMessage('');
      } else {
        setErrorEmail(true);
        setErrorEmailMessage(`${t('login.errors.email')}`);
      }
    }, [email, t]),
  );

  useFocusEffect(
    useCallback(() => {
      if (password.length > 8) {
        setErrorPassword(false);
        setErrorEmailMessage('');
      } else {
        setErrorPassword(true);
        setErrorPasswordMessage(`${t('login.errors.password')}`);
      }
    }, [password.length, t]),
  );

  useFocusEffect(
    useCallback(() => {
      setMessage(`${t('login.errors.errormessage')}`);
    }, [t]),
  );

  const handleSubmit = () => {
    if (email === 'user@gmail.com' && password === '!1Password') {
      navigation.navigate('Feature');
    } else {
      setMessageError(true);
    }
  };

  return (
    <>
      <Layouts
        topNavigation={{
          backControl: true,
          themeControl: true,
          topProps: {
            title: t('login.login'),
            alignment: 'center',
          },
        }}>
        <View style={styles.container}>
          <Text
            style={{
              fontSize: responsive.rf(30),
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            {t('login.login')}
          </Text>
          <Text
            style={{
              color: 'red',
              textAlign: 'center',
            }}>
            {messageError && message}
          </Text>
          <Space height={responsive.wp(1)} />
          <Input
            status={errorEmail && email !== '' ? 'danger' : 'basic'}
            value={email.toLowerCase()}
            onChangeText={handleSetState(setEmail)}
            placeholder={`${t('login.input')} ${t('login.email')}`}
          />
          <Text style={styles.inputStyle}>
            {errorEmail && email.length > 0 && errorEmailMessage}
          </Text>
          <Space height={responsive.hp(0.1)} />
          <Input
            secure
            status={errorPassword && password !== '' ? 'danger' : 'basic'}
            value={password}
            onChangeText={handleSetState(setPassword)}
            placeholder={`${t('login.input')} ${t('login.password')}`}
          />
          <Text style={styles.inputStyle}>
            {errorPassword && password.length > 0 && errorPasswordMessage}
          </Text>
          <Space />
          <Button
            onPress={() => handleSubmit()}
            disabled={
              email.length === 0 ||
              password.length < 8 ||
              errorEmail === true ||
              errorPassword === true
            }
            style={{
              width: '100%',
            }}>
            {t('login.login')}
          </Button>
          <Space />
          <Button
            onPress={() => setHint(!hint)}
            style={{
              width: '100%',
            }}>
            {t('login.hint')}
          </Button>
          <Space />
          {hint && (
            <View>
              <Row
                style={{
                  justifyContent: 'flex-start',
                }}>
                <Text
                  style={{
                    width: '30%',
                  }}>
                  {t('login.email')}
                </Text>
                <Text>:user@gmail.com</Text>
              </Row>
              <Row
                style={{
                  justifyContent: 'flex-start',
                }}>
                <Text
                  style={{
                    width: '30%',
                  }}>
                  {t('login.password')}
                </Text>
                <Text>:!1Password</Text>
              </Row>
            </View>
          )}
        </View>
      </Layouts>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  inputStyle: {
    color: '#ff0000',
    alignSelf: 'flex-start',
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
