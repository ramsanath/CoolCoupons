import theme from "../../theme/theme";

export default styles = {
    outerContainer: {
        backgroundColor: theme.primaryScreenBgColor,
    },
    cardContainer: {
        flex: 1,
        marginTop: 5,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    shopsContainer: {
        flex: 1,
        paddingVertical: 5,
        marginTop: 5,
        marginBottom: 5,
        flexDirection: 'column',
    },
    viewAllText: {
        color: 'steelblue'
    },
    shopsTextContainer: {
        flex: 1,
        paddingHorizontal: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bestOffersText: {
        flex: 1,
        paddingVertical: 4,
        paddingHorizontal: 6,
    },
};