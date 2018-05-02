import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import Style from '../styles/stylesheet';
import ListItem from '../components/listItem'


export default class MyListView extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            listElement : '',
            placeholder : 'Ajouter une idée cadeau',
            arrayList : ['cadeau 1','cadeau 2','cadeau 3','cadeau 4' ]
        }
    }
    render(){
        return(
            <View style={Style.container}>
                <Text>Ma Liste</Text>
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