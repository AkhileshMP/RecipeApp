import * as React from 'react';
import {useState, useEffect} from 'react';
import {
  Text,
  View,
  FlatList
} from 'react-native';
import { useSelector } from 'react-redux';
import { Recipe } from './../../components'
import styles from './styles';


const Favourites = ({goBack, gotoDetails}) => {

  const [addfav, setFav] = useState(false)

  const favouritesList = useSelector((state) => state.user.favourites);

  useEffect(() => {
    setFav(true)
  }, [favouritesList])
  
  const renderRecipeItem = ({ item }) => (
    <Recipe 
    item={item}
    inFavourites={true}
    gotoDetails={gotoDetails}
    isHorizontal={false}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>All Recipes</Text>
      <FlatList
        data={favouritesList}
        renderItem={renderRecipeItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
}
export default Favourites; 
