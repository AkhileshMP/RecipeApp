import * as React from "react";
import { AddRecipe } from '../components'

const AddRecipeScreen = ({navigation}) => {
    return(
        <AddRecipe
        navigation={navigation}
        gotoDetails={()=>navigation.navigate('Details')}
        goBack={()=> navigation.goBack()}
        />
    )
}

export default AddRecipeScreen;