import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './style'
import commonStyles from '../../assets/styles'
import strings from '../../assets/string'
import PrimaryButton from '../../components/primaryButton/index'


const Menu = ({ onStartClick }) => {
  return (
    <View style={commonStyles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{strings.luckyNumber}</Text>
      </View>
      <View style={styles.content}>
        <PrimaryButton title={strings.startGame} style={styles.btn} onPress={onStartClick} />
      </View>
    </View>

  );
};

export default Menu;
