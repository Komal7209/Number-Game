import React, {Component} from 'react'
import{View, Text,} from 'react-native';
import  commonStyles from 'assets/styles'
import styles from './style'
import strings from 'assets/string'
import PrimaryButton from 'components/primaryButton/index'
import SecondaryButton from 'components/secondaryButton/index'

export default class Menu extends Component {

  // fn for start game button
  startGameBtn = () =>{
    this.prop.navigate.navigate('Game')
  }

  render(){
    return (
      <View style= {commonStyles.container}>
        <View style ={styles.header}>
        <Text style = {styles.title}>{strings.luckyNumber}</Text>
        </View>
        <View style = {styles.content}>
        <PrimaryButton title='Start Game' style = {styles.btn} onPress = {this.startGameBtn}/>
        <SecondaryButton title='Exit Game' style = {styles.btn} onPress = {()=>{}}/>

      </View>
      </View>
    )
  }
}