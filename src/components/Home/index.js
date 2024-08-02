import * as React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  FlatList, 
  Image,
} from 'react-native';

import { useSelector } from 'react-redux';
import { Constants } from './../../common';
import { Recipe } from './../../components'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//import Carousel from 'react-native-reanimated-carousel';
import Carousel from 'react-native-snap-carousel';

import styles from './styles';

const Home = ({gotoDetails}) => {

  const recipeList = useSelector((state) => state.user.recipe);
  
  const renderRecipeItem = ({ item }) => (
    <Recipe 
    item={item}
    inFavourites={false}
    gotoDetails={gotoDetails}
    isHorizontal={false}
    />
  );

  const renderCarouselItem = ({ item }) => {

    return(
    <View style={[styles.carouselItem, {height: 250 + ((recipeList.length - 4) * 20)}]}>
      <Image source={item.image} style={styles.carouselImage} />
      <Text style={styles.carouselTitle}>{item.title}</Text>
    </View>
  )};
  return (
    <View style={styles.container}>
      
      <Text style={styles.header}>Featured Recipes</Text>
      
      <Carousel
        data={recipeList}
        autoplay
        loop
        renderItem={renderCarouselItem}
        sliderWidth={Constants.width}
        itemWidth={Constants.width/1.35}
        layout={'default'}
        autoplayDelay={1000}
      />
      <Text style={styles.header}>All Recipes</Text>
      <FlatList
        data={recipeList}
        renderItem={renderRecipeItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
}

export default Home;