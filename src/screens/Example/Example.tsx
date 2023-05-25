import React, { useEffect } from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  Button,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Brand } from '../../components';
import { useTheme } from '../../hooks';
import {
  useLazyFetchOneQuery,
  useLoginMutation,
} from '../../services/modules/users';
import { changeTheme, ThemeState } from '../../store/theme';
import i18next from 'i18next';

const Example = (props: any) => {
  const { navigation } = props;
  const { t } = useTranslation(['example', 'welcome']);
  const {
    Common,
    Fonts,
    Gutters,
    Layout,
    Images,
    darkMode: isDark,
  } = useTheme();
  const dispatch = useDispatch();

  // const [fetchOne, { data, isSuccess, isLoading, isFetching }] =
  //   useLazyFetchOneQuery();

  const [login, { data, isSuccess, isLoading }] = useLoginMutation();

  useEffect(() => {
    if (isSuccess && data?.model?.fullName) {
      Alert.alert(t('example:helloUser', { name: data.model.fullName }));
    }
  }, [isSuccess, data]);

  const onChangeTheme = ({ theme, darkMode }: Partial<ThemeState>) => {
    dispatch(changeTheme({ theme, darkMode }));
  };

  const onChangeLanguage = (lang: 'fr' | 'en') => {
    i18next.changeLanguage(lang);
  };

  return (
    <ScrollView
      style={Layout.fill}
      contentContainerStyle={[Layout.fullSize, Layout.fill]}
    >
      <View style={{ padding: 15 }}>
        <Button
          title={'SpringBox'}
          onPress={() => {
            navigation.navigate('SpringBox');
          }}
        />
      </View>
      <View style={{ padding: 15 }}>
        <Button
          title={'TimingBox'}
          onPress={() => {
            navigation.navigate('TimingBox');
          }}
        />
      </View>
      <View style={{ padding: 15 }}>
        <Button
          title={'WobbleExample'}
          onPress={() => {
            navigation.navigate('WobbleExample');
          }}
        />
      </View>
      <View style={{ padding: 15 }}>
        <Button
          title={'HandlingGesture'}
          onPress={() => {
            navigation.navigate('HandlingGesture');
          }}
        />
      </View>
      <View style={{ padding: 15 }}>
        <Button
          title={'HandlingContinuous'}
          onPress={() => {
            navigation.navigate('HandlingContinuous');
          }}
        />
      </View>
      <View style={{ padding: 15 }}>
        <Button
          title={'InvertedFlatListExample'}
          onPress={() => {
            navigation.navigate('InvertedFlatListExample');
          }}
        />
      </View>
      <View style={{ padding: 15 }}>
        <Button
          title={'Slider'}
          onPress={() => {
            navigation.navigate('Slider');
          }}
        />
      </View>
      <View style={{ padding: 15 }}>
        <Button
          title={'Switch'}
          onPress={() => {
            navigation.navigate('Switch');
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Example;
