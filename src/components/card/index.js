import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Image, Title } from '@shoutem/ui';
import Touchable from 'react-native-platform-touchable';
import styles from './styles'

/**
 *  A simple card component that shows an title and image.
 *  Available props: image, title, onPress
 * 
 *  Info: The card is encapsulated by Touchable from 'react-native-platform-touchable'
 *  which uses TouchableNativeFeedback in Android and TouchableOpacity in iOS.
 */
class Card extends Component {

    constructor(props) {
        super(props);
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
                            styleName='small'
                            source={this.props.image} />
                    </View>
                    <View styleName="vertical" style={styles.textContainer}>
                        <Title styleName='bold' >{this.props.title}</Title>
                    </View>
                </View>
            </Touchable>
        );
    }
}

export default Card;
