import {FlatList, Image, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Layouts, Row, Space} from '~components';
import {get} from '~utils/api';
import {Throttle, responsive} from '~utils';
import {Card, Icon, Text, Avatar} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useMMKVBoolean} from 'react-native-mmkv';
import { Avatar as AvatarPng } from '~assets';

const ListDataUsers = () => {
  const {t} = useTranslation();
  const [data, setData] = useState([]);
  const getThrottle = Throttle(getData, 100);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await get('https://jsonplaceholder.typicode.com/users');
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layouts
      noPadding
      topNavigation={{
        backControl: true,
        themeControl: true,
        topProps: {
          title: t('setup.more.throttle'),
          alignment: 'center',
        },
      }}>
      <FlatList
        data={data}
        maxToRenderPerBatch={20}
        renderItem={({item}) => <Item {...item} />}
        keyExtractor={item => item.id}
        onScroll={() => getThrottle()}
      />
    </Layouts>
  );
};

export default ListDataUsers;

const Item = (data, props) => {
  const navigation = useNavigation();
  const [colorBg] = useMMKVBoolean('colorTheme');

  return (
    <>
      <TouchableOpacity
        style={{
          marginHorizontal: responsive.wp(2),
          paddingVertical: responsive.hp(1),
          paddingHorizontal: responsive.hp(1),
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: responsive.wp(2),
        }}
        onPress={() => {
          navigation.navigate('ListDetailsUsers', {
            id: data.id,
          });
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
          }}>
          <View
            style={{
              width: responsive.wp(10),
              height: responsive.wp(10),
            }}>
              <Avatar source={AvatarPng} />
          </View>
          <Space />
          <View>
            <Text
              style={{
                textAlign: 'left',
              }}>
              {data.name}
            </Text>
            <Text
              style={{
                textAlign: 'left',
              }}>
              {data.email}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <Space />
    </>
  );
};

const styles = StyleSheet.create({});
