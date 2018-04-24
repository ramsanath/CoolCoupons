import React, {Component} from 'react';
import {Image, View, Text} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import {textStyles} from '../../theme';
import styles from './styles';

/**
 * A list item component with a image, title and short description which is touchable
 *
 * Avaiable props:
 * image - (image) image to display
 * title - (string) title of the list item
 * desc - (string) short description.
 */
class Row extends Component {
    render() {
        return (
            <Touchable style={styles.outerContainer} onPress={this.props.onPress}>
                <View style={styles.innerContainer} pointerEvents='box-only'>
                    <View
                        style={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            source={this.props.image}/>
                    </View>
                    <View styleName="vertical" style={styles.textContainer}>
                        <Text style={[textStyles.headline, styles.title]} styleName='bold'>{this.props.title}</Text>
                        <Text style={[textStyles.caption1, styles.subtitle]}>{this.props.shop}</Text>
                        <View style={styles.descContainer}>
                            <Text style={[textStyles.subhead, styles.desc]}>{this.props.desc}</Text>
                        </View>
                    </View>
                </View>
            </Touchable>
        );
    }
}

export default Row;
