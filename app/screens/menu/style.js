import {StyleSheet} from 'react-native'
import colors from '../../assets/colors'

const styles= StyleSheet.create({

  header:{
    height:'25%',
    backgroundColor: colors.accent,
    alignItems:'flex-end',
    justifyContent:'flex-end',
  },
  title: {
    fontSize:60,
    color:colors.primary,
    fontWeight:'bold',
    marginRight:'2%',
  },

content:{
  flex:1,
  alignItems:'center',
  justifyContent:'center',
},

  btn:{
    width:'30%',
    marginVertical:'2%',
  }
})

export default styles