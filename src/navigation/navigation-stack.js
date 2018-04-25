import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';
import Home from '../screens/home';
import CouponScreen from '../screens/coupon-screen';
import {NavigationComponent} from 'react-native-material-bottom-navigation';
import Ionicons from "react-native-vector-icons/Ionicons";
import {getIconNameForPlatform} from "../commons/helper";

function getTabBarIcon(routeName, focused, tintColor) {
    let iconName;
    if (routeName == 'Home') {
        iconName = getIconNameForPlatform('home', focused);
    } else if (routeName == 'Coupon') {
        iconName = getIconNameForPlatform('alarm', focused);
    }
    return <Ionicons name={iconName} size={25} color={focused ? 'white' : 'lightgrey'}/>;
}


const HomeNavigator = StackNavigator({
    HomeScreen: {
        screen: Home,
        navigationOptions: {
            title: 'Home'
        }
    },
    CouponScreen: {
        screen: CouponScreen,
        navigationOptions: {
            title: 'Coupon',
            tabBarVisible: false
        }
    }
});

export default AppNavigator = TabNavigator(
    {
        Home: {
            screen: HomeNavigator
        }
    },
    {
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, tintColor}) => {
                const {routeName} = navigation.state;
                return getTabBarIcon(routeName, focused, tintColor);
            }
        }),

        tabBarComponent: NavigationComponent,
        tabBarPosition: 'bottom',
        order: ['Home'],
        animationEnabled: true,
        swipeEnabled: false,
        tabBarOptions: {
            bottomNavigationOptions: {
                labelColor: 'white',
                rippleColor: 'white',
                tabs: {
                    Home: {
                        barBackgroundColor: '#37474F'
                    }
                }
            }
        }
    });