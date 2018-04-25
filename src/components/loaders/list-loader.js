import React, {Component} from 'react';
import {View} from 'react-native';
import CardView from "../card-view";
import dim from "../../values/dim";


class ListLoader extends Component {

    _renderNItems(n) {
        const items = [];
        for (let i = 0; i < n; i++) {
            items.push(
                <CardView
                    key={i}
                    style={{
                        height: dim.listItemHeight,
                        marginHorizontal: dim.listItemDefMarginH,
                        marginVertical: dim.listItemDefMarginV,
                        borderRadius: dim.defaultBorderRadius,
                    }}>

                </CardView>
            )
        }
        return items;
    }

    render() {
        return (
            <View style={styles.itemContainer}>
                {this._renderNItems(this.props.n | 3)}
            </View>
        );
    }
}

const styles = {
    itemContainer: {
        marginVertical: 5
    }
};

export default ListLoader;
