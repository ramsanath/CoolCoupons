import dim from "../../values/dim";
import theme from "../../theme/theme";

export default styles = {
    outerContainer: {
        borderRadius: 100,
        margin: 3,
        elevation: dim.defaultElevation,
        backgroundColor: theme.primaryBgColor,
        shadowOpacity: dim.defaultShadowOpacity,
        shadowColor: theme.shadowColor,
        shadowOffset: dim.defaultShadowOffset,
    },
    circleButton: {
        flex: 1,
        backgroundColor: theme.primaryBgColor,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    }
};