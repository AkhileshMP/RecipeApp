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
  recipeItem: {
    flex: 1,
    margin: 8,
    marginBottom: 15,
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
  carouselItem: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    height: 250,
    padding: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  carouselImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  carouselTitle: {
    fontSize: 14,
    marginTop: 5,
    fontFamily: Constants.fontHeader,
    color: Colors.black

  },
  slider: {
    marginTop: 15,
    overflow: 'visible' // for custom animations
},
})