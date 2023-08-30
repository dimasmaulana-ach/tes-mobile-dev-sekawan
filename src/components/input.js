import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon, Input as Inp} from '@ui-kitten/components';
import {TouchableWithoutFeedback} from '@ui-kitten/components/devsupport';

const Input = props => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecure = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const secureIcons = props => (
    <TouchableWithoutFeedback onPress={toggleSecure}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  const renderCaptions = () => {
    return (
      <View style={styles.captionContainer}>
        <AlertIcon style={styles.captionIcon} />
        <Text style={styles.captionText}>
          Should contain at least 8 symbols
        </Text>
      </View>
    );
  };

  return (
    <Inp
      {...props}
      caption={
        props.caption
          ? props.custom_caption
            ? props.custom_caption
            : renderCaptions
          : undefined
      }
      accessoryRight={
        props.secure ? secureIcons : props.right_accesories ?? undefined
      }
      secureTextEntry={props.secure ? secureTextEntry : false}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  captionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  captionIcon: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
  captionText: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'opensans-regular',
    color: '#8F9BB3',
  },
});
