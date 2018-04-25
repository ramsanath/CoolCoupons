import CouponRow from '../../components/row/index';
import React, {Component} from 'react';
import ListLoader from "../../components/loaders/list-loader";
import SmallImageCard from '../../components/card/index';
import SquareCardLoader from "../../components/loaders/square-card-loader";
import {Text, View, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import styles from './styles';
import {textStyles} from '../../theme/theme';
import {connect} from "react-redux";
import {fetchCoupons, fetchShops, fetchCategories} from "../../redux/actions/home";


class Home extends Component {

    constructor(props) {
        super(props);
        this._renderCouponRow = this._renderCouponRow.bind(this);
    }

    async componentDidMount() {
        this.props.dispatch(fetchCoupons());
        this.props.dispatch(fetchShops());
        this.props.dispatch(fetchCategories());
    }

    _renderCard({item}) {
        const onPress = () => undefined;
        const image = item.image ? {uri: item.image} : require('../../../assets/images/category_placeholder.png');
        return (
            <SmallImageCard
                key={item.id}
                title={item.name}
                image={image}
                onPress={onPress}/>
        );
    }

    _renderCouponRow({item}) {
        const onPress = () => {
            const {navigate} = this.props.navigation;
            navigate('CouponScreen', {coupon: item});
        };
        const image = item.shop.image ? {uri: item.shop.image} : require('../../../assets/images/shop_placeholder.png');
        return (
            <CouponRow
                key={item.id}
                title={item.name}
                shop={item.shop.name}
                desc={item.description}
                image={image}
                onPress={onPress}/>
        );
    }

    render() {
        return (
            <View style={styles.outerContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.shopsContainer}>
                        <View style={styles.shopsTextContainer}>
                            <Text style={textStyles.headline}>Browse by shops</Text>
                            <TouchableOpacity>
                                <Text style={[textStyles.subhead, styles.viewAllText]}>View all</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.cardContainer]}>
                            {
                                this.props.loadingShops ?
                                    <SquareCardLoader n={3}/> :
                                    <FlatList
                                        horizontal
                                        data={this.props.shops}
                                        renderItem={this._renderCard}
                                        keyExtractor={(item) => item.id.toString()}
                                        showsHorizontalScrollIndicator={false}/>
                            }
                        </View>
                    </View>

                    <View style={styles.shopsContainer}>
                        <View style={styles.shopsTextContainer}>
                            <Text style={textStyles.headline}>Browse by category</Text>
                            <TouchableOpacity>
                                <Text style={[textStyles.subhead, styles.viewAllText]}>View all</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.cardContainer]}>
                            {
                                this.props.loadingShops ?
                                    <SquareCardLoader n={3}/> :
                                    <FlatList
                                        horizontal
                                        data={this.props.categories}
                                        renderItem={this._renderCard}
                                        keyExtractor={(item) => item.id.toString()}
                                        showsHorizontalScrollIndicator={false}/>
                            }
                        </View>
                    </View>

                    <View style={styles.shopsContainer}>
                        <View style={styles.shopsTextContainer}>
                            <Text style={[textStyles.headline]}>Best Offers</Text>
                            <TouchableOpacity>
                                <Text style={[textStyles.subhead, styles.viewAllText]}>View all</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.cardContainer]}>
                            {
                                this.props.loadingCoupons ?
                                    <ListLoader n={3} /> :
                                    <FlatList
                                        data={this.props.coupons}
                                        renderItem={this._renderCouponRow}
                                        keyExtractor={(item) => item.id.toString()}
                                        showsHorizontalScrollIndicator={false}/>
                            }
                        </View>
                    </View>

                </ScrollView>
            </View>
        );
    }
}

function mapStateToProps(state) {
    const {home} = state;
    return {
        coupons: home.coupons,
        loadingCoupons: home.loadingCoupons,
        errorCoupons: home.errorCoupons,

        shops: home.shops,
        loadingShops: home.loadingShops,
        errorShops: home.errorShops,

        categories: home.categories,
        loadingCategories: home.loadingCategories,
        errorCategories: home.errorCategories,
    }
}

export default connect(mapStateToProps)(Home);
