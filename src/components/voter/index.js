import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CardView from '../card-view/index';
import Touchable from 'react-native-platform-touchable';
import Icon from 'react-native-vector-icons/FontAwesome';
import ButtonSwitchIcon from '../button-switch-icon/index';
import { safeCall } from '../../commons/util';
import styles from './styles';

//  Default colors for positive and negative vote icons
const pColor = 'green';
const nColor = 'red';
const disabledColor = 'grey';

/**
 * A component to record positive and negative votes.
 * 
 * Info: this.state.vote is used to determine the currently choosen vote
 *          '+' = positive vote
 *          '-' = negative vote
 *          '' = no vote choosen
 * 
 * Info: The component has four callbacks contained in the props.callbacks object 
 *          onPositiveSelected, onPositiveUnselected
 *          onNegativeSelected, onNegativeUnselected
 *          
 * onPositiveSelected and onNegativeUnselected are mutually exclusive and vice-versa.
 * 
 */
class Voter extends Component {

    constructor(props) {
        super(props);
        this._onNegativePressed = this._onNegativePressed.bind(this);
        this._onPositivePressed = this._onPositivePressed.bind(this);
        this._getCurrentNColor = this._getCurrentNColor.bind(this);
        this._getCurrentPColor = this._getCurrentPColor.bind(this);
        this.state = { vote: '+' };
    }

    /**
     * Handles the press events on the positive vote button
     * 
     * If no vote was submitted then add positive,
     * If vote was already + then remove it,
     * If vote was - then remove negative and add positive
     * 
     * Update the state accordingly.
     */
    _onPositivePressed() {
        const currentVote = this.state.vote;
        if (this.props.callbacks == undefined) return;
        const {
            onPositiveSelected,
            onPositiveUnselected,
            onNegativeUnselected
        } = this.props.callbacks;
        switch (currentVote) {
            case '':
                safeCall(onPositiveSelected);
                this.setState((state) => ({ vote: '+' }));
                break;
            case '+':
                safeCall(onPositiveUnselected);
                this.setState((state) => ({ vote: '' }));
                break;
            case '-':
                safeCall(onPositiveSelected);
                safeCall(onNegativeUnselected);
                this.setState((state) => ({ vote: '+' }));
                break;
        }
    }

    /**
     * Handles the press events on the negative vote button
     * 
     * If no vote was submitted then add negative,
     * If vote was already - then remove it,
     * If vote was + then remove positive and add negative
     * 
     * Update the state accordingly.
     */
    _onNegativePressed() {
        if (this.props.callbacks == undefined) return;
        const {
            onPositiveUnselected,
            onNegativeUnselected,
            onNegativeSelected
        } = this.props.callbacks;
        const currentVote = this.state.vote;
        switch (currentVote) {
            case '':
                safeCall(onNegativeSelected);
                this.setState((state) => ({ vote: '-' }));
                break;
            case '-':
                safeCall(onNegativeUnselected);
                this.setState((state) => ({ vote: '' }));
                break;
            case '+':
                safeCall(onNegativeSelected);
                safeCall(onPositiveUnselected);
                this.setState((state) => ({ vote: '-' }));
                break;
        }
    }

    /**
     * Current color for the positive icon based on the current vote
     */
    _getCurrentPColor() {
        const { vote } = this.state
        return vote == '+' ?
            (this.props.pColor || pColor) : disabledColor
    }

    /**
     * Current color for the negative icon based on the current vote
     */
    _getCurrentNColor() {
        const { vote } = this.state
        return vote == '-' ?
            (this.props.nColor || nColor) : disabledColor
    }

    render() {
        const pColor = this._getCurrentPColor();
        const nColor = this._getCurrentNColor();

        return (
            <CardView style={styles.outerContainer}>
                <Touchable style={styles.voteContainer} onPress={this._onNegativePressed}>
                    <View pointerEvents='box-only' style={styles.vote} >
                        <Text> {this.props.data.nCount} </Text>
                        <Icon style={styles.icon} color={nColor} size={60} name='thumbs-down' />
                        <Text styleName='bold'>Sucks</Text>
                    </View>
                </Touchable>
                <Touchable style={styles.voteContainer} onPress={this._onPositivePressed}>
                    <View pointerEvents='box-only' style={styles.vote} >
                        <Text> {this.props.data.pCount} </Text>
                        <Icon style={styles.icon} color={pColor} size={60} name='thumbs-up' />
                        <Text styleName='bold'>Works</Text>
                    </View>
                </Touchable>
            </CardView>
        );
    }
}

export default Voter;
