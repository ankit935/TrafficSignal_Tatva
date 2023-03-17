import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import LottieView from 'lottie-react-native';
import Assests from '../../assests/Assests';
export default function Splash() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <LottieView
        style={{flex: 1}}
        autoplay
        loop
        source={Assests.lottieFiles.planePath}
        colorFilters={[{keypath: 'Plane', color: 'rgb(255, 100, 0)'}]}
      />
    </View>
  );
}
