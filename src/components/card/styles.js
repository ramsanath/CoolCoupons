import dim from "../../values/dim";
import colors from "../../values/color";

export default styles = {
    outerContainer: {
        width: dim.sqrCardDim,
        height: dim.sqrCardDim,
        aspectRatio: 1,
        margin: dim.defaultMargin,
        padding: dim.defaultPadding + 3,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: colors.defaultBgColor,
        borderRadius: dim.defaultBorderRadius,
        elevation: dim.defaultElevation,
        shadowOpacity: dim.defaultShadowOpacity,
        shadowColor: 'black',
        shadowOffset: dim.defaultShadowOffset,
    },
    innerContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    imageContainer: {
        flex: 2,
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        width: undefined,
        height: undefined
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    title: {
        flex: 1,
        textAlign: 'center',
        color: '#2b2b2b',
    }
}