import React, { Component } from 'react';
import { View, TouchableNativeFeedback } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import SwitchIcon from '../switch-icon/index';
import { safeCall } from '../../misc/util';


/**
 * A component that shows an icon inside a circular view
 * that can be used as a switch
 * 
 * Available props:
 * icon - (string) - name of the icon to render
 * size - (num) - size of the switch
 * color - (string) - color of the icon when in enabled state.
 * onEnable - (fn) callback on the event of enabling
 * onDisable - (fn) callback on the event of disabling
 * background - (string) background color of the switch
 * enabled - (bool) A flag to indicate wheather the switch should be initialised as enabled
 * 
 * Info: The size of the icon inside the switch is 70% of the size 
 *          given by the user via this.props.size
 * 
 */
class ButtonSwitchIcon extends Component {

    constructor(props) {
        super(props);
        this._getColorForIcon = this._getColorForIcon.bind(this);
        this._onPressed = this._onPressed.bind(this);
        this.state = { enabled: props.enabled };
        this.defaultStyle = {
            width: this.props.size,
            height: this.props.size,
            backgroundColor: this.props.background || 'white'
        };
    }

    /**
     * Gives the color for the icon based on the enabled flag
     * Returns the color specified by the user if enabled else grey
     * If no color is specified by the user then the default color is used
     * 
     * Note: The default color is hard-coded as 'maroon' should be modified to 
     *          be more dynamic (example from the app theme)
     */
    _getColorForIcon() {
        const color = this.props.color ? this.props.color : 'maroon';
        const currentColor = this.state.enabled ? color : 'grey';
        return currentColor;
    }

    /**
     * Switches the enabled flag in the state
     * 
     * Info: The enabled flag is passed as the prop to the component
     * Info: Returns the new switched flag for internal use.
     */
    _switchEnabledFlag() {
        const newEnabledFlag = !this.state.enabled;
        this.setState((state) => ({ enabled: newEnabledFlag }));
        return newEnabledFlag;
    }

    /**
     * This function has two roles
     * 1) switch the enabled flag 
     * 2) call the appropriate callbacks provided by the user based on the switched flag.
     * 
     * Info: The callbacks are provided as props to the component
     * Info: enable callback prop = onEnable | disable callback prop = onDisable
     */
    _onPressed() {
        const enabledFlag = this._switchEnabledFlag();
        enabledFlag ?
            safeCall(this.props.onEnable) :
            safeCall(this.props.onDisable)
    }

    render() {
        const color = this._getColorForIcon();
        const iconSize = this.props.size / 1.5;
        return (
            <View style={[
                styles.outerContainer,
                this.defaultStyle,
                this.props.style
            ]}>
                <Touchable
                    background={TouchableNativeFeedback.Ripple('grey', true)}
                    style={styles.circleButton}
                    onPress={this._onPressed}>
                    <View pointerEvents='box-only'>
                        <Icon name={this.props.icon} size={iconSize} color={color} />
                    </View>
                </Touchable>
            </View>
        );
    }
}

export default ButtonSwitchIcon;
