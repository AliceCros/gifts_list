import React from 'react';
import {Text} from 'react-native';


export default class ListItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        return(
            
            <Text value={this.props.itemFound}>{this.props.itemFound}</Text>
        )
    }
}   