import React, { Component } from 'react';
import { View, Text, ScrollView, ToastAndroid } from 'react-native';
import Card from '../components/card/index';
import Row from '../components/row/index';
import ButtonSwitchIcon from '../components/button-switch-icon/index';
import CardView from '../components/card-view/index';
import Voter from '../components/voter/index';
import SwitchIcon from '../components/switch-icon/index';
import { Title } from '@shoutem/ui';
import CardList from '../components/card-list/index';
import SlideshowTest from '../components/image-slider/index';


const listData = [
    'Get flat 33% off',
    'Max discount is 100 per order',
    'Valid for new users only',
    'Available all across India',
    'Can be used upto 5 times per user'
];

const sliderData =
    [{
        url: 'https://www.remkes.com/wp-content/uploads/2016/04/printable-coupons.jpg',
    }, {
        url: 'https://www.101giftcertificatetemplates.com/wp-content/uploads/2015/12/coupon-template-6.jpg',
    }, {
        url: 'https://best4businesses.com/wp-content/uploads/2017/12/quill-coupons-office.jpg',
    }]

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
                    <SlideshowTest dataSource={sliderData} />
                    <Card title={'Dominos'} image={require('../dominos.png')} />
                    <Row
                        image={require('../dominos.png')}
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
