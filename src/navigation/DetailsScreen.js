import * as React from "react";
import { Details } from '../components'

const DetailsScreen = ({navigation}) => {
    return(
        <Details
        navigation={navigation}
        goBack={()=> navigation.goBack()}
        />
    )
}

export default DetailsScreen;