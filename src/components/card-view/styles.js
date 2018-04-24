import dim from '../../values/dim';
import colors from '../../values/color';

export default styles = {
    defaults: {
        margin: dim.defaultMargin,
        padding: dim.defaultPadding,
        borderRadius: dim.defaultBorderRadius,
        backgroundColor: colors.defaultBgColor,
        elevation: dim.defaultElevation,
        shadowOpacity: dim.defaultShadowOpacity,
        shadowOffset: dim.defaultShadowOffset,
    },
    needed: {
        shadowColor: 'black',
    }
}