import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import CardView from "../card-view";
import dim from "../../values/dim";
import theme from '../../theme/theme';


class SquareCardLoader extends Component {

    _renderNItems(n) {
        const items = [];
        for (let i = 0; i < n; i++) {
            items.push(
                <CardView
                    key={i}
                    style={{
                        width: dim.sqrCardDim,
                        height: dim.sqrCardDim,
                        margin: dim.defaultMargin,
                        borderRadius: dim.defaultBorderRadius,
                        backgroundColor: theme.primaryBgColor,
                    }}>
                </CardView>
            )
        }
        return items;
    }

    render() {
        const emptyCards = this._renderNItems(this.props.n);
        return (
            <ScrollView style={{
                paddingBottom: 5,
            }} horizontal>
                <View style={styles.itemContainer}>
                    {emptyCards}
                </View>
            </ScrollView>
        );
    }
}

const styles = {
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        margin: dim.defaultMargin
    }
};

export default SquareCardLoader;
