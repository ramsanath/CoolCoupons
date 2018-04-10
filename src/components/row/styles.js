export default styles = {
    outerContainer: {
        // height: '13%',
        // width: '97%',
        padding: 15,
        flexDirection: 'row',
        margin: 4,
        borderRadius: 3,
        backgroundColor: 'white',
        elevation: 10,
        shadowOpacity: 0.3,
        shadowColor: 'black',
        shadowOffset: { height: 0, width: 0 },
    },
    innerContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    imageContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        flex: 3,
        flexDirection: 'column',
        padding: 3,
        marginLeft: 10,
    },
    title: {
        marginTop: 5
    },
    descContainer: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 3,
        marginRight: 5,
    }
}