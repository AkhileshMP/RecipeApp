import { StyleSheet } from 'react-native';
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
  image: {
    width: '100%',
    height: '20%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  title: {
    fontSize: 18,
    fontFamily: Constants.fontFamilyBold,
    marginVertical: 10,
    marginHorizontal: 10
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  circleView: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: Colors.black
  },
  txtView: {
    fontFamily: Constants.fontFamily,
    fontSize: 14,
    color: Colors.black,
    textAlign: 'justify'
  },
  ingrView: {
    flex: 1,
    marginHorizontal: 8
  },
  bottomView: {
    height: '100%', 
    marginBottom: 300
  }
})