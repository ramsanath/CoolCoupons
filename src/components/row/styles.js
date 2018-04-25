import dim from '../../values/dim';
import theme from "../../theme/theme";

export default styles = {
    outerContainer: {
        width: dim.listItemWidth,
        height: dim.listItemHeight,
        paddingVertical: dim.listItemDefPadV,
        paddingHorizontal: dim.listItemDefPadH,
        flexDirection: 'row',
        marginHorizontal: dim.listItemDefMarginH,
        marginVertical: dim.listItemDefMarginV,
        borderRadius: dim.defaultBorderRadius,
        backgroundColor: theme.primaryBgColor,
        elevation: dim.defaultElevation,
        shadowOpacity: dim.defaultShadowOpacity,
        shadowColor: 'black',
        shadowOffset: dim.defaultShadowOffset,
    },
    innerContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    imageContainer: {
        flex: 1.5,
        flexDirection: 'row',
    },
    image: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: 'center',
    },
    textContainer: {
        flex: 6,
        flexDirection: 'column',
        marginLeft: 10,
    },
    title: {
        color: theme.primaryFontColor,
        marginTop: 5
    },
    descContainer: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 3,
        marginRight: 5,
    },
    store: {
        color: theme.primaryFontColorLight,
    },
    desc: {
        color: theme.secondaryFontColor
    }
}