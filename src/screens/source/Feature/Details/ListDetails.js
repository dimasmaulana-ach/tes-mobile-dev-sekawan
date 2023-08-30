import {Image, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {Layouts, Row, Space} from '~components';
import {Text} from '@ui-kitten/components';
import {get} from '~utils/api';
import {responsive} from '~utils';
import {useTranslation} from 'react-i18next';

const ListDetails = ({route}) => {
  const focus = useIsFocused();
  const id = route.params.id;
  const {t} = useTranslation();
  const [data, setData] = useState([]);

  useEffect(() => {
    handleGetData();
  }, [focus]);

  const handleGetData = async () => {
    try {
      const response = await get(
        `https://jsonplaceholder.typicode.com/photos/${id}`,
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
          <Image
            source={{uri: data.thumbnailUrl}}
            width={responsive.wp(100)}
            height={responsive.wp(100)}
          />
          <Space />
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: responsive.rf(12),
              textAlign: 'center',
            }}>
            {data.title}
          </Text>
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
            }}>
            <Text
              style={{
                width: '20%',
              }}>
              {t('setup.details.id')}
            </Text>
            <Text>: {data.id}</Text>
          </Row>
          <Space height={responsive.wp(0.2)} />
          <Row
            style={{
              justifyContent: 'flex-start',
            }}>
            <Text
              style={{
                width: '20%',
              }}>
              {t('setup.details.album')}
            </Text>
            <Text>: {data.albumId}</Text>
          </Row>
          <Space height={responsive.wp(0.2)} />
          <Row
            style={{
              justifyContent: 'flex-start',
            }}>
            <Text
              style={{
                width: '20%',
              }}>
              {t('setup.details.url')}
            </Text>
            <Text style>: {data.url}</Text>
          </Row>
        </View>
      </View>
    </Layouts>
  );
};

export default ListDetails;

const styles = StyleSheet.create({});
