import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';

import Style from '../styles/stylesheet';
import ListItem from '../components/listItem'


export default class MyListView extends React.Component{

    static navigationOptions = {
        title: 'My List',
    };

    constructor(props){
        super(props)
        this.state = {
            listElement : '',
            placeholder : 'Add a gift',
            arrayList : ['bike','diamonds','candies','Ferrari']
        }
    }
    render(){
        return(
            <View style={Style.container}>
                <Text style={Style.h1}>Ma Liste</Text>
                <TextInput
                 style={Style.input}
                 onChangeText={listElement => this.setState({ listElement })}
                 value={this.state.listElement}
                 placeholder={this.state.placeholder}
                 />
                {
                    this.state.arrayList.map(item => {
                        return <ListItem key={item} itemFound={item}/>
                    })
                }
            </View>
            

        )
    }
}