import React, {Component} from 'react';
import {Image, View, Text} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import styles from './styles'
import {textStyles} from '../../theme/theme';
import {getHuman, getMaterial} from "../../commons/helper";
import {isIos} from "../../commons/util";


/**
 *  A simple card component that shows an title and image.
 *  Available props: image, title, onPress
 *
 *  Info: The card is encapsulated by Touchable from 'react-native-platform-touchable'
 *  which uses TouchableNativeFeedback in Android and TouchableOpacity in iOS.
 *
 *  Note: Should set the dimensions of the card dynamically based on the screen size
 *          and the image inside the card respectively.
 */
class SmallImageCard extends Component {

    constructor(props) {
        super(props);
    }

    /**
     * A method to truncate text that is longer then 10 characters
     * @param {*} text
     *
     * Warn: Should avoid this and find a smarter solution
     */
    _truncate(text) {
        if (typeof text != 'string') return;
        if (text.length <= 10) return text;
        let newText = text.substr(0, 10);
        newText += '..';
        return newText;
    }

    render() {

        return (
            <Touchable
                style={[
                    styles.outerContainer,
                    this.props.style
                ]}
                onPress={this.props.onPress}>
                <View style={styles.innerContainer} pointerEvents='box-only'>
                    <View style={styles.imageContainer}>
                        <Image
                            resizeMode="contain"
                            style={styles.image}
                            source={this.props.image}/>
                    </View>
                    <View styleName="vertical" style={styles.textContainer}>
                        <Text style={[styles.title]}>{this.props.title}</Text>
                    </View>
                </View>
            </Touchable>
        );
    }
}

export default SmallImageCard;
