import * as React from "react";
import { Favourites } from '../components'

const FavouritesScreen = ({navigation}) => {
    return(
        <Favourites
        navigation={navigation}
        goBack={()=> navigation.goBack()}
        gotoDetails={()=>navigation.navigate('Details')}
        />
    )
}

export default FavouritesScreen;