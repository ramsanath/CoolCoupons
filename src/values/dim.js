import {Dimensions} from 'react-native';
import {percent} from "../commons/util";

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;


const sqrCardDim = percent(28).of(deviceWidth) > 105 ? 105 : percent(28).of(deviceWidth);
const listItemHeight = percent(16).of(deviceHeight) > 110 ? 110 : percent(15).of(deviceHeight);

export default dim = {
    listItemWidth: undefined,
    listItemHeight: listItemHeight,
    listItemDefMarginH: 5,
    listItemDefMarginV: 5,
    listItemDefPadH: 5,
    listItemDefPadV: 5,

    sqrCardDim: sqrCardDim,

    defaultMargin: 5,
    defaultPadding: 5,

    defaultBorderRadius: 3,

    defaultElevation: 2,
    defaultShadowOpacity: 0.2,
    defaultShadowOffset: { height: 0, widget: 0 }
};