import React from 'react';
import {Text} from 'react-native';

import Style from '../styles/stylesheet';

export default class ListItem extends React.Component{

    render(){
        return(
            
            <Text style={Style.item} value={this.props.itemFound}>{this.props.itemFound}</Text>
        )
    }
}   