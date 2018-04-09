import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Image, Title, Caption, Subtitle } from '@shoutem/ui';
import Touchable from 'react-native-platform-touchable';
import styles from './styles';

class Row extends Component {
    render() {
        return (
            <Touchable style={styles.outerContainer} onPress={this.props.onPress}>
                <View style={styles.innerContainer} pointerEvents='box-only'>
                    <View style={styles.imageContainer}>
                        <Image
                            styleName='small'
                            source={this.props.image} />
                    </View>
                    <View styleName="vertical" style={styles.textContainer}>
                        <Title style={styles.title} styleName='bold' >{this.props.title}</Title>
                        <Caption>{this.props.subtitle}</Caption>
                        <View style={styles.descContainer}>
                            <Subtitle>{this.props.desc}</Subtitle>
                        </View>
                    </View>

                </View>
            </Touchable>
        );
    }
}

export default Row;
