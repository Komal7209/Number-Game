import { StyleSheet } from 'react-native'
import colors from '../../assets/colors'

const styles = StyleSheet.create({

  btn: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '2%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.primary,
    borderBottomWidth: 1.5,

  },
  title: {
    color: colors.background,
    fontSize: 20,
  },
})

export default styles;