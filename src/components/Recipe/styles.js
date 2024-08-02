import { StyleSheet } from 'react-native';
import {Constants, Colors} from './../../common';

export default StyleSheet.create({
  recipeItem: {
    flex: 1,
    margin: 8,
    marginBottom: 15,
  },
  horizontalView: {
    height: 190,
    width: 190
  },
  recipeItemView: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: Colors.white,
    paddingBottom: 8
  },
  image: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  title: {
    fontSize: 14,
    fontFamily: Constants.fontFamilyBold,
    color: Colors.black,
    marginLeft: 5
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rightView: {
    position: 'absolute',
    right: 5,
  },
  centerView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
})