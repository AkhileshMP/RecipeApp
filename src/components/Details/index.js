import * as React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  FlatList, 
  Image,
  ScrollView
} from 'react-native';

import { useSelector } from 'react-redux';
import { Images, Icons, Colors } from './../../common';
import { Recipe } from './../../components'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Carousel from 'react-native-snap-carousel';

import styles from './styles';

const Details = ({goBack}) => {

  const recipe = useSelector((state) => state.user.selectedRecipe);

  const setView = (item) => {
    return(
      <View style={[styles.rowView, {marginVertical: 5}]}>
        <View style={styles.circleView} />
        <Text style={[styles.txtView, styles.ingrView]} numberOfLines={5}>{item}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}>
      {recipe != null && (
        <View>
          <Image source={recipe.image} style={styles.image} />
          <Text style={[styles.header, {textAlign: 'center'}]}>{recipe.title}</Text>
          <Text style={styles.title}>{'Ingredients'}</Text>
          {recipe.ingredients.map(item => (setView(item)))}
          <Text style={styles.title}>{'Instructions'}</Text>
          {recipe.steps.map(item => (setView(item)))}
        </View>
        
      )}
      <View style={styles.bottomView}/>
      </ScrollView>
    </View>
  );
}

export default Details;