import React, {Component} from 'react';
import { ScrollView, View, Text} from 'react-native';
import CardList from '../../components/card-list/index';
import Voter from '../../components/voter/index';
import CouponHeaderCard from '../../components/coupon-header-card';
import FullScreenButton from '../../components/full-screen-button/index';
import {textStyles} from "../../theme/theme";
import dim from "../../values/dim";
import {AppRepo} from '../../data/repo';


class CouponScreen extends Component {

    constructor(props) {
        super(props);
        this.params = props.navigation.state.params;
        this.state = {shop: {}};
    }

    async componentDidMount() {
        const shop = await AppRepo.getShop(this.params.coupon.shop.id);
        this.setState({shop: shop});
    }

    render() {
        return (
            <View style={styles.outerContainer}>
                <ScrollView>
                    <View style={styles.container} >
                        <CouponHeaderCard
                            store={this.state.shop.name}
                            category={'TODO'}
                            image={{uri: this.state.shop.image}}/>

                        <CardList data={[
                        ]} title='Quattro Formagatti Burst at 50% off!'/>
                            this.params.coupon.description

                        <Voter data={{}}/>
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
