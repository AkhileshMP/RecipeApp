import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useCallback, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Images, Icons, Colors } from './../../common';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { actions } from './../../redux/UserRedux';

import styles from './styles';

const Recipe = ({inFavourites, item, gotoDetails, isHorizontal, onUpdate}) => {

    const dispatch = useDispatch();

    const [isFavourite, setIsFav] = useState(false)

    const list = useSelector((state) => state.user.favourites);

    const removeFromFav = useCallback((id, list) => {
        dispatch(actions.removeFromFav(id, list));
    }, [dispatch]);

    const addToFav = useCallback((list) => {
        dispatch(actions.addToFav(list));
    }, [dispatch]);

    const selectRecipe = useCallback((value) => {
        dispatch(actions.selectRecipe(value));
    }, [dispatch]);

    const updateFavourites = async() => {
        if(inFavourites == true){
            await removeFromFav(item.id, list)
        } else {
            if(isHorizontal == true){
                onUpdate()
            } else {
                if(list.some(itm => (itm.id == item.id)) == true){
                    await removeFromFav(item.id, list)
                    setIsFav(false)
                } else {
                    let arr = []
                    arr.push(item)
                    arr = [
                        ...list,
                        ...arr
                    ]
                    await addToFav(arr)
                    setIsFav(true)
                }
            }
        }
    }

    const onGoDetails = async () => {
        await selectRecipe(item);
        gotoDetails();
    }

    return(
        <View style={[styles.recipeItem, isHorizontal == true && styles.horizontalView]}>
            <TouchableOpacity style={[styles.recipeItemView, isHorizontal == true && styles.horizontalView]}
            onPress={ onGoDetails }>
                <Image source={Images.image1} style={styles.image} />
                <View style={[styles.rowView, {marginTop: 8}]}>
                    <Text style={styles.title}>{item.title}</Text>
                    <TouchableOpacity style={[styles.rightView, styles.centerView, {paddingVertical: 5, paddingLeft: 5}]}
                    onPress={updateFavourites}>
                        {inFavourites == true ? (
                            <Icon name={Icons.MaterialCommunityIcons.Delete} size={22} color={Colors.red} />
                        ) : (
                            <>
                            {isHorizontal == true ? (
                                <Icon name={Icons.MaterialCommunityIcons.Pencil} size={22} color={Colors.black} />
                            ) : (
                                <Icon name={list.some(itm => (itm.id == item.id)) == true ? Icons.MaterialCommunityIcons.Heart : Icons.MaterialCommunityIcons.HeartOutLine} size={22} color={Colors.red} />
                            )}
                            </>
                            
                        )}
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </View>
    )

}

export default Recipe;