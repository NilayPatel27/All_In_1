import { StyleSheet } from 'react-native'
const utils = StyleSheet.create({
    centerHorizontal: {
        alignItems: 'center',
    },
    marginBottom: {
        marginBottom: 20,
    },
    marginBottomBar: {
        marginBottom: 330,
    },
    marginBottomSmall: {
        marginBottom: 10,
    },
    profileImageBig: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
    },
    profileImage: {
        marginRight: 15,
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
    },
    profileImageSmall: {
        marginRight: 15,
        width: 35,
        height: 35,
        borderRadius: 35 / 2,
    },
    searchBar: {
        backgroundColor: 'whitesmoke',
        color: 'grey',
        paddingLeft: 10,
        borderRadius: 8,
        height: 40,
        marginTop: -5
    },
    justifyCenter: {
        justifyContent: 'center',
    },
    alignItemsCenter: {
        alignItems: 'center'
    },
    padding15: {
        paddingTop: 15,
        paddingRight: 15,
        paddingLeft: 15,
    },
    padding10Top: {
        paddingTop: 10

    },
    padding10: {
        padding: 10
    },
    margin15: {
        margin: 15
    },
    padding10Sides: {
        paddingRight: 10,
        paddingLeft: 10,
    },
    margin15Left: {
        marginLeft: 15,
    },
    margin15Right: {
        marginRight: 15,
    },
    margin5Bottom: {
        marginBottom: 5,
    },
    backgroundWhite: {
        backgroundColor: 'white',
    },
    borderTopGray: {
        borderTopWidth: 1,
        borderColor: 'lightgrey'
    },
    borderWhite: {
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderColor: 'white'
    },
    buttonOutlined: {
        padding: 8,
        color: 'white',
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 8,
        textAlign: 'center',
    },

    fixedRatio: {
        flex: 1,
        aspectRatio: 1
    }
})
const navbar = StyleSheet.create({

    image: {
        padding: 20
    },
    custom: {
        marginTop: 30,
        height: 60,
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: 1,
        borderColor: 'lightgrey'
    },

    title: {
        fontWeight: '700',
        fontSize: 20//'larger',
    }
})
const container = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
        flexDirection: 'row'
    },
    input: {
        flexWrap: "wrap"
    },
    containerPadding: {
        flex: 1,
        padding: 15
    },
    center: {
        flex: 1,
    },
    horizontal: {
        flexDirection: 'row',
        display: 'flex',
    },
    form: {
        flex: 1,
        margin: 25
    },
    profileInfo: {
        padding: 25,
        flexDirection: 'column',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 'auto',

    },
    formCenter: {
        justifyContent: 'center',
        flex: 1,
        margin: 25
    },
    containerImage: {
        flex: 1 / 3

    },
    image: {
        aspectRatio: 1 / 1,
    },
    fillHorizontal: {
        flexGrow: 1,
        paddingBottom: 0
    },
    imageSmall: {
        aspectRatio: 1 / 1,
        height: 70
    },
    gallery: {

        borderWidth: 1,
        borderColor: 'gray',
    },
    splash: {
        padding: 200,
        height: '100%',
        width: '100%'
    },
    chatRight: {
        margin: 10,
        marginBottom: 10,
        backgroundColor: 'dodgerblue',
        padding: 10,
        borderRadius: 8,
        alignSelf: 'flex-end'

    },
    chatLeft: {
        margin: 10,
        marginBottom: 10,
        backgroundColor: 'grey',
        padding: 10,
        borderRadius: 8,
        alignItems: 'flex-end',
        textAlign: 'right',
        alignSelf: 'flex-start'
    }
})

const form = StyleSheet.create({
    textInput: {
        marginBottom: 10,
        borderColor: 'gray',
        backgroundColor: 'whitesmoke',
        padding: 10,
        borderWidth: 1,
        borderRadius: 8
    },
    bottomButton: {
        alignContent: 'center',
        borderTopColor: 'gray',
        borderTopWidth: 1,
        padding: 10,
        textAlign: 'center',
    },
    roundImage: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2
    }

})

const text = StyleSheet.create({
    center: {
        textAlign: 'center',
    },
    notAvailable: {
        textAlign: 'center',
        fontWeight: '700',//'bolder',
        fontSize: 20//'large',
    },
    profileDescription: {
        fontWeight: '300'
    },
    changePhoto: {
        marginTop: 5,
        color: 'deepskyblue',
    },
    deepskyblue: {
        color: 'deepskyblue',
    },
    username: {
        fontWeight: '600',
        color: 'black',
    },
    name: {
        color: 'grey',
    },
    bold: {
        fontWeight: '700',
    },
    large: {
        fontSize: 20//'large'
    },
    small: {
        fontSize: 10//'large'
    },
    medium: {
        fontSize: 15, //'large'
        marginBottom: 10
    },
    grey: {
        color: 'grey'
    },
    green: {
        color: 'lightgreen'
    },
    white: {
        color: 'white'
    },
    whitesmoke: {
        color: 'whitesmoke'
    }



})

const styles = StyleSheet.create({
    textInput: {
        paddingBottom: 10,
        borderColor: 'gray',
        paddingLeft: 10,
        borderWidth: 0,
        borderRadius: 8,
        color: '#2d333a',
        width: '80%'
    },
    first: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: "center"
    },
    second: {
        width: '90%',
        height: "80%",
        elevation: 10,
        shadowRadius: 3.5,
        shadowColor: 'blue',
        shadowOpacity: 0.25,
        flexDirection: "row",
        backgroundColor: "#fff",
        justifyContent: "center",
        shadowOffset: { width: 0, height: 5 }
    },
    third: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    Divider: {
        width: "100%",
        alignItems: 'center',
        justifyContent: "center"
    },
    button: {
        height: 50,
        width: '90%',
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: "center",
        marginHorizontal: 20,
        backgroundColor: "blue",
        justifyContent: 'center'
    },
    logo: {
        flexDirection: 'row',
        justifyContent: "center",
        marginBottom: 30,
        height: "20%",
        alignItems: "center"
    },
    inputField: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginHorizontal: 20,
        marginVertical: 5
    }
})

const Customer = StyleSheet.create({
    textInputStyle: {
        height: 40,
        color: 'black',
        borderRadius: 20,
        width: '90%'
    },
    Divider: {
        width: "100%",
        alignItems: 'center',
        justifyContent: "center",
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 25,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        // height: 60,
        marginVertical: 10,
    },
    details: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#ffd7ae",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    item: {
        paddingVertical: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        borderRadius: 6,
    },
    story: {
        width: 55,
        height: 55,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#00203FFF',
        margin: 5,
        marginLeft: 15
    },
    title: {
        fontSize: 18,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#DB4437',
        fontSize: 15,
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    col: {
        position: "absolute",
        left: "50%",
        color: '#DB4437',
        fontWeight: "bold",
        paddingHorizontal: 25
    },
    header: {
        height: '10%',
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        backgroundColor: "#DB4437",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10
    },
})
export { container, form, text, utils, navbar, styles, Customer }