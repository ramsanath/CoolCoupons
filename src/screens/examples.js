import React, {Component} from 'react';
import {View, Text, ScrollView, ToastAndroid} from 'react-native';
import SmallImageCard from '../components/card/index';
import CouponRow from '../components/row/index';
import ButtonSwitchIcon from '../components/button-switch-icon/index';
import CardView from '../components/card-view/index';
import Voter from '../components/voter/index';
import SwitchIcon from '../components/switch-icon/index';
import CardList from '../components/card-list/index';
import CouponHeaderCard from '../components/coupon-header-card/index';
import SquareCardLoader from "../components/loaders/square-card-loader";
import BottomNavigation, {Tab} from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons'


const listData = [
    'Get flat 33% off',
    'Max discount is 100 per order',
    'Valid for new users only',
    'Available all across India',
    'Can be used upto 5 times per user'
];


class Examples extends Component {

    callbacks = {
        onPositiveSelected: () => {
            this.setState((state) => ({pCount: state.pCount + 1}))
        },
        onPositiveUnselected: () => {
            this.setState((state) => ({pCount: state.pCount - 1}))
        },
        onNegativeSelected: () => {
            this.setState((state) => ({nCount: state.nCount + 1}))
        },
        onNegativeUnselected: () => {
            this.setState((state) => ({nCount: state.nCount - 1}))
        },
    };

    constructor() {
        super();
        this.state = {
            pCount: 192,
            nCount: 34
        };
        this.callbacks = this.callbacks;
    }

    render() {
        return (
            <ScrollView>
                <View style={{flex: 1, flexDirection: 'column',}}>

                    <BottomNavigation
                        labelColor="white"
                        rippleColor="white"
                        style={{
                            height: 56,
                            elevation: 8,
                            // position: 'absolute',
                            // left: 0,
                            // bottom: 0,
                            // right: 0
                        }}
                        onTabChange={newTabIndex => console.log(`New Tab at position ${newTabIndex}`)}>
                        <Tab
                            barBackgroundColor="#37474F"
                            label="Movies & TV"
                            icon={<Icon size={24} color="white" name="tv"/>}
                        />
                        <Tab
                            barBackgroundColor="#00796B"
                            label="Music"
                            icon={<Icon size={24} color="white" name="music-note"/>}
                        />
                        <Tab
                            barBackgroundColor="#5D4037"
                            label="Books"
                            icon={<Icon size={24} color="white" name="book"/>}
                        />
                        <Tab
                            barBackgroundColor="#3E2723"
                            label="Newsstand"
                            icon={<Icon size={24} color="white" name="home"/>}
                        />
                    </BottomNavigation>

                    <SquareCardLoader n={3}/>
                    <CouponHeaderCard
                        store='Dominos'
                        category='Food and Dining'
                        image={require('../../assets/images/dominos.png')}/>
                    <SmallImageCard title={'Dominos'} image={require('../../assets/images/dominos.png')}/>
                    <CouponRow
                        image={require('../../assets/images/dominos.png')}
                        desc={'Flat 50% off on all Quattro Formagatti pizzas for a limited time!'}
                        title={'Dominos'}
                        shop={''}/>
                    <ButtonSwitchIcon
                        size={100}
                        color=''
                        background={'white'}
                        icon='thumbs-up'
                        onEnable={() => ToastAndroid.show('Enabled', ToastAndroid.SHORT)}
                        onDisable={() => ToastAndroid.show('Disabled', ToastAndroid.SHORT)}/>
                    <Voter data={this.state} callbacks={this.callbacks}/>
                    <CardList
                        title='Quattro Formagatti Burst'
                        data={listData}/>
                </View>
            </ScrollView>
        );
    }
}

export default Examples;
