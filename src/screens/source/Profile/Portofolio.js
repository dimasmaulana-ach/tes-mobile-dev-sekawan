import {FlatList, Linking, StyleSheet, View} from 'react-native';
import React from 'react';
import {Layouts, Space} from '~components';
import {Card, Text} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Portofolio = () => {
  const {t} = useTranslation();
  const portofolio = [
    {
      id: 1,
      title: t('portofolio.title-1'),
      url: 'https://github.com/dimasmaulana-ach/rust-cryptography',
    },
    {
      id: 2,
      title: t('portofolio.title-2'),
      url: 'https://github.com/dimasmaulana-ach/rn-cafe-app',
    },
    {
      id: 3,
      title: t('portofolio.title-3'),
      url: 'https://github.com/dimasmaulana-ach/node-lelang-backend',
    },
    {
      id: 4,
      title: t('portofolio.title-4'),
      url: 'https://github.com/dimasmaulana-ach/laravel-personal-blog',
    },
    {
      id: 5,
      title: t('portofolio.title-5'),
      url: 'https://github.com/dimasmaulana-ach/cafe-node-backend',
    },
    {
      id: 6,
      title: t('portofolio.title-6'),
      url: 'https://github.com/dimasmaulana-ach/rails-api-personal-blog',
    },
  ];
  return (
    <Layouts
      topNavigation={{
        themeControl: true,
        backControl: true,
        topProps: {
          title: t('portofolio.title'),
          alignment: 'center',
        },
      }}>
      <FlatList
        data={portofolio}
        renderItem={({item, i}) => (
          <>
            <TouchableOpacity onPress={() => {Linking.openURL(item.url)}}>
              <Card key={i}>
                <Text>{item.title}</Text>
              </Card>
            </TouchableOpacity>
            <Space />
          </>
        )}
      />
    </Layouts>
  );
};

export default Portofolio;

const styles = StyleSheet.create({});
