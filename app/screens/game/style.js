import { StyleSheet } from 'react-native';
import strings from '../../assets/string'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '30%',
    justifyContent: 'center',
    backgroundColor: strings.gameBackground,
  },
  numberContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: strings.gameBackground,
  },
  GridViewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    margin: 5,
    backgroundColor: strings.gameBoardBackground,
  },
  GridViewTextLayout: {
    fontSize: 20,
    color: strings.gameTextColor,
    padding: 10,
  },
});

export default styles;