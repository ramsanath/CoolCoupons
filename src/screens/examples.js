import React, { Component } from 'react';
import { View, Text, ScrollView, ToastAndroid } from 'react-native';
import Card from '../components/card/card';
import Row from '../components/row/row';
import ButtonSwitchIcon from '../components/button-switch-icon/button-switch-icon';
import CardView from '../components/card-view/card-view';
import Voter from '../components/voter/voter';
import SwitchIcon from '../components/switch-icon/switch-icon';
import { Title } from '@shoutem/ui';
import CardList from '../components/card-list/card-list';

const listData = [
    'Get flat 33% off',
    'Max discount is 100 per order',
    'Valid for new users only',
    'Available all across India',
    'Can be used upto 5 times per user'
];

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
            <ScrollView>
                <View style={
                    {
                        flex: 1,
                        flexDirection: 'column',
                        // alignContent: 'center',
                        // justifyContent: 'center',
                    }}>
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
                    <CardList
                        title='Quattro Formagatti Burst'
                        data={listData} />
                </View>
            </ScrollView>
        );
    }
}

export default Examples;
