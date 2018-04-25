import React, {Component} from 'react';
import {View} from 'react-native';
import Touchable from 'react-native-platform-touchable';


class FullScreenButton extends Component {

    render() {
        return (
            <Touchable style={styles.outerContainer} >
                <View style={[styles.innerContainer, this.props.style]} >
                    {this.props.children}
                </View>
            </Touchable>
        )
    }

}

const styles = {
    outerContainer: {
    },
    innerContainer: {
        alignItems: 'center',
        alignContent: 'center'
    }
};

export default FullScreenButton;