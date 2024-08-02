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
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputwrap: {
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.gray,
    marginBottom: 10
  },
  input: {
    color: Colors.black,
    height: 48,
    //backgroundColor: Colors.white,
    paddingHorizontal: 10,
    flex: 1,
    textAlign: "left",
    marginLeft: 5,
    fontFamily: Constants.fontFamily,
  },
  addView: {
    marginRight: 10, 
    height: 48, 
    width: 26
  },
  butnView: {
    height: 35,
    paddingHorizontal: 20,
    backgroundColor: Colors.gray,
    borderRadius: 20
  },
  centerView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightView: {
    position: 'absolute',
    right: 5
  },
  txtView: {
    fontFamily: Constants.fontFamily,
    fontSize: 14,
    color: Colors.black,
    textAlign: 'justify',
  },
  ingrView: {
    flex: 1,
    marginLeft: 5,
    marginRight: 40,
    color: Colors.black,
    
  },
  itemView: {
    marginVertical: 5, 
    marginLeft: 8
  }
})