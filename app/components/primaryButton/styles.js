import { StyleSheet } from 'react-native'
import colors from '../../assets/colors'

export default StyleSheet.create({

  btn: {
    backgroundColor: colors.primaryButton,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '2%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.primaryButton,

  },
  title: {
    color: colors.background,
    fontSize: 20,
  },
})