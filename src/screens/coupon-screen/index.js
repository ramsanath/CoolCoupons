import React, {Component} from 'react';
import {ScrollView, View, Text} from 'react-native';
import CardList from '../../components/card-list/index';
import Voter from '../../components/voter/index';
import CouponHeaderCard from '../../components/coupon-header-card';
import FullScreenButton from '../../components/full-screen-button/index';
import {textStyles} from "../../theme/theme";
import dim from "../../values/dim";


class CouponScreen extends Component {

    constructor(props) {
        super(props);
        this.params = props.navigation.state.params;
        this.coupon = props.navigation.state.params.coupon;
        this.shop = props.navigation.state.params.coupon.shop;
    }

    render() {
        return (
            <View style={styles.outerContainer}>
                <ScrollView>
                    <View style={styles.container}>
                        <CouponHeaderCard
                            store={this.shop.name}
                            category={'TODO'}
                            image={{uri: this.shop.image}}/>

                        <CardList
                            title={this.coupon.name}
                            data={[
                                this.coupon.description
                            ]} />
                        <Voter data={{
                            pCount: this.coupon.upVoteCount,
                            nCount: this.coupon.downVoteCount
                        }}/>
                    </View>
                </ScrollView>
                <FullScreenButton style={styles.button}>
                    <Text style={[textStyles.title3, styles.buttonText]}>VIEW COUPON</Text>
                </FullScreenButton>
            </View>
        );
    }
}

const styles = {
    outerContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        paddingBottom: 15,
    },
    buttonContainer: {},
    button: {
        padding: dim.defaultPadding + 5,
        backgroundColor: '#5aa241',
    },
    buttonText: {
        fontWeight: 'bold'
    }
};

export default CouponScreen;
