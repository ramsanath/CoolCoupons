import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import AppNavigator from "./src/navigation/navigation-stack";
import Examples from "./src/screens/examples";
import CouponScreen from "./src/screens/coupon-screen";


console.disableYellowBox = true;

export default class App extends Component {
    render() {
        return (
            //<CouponScreen/>
            <Provider store={store}>
                <AppNavigator/>
            </Provider>
             //<Examples/>
        )
    }
}