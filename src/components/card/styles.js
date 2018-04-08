export default styles = {
    outerContainer: {
        height: '17%',
        aspectRatio: 1,
        margin: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 3,
        elevation: 10,
        shadowOpacity: 0.3,
        shadowColor: 'black',
        shadowOffset: { height: 0, width: 0 },
    },
    innerContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    imageContainer: {
        padding: 10,
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2
    }
}