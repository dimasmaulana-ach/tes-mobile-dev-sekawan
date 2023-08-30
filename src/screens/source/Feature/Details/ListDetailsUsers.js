import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {get} from '~utils/api';
import {Layouts, Row, Space} from '~components';
import { Text, Avatar} from '@ui-kitten/components';
import {responsive} from '~utils';
import {useTranslation} from 'react-i18next';
import { Avatar as AvatarPng } from '~assets';
import { useIsFocused } from '@react-navigation/native';

const ListDetailsUsers = ({route}, props) => {
  const id = route.params.id;
  const {t} = useTranslation();
  const [data, setData] = useState([]);
  const focus = useIsFocused()

  useEffect(() => {
    handleGetUser();
  }, [focus]);

  const handleGetUser = async () => {
    try {
      const response = await get(
        `https://jsonplaceholder.typicode.com/users/${id}`,
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layouts
      topNavigation={{
        backControl: true,
        themeControl: true,
        topProps: {
          title: 'Details',
          alignment: 'center',
        },
      }}>
      <View
        style={{
          flex: 1,
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Avatar source={AvatarPng} style={{
            height: responsive.hp(30),
            width: responsive.hp(30),
          }} />
          <Space />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            textAlign: 'left',
          }}>
          <Space height={responsive.wp(0.2)} />
          <Row
            style={{
              justifyContent: 'flex-start',
              borderBottomWidth: 1,
              borderBottomColor: 'grey',
              paddingVertical: responsive.hp(1),
            }}>
            <Text
              style={{
                width: '30%',
              }}>
              {t('list.details.name')}
            </Text>
            <Text>: {data.name}</Text>
          </Row>
          <Space height={responsive.wp(0.2)} />
          <Row
            style={{
              justifyContent: 'flex-start',
              borderBottomWidth: 1,
              borderBottomColor: 'grey',
              paddingVertical: responsive.hp(1),
            }}>
            <Text
              style={{
                width: '30%',
              }}>
              {t('list.details.email')}
            </Text>
            <Text>: {data.email}</Text>
          </Row>
          <Space height={responsive.wp(0.2)} />
          <Row
            style={{
              justifyContent: 'flex-start',
              borderBottomWidth: 1,
              borderBottomColor: 'grey',
              paddingVertical: responsive.hp(1),
            }}>
            <Text
              style={{
                width: '30%',
              }}>
              {t('list.details.username')}
            </Text>
            <Text style>: {data.username}</Text>
          </Row>
        </View>
      </View>
    </Layouts>
  );
};

export default ListDetailsUsers;

const styles = StyleSheet.create({});
