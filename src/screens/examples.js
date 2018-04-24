import React, { Component } from 'react';
import { View, Text, ScrollView, ToastAndroid } from 'react-native';
import SmallImageCard from '../components/card/index';
import Row from '../components/row/index';
import ButtonSwitchIcon from '../components/button-switch-icon/index';
import CardView from '../components/card-view/index';
import Voter from '../components/voter/index';
import SwitchIcon from '../components/switch-icon/index';
import CardList from '../components/card-list/index';
import CouponHeaderCard from '../components/coupon-header-card/index';


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
                <View style={{ flex: 1, flexDirection: 'column', }}>
                    <CouponHeaderCard
                        store='Dominos'
                        category='Food and Dining'
                        image={require('../../assets/images/dominos.png')} />
                    <SmallImageCard title={'Dominos'} image={require('../../assets/images/dominos.png')} />
                    <Row
                        image={require('../../assets/images/dominos.png')}
                        title={'Quattro Formagatti'}
                        subtitle={'Dominos'}
                        desc={'Flat 50% off on all Quattro Formagatti pizzas for a limited time!'} />
                    <ButtonSwitchIcon
                        size={100}
                        color=''
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
