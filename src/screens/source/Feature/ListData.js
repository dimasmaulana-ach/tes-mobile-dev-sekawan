import {FlatList, Image, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Layouts, Row, Space} from '~components';
import {get} from '~utils/api';
import {Throttle, responsive} from '~utils';
import {Card, Text} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

const ListData = () => {
  const {t} = useTranslation();
  const [data, setData] = useState([]);
  const getThrottle = Throttle(getData, 100);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await get('https://jsonplaceholder.typicode.com/photos');
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

export default ListData;

const Item = data => {
  const navigation = useNavigation();
  return (
    <>
      <Card
        style={{
          marginHorizontal: responsive.wp(2),
        }}
        onPress={() => {
          navigation.navigate('ListDetails', {
            id: data.id,
          });
        }}>
        <Row
          style={{
            width: '100%',
            alignItems: 'center',
          }}>
          <Image
            source={{uri: data.thumbnailUrl}}
            width={responsive.wp(10)}
            height={responsive.wp(10)}
          />
          <Space />
          <Text
            style={{
              width: '85%',
              marginHorizontal: 'auto',
            }}>
            {data.title}
          </Text>
        </Row>
      </Card>
      <Space />
    </>
  );
};

const styles = StyleSheet.create({});
