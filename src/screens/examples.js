import React, { Component } from 'react';
import { View, Text, StyleSheet, ToastAndroid } from 'react-native';
import Card from '../components/card/card';
import Row from '../components/row/row';
import ButtonSwitchIcon from '../components/button-switch-icon/button-switch-icon';
import CardView from '../components/card-view/card-view';
import Voter from '../components/voter/voter';
import SwitchIcon from '../components/switch-icon/switch-icon';
import { Title } from '@shoutem/ui';

function dummy() { }

class Examples extends Component {

    constructor() {
        super();
        this.state = {
            pCount: 192,
            nCount: 34
        };
        this.callbacks = this.callbacks;
    }

    callbacks = {
        onPositiveSelected: () => {
            this.setState((state) => ({ pCount: state.pCount + 1 }))
        },
        onPositiveUnselected: () => {
            this.setState((state) => ({ pCount: state.pCount - 1 }))
        },
        onNegativeSelected: () => {
            this.setState((state) => ({ nCount: state.nCount + 1 }))
        },
        onNegativeUnselected: () => {
            this.setState((state) => ({ nCount: state.nCount - 1 }))
        },
    };

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                <Card title={'Dominos'} image={require('../dominos.png')} />
                <Row
                    image={require('../dominos.png')}
                    title={'Quattro Formagatti'}
                    subtitle={'Dominos'}
                    desc={'Flat 50% off on all Quattro Formagatti pizzas for a limited time!'} />
                <ButtonSwitchIcon
                    size={100}
                    background={'white'}
                    icon='thumbs-up'
                    onEnable={() => ToastAndroid.show('Enabled', ToastAndroid.SHORT)}
                    onDisable={() => ToastAndroid.show('Disabled', ToastAndroid.SHORT)} />
                <Voter data={this.state} callbacks={this.callbacks} />
            </View>
        );
    }
}

export default Examples;
