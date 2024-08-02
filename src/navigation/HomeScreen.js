import * as React from "react";
import { Home } from './../components'

const HomeScreen = ({navigation}) => {
    return(
        <Home
        navigation={navigation}
        gotoDetails={()=>navigation.navigate('Details')}
        />
    )
}

export default HomeScreen;