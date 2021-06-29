import React, { useState } from 'react'
import { Text, TouchableOpacity, } from 'react-native'
import styles from './styles'

const PrimaryButton = ({ title, style, onPress }) => {

  return (
    <>
      <TouchableOpacity style={[styles.btn, style]} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

export default PrimaryButton