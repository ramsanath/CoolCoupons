import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';


class CardView extends Component {
    render() {
        let props = this.props
        delete props.style;
        delete props.children;
        return (
            <View style={[styles.defaults, this.props.style, styles.needed]}>
                {this.props.children}
            </View>
        );
    }
}

export default CardView;
