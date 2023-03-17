import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import * as Titles from '../../contants';
import * as Images from '../../assests/Images';
export default function Header({onSettingPress}) {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{Titles.APP_TITLE}</Text>
      <TouchableOpacity onPress={onSettingPress}>
        <Image style={styles.headerIcon} source={Images.SETTINGS} />
      </TouchableOpacity>
    </View>
  );
}
