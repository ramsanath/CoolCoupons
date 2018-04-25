import React, { Component } from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import CardView from '../card-view/index';
import ButtonSwitchIcon from '../button-switch-icon';
import dim from "../../values/dim";
import theme from "../../theme/theme";
import {isIos} from "../../commons/util";
import {getHuman, getMaterial} from "../../commons/helper";

/**
 * The top component in the coupons screen that shows info about
 * the shop name, the category of the coupon and a bell icon to subscribe
 * to that store's coupons.
 * 
 * Available props: 
 * title - (string) Title of the card (The store's name)
 * category - (string) category name of the coupon
 * image - (image) Logo of the store
 * onSub - (fn) function that will be called when sub switch enabled
 * onUnsub - (fn) function that will be called when sub switch disabled
 * subscribed - (bool) A flag to denote wheather the store is already subscribed
 * onCategoryPress - (fn) called when the category name is pressed
 * onStorePress - (fn) called when the store name is pressed
 * 
 */
class CouponHeaderCard extends Component {
    render() {

        const storeTextStyle = isIos() ? getHuman('title2') : getMaterial('title');
        const categoryTextStyle = isIos() ? getHuman('body') : getMaterial('title');

        return (
            <CardView style={styles.outerContainer} >
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={this.props.image} />
                </View>
                <View style={styles.textContainer}>
                    <TouchableOpacity onPress={this.props.onStorePress} >
                        <Text style={[storeTextStyle, styles.storeText]} >{this.props.store}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.props.onCategoryPress} >
                        <Text style={[categoryTextStyle, styles.categoryText]} >{this.props.category}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.subBtnContainer}>
                    <ButtonSwitchIcon
                        size={40}
                        enabled={this.props.subscribed}
                        onEnable={this.props.onSub}
                        onDisable={this.props.onUnsub}
                        color='maroon'
                        icon='bell' />
                </View>
            </CardView>
        );
    }
}

const styles = {
    outerContainer: {
        height: dim.listItemHeight,
        flexDirection: 'row',
        paddingVertical: 20,
        justifyContent: 'center',
        backgroundColor: theme.primaryBgColor
    },
    imageContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    image: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: 'center',
    },
    textContainer: {
        flex: 2,
        paddingLeft: 10,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    storeText: {
        paddingBottom: 3
    },
    categoryText: {
        color: theme.secondaryFontColor
    },
    subBtnContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
};

export default CouponHeaderCard;
