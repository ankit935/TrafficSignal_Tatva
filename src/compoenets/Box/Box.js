import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

export default function Box({boxTitle, bgColor, onPress, style}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.boxContainer, {backgroundColor: bgColor, style}]}>
      <Text>{boxTitle}</Text>
    </TouchableOpacity>
  );
}
