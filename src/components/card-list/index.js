import React, { Component } from 'react';
import { View, ToastAndroid } from 'react-native';
import CardView from '../card-view/index';
import { Title, Text } from '@shoutem/ui';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';


class CardList extends Component {

    constructor(props) {
        super(props);
        this.getListItems = this.getListItems.bind(this);
        this.listItemRenderer = this.listItemRenderer.bind(this);
    }

    listItemRenderer(item, index) {
        const bullet = this.props.bullet || 'circle';
        return (
            <View key={index} style={styles.listItemContainer}>
                <Icon style={styles.bullet} name={bullet} />
                <Text style={styles.listItemText} styleName='multiline'>{item}</Text>
            </View>
        );
    }

    getListItems() {
        const data = this.props.data;
        const listItems = data.map(this.listItemRenderer);
        return listItems;
    }

    render() {
        return (
            <CardView style={styles.container}>
                <Title style={styles.title}>{this.props.title}</Title>
                <View style={styles.listItemsContainer} >
                    {this.getListItems()}
                </View>
            </CardView>
        );
    }
}


export default CardList;
