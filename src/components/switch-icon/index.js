import React, { Component } from 'react';
import { View, Text, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from '@shoutem/ui';
import { safeCall } from '../../misc/util';


/**
 * An Icon that can be used as a switch
 * 
 * Supported Props: 
 * color - color of the icon when the switch is enabled,
 * size,
 * enabled - flag to mention if the icon is initially enabled,
 * onEnable - function that is called when the switch is enabled,
 * onDisable - function that is called when the switch is disabled
 * 
 * Note: Should implement the enable disable animations.
 * 
 */
class SwitchIcon extends Component {

    constructor(props) {
        super(props);
        this._getColorForIcon = this._getColorForIcon.bind(this);
        this._onPressed = this._onPressed.bind(this);
        this.state = { enabled: props.enabled };
        this.defaultStyle = {
            height: props.size,
            width: props.size
        }
    }

    /**
     * Gives the color for the icon based on the enabled flag
     * Returns the color specified by the user if enabled else grey
     * If no color is specified by the user then the default color is used
     * 
     * Note: The default color is hard-coded as 'maroon' should be modified to 
     *          be more dynamic (could be recieved from the app theme)
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
        return (
            <TouchableOpacity style={styles.container} onPress={this._onPressed}>
                <Icon name={this.props.icon} size={this.props.size} color={color} />
            </TouchableOpacity>
        );
    }
}

const styles = {
    container: {
    },
};

export default SwitchIcon;
