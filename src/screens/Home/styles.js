import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  childContainer: {
    flex: 1,
    paddingTop: 100,
  },
  upSignal: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
  },
  downSignal: {},
  leftRightSignalCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
});
export default styles;
