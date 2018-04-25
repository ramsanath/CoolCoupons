import React, { Component } from 'react';
import {View, Text} from 'react-native';
import CardView from '../card-view/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';


/**
 * A component that shows a title and a list of text
 * 
 * Available props: 
 * title - (string) title string
 * data - (array of string) items to show as list
 */
class CardList extends Component {

    constructor(props) {
        super(props);
        this.getListItems = this.getListItems.bind(this);
        this.listItemRenderer = this.listItemRenderer.bind(this);
    }

    /**
     * Gives a stylized text with a bullet
     * 
     * Info: Could be changed to display a user defined bullet style.
     * 
     * @param {*} item
     * @param {*} index 
     */
    listItemRenderer(item, index) {
        const bullet = this.props.bullet || 'circle';
        return (
            <View key={index} style={styles.listItemContainer}>
                <Icon size={6} style={styles.bullet} name={bullet} />
                <Text style={styles.listItemText}>{item}</Text>
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
                <Text style={styles.title}>{this.props.title}</Text>
                <View style={styles.listItemsContainer} >
                    {this.getListItems()}
                </View>
            </CardView>
        );
    }
}


export default CardList;
