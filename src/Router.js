import React from "react";
import { View,} from 'react-native';
import Navigations from './navigation';

class Router extends React.PureComponent {
    constructor(props){
        super(props)
    }
    
    render(){        
        return(
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Navigations />
            </View>
        )
    }
}
export default Router;