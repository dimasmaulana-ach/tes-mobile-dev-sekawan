import { ScrollView, View} from 'react-native';
import React from 'react';
import {Layouts, Space} from '~components';
import {Avatar, Button, Card, Text} from '@ui-kitten/components';
import {Face} from '~assets';
import {responsive} from '~utils';
import {useTranslation} from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const {t} = useTranslation();
  const navigation = useNavigation()

  return (
    <Layouts
      noPadding
      topNavigation={{
        themeControl: true,
        topProps: {
          title: 'Profile',
          alignment: 'center',
        },
      }}>
      <ScrollView>
        <View style={{
          paddingHorizontal: responsive.wp(5),
        }}>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Avatar
              source={Face}
              style={{
                height: responsive.wp(40),
                width: responsive.wp(40),
              }}
            />
          </View>
          <CardData title={t('profile.name')} value="Dimas Maulana Ahmad" />
          <CardData title={t('profile.email')} value="oxzysk.dimas@gmail.com" />
          <CardData title={t('profile.pob')} value="Tulungagung" />
          <CardData title={t('profile.yob')} value="2005" />
          <CardData
            title={t('profile.about')}
            value={t('profile.about-data')}
          />
          <Space />
          <Button onPress={()=> navigation.navigate("Portofolio")}>{t("portofolio.title")}</Button>
          <Space height={responsive.hp(1)} />
        </View>
      </ScrollView>
    </Layouts>
  );
};

export default Profile;

const CardData = ({title, value}) => {
  return (
    <>
      <Space />
      <Text
        style={{
          fontSize: responsive.rf(12),
        }}>
        {title}
      </Text>
      <View
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          paddingHorizontal: responsive.wp(2),
          paddingVertical: responsive.wp(3),
          borderRadius: responsive.wp(3),
        }}>
        <Text
          style={{
            fontSize: responsive.rf(15),
          }}>
          {value}
        </Text>
      </View>
    </>
  );
};
