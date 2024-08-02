import { StyleSheet, Platform } from 'react-native';
import {Constants, Colors} from './../../common';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
      },
      header: {
        fontSize: 18,
        fontFamily: Constants.fontFamilyBold,
        fontWeight: 'bold',
        marginVertical: 10,
      },
})